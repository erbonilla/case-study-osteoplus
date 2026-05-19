#!/usr/bin/env python3
"""Build the bundled standalone preview from the editable standalone source."""

from __future__ import annotations

import base64
import json
import mimetypes
import re
import ssl
import urllib.request
import uuid
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Case Study - Osteóplus (standalone-source).html"
OUTPUT = ROOT / "Case Study - Osteóplus (standalone).html"


def asset_id() -> str:
    return str(uuid.uuid4())


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def manifest_entry(path: Path) -> dict[str, str | bool]:
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return manifest_entry_from_bytes(path.read_bytes(), mime)


def manifest_entry_from_bytes(data: bytes, mime: str) -> dict[str, str | bool]:
    return {
        "mime": mime,
        "compressed": False,
        "data": base64.b64encode(data).decode("ascii"),
    }


def bundle_asset(manifest: dict[str, dict[str, str | bool]], rel_path: str) -> str:
    path = (ROOT / rel_path).resolve()
    if not path.is_file() or ROOT not in path.parents:
        raise FileNotFoundError(f"Missing local bundle asset: {rel_path}")
    ident = asset_id()
    manifest[ident] = manifest_entry(path)
    return ident


def bundle_remote_script(manifest: dict[str, dict[str, str | bool]], url: str) -> str:
    context = ssl._create_unverified_context()
    with urllib.request.urlopen(url, timeout=30, context=context) as response:
        data = response.read()
        mime = response.headers.get_content_type() or "text/javascript"
    ident = asset_id()
    manifest[ident] = manifest_entry_from_bytes(data, mime)
    return ident


def inline_local_styles(template: str) -> str:
    def replace(match: re.Match[str]) -> str:
        tag = match.group(0)
        href = match.group("href")
        if href.startswith(("http://", "https://", "//")):
            return tag
        css_path = ROOT / href
        css = read_text(css_path)
        return f"<style data-bundled-from={json.dumps(href)}>\n{css}\n</style>"

    return re.sub(
        r'<link\b(?=[^>]*rel=["\']stylesheet["\'])(?=[^>]*href=["\'](?P<href>[^"\']+)["\'])[^>]*>',
        replace,
        template,
        flags=re.IGNORECASE,
    )


def replace_local_asset_refs(template: str, manifest: dict[str, dict[str, str | bool]]) -> str:
    def replace_attr(match: re.Match[str]) -> str:
        prefix = match.group("prefix")
        rel_path = match.group("path")
        suffix = match.group("suffix")
        is_script_src = prefix.lower().startswith("src=")
        if rel_path.startswith(("http://", "https://")) and is_script_src:
            ident = bundle_remote_script(manifest, rel_path)
            return f"{prefix}{ident}{suffix}"
        if rel_path.startswith(("http://", "https://", "//", "data:", "blob:")):
            return match.group(0)
        ident = bundle_asset(manifest, rel_path)
        return f"{prefix}{ident}{suffix}"

    return re.sub(
        r'(?P<prefix>\b(?:href|src|content)=["\'])(?P<path>(?:assets/|https?://)[^"\']+)(?P<suffix>["\'])',
        replace_attr,
        template,
        flags=re.IGNORECASE,
    )


def extract_ext_resources(source: str, manifest: dict[str, dict[str, str | bool]]) -> list[dict[str, str]]:
    resources: list[dict[str, str]] = []
    pattern = re.compile(
        r'<meta\b(?=[^>]*name=["\']ext-resource-dependency["\'])'
        r'(?=[^>]*content=["\'](?P<path>[^"\']+)["\'])'
        r'(?=[^>]*data-resource-id=["\'](?P<id>[^"\']+)["\'])[^>]*>',
        re.IGNORECASE,
    )
    for match in pattern.finditer(source):
        resources.append({"id": match.group("id"), "uuid": bundle_asset(manifest, match.group("path"))})
    return resources


def thumbnail_markup(source: str) -> str:
    match = re.search(
        r'<template\b[^>]*id=["\']__bundler_thumbnail["\'][^>]*>(?P<body>.*?)</template>',
        source,
        flags=re.IGNORECASE | re.DOTALL,
    )
    if not match:
        return '<div id="__bundler_placeholder">Loading preview...</div>'
    return match.group("body").strip()


def standalone_shell(title: str, thumbnail: str, manifest: dict[str, dict[str, str | bool]], template: str, ext_resources: list[dict[str, str]]) -> str:
    manifest_json = json.dumps(manifest, ensure_ascii=False, separators=(",", ":"))
    template_json = json.dumps(template, ensure_ascii=False).replace("</", "<\\/")
    ext_json = json.dumps(ext_resources, ensure_ascii=False, separators=(",", ":"))
    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{title}</title>
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ background: #F8FAFC; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }}
    #__bundler_loading {{ position: fixed; bottom: 20px; right: 20px; font: 13px/1.4 -apple-system, BlinkMacSystemFont, sans-serif; color: #475569; background: #fff; padding: 8px 14px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.12); z-index: 10000; }}
    #__bundler_thumbnail {{ position: fixed; inset: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #F8FAFC; z-index: 9999; }}
    #__bundler_thumbnail svg {{ width: 100%; height: 100%; object-fit: contain; }}
    #__bundler_placeholder {{ color: #64748B; font-size: 14px; }}
  </style>
  <noscript>
    <style>#__bundler_loading {{ display: none; }}</style>
  </noscript>
</head>
<body>
  <div id="__bundler_thumbnail">
    {thumbnail}
  </div>
  <div id="__bundler_loading">Unpacking...</div>

  <script>
document.addEventListener('DOMContentLoaded', async function() {{
  const loading = document.getElementById('__bundler_loading');
  function setStatus(msg) {{ if (loading) loading.textContent = msg; }}

  window.addEventListener('error', function(e) {{
    var p = document.body || document.documentElement;
    var d = document.getElementById('__bundler_err') || p.appendChild(document.createElement('div'));
    d.id = '__bundler_err';
    d.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;font:12px/1.4 ui-monospace,monospace;background:#2a1215;color:#ff8a80;padding:10px 14px;border-radius:8px;border:1px solid #5c2b2e;z-index:99999;white-space:pre-wrap;max-height:40vh;overflow:auto';
    d.textContent = (d.textContent ? d.textContent + String.fromCharCode(10) : '') +
      '[bundle] ' + (e.message || e.type) +
      (e.filename ? ' (' + e.filename.slice(0, 60) + ':' + e.lineno + ')' : '');
  }}, true);

  try {{
    const manifestEl = document.querySelector('script[type="__bundler/manifest"]');
    const templateEl = document.querySelector('script[type="__bundler/template"]');
    if (!manifestEl || !templateEl) {{
      setStatus('Error: missing bundle data');
      return;
    }}

    const manifest = JSON.parse(manifestEl.textContent);
    let template = JSON.parse(templateEl.textContent);
    const uuids = Object.keys(manifest);
    const blobUrls = {{}};
    setStatus('Unpacking ' + uuids.length + ' assets...');

    for (const uuid of uuids) {{
      const entry = manifest[uuid];
      const binaryStr = atob(entry.data);
      const bytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i);
      blobUrls[uuid] = URL.createObjectURL(new Blob([bytes], {{ type: entry.mime }}));
    }}

    const extResEl = document.querySelector('script[type="__bundler/ext_resources"]');
    const extResources = extResEl ? JSON.parse(extResEl.textContent) : [];
    const resourceMap = {{}};
    for (const entry of extResources) {{
      if (blobUrls[entry.uuid]) resourceMap[entry.id] = blobUrls[entry.uuid];
    }}

    for (const uuid of uuids) template = template.split(uuid).join(blobUrls[uuid]);
    template = template.replace(/\\s+integrity="[^"]*"/gi, '').replace(/\\s+crossorigin="[^"]*"/gi, '');

    const resourceScript = '<script>window.__resources = ' +
      JSON.stringify(resourceMap).split('</' + 'script>').join('<\\\\/' + 'script>') +
      ';</' + 'script>';
    const headOpen = template.match(/<head[^>]*>/i);
    if (headOpen) {{
      const i = headOpen.index + headOpen[0].length;
      template = template.slice(0, i) + resourceScript + template.slice(i);
    }}

    setStatus('Rendering...');
    const doc = new DOMParser().parseFromString(template, 'text/html');
    document.documentElement.replaceWith(doc.documentElement);

    const scripts = Array.from(document.scripts);
    for (const old of scripts) {{
      const s = document.createElement('script');
      for (const a of old.attributes) s.setAttribute(a.name, a.value);
      s.textContent = old.textContent;
      if ((s.type === 'text/babel' || s.type === 'text/jsx') && s.src) {{
        const r = await fetch(s.src);
        s.textContent = await r.text();
        s.removeAttribute('src');
      }}
      const p = s.src ? new Promise(function(resolve) {{ s.onload = s.onerror = resolve; }}) : null;
      old.replaceWith(s);
      if (p) await p;
    }}
    if (window.Babel && typeof window.Babel.transformScriptTags === 'function') {{
      window.Babel.transformScriptTags();
    }}
  }} catch (err) {{
    setStatus('Error unpacking: ' + err.message);
    console.error('Bundle unpack error:', err);
  }}
}});
  </script>

  <script type="__bundler/manifest">{manifest_json}</script>
  <script type="__bundler/template">{template_json}</script>
  <script type="__bundler/ext_resources">{ext_json}</script>
</body>
</html>
"""


def main() -> None:
    source = read_text(SOURCE)
    title_match = re.search(r"<title>(.*?)</title>", source, flags=re.IGNORECASE | re.DOTALL)
    title = title_match.group(1).strip() if title_match else "Osteóplus case study"

    manifest: dict[str, dict[str, str | bool]] = {}
    ext_resources = extract_ext_resources(source, manifest)
    template = inline_local_styles(source)
    template = replace_local_asset_refs(template, manifest)
    output = standalone_shell(title, thumbnail_markup(source), manifest, template, ext_resources)
    OUTPUT.write_text(output, encoding="utf-8")
    print(f"Built {OUTPUT.name} with {len(manifest)} bundled assets.")


if __name__ == "__main__":
    main()

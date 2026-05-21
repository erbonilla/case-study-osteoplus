import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://case-study-osteoplus.vercel.app"),
  title: "Osteóplus — From medical repository to Action Dashboard | Edgar Bonilla G.",
  description:
    "UX case study: a senior-friendly PWA for a Barcelona osteopathy and physiotherapy clinic. Guest-first booking, Daily Rehab Loop, WCAG 2.2 AA, bilingual ES/EN.",
  applicationName: "Osteóplus case study",
  authors: [{ name: "Edgar Bonilla G." }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo-svg/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "article",
    url: "/",
    title: "Osteóplus — From medical repository to Action Dashboard",
    description:
      "A senior-friendly PWA for a Barcelona clinic. Guest-first booking + The Loop. UX case study.",
    images: [
      {
        url: "/assets/og/osteoplus-case-study.png",
        width: 1200,
        height: 630,
        alt: "Osteóplus UX case study preview with a mobile action dashboard mockup.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osteóplus — From medical repository to Action Dashboard",
    description:
      "A senior-friendly PWA for a Barcelona clinic. Guest-first booking + The Loop. UX case study.",
    images: ["/assets/og/osteoplus-case-study.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

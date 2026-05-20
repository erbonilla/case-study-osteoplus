import { LegacyCaseStudy } from "./_components/legacy-case-study";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Osteóplus — From medical repository to Action Dashboard",
  headline: "From medical repository to Action Dashboard: a senior-friendly rehab PWA",
  author: {
    "@type": "Person",
    name: "Edgar Bonilla G.",
    jobTitle: "UI/UX Designer",
  },
  description:
    "A senior-friendly PWA case study for a Barcelona osteopathy and physiotherapy clinic. Covers guest-first booking, the Daily Rehab Loop, WCAG 2.2 AA accessibility, and bilingual ES/EN design.",
  datePublished: "2026-05-18",
  dateModified: "2026-05-20",
  url: "https://case-study-osteoplus.vercel.app/",
  image: "https://case-study-osteoplus.vercel.app/assets/og/osteoplus-case-study.png",
  inLanguage: ["en", "es"],
  keywords:
    "UX case study, healthcare UX, senior-friendly design, WCAG 2.2 AA, PWA, guest-first booking, rehab adherence, bilingual design, Barcelona",
  audience: { "@type": "Audience", audienceType: "Adults 35–85, optimized for 60+" },
  about: [
    { "@type": "Thing", name: "Healthcare UX" },
    { "@type": "Thing", name: "Accessibility (WCAG 2.2 AA)" },
    { "@type": "Thing", name: "Progressive Web App" },
    { "@type": "Thing", name: "Clinical gamification" },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LegacyCaseStudy />
    </>
  );
}

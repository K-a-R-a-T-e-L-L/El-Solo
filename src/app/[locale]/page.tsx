import Layout from "../components/Layout";
import { getSiteTranslations, LOCALES } from "../lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    notFound();
  }

  const t = await getSiteTranslations(locale);

  return <Layout t={t} />;
}

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

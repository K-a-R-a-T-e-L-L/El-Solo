import "../tailwind.css";
import "../globals.scss";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { siteMetadata } from "../lib/metadata";
import YMetrika from "../components/YMetrica";
import { notFound } from "next/navigation";
import { imageByBase } from "../lib/imageRegistry";
import { LOCALES } from "../lib/i18n";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale: "ru" | "en" = (await params).locale as "ru" | "en";

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const meta = siteMetadata[locale];
  const previewImage = imageByBase("preview");

  return {
    title: {
      default: meta.title,
      template: "%s | El Solo",
    },
    description: meta.description,
    keywords: [],
    authors: [{ name: "El Solo" }, { name: "K_a_R_a_T_e_L_L" }],
    applicationName: "El Solo",
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `https://el-solo.karatell.ru/${locale}`,
      siteName: "El Solo",
      locale: meta.openGraph.locale,
      type: "website",
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
          alt: meta.openGraph.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: [previewImage],
    },
    alternates: {
      canonical: `https://el-solo.karatell.ru/${locale}`,
      languages: {
        ru: "https://el-solo.karatell.ru/ru",
        en: "https://el-solo.karatell.ru/en",
        "x-default": "https://el-solo.karatell.ru/ru",
      },
    },
    metadataBase: new URL("https://el-solo.karatell.ru"),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16", type: "image/vnd.microsoft.icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon-120x120.png", sizes: "120x120", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const previewImage = imageByBase("preview");

  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "El Solo",
    image: previewImage,
    url: `https://el-solo.karatell.ru/${locale}`,
    telephone: "+79617160943",
    description:
      locale === "ru"
        ? "Полный цикл веб-разработки и digital-услуг."
        : "A full cycle of web development and digital services.",
    sameAs: [
      "https://t.me/K_a_R_a_T_e_L_L",
      "https://github.com/K-a-R-a-T-e-L-L",
      "https://vk.com/k_a_r_a_t_e_l_l",
      "mailto:kirillcuhorukov6@gmail.com",
      "https://wa.me/89617160943",
      "tel:8-961-716-09-43",
    ],
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <link rel="manifest" href={`/site_${locale}.webmanifest`} />
        <link rel="alternate" hrefLang="ru" href="https://el-solo.karatell.ru/ru" />
        <link rel="alternate" hrefLang="en" href="https://el-solo.karatell.ru/en" />
        <link rel="alternate" hrefLang="x-default" href="https://el-solo.karatell.ru/ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        <YMetrika />
        <LanguageSwitcher currentLocale={locale} />
        {children}
      </body>
    </html>
  );
}

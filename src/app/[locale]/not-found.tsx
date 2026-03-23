import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

import { imageByBase } from "../lib/imageRegistry";
import styles from "../not-found.module.css";
import Layout from "../components/Layout";
import { getSiteTranslations } from "../lib/i18n";

const contentByLocale = {
  ru: {
    title: "Страница не найдена",
    description:
      "Похоже, такого маршрута нет или адрес изменился. Вернитесь на главную или свяжитесь со мной напрямую.",
    home: "На главную",
    contact: "Связаться в Telegram",
    badge: "Неизвестный путь / ошибка маршрута",
    homeHref: "/ru",
  },
  en: {
    title: "Page Is Missing In Action",
    description:
      "The page does not exist anymore or was moved to a new route. Return to the homepage or contact me directly.",
    home: "Back to Home",
    contact: "Contact via Telegram",
    badge: "Unknown path / route error",
    homeHref: "/en",
  },
} as const;

const NotFound = async () => {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "en" ? "en" : "ru";
  const content = contentByLocale[locale];
  const t = await getSiteTranslations(locale);

  return (
    <Layout t={t}>
      <section className={styles.page}>
        <article className={styles.card}>
          <div className={styles.logo}>
            <Image
              src={imageByBase("logo")}
              alt="El Solo logo"
              fill
              style={{ objectFit: "contain" }}
              sizes="44px"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.titleBlock}>
              <h1 className={styles.code}>404</h1>
              <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.description}>{content.description}</p>
              <div className={styles.actions}>
                <Link href={content.homeHref} className={styles.primary}>
                  {content.home}
                </Link>
                <a
                  href="https://t.me/K_a_R_a_T_e_L_L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondary}
                >
                  {content.contact}
                </a>
              </div>
            </div>

            <div className={styles.previewWrap}>
              <Image
                src={imageByBase("broken_monitor")}
                alt="Broken monitor illustration"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 920px) 90vw, 40vw"
              />
              <div className={styles.previewOverlay}>{content.badge}</div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default NotFound;

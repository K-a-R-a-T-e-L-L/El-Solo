import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { imageByBase } from "./lib/imageRegistry";
import styles from "./not-found.module.css";
import "./globals.scss";

const NotFound = async () => {
  const headerList = await headers();
  const currentPath = headerList.get("x-invoke-path") ?? headerList.get("x-matched-path") ?? "";
  const isRu = currentPath.startsWith("/ru");

  const content = isRu
    ? {
        title: "Страница не найдена",
        description:
          "Такой страницы больше нет или адрес изменился. Вернись на главную или свяжись со мной напрямую.",
        home: "На главную",
        contact: "Связаться в Telegram",
        badge: "Неизвестный путь / ошибка маршрута",
        homeHref: "/ru",
      }
    : {
        title: "Page Is Missing In Action",
        description:
          "The page you requested does not exist anymore or moved to a new route. Return to the homepage or contact me directly.",
        home: "Back to Home",
        contact: "Contact via Telegram",
        badge: "Unknown path / route error",
        homeHref: "/en",
      };

  return (
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
  );
};

export default NotFound;
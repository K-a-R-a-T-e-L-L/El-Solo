import { readFile } from "node:fs/promises";
import path from "node:path";

export const LOCALES = ["ru", "en"] as const;
const NAMESPACES = [
  "header",
  "home",
  "advantages",
  "services",
  "portfolio",
  "contacts",
  "footer",
] as const;

export async function getTranslations(locale: string, namespace: string) {
  try {
    if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
      return {};
    }

    if (!NAMESPACES.includes(namespace as (typeof NAMESPACES)[number])) {
      return {};
    }

    const filePath = path.join(process.cwd(), "public", "locales", locale, `${namespace}.json`);
    const fileContent = await readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.log("Translations Error:", error);
    return {};
  }
}

export async function getSiteTranslations(locale: string) {
  const translations = await Promise.all(
    NAMESPACES.map((namespace) => getTranslations(locale, namespace)),
  );

  return Object.assign({}, ...translations);
}

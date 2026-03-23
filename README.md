# El Solo

<details open>
<summary><strong>English</strong></summary>

Portfolio/landing project on Next.js with multilingual routing (`/ru`, `/en`), animated sections, and SEO-ready metadata.

## Stack

- Next.js 15 (App Router, standalone output)
- React 19
- TypeScript
- SCSS + Tailwind
- Docker (multi-stage build)

## Project Structure

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
    components/
    lib/
      i18n.ts
      metadata.ts
    sitemap.ts
  middleware.ts
public/
  locales/
    en/
    ru/
  images/
```

## Local Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Docker

Build and run:

```bash
docker build -t el-solo .
docker run -p 3000:3000 el-solo
```

## i18n

- Translation loader: `src/app/lib/i18n.ts`
- Locale validation: `src/app/[locale]/layout.tsx` and `src/app/[locale]/page.tsx`
- Translation files:
  - `public/locales/ru/*.json`
  - `public/locales/en/*.json`

</details>

<details>
<summary><strong>Русский</strong></summary>

Портфолио/лендинг на Next.js с мультиязычной маршрутизацией (`/ru`, `/en`), анимированными секциями и SEO-метаданными.

## Стек

- Next.js 15 (App Router, standalone output)
- React 19
- TypeScript
- SCSS + Tailwind
- Docker (многоэтапная сборка)

## Структура проекта

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
    components/
    lib/
      i18n.ts
      metadata.ts
    sitemap.ts
  middleware.ts
public/
  locales/
    en/
    ru/
  images/
```

## Локальный запуск

```bash
npm install
npm run dev
```

Сборка и запуск production:

```bash
npm run build
npm run start
```

## Docker

Сборка и запуск:

```bash
docker build -t el-solo .
docker run -p 3000:3000 el-solo
```

## Локализация

- Загрузчик переводов: `src/app/lib/i18n.ts`
- Валидация локали: `src/app/[locale]/layout.tsx` и `src/app/[locale]/page.tsx`
- Файлы переводов:
  - `public/locales/ru/*.json`
  - `public/locales/en/*.json`

</details>

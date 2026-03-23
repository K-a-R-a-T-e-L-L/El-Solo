const IMAGE_REGISTRY = {
  arrow: "arrow.png",
  arrow_red: "arrow_red.webp",
  broken_glass: "broken_glass.png",
  broken_monitor: "broken_monitor.webp",
  burger_menu: "burger_menu.png",
  burger_menu_open: "burger_menu_open.png",
  clubs_icon: "clubs_icon.png",
  cracks: "cracks.png",
  email_icon: "email_icon.webp",
  email_icon_aqua: "email_icon_aqua.png",
  gh_icon: "gh_icon.png",
  gh_icon_aqua: "gh_icon_aqua.png",
  handshake: "handshake.webp",
  hearts_icon: "hearts_icon.webp",
  icon_copy: "icon_copy.webp",
  logo: "logo.webp",
  maintenance: "maintenance.webp",
  maintenance_icon: "maintenance_icon.png",
  night_city: "night_city.webp",
  preview: "preview.webp",
  project_1_icon: "project_1_icon.png",
  project_2_icon: "project_2_icon.png",
  project_3_icon: "project_3_icon.webp",
  promotion: "promotion.webp",
  promotion_icon: "promotion_icon.png",
  puzzle: "puzzle.webp",
  qr: "qr.png",
  screenshot_desktop_en: "screenshot_desktop_en.webp",
  screenshot_desktop_ru: "screenshot_desktop_ru.webp",
  screenshot_mobile_en: "screenshot_mobile_en.webp",
  screenshot_mobile_ru: "screenshot_mobile_ru.webp",
  spades_icon: "spades_icon.webp",
  spades_icon_bg: "spades_icon_bg.png",
  tel_icon: "tel_icon.webp",
  tel_icon_aqua: "tel_icon_aqua.webp",
  tg_icon: "tg_icon.webp",
  tg_icon_aqua: "tg_icon_aqua.png",
  vk_icon: "vk_icon.webp",
  vk_icon_aqua: "vk_icon_aqua.webp",
  webdev: "webdev.webp",
  webdev_icon: "webdev_icon.png",
  whatsapp_icon: "whatsapp_icon.webp",
  whatsapp_icon_aqua: "whatsapp_icon_aqua.png",
} as const;

const stripExt = (value: string) => value.replace(/\.[a-zA-Z0-9]+$/, "");

export function imageByBase(value: string) {
  const key = stripExt(value) as keyof typeof IMAGE_REGISTRY;
  const fileName = IMAGE_REGISTRY[key] ?? `${stripExt(value)}.png`;
  return `/images/${fileName}`;
}

export function socialIcon(name: string, aqua = false) {
  return imageByBase(`${stripExt(name)}_icon${aqua ? "_aqua" : ""}`);
}

const SOCIAL_NAME_TO_ID: Record<string, string> = {
  telegram: "tg",
  tg: "tg",
  github: "gh",
  gh: "gh",
  vkontakte: "vk",
  vk: "vk",
  whatsapp: "whatsapp",
  wa: "whatsapp",
  email: "email",
  mail: "email",
  phone: "tel",
  telephone: "tel",
  tel: "tel",
};

export function socialIconByLabel(label: string, aqua = false) {
  const normalized = stripExt(label).trim().toLowerCase();
  const id = SOCIAL_NAME_TO_ID[normalized] ?? normalized;
  return socialIcon(id, aqua);
}

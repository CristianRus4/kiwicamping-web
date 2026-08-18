export const defaultLocale = "en-NZ" as const;

export const locales = [
  { code: "en-NZ", path: "", label: "English", active: true },
  { code: "de-DE", path: "de", label: "Deutsch", active: true },
  { code: "fr-FR", path: "fr", label: "Français", active: true },
  { code: "es-ES", path: "es", label: "Español", active: true },
  { code: "it-IT", path: "it", label: "Italiano", active: true },
  { code: "nl-NL", path: "nl", label: "Nederlands", active: true },
  { code: "pt-PT", path: "pt", label: "Português", active: true },
] as const;

export const translationRules = {
  neverTranslate: ["KiwiCamping"],
  preserveExactly: ["Aotearoa", "Aoraki", "Te Waipounamu", "Rakiura", "DOC", "Waka Kotahi"],
  sourceTone: "Plain New Zealand English, practical, warm and specific",
} as const;

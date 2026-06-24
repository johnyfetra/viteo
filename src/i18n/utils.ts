import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const val = (ui[lang] as Record<string, unknown>)[key] ?? (ui[defaultLang] as Record<string, unknown>)[key];
    if (Array.isArray(val)) return val.join('|');
    return (val as string) ?? key;
  };
}

export function useTranslationArray(lang: Lang) {
  return function ta(key: keyof (typeof ui)[typeof defaultLang]): string[] {
    const val = (ui[lang] as Record<string, unknown>)[key] ?? (ui[defaultLang] as Record<string, unknown>)[key];
    if (Array.isArray(val)) return val as string[];
    return [];
  };
}

const SLUG_MAP: Record<string, Partial<Record<Lang, string>>> = {
  'tarifs':   { en: 'pricing' },
  'pricing':  { fr: 'tarifs' },
  'a-propos': { en: 'about' },
  'about':    { fr: 'a-propos' },
};

export function getAlternatePath(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const langs = Object.keys(ui) as Lang[];

  if (langs.includes(segments[0] as Lang)) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }

  if (segments[1] && SLUG_MAP[segments[1]]?.[targetLang]) {
    segments[1] = SLUG_MAP[segments[1]][targetLang]!;
  }

  return '/' + segments.join('/');
}

export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
}

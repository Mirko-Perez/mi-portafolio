"use client";

import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="rounded border flex overflow-hidden text-sm"
    >
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-0.5 cursor-pointer uppercase ${
            lang === code
              ? "bg-black text-white dark:bg-white dark:text-black"
              : ""
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

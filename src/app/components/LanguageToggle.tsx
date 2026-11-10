"use client";

import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="rounded border border-gray-700 dark:border-gray-300 flex overflow-hidden text-sm"
    >
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-0.5 cursor-pointer uppercase ${
            lang === code
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

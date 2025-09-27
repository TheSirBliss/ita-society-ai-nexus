// src/components/LanguageSwitcher.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { code: "en", label: "EN" },
  { code: "it", label: "IT" }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      {langs.map(l => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            i18n.language === l.code ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-800"
          }`}
          aria-pressed={i18n.language === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
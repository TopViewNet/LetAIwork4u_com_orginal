"use client"

import { Check, Globe2 } from "lucide-react"
import { languageOptions, useLanguage } from "@/contexts/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { currentLanguage, language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label={t("nav.language")}
        >
          <Globe2 className="h-5 w-5" />
          <span className="sr-only">{currentLanguage.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[70vh] w-64 overflow-y-auto border-slate-800 bg-slate-950 text-slate-100">
        <DropdownMenuLabel className="text-xs uppercase tracking-wide text-slate-400">{t("nav.language")}</DropdownMenuLabel>
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 focus:bg-cyan-300 focus:text-slate-950"
            onSelect={() => setLanguage(option.code)}
          >
            <span>
              <span className="font-medium">{option.label}</span>
              <span className="ml-2 text-xs opacity-70">{option.localeName}</span>
            </span>
            {language === option.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

"use client";

import { motion } from "framer-motion";

type LeadFormProps = {
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

export function LeadForm({ compact = false, title, subtitle }: LeadFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-2xl p-5 md:p-6"
    >
      <div className="mb-4 space-y-2">
        <h3 className="text-lg font-semibold text-white md:text-xl">
          {title ?? "Обсудить вашу систему продаж"}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {subtitle ??
            "Проведем экспресс-диагностику, покажем точки потерь и предложим практичный план внедрения."}
        </p>
      </div>

      <div className={`grid gap-3 ${compact ? "md:grid-cols-2" : ""}`}>
        <input
          className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          placeholder="Имя"
          name="name"
        />
        <input
          className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          placeholder="Телефон / Telegram / WhatsApp"
          name="contact"
        />
        <input
          className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          placeholder="Компания"
          name="company"
        />
        <textarea
          className={`rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent ${
            compact ? "md:col-span-2" : ""
          }`}
          placeholder="Какая задача стоит сейчас?"
          name="task"
          rows={compact ? 3 : 4}
        />
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#081425] transition hover:bg-accent-soft"
      >
        Запросить аудит отдела продаж
      </button>
      <p className="mt-3 text-xs text-muted">
        Ответим в течение рабочего дня. Без шаблонных предложений и общих презентаций.
      </p>
    </motion.form>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  cases,
  faq,
  impacts,
  methodology,
  problemCards,
  services,
  tools,
  trustPoints,
  whyUs,
} from "@/data/site-content";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LeadForm } from "@/components/ui/lead-form";
import { SectionTitle } from "@/components/ui/section-title";

const container = "mx-auto w-full max-w-7xl px-5 md:px-8";

function HeroSystemVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-5 md:h-[520px] md:p-8"
    >
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <motion.div
        animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-8 top-10 rounded-xl border border-border bg-background/90 p-4"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Pipeline Health</p>
        <p className="mt-2 text-2xl font-semibold text-white">92%</p>
        <p className="text-xs text-accent-soft">под контролем</p>
      </motion.div>
      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-6 top-20 rounded-xl border border-border bg-background/90 p-4"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-muted">SLA Response</p>
        <p className="mt-2 text-2xl font-semibold text-white">14 мин</p>
        <p className="text-xs text-accent-soft">средний ответ</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-background/85 p-4 md:p-6"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Sales Operating System</p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {["Лиды", "CRM", "Автоматизация", "KPI"].map((item) => (
            <div key={item} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-xs text-muted">{item}</p>
              <div className="mt-2 h-1.5 rounded-full bg-border">
                <motion.div
                  initial={{ width: "10%" }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(93,169,255,0.2),transparent_45%),radial-gradient(circle_at_82%_22%,rgba(120,102,255,0.18),transparent_40%)]" />
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-x-clip bg-background pb-16 text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(77,160,255,0.07)_0%,rgba(7,11,20,0)_42%)]" />
      <section className={`${container} section-anchor relative pt-10 md:pt-14`} id="hero">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 px-5 py-3 backdrop-blur">
          <p className="text-sm font-semibold tracking-[0.12em] text-white">
            SALES SYSTEM BUREAU
          </p>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#services">Услуги</a>
            <a href="#process">Методология</a>
            <a href="#cases">Кейсы</a>
            <a href="#contact">Контакт</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm text-white transition hover:border-accent"
          >
            Запросить аудит <ArrowRight size={16} />
          </a>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-border bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft"
            >
              Консалтинг по системе продаж
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-4xl font-semibold leading-tight text-white md:text-6xl"
            >
              Строим <span className="text-gradient">отделы продаж и CRM-системы</span>, которыми
              собственник реально управляет по цифрам.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            >
              Мы не «просто внедряем CRM». Мы проектируем коммерческую архитектуру:
              процессы, автоматизацию, регламенты, KPI и дисциплину исполнения, чтобы выручка
              стала предсказуемой, а управление прозрачным.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#081425] transition hover:bg-accent-soft"
              >
                Обсудить систему продаж <ChevronRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-white transition hover:border-accent"
              >
                Смотреть решения
              </a>
            </motion.div>
          </div>
          <HeroSystemVisual />
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point} className="glass-panel rounded-xl p-4 text-sm text-[#dce7ff]">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="problems">
        <SectionTitle
          eyebrow="Проблемы, которые тормозят рост"
          title="Где бизнес теряет деньги, даже когда лидов достаточно"
          description="Большинство отделов продаж теряют выручку не в рекламе, а в процессах: в скорости реакции, дисциплине и отсутствии управленческой прозрачности."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((problem, idx) => (
            <motion.article
              key={problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-border bg-surface/70 p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-accent-soft">
                Точка утечки #{idx + 1}
              </p>
              <p className="leading-relaxed text-[#d7e4ff]">{problem}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="services">
        <SectionTitle
          eyebrow="Продукты и услуги"
          title="Собираем коммерческую систему под задачи вашего бизнеса"
          description="Каждое решение — это инструмент роста выручки и управляемости: с понятным назначением, сроком внедрения и коммерческим эффектом."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-accent"
            >
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 text-sm text-muted">
                <span className="text-[#d7e4ff]">Для кого:</span> {service.forWho}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-[#d7e4ff]">Решает:</span> {service.solve}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-[#d7e4ff]">Результат:</span> {service.result}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="process">
        <SectionTitle
          eyebrow="Методология внедрения"
          title="Работаем по четкому управленческому фреймворку"
          description="Последовательно выводим отдел продаж из хаоса в систему: сначала диагностика, потом архитектура, затем внедрение и управляемая оптимизация."
        />
        <div className="mt-8 space-y-3">
          {methodology.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-4"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-[#081425]">
                {idx + 1}
              </span>
              <p className="text-[#dbe6ff]">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="results">
        <SectionTitle
          eyebrow="Бизнес-эффект"
          title="Показатели, которые меняются после системного внедрения"
          description="Структура, автоматизация и дисциплина дают измеримый результат: быстрее обработка, меньше потерь и больше прозрачности для принятия решений."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impacts.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-5"
            >
              <p className="text-4xl font-semibold text-white">
                <AnimatedCounter to={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="why">
        <SectionTitle
          eyebrow="Почему выбирают нас"
          title="Не интегратор «по кнопкам», а партнер по коммерческой системе"
          description="Мы соединяем управленческую логику продаж и технологическую реализацию, чтобы собственник получал контроль, а команда — рабочую операционную среду."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {whyUs.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-surface/70 p-5 text-[#d7e4ff]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="cases">
        <SectionTitle
          eyebrow="Сценарии проектов"
          title="Как выглядит результат в разных бизнес-моделях"
          description="Ниже формат кейсов-заготовок: легко заменить фактическими проектами без перестройки структуры страницы."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.niche} className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent-soft">
                {item.niche}
              </p>
              <p className="mt-4 text-sm text-muted">
                <span className="text-[#d8e5ff]">Проблема:</span> {item.problem}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-[#d8e5ff]">Решение:</span> {item.action}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-[#d8e5ff]">Результат:</span> {item.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="tools">
        <SectionTitle
          eyebrow="CRM и автоматизации"
          title="Инструменты, которые интегрируем в единую архитектуру продаж"
          description="Не делаем «зоопарк сервисов». Собираем связанный контур, где каждый инструмент усиливает контроль и скорость обработки сделок."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool} className="rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-[#dbe7ff]">
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="faq">
        <SectionTitle
          eyebrow="FAQ"
          title="Ключевые вопросы перед запуском проекта"
          description="Коротко о формате работы, сроках и результате для собственника."
        />
        <div className="mt-8 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="rounded-xl border border-border bg-surface/60 p-4">
              <summary className="cursor-pointer list-none font-medium text-white">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`${container} section-anchor mt-22`} id="contact">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Финальный шаг
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Хотите управляемый отдел продаж вместо хаоса?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Проведем встречу, разберем текущую модель, покажем где утекают лиды и как собрать
              систему, которая масштабирует выручку без ручного режима.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#d6e4ff]">
              <li>— Разложим текущий процесс по этапам и потерям</li>
              <li>— Сформируем контур CRM, KPI и дисциплины</li>
              <li>— Дадим практичный план внедрения с приоритетами</li>
            </ul>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <footer className={`${container} mt-16 border-t border-border pt-8`}>
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Sales System Bureau. Консалтинг и внедрение систем продаж.
          </p>
          <div className="flex gap-4 text-sm text-[#d9e6ff]">
            <a href="#hero">Наверх</a>
            <a href="#services">Услуги</a>
            <a href="#contact">Консультация</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

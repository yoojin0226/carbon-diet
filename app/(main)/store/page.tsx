"use client";

import { useMemo, useState } from "react";

type Category = "꾸미기" | "옷장" | "충전소";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function DropIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2C9 6.6 6 10.2 6 14.1A6 6 0 0 0 12 20a6 6 0 0 0 6-5.9C18 10.2 15 6.6 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 14.3c.6 1.8 2.2 2.9 4 2.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="grid size-9 place-items-center rounded-xl text-slate-500 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function SmallItemCard({
  name,
  price,
  icon,
}: {
  name: string;
  price: number;
  icon: string;
}) {
  return (
    <button
      type="button"
      className="group rounded-3xl bg-white px-4 py-5 text-left ring-1 ring-slate-900/5 transition hover:bg-slate-50/70 dark:bg-slate-950/40 dark:ring-white/10 dark:hover:bg-slate-900/40"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {name}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-300">
            <DropIcon className="size-4" />
            <span>{price}</span>
          </div>
        </div>
        <div className="grid size-10 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <span className="text-lg" aria-hidden="true">
            {icon}
          </span>
        </div>
      </div>
    </button>
  );
}

function ThemeCard({
  title,
  progress,
  leftEmoji,
  rightEmoji,
}: {
  title: string;
  progress: string;
  leftEmoji: string;
  rightEmoji: string;
}) {
  return (
    <button
      type="button"
      className="rounded-3xl bg-white p-4 text-left ring-1 ring-slate-900/5 transition hover:bg-slate-50/70 dark:bg-slate-950/40 dark:ring-white/10 dark:hover:bg-slate-900/40"
    >
      <div className="flex items-stretch gap-3">
        <div className="grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <div className="grid h-full w-full place-items-center">
            <div className="flex items-center gap-3 text-3xl">
              <span aria-hidden="true">{leftEmoji}</span>
              <span aria-hidden="true">{rightEmoji}</span>
            </div>
            <p className="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-300">
              이미지 프레임(예시)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          {title}
        </p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
          {progress}
        </span>
      </div>
    </button>
  );
}

export default function StorePage() {
  const [category, setCategory] = useState<Category>("꾸미기");

  const currency = 1250;

  const items = useMemo(
    () => [
      { name: "풍경 액자", price: 120, icon: "🖼️" },
      { name: "나무 의자", price: 150, icon: "🪑" },
      { name: "하늘 배지", price: 300, icon: "🏷️" },
      { name: "작은 화분", price: 80, icon: "🪴" },
      { name: "푹신 소파", price: 450, icon: "🛋️" },
      { name: "무드 조명", price: 200, icon: "💡" },
    ],
    [],
  );

  return (
    <div className="min-h-[70vh]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Top status row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-300">
            <DropIcon className="size-5" />
            <span className="text-sm font-semibold tabular-nums">
              {currency.toLocaleString("ko-KR")}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconButton label="보관함">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
                <path
                  d="M4.5 7.5h15v12a1.8 1.8 0 0 1-1.8 1.8H6.3A1.8 1.8 0 0 1 4.5 19.5v-12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7.5V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8v1.7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
            <IconButton label="알림">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
                <path
                  d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
                  fill="currentColor"
                  opacity="0.35"
                />
                <path
                  d="M18 16H6c1.2-1.2 2-2.7 2-5V9.4C8 6.4 9.8 4 12 4s4 2.4 4 5.4V11c0 2.3.8 3.8 2 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            {(["꾸미기", "옷장", "충전소"] as const).map((t) => {
              const active = category === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setCategory(t)}
                  className={cn(
                    "relative flex-1 px-2 py-3 text-sm font-semibold transition",
                    active
                      ? "text-emerald-700 dark:text-emerald-200"
                      : "text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t}
                  <span
                    className={cn(
                      "absolute inset-x-6 -bottom-[1px] h-[3px] rounded-full transition",
                      active
                        ? "bg-emerald-500"
                        : "bg-transparent",
                    )}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
          <div className="h-px w-full bg-slate-900/5 dark:bg-white/10" />
        </div>

        {/* Content */}
        <div className="mt-6 space-y-8">
          {/* Item grid */}
          <section>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it) => (
                <SmallItemCard
                  key={it.name}
                  name={it.name}
                  price={it.price}
                  icon={it.icon}
                />
              ))}
            </div>
          </section>

          {/* Interior themes */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              인테리어 테마
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <ThemeCard
                title="몽글몽글 구름 위 세상"
                progress="0 / 10"
                leftEmoji="☁️"
                rightEmoji="⭐"
              />
              <ThemeCard
                title="친환경 자전거 여행"
                progress="0 / 6"
                leftEmoji="🚲"
                rightEmoji="🌿"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useMemo, useState } from "react";
import type { SVGProps } from "react";
import { useRouter } from "next/navigation";

type Slide = {
  key: "welcome" | "observe" | "suggest" | "reward";
  eyebrow: string;
  title: string;
  subtitle: string;
  cta?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 5.5L8.5 12l6 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.5 5.5L15.5 12l-6 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Illustration({
  slideKey,
  className,
}: {
  slideKey: Slide["key"];
  className?: string;
}) {
  if (slideKey === "welcome") {
    return (
      <svg
        className={className}
        viewBox="0 0 680 420"
        fill="none"
        role="img"
        aria-label="탐정 모자를 쓴 조아용 캐릭터가 돋보기를 들고 교실을 살펴보는 일러스트"
      >
        <defs>
          <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E6F7FF" />
            <stop offset="1" stopColor="#ECFDF5" />
          </linearGradient>
          <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22C55E" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.14" />
          </filter>
        </defs>

        <rect x="0" y="0" width="680" height="420" rx="28" fill="url(#bg1)" />
        <g opacity="0.22">
          <path
            d="M78 312c62-54 132-80 210-78 78 2 128 34 198 18 70-16 104-62 132-84"
            stroke="#0EA5E9"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M56 116c40 6 74-6 114-30 40-24 74-34 118-28 44 6 72 30 102 46"
            stroke="#22C55E"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </g>

        {/* Tablet frame */}
        <g filter="url(#soft)">
          <rect x="78" y="68" width="320" height="240" rx="22" fill="#0F172A" />
          <rect x="92" y="84" width="292" height="208" rx="16" fill="#F8FAFC" />
          <rect x="120" y="108" width="116" height="18" rx="9" fill="#E2E8F0" />
          <rect x="120" y="140" width="220" height="16" rx="8" fill="#E2E8F0" />
          <rect x="120" y="166" width="180" height="16" rx="8" fill="#E2E8F0" />
          <rect x="120" y="192" width="200" height="16" rx="8" fill="#E2E8F0" />
          <rect x="120" y="226" width="124" height="36" rx="18" fill="#0EA5E9" opacity="0.14" />
        </g>

        {/* Character (simple, original) */}
        <g transform="translate(388 72)">
          <circle cx="150" cy="170" r="118" fill="#FFE6C7" />
          <circle cx="108" cy="154" r="14" fill="#0F172A" opacity="0.92" />
          <circle cx="196" cy="154" r="14" fill="#0F172A" opacity="0.92" />
          <path
            d="M130 196c18 16 42 16 60 0"
            stroke="#0F172A"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Detective hat */}
          <path
            d="M78 108c10-48 52-78 108-78 56 0 98 30 108 78-72 18-144 18-216 0Z"
            fill="#111827"
          />
          <rect x="86" y="106" width="200" height="22" rx="11" fill="#0F172A" />
          <rect x="140" y="98" width="90" height="10" rx="5" fill="#334155" />

          {/* Magnifier */}
          <circle cx="260" cy="220" r="46" fill="#BAE6FD" opacity="0.55" stroke="#0284C7" strokeWidth="10" />
          <path
            d="M292 252l36 34"
            stroke="#0F172A"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Manager badge */}
          <g transform="translate(92 238)">
            <rect x="0" y="0" width="120" height="46" rx="14" fill="#F8FAFC" stroke="#E2E8F0" />
            <rect x="10" y="9" width="28" height="28" rx="10" fill="url(#badge)" />
            <rect x="46" y="14" width="62" height="8" rx="4" fill="#CBD5E1" />
            <rect x="46" y="26" width="44" height="8" rx="4" fill="#E2E8F0" />
          </g>
        </g>
      </svg>
    );
  }

  if (slideKey === "observe") {
    return (
      <svg
        className={className}
        viewBox="0 0 680 420"
        fill="none"
        role="img"
        aria-label="학교 지도 위에 문제 지점이 핀으로 표시되는 일러스트"
      >
        <defs>
          <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EEF2FF" />
            <stop offset="1" stopColor="#F0FDF4" />
          </linearGradient>
          <filter id="card2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.14" />
          </filter>
        </defs>
        <rect x="0" y="0" width="680" height="420" rx="28" fill="url(#bg2)" />

        <g filter="url(#card2)">
          <rect x="80" y="70" width="520" height="280" rx="22" fill="#FFFFFF" />
          <rect x="108" y="100" width="180" height="18" rx="9" fill="#E2E8F0" />
          <rect x="108" y="132" width="260" height="14" rx="7" fill="#F1F5F9" />
          <g opacity="0.9">
            <path d="M130 200h420" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
            <path d="M130 250h420" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
            <path d="M210 170v190" stroke="#EEF2FF" strokeWidth="10" strokeLinecap="round" />
            <path d="M330 170v190" stroke="#EEF2FF" strokeWidth="10" strokeLinecap="round" />
            <path d="M450 170v190" stroke="#EEF2FF" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* Pins */}
          <g>
            <path
              d="M245 224c0-26 21-48 48-48s48 22 48 48c0 34-48 94-48 94s-48-60-48-94Z"
              fill="#EF4444"
              opacity="0.9"
            />
            <circle cx="293" cy="224" r="16" fill="#FEE2E2" />

            <path
              d="M396 262c0-24 20-44 44-44s44 20 44 44c0 32-44 88-44 88s-44-56-44-88Z"
              fill="#0EA5E9"
              opacity="0.9"
            />
            <circle cx="440" cy="262" r="15" fill="#E0F2FE" />

            <path
              d="M168 272c0-22 18-40 40-40s40 18 40 40c0 28-40 78-40 78s-40-50-40-78Z"
              fill="#22C55E"
              opacity="0.9"
            />
            <circle cx="208" cy="272" r="13" fill="#DCFCE7" />
          </g>
        </g>
      </svg>
    );
  }

  if (slideKey === "suggest") {
    return (
      <svg
        className={className}
        viewBox="0 0 680 420"
        fill="none"
        role="img"
        aria-label="학생들이 아이디어를 제안하고 투표하는 일러스트"
      >
        <defs>
          <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF7ED" />
            <stop offset="1" stopColor="#ECFEFF" />
          </linearGradient>
          <filter id="soft3" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.14" />
          </filter>
        </defs>
        <rect x="0" y="0" width="680" height="420" rx="28" fill="url(#bg3)" />

        {/* Vote box */}
        <g filter="url(#soft3)">
          <rect x="382" y="132" width="220" height="220" rx="24" fill="#FFFFFF" />
          <rect x="416" y="170" width="152" height="16" rx="8" fill="#E2E8F0" />
          <rect x="416" y="196" width="120" height="16" rx="8" fill="#F1F5F9" />
          <rect x="404" y="238" width="196" height="78" rx="18" fill="#F8FAFC" stroke="#E2E8F0" />
          <path d="M432 252h140" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />
          <path d="M432 276h110" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
          <path d="M470 132h44v34h-44z" fill="#0EA5E9" opacity="0.18" />
          <path
            d="M492 112c22 0 40 18 40 40v14h-80v-14c0-22 18-40 40-40Z"
            fill="#0EA5E9"
            opacity="0.26"
          />
        </g>

        {/* Students */}
        <g transform="translate(70 110)">
          <g>
            <circle cx="120" cy="120" r="52" fill="#FFE6C7" />
            <circle cx="102" cy="114" r="7" fill="#0F172A" />
            <circle cx="140" cy="114" r="7" fill="#0F172A" />
            <path d="M108 136c10 10 22 10 32 0" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            <path
              d="M78 210c16-40 46-64 84-64s68 24 84 64"
              stroke="#93C5FD"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </g>
          <g transform="translate(190 34)">
            <circle cx="120" cy="120" r="52" fill="#FFE6C7" />
            <circle cx="102" cy="114" r="7" fill="#0F172A" />
            <circle cx="140" cy="114" r="7" fill="#0F172A" />
            <path d="M108 136c10 10 22 10 32 0" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            <path
              d="M78 210c16-40 46-64 84-64s68 24 84 64"
              stroke="#86EFAC"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </g>

          {/* Idea bulbs */}
          <g transform="translate(106 8)">
            <path
              d="M34 68c0-18 14-32 32-32s32 14 32 32c0 12-6 22-14 28v10H48V96C40 90 34 80 34 68Z"
              fill="#F59E0B"
              opacity="0.9"
            />
            <rect x="52" y="106" width="28" height="12" rx="6" fill="#92400E" opacity="0.45" />
            <rect x="52" y="122" width="28" height="10" rx="5" fill="#92400E" opacity="0.3" />
          </g>
        </g>

        {/* Speech bubble */}
        <g transform="translate(200 54)" filter="url(#soft3)">
          <path
            d="M0 40c0-18 14-32 32-32h212c18 0 32 14 32 32v46c0 18-14 32-32 32H96l-32 26v-26H32C14 118 0 104 0 86V40Z"
            fill="#FFFFFF"
          />
          <rect x="26" y="34" width="222" height="14" rx="7" fill="#E2E8F0" />
          <rect x="26" y="56" width="170" height="14" rx="7" fill="#F1F5F9" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 680 420"
      fill="none"
      role="img"
      aria-label="포인트가 꾸미기 아이템과 따뜻한 기부로 연결되는 일러스트"
    >
      <defs>
        <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0FDF4" />
          <stop offset="1" stopColor="#FFF1F2" />
        </linearGradient>
        <filter id="soft4" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.14" />
        </filter>
      </defs>
      <rect x="0" y="0" width="680" height="420" rx="28" fill="url(#bg4)" />

      {/* Center coin/points */}
      <g transform="translate(320 174)" filter="url(#soft4)">
        <circle cx="20" cy="20" r="70" fill="#FBBF24" />
        <circle cx="20" cy="20" r="56" fill="#FDE68A" />
        <path
          d="M20 0c18 0 32 8 32 20s-14 20-32 20-32-8-32-20S2 0 20 0Z"
          fill="#F59E0B"
          opacity="0.55"
        />
        <path
          d="M-10 40c16 14 40 14 60 0"
          stroke="#92400E"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      {/* Left: costume items */}
      <g transform="translate(86 110)" filter="url(#soft4)">
        <rect x="0" y="0" width="220" height="220" rx="26" fill="#FFFFFF" />
        <rect x="26" y="26" width="120" height="16" rx="8" fill="#E2E8F0" />
        <g transform="translate(40 70)">
          <path
            d="M46 34c6-20 22-32 44-32 22 0 38 12 44 32-30 8-58 8-88 0Z"
            fill="#111827"
          />
          <rect x="42" y="34" width="96" height="16" rx="8" fill="#0F172A" />
          <path d="M76 56l14 22 14-22" fill="#EF4444" opacity="0.9" />
          <path
            d="M30 120c12-30 34-48 60-48s48 18 60 48"
            stroke="#60A5FA"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Right: warm room donation */}
      <g transform="translate(374 110)" filter="url(#soft4)">
        <rect x="0" y="0" width="220" height="220" rx="26" fill="#FFFFFF" />
        <rect x="26" y="26" width="150" height="16" rx="8" fill="#E2E8F0" />
        <g transform="translate(34 70)">
          <rect x="0" y="70" width="152" height="90" rx="18" fill="#FEF3C7" />
          <rect x="14" y="90" width="56" height="56" rx="12" fill="#FDBA74" opacity="0.7" />
          <rect x="82" y="86" width="56" height="60" rx="12" fill="#FCA5A5" opacity="0.55" />
          <path
            d="M36 40c0-20 16-36 36-36s36 16 36 36c0 12-6 22-14 28v10H50V68C42 62 36 52 36 40Z"
            fill="#FB7185"
            opacity="0.85"
          />
          <path
            d="M68 120c22 18 44 18 66 0"
            stroke="#F97316"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>
      </g>

      {/* Connectors */}
      <g opacity="0.6">
        <path
          d="M320 210c-52 2-98-10-134-38"
          stroke="#22C55E"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M410 172c46 26 94 38 142 38"
          stroke="#FB7185"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const slides = useMemo<Slide[]>(
    () => [
      {
        key: "welcome",
        eyebrow: "역할 부여",
        title: "안녕? 난 우리 학교 기후환경 매니저 조아용이야!",
        subtitle:
          "나랑 같이 우리 학교 곳곳에 숨어있는 에너지와 환경 문제를 찾아보는 매니저가 되어볼래?",
      },
      {
        key: "observe",
        eyebrow: "관찰 · 기록",
        title: "너무 덥거나 전기가 낭비되는 곳을 지도에 콕 찝어줘!",
        subtitle:
          "우리가 남긴 기록이 모여 ‘우리 학교 기후환경 지도’가 완성돼요. 사진 인증 없이 터치 몇 번이면 충분해요!",
      },
      {
        key: "suggest",
        eyebrow: "개선 · 투표",
        title: "불편한 점을 찾았다면, 직접 해결 방법도 제안해 볼까요?",
        subtitle:
          "발견한 문제의 이유와 해결 방법을 제안해 보세요. 친구들의 멋진 아이디어에 공감하고 투표할 수 있어요.",
      },
      {
        key: "reward",
        eyebrow: "보상 · 기부",
        title: "모은 포인트로 조아용을 꾸미고, 이웃에게 따뜻함을 선물해요.",
        subtitle:
          "여러분의 기부 포인트는 지자체와 재단을 통해 에너지 취약계층의 난방비와 냉방비로 전달됩니다. 지금 매니저 활동을 시작해볼까요?",
        cta: "우리 학교 매니저 시작하기",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  const goPrev = () => setIndex((v) => Math.max(0, v - 1));
  const goNext = () => setIndex((v) => Math.min(slides.length - 1, v + 1));
  const goStart = () => {
    router.push("/home");
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-black dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-6 sm:px-8 sm:py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="size-5 text-emerald-600 dark:text-emerald-300"
              >
                <path
                  d="M19 4c-6 0-10 3-12 7-2.6 5.2.2 10 5 10 7 0 10-7 7-17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 21c0-6 4-10 12-12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
                우리 학교 기후환경 매니저
              </p>
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                용인시 수지구 16개 중학교 · 태블릿 최적화
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIndex(slides.length - 1)}
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            건너뛰기
          </button>
        </header>

        {/* Main card */}
        <main className="mt-6 flex-1">
          <section className="relative overflow-hidden rounded-3xl bg-white/70 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-950/60 dark:ring-white/10">
            <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:gap-10">
              {/* Illustration */}
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-100/70 via-white to-emerald-100/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
                <div className="rounded-3xl p-2 sm:p-3">
                  <Illustration
                    slideKey={slide.key}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="flex min-w-0 flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-200">
                    {slide.eyebrow}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
                    데이터 학습 → 관찰 → 제안 → 보상/기부
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {slide.title}
                </h1>
                <p className="mt-3 text-pretty text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg">
                  {slide.subtitle}
                </p>

                {/* Progress */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex items-center gap-2"
                    role="tablist"
                    aria-label="온보딩 진행"
                  >
                    {slides.map((s, i) => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "group grid size-9 place-items-center rounded-full ring-1 transition",
                          i === index
                            ? "bg-slate-900 ring-slate-900 dark:bg-white dark:ring-white"
                            : "bg-white ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-900 dark:ring-white/10 dark:hover:bg-slate-800",
                        )}
                        aria-label={`${i + 1}번 슬라이드로 이동`}
                        aria-current={i === index}
                      >
                        <span
                          className={cn(
                            "text-xs font-semibold",
                            i === index
                              ? "text-white dark:text-slate-900"
                              : "text-slate-700 dark:text-slate-200",
                          )}
                        >
                          {i + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {index + 1} / {slides.length}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={goPrev}
                      disabled={isFirst}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ring-1 transition",
                        isFirst
                          ? "cursor-not-allowed bg-slate-50 text-slate-400 ring-slate-900/10 dark:bg-slate-900/40 dark:text-slate-500 dark:ring-white/10"
                          : "bg-white text-slate-900 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:ring-white/10 dark:hover:bg-slate-800",
                      )}
                      aria-label="이전"
                    >
                      <IconChevronLeft className="size-5" />
                      이전
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isLast}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ring-1 transition",
                        isLast
                          ? "cursor-not-allowed bg-slate-50 text-slate-400 ring-slate-900/10 dark:bg-slate-900/40 dark:text-slate-500 dark:ring-white/10"
                          : "bg-slate-900 text-white ring-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
                      )}
                      aria-label="다음"
                    >
                      다음
                      <IconChevronRight className="size-5" />
                    </button>
                  </div>

                  <div className="flex-1" />

                  {isLast ? (
                    <button
                      type="button"
                      onClick={goStart}
                      className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                      aria-label={slide.cta ?? "우리 학교 매니저 시작하기"}
                    >
                      {slide.cta ?? "우리 학교 매니저 시작하기"}
                    </button>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
                    태블릿 가로 화면 우선
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
                    사진 인증(AI) 없이 진행
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
                    관찰·제안 참여량으로 레벨 성장
                  </span>
                </div>

                {/* Trust note */}
                <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                    단순 인증 앱이 아니라,{" "}
                    <span className="font-semibold">
                      우리 학교 공간의 에너지/환경 문제를 직접 관찰하고 개선을
                      제안
                    </span>
                    하는 시민교육 플랫폼이에요.{" "}
                    <span className="font-semibold">사진 인증 없이</span> 터치와
                    텍스트로 충분해요.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom wave */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent dark:from-slate-950/40" />
          </section>
        </main>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>
            학교 내 태블릿 환경을 고려해{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              가로 화면(landscape)
            </span>{" "}
            중심으로 설계했어요.
          </p>
          <p className="flex items-center gap-2">
            <span
              className="inline-flex size-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            MVP: 관찰·제안·투표·포인트(기부)
          </p>
        </footer>
      </div>
    </div>
  );
}


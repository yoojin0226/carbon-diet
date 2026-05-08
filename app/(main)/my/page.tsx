import Link from "next/link";
import { mockEnergyCards, mockPointSummary } from "../../../lib/mock";

export default function MyTabPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            마이
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            포인트와 에너지 카드를 확인해요
          </h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="/wallet"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            내 지갑
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            기부
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            내 포인트 요약
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {mockPointSummary.balance}pt
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            누적 기부 {mockPointSummary.donatedTotal}pt(학교 합산 예시)
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/wallet"
              className="rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              내역 보기
            </Link>
            <Link
              href="/shop"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              상점
            </Link>
          </div>
        </article>

        <article className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10 lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            우리 학교 에너지 카드
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            경기기후플랫폼 데이터는 “점수”가 아니라 중학생 눈높이 카드뉴스로
            배워요(현재는 Mock 카드).
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            {mockEnergyCards.map((c) => (
              <article
                key={c.id}
                className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/10"
              >
                {c.badge ? (
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-200">
                    {c.badge}
                  </p>
                ) : null}
                <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}


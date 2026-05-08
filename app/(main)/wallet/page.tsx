import Link from "next/link";
import { mockPointSummary } from "../../../lib/mock";

const logs = [
  { id: "l1", delta: +5, reason: "관찰 기록(빈 교실 전등)", date: "2026-05-05" },
  { id: "l2", delta: +10, reason: "개선 제안 작성", date: "2026-05-04" },
  { id: "l3", delta: +1, reason: "공감 투표", date: "2026-05-04" },
  { id: "l4", delta: -20, reason: "상점 구매(탐정 모자)", date: "2026-05-03" },
  { id: "l5", delta: -15, reason: "포인트 기부", date: "2026-05-02" },
] as const;

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            내 포인트 관리
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            지금 {mockPointSummary.balance}pt를 가지고 있어요
          </h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="/shop"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            상점
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            기부
          </Link>
        </div>
      </header>

      <section className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          포인트 내역(예시)
        </h2>
        <ul className="mt-3 divide-y divide-slate-900/5 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/10 dark:divide-white/10 dark:bg-slate-950/40 dark:ring-white/10">
          {logs.map((l) => (
            <li key={l.id} className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {l.reason}
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  {l.date}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  l.delta >= 0
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200"
                    : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-200"
                }`}
              >
                {l.delta >= 0 ? `+${l.delta}` : l.delta}pt
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
          다음 단계: 어뷰징 방지를 위해 동일 위치/동일 문제는 쿨타임으로 중복
          적립을 막고, 공감 투표는 일 최대 3회 제한을 적용할 예정이에요.
        </p>
      </section>
    </div>
  );
}


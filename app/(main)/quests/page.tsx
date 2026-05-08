import Link from "next/link";
import { mockMissions } from "../../../lib/mock";

export default function QuestsTabPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            퀘스트
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            오늘의 매니저 미션
          </h1>
        </div>
        <Link
          href="/map"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
          지도 열기
        </Link>
      </header>

      <section className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          미션 목록(예시)
        </h2>
        <ul className="mt-3 space-y-2">
          {mockMissions.map((m) => (
            <li
              key={m.id}
              className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {m.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {m.hint}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
                  +{m.points}pt
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:text-slate-200 dark:ring-white/10">
                  {m.season === "summer" ? "여름형" : "겨울형"}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:text-slate-200 dark:ring-white/10">
                  체크리스트 기반
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


import Link from "next/link";
import { mockProposals } from "../../../lib/mock";

export default function CommunityTabPage() {
  const top3 = [...mockProposals]
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            커뮤니티
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            이번 달 개선 제안 TOP 3
          </h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="/proposals"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            전체 제안함
          </Link>
          <Link
            href="/proposals"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            제안/투표하기
          </Link>
        </div>
      </header>

      <section className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
        <ul className="space-y-3">
          {top3.map((p, idx) => (
            <li
              key={p.id}
              className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    TOP {idx + 1}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    공감 {p.likeCount} ·{" "}
                    {new Date(p.createdAtISO).toLocaleDateString("ko-KR")}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-200">
                  {p.status}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/proposals"
                  className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
                >
                  공감하고 투표하기
                </Link>
                <Link
                  href="/proposals"
                  className="rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  자세히 보기
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


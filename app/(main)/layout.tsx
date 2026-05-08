import Link from "next/link";
import BottomTabBar from "./_components/BottomTabBar";

const nav = [
  { href: "/home", label: "홈(조아용)" },
  { href: "/level", label: "레벨" },
  { href: "/quests", label: "퀘스트" },
  { href: "/community", label: "커뮤니티" },
  { href: "/my", label: "마이" },
] as const;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-gradient-to-b from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-black dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-6 rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-950/60 dark:ring-white/10">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
              <div className="grid size-10 place-items-center rounded-2xl bg-white ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  조아용
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  우리 학교 기후환경 매니저
                </p>
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  태블릿(가로) 모드
                </p>
              </div>
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 rounded-2xl bg-white/70 p-3 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/10">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                추가 기능(개발 중)
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href="/map"
                  className="rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  지도(관찰)
                </Link>
                <Link
                  href="/proposals"
                  className="rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  제안함(전체)
                </Link>
                <Link
                  href="/shop"
                  className="rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  상점
                </Link>
                <Link
                  href="/donate"
                  className="rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  기부
                </Link>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-600/10 dark:bg-emerald-950/40 dark:ring-emerald-300/10">
              <p className="text-xs leading-5 text-emerald-900 dark:text-emerald-100">
                사진 인증(AI) 없이{" "}
                <span className="font-semibold">관찰·제안</span>으로 우리 학교를
                바꿔요.
              </p>
              <Link
                href="/onboarding"
                className="mt-2 inline-flex rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                온보딩 다시 보기
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                우리 학교 기후환경 매니저
              </p>
              <p className="truncate text-base font-semibold text-slate-900 dark:text-white">
                태블릿(가로) 최적화 MVP
              </p>
            </div>
            <Link
              href="/onboarding"
              className="shrink-0 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              온보딩
            </Link>
          </div>

          <main className="min-h-[70vh] rounded-3xl bg-white/80 p-5 pb-28 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-950/60 dark:ring-white/10 sm:p-7 sm:pb-32">
            {children}
          </main>
        </div>
      </div>
      <BottomTabBar />
    </div>
  );
}


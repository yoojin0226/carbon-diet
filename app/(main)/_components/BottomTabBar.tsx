"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SVGProps } from "react";

type Tab = {
  href: string;
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 11.5 12 4l8 7.5V20a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 20v-8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21.8V15.2A1.2 1.2 0 0 1 10.7 14h2.6a1.2 1.2 0 0 1 1.2 1.2v6.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLevel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 20V10M12 20V4M19 20v-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 20h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconQuest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 7h12M8 12h12M8 17h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.5 7.2 5.6 8.4 7.8 6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12.2 5.6 13.4 7.8 11.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 17.2 5.6 18.4 7.8 16.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCommunity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.5 10.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.2 11.5a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3.5 20.2c.6-3.6 2.9-5.4 5-5.9 2.1.5 4.4 2.3 5 5.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.1 15.5c1.7.5 3.6 2 4.1 4.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4.5 20.2c.8-4.2 3.8-6.2 7.5-6.2s6.7 2 7.5 6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const tabs: Tab[] = [
  { href: "/home", label: "홈", Icon: IconHome },
  { href: "/level", label: "레벨", Icon: IconLevel },
  { href: "/quests", label: "퀘스트", Icon: IconQuest },
  { href: "/community", label: "커뮤니티", Icon: IconCommunity },
  { href: "/my", label: "마이", Icon: IconMy },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-900/10 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-slate-950/70"
      aria-label="하단 네비게이션 탭"
    >
      <div className="mx-auto flex w-full max-w-7xl items-stretch justify-between px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
        {tabs.map((t) => {
          const active = isActivePath(pathname, t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              className={cn(
                "flex w-full flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition",
                active
                  ? "text-emerald-700 dark:text-emerald-200"
                  : "text-slate-500 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white",
              )}
              aria-current={active ? "page" : undefined}
            >
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-2xl ring-1 transition",
                  active
                    ? "bg-emerald-50 ring-emerald-600/15 dark:bg-emerald-950/40 dark:ring-emerald-300/15"
                    : "bg-transparent ring-transparent",
                )}
                aria-hidden="true"
              >
                <t.Icon className="size-5" />
              </span>
              <span className="text-[11px] font-semibold leading-none">
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


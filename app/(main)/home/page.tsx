"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mockPointSummary, mockShopItems } from "../../../lib/mock";
import type { CostumeItem } from "../../../lib/types";

export default function HomeTabPage() {
  const items = useMemo(() => mockShopItems, []);
  const [balance, setBalance] = useState(mockPointSummary.balance);
  const [purchased, setPurchased] = useState<Set<string>>(
    () => new Set(["hat-detective"]),
  );
  const [equipped, setEquipped] = useState<{
    hat?: string;
    cape?: string;
    badge?: string;
  }>({
    hat: "hat-detective",
  });

  const lookup = useMemo(() => {
    const map = new Map<string, CostumeItem>();
    for (const it of items) map.set(it.id, it);
    return map;
  }, [items]);

  const equippedList = useMemo(() => {
    const list: CostumeItem[] = [];
    const ids = [equipped.hat, equipped.cape, equipped.badge].filter(
      Boolean,
    ) as string[];
    for (const id of ids) {
      const it = lookup.get(id);
      if (it) list.push(it);
    }
    return list;
  }, [equipped.badge, equipped.cape, equipped.hat, lookup]);

  const buy = (it: CostumeItem) => {
    if (purchased.has(it.id)) return;
    if (balance < it.price) return;
    setBalance((v) => v - it.price);
    setPurchased((prev) => new Set([...prev, it.id]));
  };

  const toggleEquip = (it: CostumeItem) => {
    if (!purchased.has(it.id)) return;
    setEquipped((prev) => {
      const current = prev[it.type];
      if (current === it.id) {
        return { ...prev, [it.type]: undefined };
      }
      return { ...prev, [it.type]: it.id };
    });
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            홈
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            조아용을 꾸미고, 매니저 활동을 시작해요
          </h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="/shop"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
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

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10 lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            조아용 캐릭터 프리뷰
          </h2>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="grid h-40 w-full place-items-center rounded-3xl bg-gradient-to-br from-sky-100 via-white to-emerald-100 ring-1 ring-slate-900/5 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:ring-white/10 sm:w-56">
              <div className="text-center">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  조아용
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  {equippedList.length
                    ? equippedList.map((x) => x.name).join(" · ")
                    : "기본 모습"}
                </p>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                보유 포인트: {balance}pt
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                관찰(5pt) · 제안(10pt) · 공감(1pt)으로 포인트를 모아,
                조아용에게 탐정 모자·망토 같은 아이템을 입혀요.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/map"
                  className="rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  관찰 지도 열기
                </Link>
                <Link
                  href="/my"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  내 포인트/카드 보기
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            빠른 이동
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              href="/quests"
              className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-950/40 dark:text-white dark:ring-white/10 dark:hover:bg-slate-900/50"
            >
              오늘의 미션
            </Link>
            <Link
              href="/community"
              className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-950/40 dark:text-white dark:ring-white/10 dark:hover:bg-slate-900/50"
            >
              TOP3 제안
            </Link>
            <Link
              href="/level"
              className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-950/40 dark:text-white dark:ring-white/10 dark:hover:bg-slate-900/50"
            >
              학교 레벨
            </Link>
            <Link
              href="/my"
              className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-950/40 dark:text-white dark:ring-white/10 dark:hover:bg-slate-900/50"
            >
              마이(지갑/카드)
            </Link>
          </div>
        </article>
      </section>

      <section className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              아이템 샵(홈 탭)
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              포인트로 아이템을 사고 바로 착용해요
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
              {balance}pt
            </span>
            <Link
              href="/donate"
              className="rounded-full bg-rose-600 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-700"
            >
              기부로 연결
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it) => {
            const owned = purchased.has(it.id);
            const on = equipped[it.type] === it.id;
            const affordable = balance >= it.price;
            return (
              <article
                key={it.id}
                className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {it.type === "hat"
                        ? "모자"
                        : it.type === "cape"
                          ? "망토"
                          : "배지"}
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                      {it.name}
                    </p>
                  </div>
                  {on ? (
                    <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
                      착용 중
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                  가격: <span className="font-semibold">{it.price}pt</span>
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => buy(it)}
                    disabled={owned || !affordable}
                    className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition ${
                      owned
                        ? "cursor-not-allowed bg-emerald-600/15 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200"
                        : affordable
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "cursor-not-allowed bg-slate-900/5 text-slate-400 dark:bg-white/10 dark:text-slate-500"
                    }`}
                  >
                    {owned ? "보유 중" : affordable ? "구매하기(모의)" : "포인트가 부족해요"}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleEquip(it)}
                    disabled={!owned}
                    className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition ${
                      !owned
                        ? "cursor-not-allowed bg-slate-900/5 text-slate-400 dark:bg-white/10 dark:text-slate-500"
                        : on
                          ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                          : "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                    }`}
                  >
                    {!owned ? "구매 후 착용 가능" : on ? "벗기기" : "착용하기"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">
          현재는 홈 탭에서 “구매/착용” 흐름을 먼저 확인하는 Mock UI예요. 다음
          단계에서 `Users.purchased_items` 및 장착 상태를 DB에 저장해요.
        </p>
      </section>
    </div>
  );
}


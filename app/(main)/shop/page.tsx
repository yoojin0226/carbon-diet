"use client";

import { useMemo, useState } from "react";
import { mockPointSummary, mockShopItems } from "../../../lib/mock";
import type { CostumeItem } from "../../../lib/types";

export default function ShopPage() {
  const [balance, setBalance] = useState(mockPointSummary.balance);
  const [purchased, setPurchased] = useState<Set<string>>(
    () => new Set(["hat-detective"]),
  );

  const items = useMemo(() => mockShopItems, []);

  const buy = (item: CostumeItem) => {
    if (purchased.has(item.id)) return;
    if (balance < item.price) return;
    setBalance((v) => v - item.price);
    setPurchased((prev) => new Set([...prev, item.id]));
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            조아용 상점
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            포인트로 아이템을 사고 조아용을 꾸며요
          </h1>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            보유 포인트
          </p>
          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            {balance}pt
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((it) => {
          const owned = purchased.has(it.id);
          const affordable = balance >= it.price;
          return (
            <article
              key={it.id}
              className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10"
            >
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                {it.type === "hat"
                  ? "모자"
                  : it.type === "cape"
                    ? "망토"
                    : "배지"}
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                {it.name}
              </h2>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                가격: <span className="font-semibold">{it.price}pt</span>
              </p>

              <button
                type="button"
                disabled={owned || !affordable}
                onClick={() => buy(it)}
                className={`mt-4 w-full rounded-full px-4 py-3 text-sm font-semibold transition ${
                  owned
                    ? "cursor-not-allowed bg-emerald-600/15 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200"
                    : affordable
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "cursor-not-allowed bg-slate-900/5 text-slate-400 dark:bg-white/10 dark:text-slate-500"
                }`}
              >
                {owned ? "보유 중" : affordable ? "구매하기(모의)" : "포인트가 부족해요"}
              </button>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          다음 단계(연동 시)
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
          <li>구매 시 `Users.purchased_items` 배열 업데이트</li>
          <li>대시보드에서 구매한 아이템을 조아용 렌더링에 반영</li>
        </ul>
      </section>
    </div>
  );
}


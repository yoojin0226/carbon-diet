"use client";

import { useState } from "react";
import { mockPointSummary } from "../../../lib/mock";

export default function DonatePage() {
  const [balance, setBalance] = useState(mockPointSummary.balance);
  const [schoolTotal, setSchoolTotal] = useState(mockPointSummary.donatedTotal);
  const [amount, setAmount] = useState(10);

  const donate = () => {
    if (amount <= 0) return;
    if (balance < amount) return;
    setBalance((v) => v - amount);
    setSchoolTotal((v) => v + amount);
  };

  const pct = Math.min(100, Math.round((schoolTotal / 2000) * 100));

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            포인트 기부
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            모은 포인트로 이웃에게 따뜻함을 선물해요
          </h1>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            내 보유 포인트
          </p>
          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            {balance}pt
          </p>
        </div>
      </header>

      <section className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          학교 누적 기부 게이지(예시)
        </h2>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {schoolTotal}pt
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            목표 2000pt(예시)
          </p>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/10">
          <div className="h-full rounded-full bg-rose-600" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
          여러분의 기부 포인트는 지자체·재단 매칭을 통해 에너지 취약계층의 냉/난방
          지원으로 연결돼요(설명용).
        </p>
      </section>

      <section className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          기부하기(모의)
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/10">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              금액
            </span>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-20 rounded-xl bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-900/10 outline-none focus:ring-2 focus:ring-rose-500 dark:bg-slate-900/40 dark:ring-white/10"
            />
            <span className="text-sm text-slate-600 dark:text-slate-300">pt</span>
          </label>
          <button
            type="button"
            onClick={donate}
            disabled={balance < amount}
            className={`rounded-full px-5 py-3 text-sm font-semibold text-white transition ${
              balance < amount ? "cursor-not-allowed bg-rose-300" : "bg-rose-600 hover:bg-rose-700"
            }`}
          >
            기부하기
          </button>
        </div>
      </section>
    </div>
  );
}


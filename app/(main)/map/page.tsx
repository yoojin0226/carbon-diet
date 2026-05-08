"use client";

import { useMemo, useState } from "react";
import type { ObservationCategory, ObservationPin } from "../../../lib/types";
import { mockPins } from "../../../lib/mock";

const categories: ObservationCategory[] = [
  "더운 공간",
  "추운 공간",
  "전기 낭비",
  "물 낭비",
  "시설 불편",
];

function colorFor(cat: ObservationCategory) {
  switch (cat) {
    case "더운 공간":
      return "bg-rose-500";
    case "추운 공간":
      return "bg-sky-500";
    case "전기 낭비":
      return "bg-amber-500";
    case "물 낭비":
      return "bg-emerald-500";
    case "시설 불편":
      return "bg-violet-500";
  }
}

export default function MapPage() {
  const [pins, setPins] = useState<ObservationPin[]>(mockPins);
  const [category, setCategory] = useState<ObservationCategory>("전기 낭비");
  const [note, setNote] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => pins.find((p) => p.id === selectedId) ?? null,
    [pins, selectedId],
  );

  const addPin = (x: number, y: number) => {
    const n = note.trim();
    const pin: ObservationPin = {
      id: `pin-${Math.random().toString(16).slice(2)}`,
      x,
      y,
      category,
      note: n.length ? n : `${category}을(를) 발견했어요.`,
      createdAtISO: new Date().toISOString(),
    };
    setPins((prev) => [pin, ...prev]);
    setSelectedId(pin.id);
    setNote("");
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              우리 학교 기후환경 지도
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              문제를 발견하면 지도에 핀으로 기록해요
            </h1>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            사진 인증 없이 · 터치 + 텍스트 기반(모의 지도)
          </p>
        </div>

        <div className="mt-4 overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <div className="flex items-center gap-2 border-b border-slate-900/5 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              학교 평면도(예시)
            </span>
            <span>·</span>
            <span>아무 곳이나 눌러 핀을 추가해 보세요</span>
          </div>
          <div
            className="relative aspect-[16/9] w-full bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)]"
            onClick={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const y = (e.clientY - rect.top) / rect.height;
              addPin(Math.min(0.98, Math.max(0.02, x)), Math.min(0.98, Math.max(0.02, y)));
            }}
            role="button"
            tabIndex={0}
            aria-label="지도를 눌러 핀 추가"
          >
            {/* Simple room blocks */}
            <div className="absolute left-[6%] top-[10%] h-[26%] w-[28%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />
            <div className="absolute left-[38%] top-[10%] h-[26%] w-[28%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />
            <div className="absolute left-[70%] top-[10%] h-[26%] w-[24%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />
            <div className="absolute left-[6%] top-[42%] h-[22%] w-[40%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />
            <div className="absolute left-[50%] top-[42%] h-[22%] w-[44%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />
            <div className="absolute left-[6%] top-[68%] h-[24%] w-[88%] rounded-2xl bg-white/70 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10" />

            {pins.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={(evt) => {
                  evt.stopPropagation();
                  setSelectedId(p.id);
                }}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%` }}
                aria-label={`${p.category} 핀`}
              >
                <div
                  className={`relative grid size-9 place-items-center rounded-full text-white shadow-sm ring-1 ring-black/5 ${colorFor(
                    p.category,
                  )}`}
                >
                  <span className="text-xs font-bold">!</span>
                  <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1 rotate-45 rounded-sm bg-inherit" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <aside className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          핀 추가 설정
        </h2>
        <div className="mt-3 space-y-3">
          <label className="block">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              핀 종류
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as ObservationCategory)}
              className="mt-1 w-full rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-slate-900/10 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950/40 dark:ring-white/10"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              메모(선택)
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              placeholder="예: 점심시간에 전등이 켜져 있었어요."
              className="mt-1 w-full resize-none rounded-2xl bg-white px-3 py-2 text-sm leading-6 ring-1 ring-slate-900/10 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950/40 dark:ring-white/10"
            />
          </label>

          <div className="rounded-2xl bg-white p-3 text-xs leading-5 text-slate-600 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:text-slate-300 dark:ring-white/10">
            지도를 눌러서 핀을 추가하면, 선택한 핀 종류와 메모가 함께 저장돼요
            (현재는 Mock 데이터).
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            선택한 핀
          </h3>
          {selected ? (
            <div className="mt-2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {selected.category}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  {new Date(selected.createdAtISO).toLocaleDateString("ko-KR")}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {selected.note}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPins((prev) => prev.filter((p) => p.id !== selected.id));
                    setSelectedId(null);
                  }}
                  className="rounded-full bg-rose-600 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-700"
                >
                  삭제(모의)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  닫기
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              지도의 핀을 눌러 상세를 볼 수 있어요.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}


"use client";

import { useMemo, useState } from "react";
import type { Proposal, ProposalStatus } from "../../../lib/types";
import { mockProposals } from "../../../lib/mock";

const statuses: ProposalStatus[] = ["검토 중", "보류", "반영 완료"];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
      {children}
    </span>
  );
}

export default function ProposalsPage() {
  const [items, setItems] = useState<Proposal[]>(mockProposals);
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [filterStatus, setFilterStatus] = useState<ProposalStatus | "전체">(
    "전체",
  );

  const list = useMemo(() => {
    const filtered =
      filterStatus === "전체"
        ? items
        : items.filter((p) => p.status === filterStatus);
    return [...filtered].sort((a, b) => b.likeCount - a.likeCount);
  }, [items, filterStatus]);

  const open = useMemo(
    () => items.find((p) => p.id === openId) ?? null,
    [items, openId],
  );

  const like = (id: string) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likeCount: p.likeCount + 1 } : p)),
    );
  };

  const [form, setForm] = useState({
    title: "",
    q1_where: "",
    q2_what: "",
    q3_why: "",
    q4_how: "",
    q5_who: "",
    q6_energy_relation: "",
  });

  const submit = () => {
    const title = form.title.trim();
    const required = [
      form.q1_where,
      form.q2_what,
      form.q3_why,
      form.q4_how,
      form.q5_who,
      form.q6_energy_relation,
    ].every((v) => v.trim().length > 0);

    if (!title.length || !required) return;

    const proposal: Proposal = {
      id: `p-${Math.random().toString(16).slice(2)}`,
      title,
      status: "검토 중",
      likeCount: 0,
      createdAtISO: new Date().toISOString(),
      q1_where: form.q1_where.trim(),
      q2_what: form.q2_what.trim(),
      q3_why: form.q3_why.trim(),
      q4_how: form.q4_how.trim(),
      q5_who: form.q5_who.trim(),
      q6_energy_relation: form.q6_energy_relation.trim(),
    };

    setItems((prev) => [proposal, ...prev]);
    setOpenId(proposal.id);
    setForm({
      title: "",
      q1_where: "",
      q2_what: "",
      q3_why: "",
      q4_how: "",
      q5_who: "",
      q6_energy_relation: "",
    });
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            구조화된 학교 환경 개선 제안함
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            “왜 문제인지, 어떻게 바꾸면 좋을지”를 함께 적어요
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Pill>공감(투표) +1</Pill>
          <Pill>댓글(다음 단계)</Pill>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              제안 목록
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-300">
                상태:
              </span>
              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value as ProposalStatus | "전체")
                }
                className="rounded-full bg-white px-3 py-2 text-xs font-semibold ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/10"
              >
                <option value="전체">전체</option>
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ul className="mt-3 space-y-2">
            {list.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  className="w-full rounded-2xl bg-white p-4 text-left ring-1 ring-slate-900/10 hover:bg-slate-50 dark:bg-slate-950/40 dark:ring-white/10 dark:hover:bg-slate-900/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </p>
                    <span className="shrink-0 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-200">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    공감 {p.likeCount} ·{" "}
                    {new Date(p.createdAtISO).toLocaleDateString("ko-KR")}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              제안 작성(6가지 질문)
            </h2>

            <div className="mt-3 grid grid-cols-1 gap-3">
              <label className="block">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  제안 제목
                </span>
                <input
                  value={form.title}
                  onChange={(e) => setForm((v) => ({ ...v, title: e.target.value }))}
                  className="mt-1 w-full rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-slate-900/10 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950/40 dark:ring-white/10"
                  placeholder="예: 빈 교실 전등 확인 스티커 만들기"
                />
              </label>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {(
                  [
                    ["q1_where", "어디에서 발견했나요?"],
                    ["q2_what", "어떤 문제가 있나요?"],
                    ["q3_why", "왜 문제인가요?"],
                    ["q4_how", "어떻게 바꾸면 좋을까요?"],
                    ["q5_who", "누구에게 도움이 될까요?"],
                    ["q6_energy_relation", "에너지와 어떤 관련이 있나요?"],
                  ] as const
                ).map(([key, label]) => (
                  <label key={key} className="block">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      {label}
                    </span>
                    <textarea
                      value={form[key]}
                      onChange={(e) =>
                        setForm((v) => ({ ...v, [key]: e.target.value }))
                      }
                      rows={3}
                      className="mt-1 w-full resize-none rounded-2xl bg-white px-3 py-2 text-sm leading-6 ring-1 ring-slate-900/10 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950/40 dark:ring-white/10"
                      placeholder="짧게 적어도 좋아요."
                    />
                  </label>
                ))}
              </div>

              <button
                type="button"
                onClick={submit}
                className="rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                제안 등록(모의)
              </button>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                현재는 Mock 데이터로 화면 흐름을 먼저 만들고 있어요. 다음 단계에서
                Supabase 연동으로 저장/조회/투표 제한(일 3회)을 넣을 수 있어요.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              상세 보기
            </h2>
            {open ? (
              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {open.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-200">
                      {open.status}
                    </span>
                    <button
                      type="button"
                      onClick={() => like(open.id)}
                      className="rounded-full bg-amber-500 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-600"
                      aria-label="공감하기"
                    >
                      공감 +1 ({open.likeCount})
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      어디에서 발견했나요?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {open.q1_where}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      어떤 문제가 있나요?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {open.q2_what}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      왜 문제인가요?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {open.q3_why}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      어떻게 바꾸면 좋을까요?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {open.q4_how}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        누구에게 도움이 될까요?
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                        {open.q5_who}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        에너지와 어떤 관련이 있나요?
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                        {open.q6_energy_relation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                왼쪽 목록에서 제안을 선택해 주세요.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}


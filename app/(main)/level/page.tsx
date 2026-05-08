export default function LevelTabPage() {
  const district = {
    name: "용인시",
    scope: "초등학교 17곳(예시)",
    targetKgCO2: 120_000,
    reducedKgCO2: 46_500,
  };

  const schools = [
    { name: "정평초", reducedKgCO2: 4200, level: 5 },
    { name: "수지초", reducedKgCO2: 3900, level: 5 },
    { name: "동천초", reducedKgCO2: 3600, level: 4 },
    { name: "풍덕초", reducedKgCO2: 3400, level: 4 },
    { name: "상현초", reducedKgCO2: 3200, level: 4 },
    { name: "성복초", reducedKgCO2: 3000, level: 4 },
    { name: "고기초", reducedKgCO2: 2800, level: 3 },
    { name: "신봉초", reducedKgCO2: 2600, level: 3 },
    { name: "죽전초", reducedKgCO2: 2400, level: 3 },
    { name: "보정초", reducedKgCO2: 2200, level: 3 },
    { name: "서원초", reducedKgCO2: 2100, level: 3 },
    { name: "서현초", reducedKgCO2: 2000, level: 2 },
    { name: "한빛초", reducedKgCO2: 1900, level: 2 },
    { name: "한울초", reducedKgCO2: 1800, level: 2 },
    { name: "하늘초", reducedKgCO2: 1700, level: 2 },
    { name: "푸른초", reducedKgCO2: 1600, level: 2 },
    { name: "우리학교", reducedKgCO2: 1550, level: 2, isMine: true },
  ] as const;

  const mine = schools.find((s) => "isMine" in s && s.isMine) ?? schools[0];

  const districtPct = Math.min(
    100,
    Math.round((district.reducedKgCO2 / district.targetKgCO2) * 100),
  );

  const participation = {
    level: 3,
    progressPct: 32,
    weekly: { observe: 7, propose: 2, like: 9 },
    goalWeekly: 25,
  };

  const participateScore =
    participation.weekly.observe * 1 +
    participation.weekly.propose * 3 +
    participation.weekly.like * 0.5;
  const participatePct = Math.min(
    100,
    Math.round((participateScore / participation.goalWeekly) * 100),
  );

  const maxReduced = Math.max(...schools.map((s) => s.reducedKgCO2));

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          레벨
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          용인시 전체와 우리 학교를 한눈에 확인해요
        </h1>
      </header>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {district.name} 탄소 절감 레벨
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {district.scope} · 목표 대비 절감량 진행(예시 데이터)
              </p>
            </div>
            <span className="rounded-full bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-200">
              {districtPct}% 달성
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-sky-600"
              style={{ width: `${districtPct}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                title: "목표 절감량(예시)",
                value: `${district.targetKgCO2.toLocaleString("ko-KR")} kgCO₂`,
              },
              {
                title: "현재 절감량(예시)",
                value: `${district.reducedKgCO2.toLocaleString("ko-KR")} kgCO₂`,
              },
              {
                title: "남은 목표(예시)",
                value: `${Math.max(0, district.targetKgCO2 - district.reducedKgCO2).toLocaleString("ko-KR")} kgCO₂`,
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10"
              >
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {x.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {x.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                학교별 탄소 절감 레벨(17곳)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                막대 길이 = 절감량(kgCO₂) · 레벨 = 그룹(예시)
              </p>
            </div>

            <ul className="mt-3 space-y-2">
              {[...schools]
                .sort((a, b) => b.reducedKgCO2 - a.reducedKgCO2)
                .map((s) => {
                  const pct = Math.max(
                    8,
                    Math.round((s.reducedKgCO2 / maxReduced) * 100),
                  );
                  const mineRow = "isMine" in s && s.isMine;
                  return (
                    <li
                      key={s.name}
                      className={`rounded-2xl p-3 ring-1 ${
                        mineRow
                          ? "bg-emerald-50 ring-emerald-600/15 dark:bg-emerald-950/30 dark:ring-emerald-300/15"
                          : "bg-white ring-slate-900/10 dark:bg-slate-950/30 dark:ring-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                            {s.name}
                            {mineRow ? " (우리 학교)" : ""}
                          </p>
                          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                            절감 {s.reducedKgCO2.toLocaleString("ko-KR")} kgCO₂ ·
                            레벨 {s.level}
                          </p>
                        </div>
                        {mineRow ? (
                          <span className="shrink-0 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
                            내 학교
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/10">
                        <div
                          className={`h-full rounded-full ${
                            mineRow ? "bg-emerald-600" : "bg-sky-600"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/5 dark:bg-slate-950/40 dark:ring-white/10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  우리 학교 참여도 게이지
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  참여(관찰·제안·공감)가 늘수록 우리 학교 레벨이 성장해요.
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
                레벨 {participation.level}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  이번 주 참여도 {participatePct}%
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  목표: 주 {participation.goalWeekly}점(예시)
                </p>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-600"
                  style={{ width: `${participatePct}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                관찰 1점 · 제안 3점 · 공감 0.5점으로 계산한 참여 점수(예시)예요.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {[
                {
                  title: "이번 주 관찰",
                  value: `${participation.weekly.observe}회`,
                  badge: "기록",
                },
                {
                  title: "이번 주 제안",
                  value: `${participation.weekly.propose}회`,
                  badge: "아이디어",
                },
                {
                  title: "이번 주 공감",
                  value: `${participation.weekly.like}회`,
                  badge: "투표",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {x.title}
                    </p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-slate-950/40 dark:text-slate-200 dark:ring-white/10">
                      {x.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {x.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-600/10 dark:bg-emerald-950/30 dark:ring-emerald-300/10">
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                팁
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-900/90 dark:text-emerald-100/90">
                지도에 핀을 더 많이 남기고, 문제의 “이유”와 “해결 방법”을
                제안하면 참여도가 빠르게 올라가요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/40 dark:ring-white/10">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          다음 단계(연동 시)
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
          <li>용인시 17개 초등학교 데이터 연동(학교 단위 절감량/레벨)</li>
          <li>우리 학교 참여도 집계(관찰/제안/공감) 및 레벨 경험치</li>
          <li>연간 학교 기후환경 리포트(탄소 데이터는 1년 단위 갱신)</li>
        </ul>
      </section>
    </div>
  );
}


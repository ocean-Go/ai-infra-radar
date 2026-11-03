---
title: "IREN Watchlist 档案结构 + 决策触发器 + 监测清单"
subtitle: "从 thesis 到 operations 的桥梁"
report_date: 2026-06-04
position: PILOT
audience: Jarvis 自用 (Boss review)
prepared_by: Jarvis
tags: [operations, watchlist, monitoring, checklist]
related: [00-executive-summary.md, 01-thesis-macquarie.md]
---

# IREN Watchlist 档案结构
## From Thesis to Operations

**阅读时间:** 10 min

---

## 1. 三层档案架构

### Layer 1: MEMORY.md (always-on)
**位置:** 跨 session 持久化摘要
**用途:** Boss 一问"IREN 怎么看了"，我立刻 recall 关键事实
**内容:**
- Pilot 仓位 + 成本
- Thesis 一句话
- Macquarie $90 PT 锚点
- Sell-side dispersion
- 决策触发器
- 下一 catalyst

### Layer 2: watchlist/IREN.md (full thesis)
**位置:** `/home/jarvis/.openclaw/workspace/ai-infra-radar/watchlist/IREN.md`
**大小:** 6.1 KB
**用途:** 深度分析时读
**Sections:**
1. Position Snapshot
2. Thesis
3. Macquarie $90 反推
4. Catalyst Roadmap
5. Decision Framework (HOLD / ADD / TRIM / EXIT)
6. Why NOT Adding Yet (decision discipline)
7. Cross-References

### Layer 3: watchlist/IREN-checklist.md (operational)
**位置:** `/home/jarvis/.openclaw/workspace/ai-infra-radar/watchlist/IREN-checklist.md`
**大小:** 5.5 KB
**用途:** 财报前 1 周 / Tier-1 trigger 触发时跑
**内容:**
- 20 个 signal 分 3 层
- Pre-earnings template
- Action map
- 持续 cadence

---

## 2. Tier-1 / Tier-2 / Tier-3 监测信号

### 🚨 Tier-1: Decision-Grade (move the thesis)

| # | Signal | Threshold | Action |
|---|---|---|---|
| 1 | **Sweetwater 1.4GW anchor tenant** | 任何 hyperscaler / frontier lab / sovereign AI | **ADD** |
| 2 | **Sweetwater 1.4GW fill rate** | >50% (Q1 FY27) | HOLD; <30% | **TRIM 50%** |
| 3 | **CapEx coverage** | 客户预付 ≥80% CapEx | Healthy; <60% | **TRIM** |
| 4 | **Cash runway** | >6 quarters | Safe; <3 quarters | **TRIM** |
| 5 | **MSFT $9.7B deployment** | On-schedule | Healthy; any walk | **EXIT** |

### 📊 Tier-2: Health Metrics (quarterly)

| # | Metric | Source | Q3 FY26 baseline | Target |
|---|---|---|---|---|
| 6 | AI Cloud ARR | Earnings | ~$1.7B implied | $3.7B by end-2026 |
| 7 | GPU fleet | Quarterly | 23k | 140k by end-2026 |
| 8 | OCF / CapEx | 10-Q | $75M / $1.3B | OCF >30% of CapEx by Q4 FY27 |
| 9 | Gross margin (AI cloud) | Segment | n/a (nascent) | 40-45% (base) |
| 10 | MSFT deployment | Call | Phased 2026 | No slippage |
| 11 | NVDA 5GW milestones | PR | Announced 5/7/26 | First site selection |
| 12 | Mirantis integration | Earnings | Acquired 2026 | Revenue + product launch |

### 🌐 Tier-3: Context Signals (weekly)

| # | Signal | Source | What it tells |
|---|---|---|---|
| 13 | Spot vs PT range | Yahoo | Re-rating in progress? |
| 14 | Macquarie PT changes | Streetinsider | Sentiment inflection |
| 15 | NBIS/Bloom progress | Sector PR | Long-tail scarcity erosion |
| 16 | WULF/CORZ/APLD wins | Sector PR | Peer benchmark |
| 17 | Australia/Spain policy | Regulators | Bundy 800MW timeline |
| 18 | Insider transactions | Openinsider | Conviction signal |
| 19 | Short interest | Ortex | Crowdedness |
| 20 | Equity dilution | 8-K | Financing quality |

---

## 3. Decision Map (Signal → Action)

| Signal | Position action |
|---|---|
| Sweetwater anchor tenant signed | **Size up** to conviction tier (3-5% book) |
| Q1 FY27 fill >50% + OCF improving | **Hold pilot + small add** |
| 8 月前无 anchor + 融资 plan 不清 | **Trim 50%** |
| Macquarie cuts PT <$70 | **Re-evaluate within 1 week** |
| MSFT or NVDA walks / restructures | **Exit full** |
| Sweetwater cancelled or descoped | **Exit full** |
| Dilution >25% in single raise | **Trim to safety tier** |
| Tier-3 all quiet, sideways $55-65 | **Hold & track** (current) |

---

## 4. 持续 Cadence

| 频率 | 任务 | 时间 |
|---|---|---|
| Daily | (none — pilot 仓位) | — |
| Weekly | Tier-3 5-min scan | 周末 |
| Quarterly | Tier-1 + Tier-2 review post-earnings | Q4 / Q1 / Q2 / Q3 FY |
| On-event | Tier-1 trigger fire | 即时 |

---

## 5. 财报事件日期 (IREN FY ends June 30)

| Event | Approx Date | What to watch |
|---|---|---|
| Q4 FY26 / FY26 全年 | ~Aug 2026 | 1.4GW energized 完整数据；FY27 ARR guide |
| **Q1 FY27** | **~Nov 2026** | **首份 fill rate 披露；ARR vs $3.7B 目标** |
| Q2 FY27 | ~Feb 2027 | Dilution 状态；CapEx burn |
| Q3 FY27 | ~May 2027 | Australia / Spain 进度 |

---

## 6. Boss 自我提示 (decision hygiene)

每次想动 IREN 仓位之前，问自己 3 个问题：

1. **这是 thesis-level 还是 execution-level 信号？**
   - Thesis-level (e.g. "power is the moat") → 不动 pilot
   - Execution-level (e.g. "Sweetwater 未 fill") → 走 decision map

2. **我的情绪是 FOMO 还是 FUD？**
   - 价格涨到 $70+ 想要 add → 大概率 FOMO
   - 价格跌到 $50 想 trim → 大概率 FUD
   - **Pilot 仓位的 purpose 是 tracking, 不是 P&L**

3. **这个动作在 3 个月后看起来合理吗？**
   - 加仓 trigger = anchor tenant 官宣 (factual)
   - 减仓 trigger = 8 月前无 anchor + 融资 plan 不清 (factual)
   - **任何"我觉得会涨/跌" = 不是 trigger**

---

## 7. 文件清单 + 路径

```
/home/jarvis/.openclaw/workspace/ai-infra-radar/
├── watchlist/
│   ├── README.md              ← watchlist index
│   ├── IREN.md                ← 完整 thesis (6.1KB)
│   └── IREN-checklist.md      ← Tier-1/2/3 监测 (5.5KB)
├── reports/
│   └── 2026-06-04-iren-deepdive/
│       ├── README.md          ← 本研究目录
│       ├── 00-executive-summary.md   ← 一页纸
│       ├── 01-thesis-macquarie.md    ← Thesis + Macquarie 反推
│       └── 02-watchlist-files.md     ← 本文件
└── records/
    └── 2026-06-02.json (latest, unchanged)
```

---

**Reminder:** Pilot = tracking ticket, not P&L driver. 任何 size up 之前必须 read `IREN.md` Section 6 (Why NOT Adding Yet).

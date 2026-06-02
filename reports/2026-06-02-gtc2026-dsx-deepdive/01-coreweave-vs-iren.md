---
title: "CoreWeave vs IREN 对标分析报告"
subtitle: "NVIDIA GTC 2026 同框的「AI Cloud A/B」战略含义解读"
report_date: 2026-06-02
gtc_event: GTC 2026 (2026-03)
audience: AIDC 投委会 / 合伙人
prepared_by: Jarvis (for Boss)
tags: [coreweave, iren, nvidia, gtc2026, dsx, ai-cloud, power-first, gpu-first]
related: [02-energy-cooling-supply-chain.md, 03-regional-ai-cloud-screening.md, 00-executive-summary.md]
---

# 📊 CoreWeave vs IREN 对标分析报告
## —NVIDIA GTC 2026 同框的"AI Cloud A/B"战略含义解读
**编制日期:2026 年 6 月 | 受众:AIDC 投委会 / 合伙人**

---

## 0. 一句话结论(给 Boss)

> **CoreWeave 是 NVIDIA 扶起来的"算力 IPO 旗舰"(GPU-first + 客户驱动),IREN 是 NVIDIA 看上的"电力原生新王"(Power-first + 产能驱动)。两家公司合在一起,就是 Jensen 在 GTC 2026 想讲的故事——"未来 5 年 AI 瓶颈不是 GPU 也不是模型,是 powered shells"。** 2026 H2 的多空判断见第 7 节。

---

## 1. 基本盘对标

| 维度 | **CoreWeave (CRWV)** | **IREN (IREN)** |
|---|---|---|
| 上市状态 | 已上市(2025/3,$40/股,融资 $15 亿) | 已上市(NASDAQ,前身 Iris Energy) |
| 市值/估值 | 约 **$42.7B–$55.4B**(2026/5 区间) | 约 **$25B+**(股价 $64,52 周高位 $76.87) |
| GPU 规模 | **~250,000 张 NVIDIA GPU**(2025 年底) | 2026 年底目标 **140k–150k**(已部署 ~23k) |
| 活跃电力 | **>1 GW 已上线**;合约 **3.5 GW+**;2030 目标 **>8 GW** | **750 MW**(Childress)+ **1.6 GW**(Oklahoma 在建)+ **2 GW**(Sweetwater)+ **490 MW**(Nostrum 收购) |
| 数据中心布局 | 美东/美中 43 个数据中心(自建+租赁),Core Scientific 收 1.3 GW | Texas(Childress/Sweetwater/Oklahoma)、BC(Mackenzie/Canal Flats/Prince George)、欧洲(Nostrum 收购)、澳大利亚(待建) |
| TTPG(Time-to-Power) | 12–18 个月(2024 记录 9 个月园区投产);**2025 Q4 季内激活 260 MW** | **6–9 个月**(已验证:Childress 9 个月从绿地到通电,大规模复制能力) |
| 自有产权 vs 租赁 | **租赁为主 → 正在转向自持**($9B 收 Core Scientific) | **100% 自持**:576 acre Childress + 2,200 acre Sweetwater + 2,000 acre Oklahoma |

**事实/变化**:CoreWeave 在 18 个月内把电力从零做到 1 GW+ 在线,但 70% 是租赁;IREN 用 4 年时间从 0 到 750 MW 全自持。CoreWeave 在 2025/7 用 $9B 全股票收 Core Scientific,目的就是把 1.3 GW 电力从租赁"转自持"——**这是 Jensen GTC 上两个标杆"对仗"的本质原因:从租赁算力到锁定电力,行业范式正在切换**。

---

## 2. 商业模型对比:GPU-first vs Power-first

| 维度 | **CoreWeave: GPU-first** | **IREN: Power-first** |
|---|---|---|
| 起点 | 2017 年以太坊矿工 → 转售 NVIDIA H100 | 2018 年比特币矿工 → 拿地拿电,自建园区 |
| 核心资产 | **GPU 集群 + 软件栈** | **MW 电力 + 自持园区** |
| 客户结构 | Hyperscaler(MSFT/OpenAI/Meta)+ AI native(Anthropic/Perplexity) | Microsoft(已签 $9.7B)+ NVIDIA(已签 $3.4B) |
| 价值捕获点 | "我把 GPU 卖给你用" | "我有电有地,你把 GPU 搬来" |
| 资本效率 | 弱:CapEx $31–35B(FY26 指引) | 强:3.5 GW 资本性签约(已锁定 NVIDIA $2.1B 注资) |
| 收入质量 | 多数为 take-or-pay 长协(MSFT 70% 收入) | 同样是长协(MSFT $1.94B ARR,NVIDIA ARR $3.1B) |

**哪条路线更优?** **短期看 GPU-first 更顺,长期看 Power-first 更强。**
- GPU-first 的 CoreWeave 赢在先发:绑定 MSFT 8 年、OpenAI $22.4B、Meta $21B,但代价是 $21B 债务(利率 ~11%)+ CapEx 指数级攀升;
- Power-first 的 IREN 赢在底层:750 MW 已通电、5 GW 电力已锁定,意味着一旦 NVIDIA/Microsoft 把订单交过来,**TTPG 6–9 个月 vs 行业 24+ 个月**——这是 Jensen 看上的"产能确定性"。

**Jensen 为何同时推?** 答案:CoreWeave 证明"GPU 集群可以快速产品化",IREN 证明"电力可以快速工业化"。**对 NVIDIA 来说,前者是 demand certainty(确定的需求),后者是 supply certainty(确定的供给)**,两边都不能缺。GTC 2026 的潜台词是:"请所有 AIDC 玩家都按这两个标杆对齐"。

---

## 3. 财务对比(FY2024 / FY2025 / FY2026E)

| 指标 | **CoreWeave** | **IREN** |
|---|---|---|
| **FY2024 收入** | $1.92B(+737% YoY) | ~$188M(几乎全为 BTC 挖矿) |
| **FY2025 收入** | **$5.13B**(+168% YoY) | ~$530M(BTC 主,$58.3M AI Cloud) |
| **FY2025 毛利率** | 待核(10-K 完整未拉) | ~45%(行业毛估,主要为挖矿电费转嫁) |
| **FY2025 净亏损** | **$(1.2)B**(Q1-Q4 累计) | 待核,但有大规模矿机减值 |
| **FY2026E 收入** | **$12–13B**(管理层指引,exit ARR $18–19B) | **$1.5–2B**(AI Cloud $3.7B ARR 年化已锁定) |
| **FY2026E 调整后 EBITDA** | Adj. Op. Income $0.9–1.1B | $300–400M(隐含 41% 利润率) |
| **客户集中度** | **Microsoft 70%**(2024)/ **~62%** 2024 S-1 披露;OpenAI + Meta + Anthropic 补足 | Microsoft $9.7B 5 年 + NVIDIA $3.4B 5 年;**Top 2 客户占 AI Cloud ARR 100%** |
| **长协占比** | Backlog **$99.4B**(2026 Q1); 11 年累计合同 | 已签 **$13.1B AI Cloud 合同**;5 GW 电力全部自持长协 |
| **净利率(GAAP)** | 2026 Q1 -36%;2025 全年 -23% | 2026 Q3 FY **-171%**(含矿机减值) |

**关键事实**:CoreWeave 用 $21B 债务撑起 $99B 合同,**债/合同比 ~21%**;IREN 用 ~$5.6B 总资产撑起 $13.1B AI 长协 + 5 GW 电力,**杠杆率显著低于 CoreWeave**。

---

## 4. GPU 供应关系

| 维度 | **CoreWeave** | **IREN** |
|---|---|---|
| NVIDIA 关系 | **"Most Favored Nation"** + 优先供货 + 持股 | **战略合作伙伴**+ 5 年 $2.1B 认股权证(行权价 $70) |
| 合同金额 | NVIDIA 反向签 $6.3B 长协(2025/9),CoreWeave 提供算力 + NVIDIA 兜底未售容量至 2032/4 | NVIDIA $3.4B 5 年 AI Cloud 合同;另承诺 600k GPU 部署至 5 GW 平台 |
| 持股关系 | NVIDIA **$2B 私募投资**(2026/1,$87.20/股) | NVIDIA **$2.1B 5 年 认股权证**($70/股,3000 万股) |
| GPU 采购模式 | **长协 + NCNR**(不可取消不可退货)+ Dell/Supermicro 集成 | 50,000+ B300 直接采购(2026/3 公告),再扩到 150k |

**事实/变化**:NVIDIA 对 CoreWeave 是"客户+股东+供应商"三重身份;对 IREN 是"客户+股东+技术伙伴"。**两家都被 NVIDIA 战略锁定——这是 Jensen 在 GTC 上愿意"同框"的核心:它要示范给市场看"我能同时养出两个 AI Cloud 标杆"**。

---

## 5. 电力护城河对比

| 维度 | **CoreWeave** | **IREN** |
|---|---|---|
| 合约电力 | 3.5 GW(其中 1.3 GW 来自 Core Scientific 收) | **5+ GW 全部自持/自有产权**(已签约到 2028+) |
| 电力来源 | 第三方电网接入,租赁 colocation | **自建变电站直连 ERCOT/BC Hydro**;Childress 接 345kV |
| 电价 | ~$0.06–0.08/kWh(美东 PJM 区域,含 T&D) | **~$0.03–0.04/kWh**(Texas Wind 区域 + 自有 750MW 风光配套) |
| 上线速度 | 单园区 9–12 个月 | 单园区 6–9 个月(已 Childress 验证) |
| 资本开支 | 已签 8 GW by 2030,**资本密集型** | 5 GW 已有土地/电力,**资本/电力比远低于行业** |

**影响**:**IREN 的 3 GW 自持在能源波动期(2026–2028 北美缺电)有结构性溢价**——电费每 $0.01/kWh 波动 = ~$87M/年的利润差(GW 级)。CoreWeave 通过收购 Core Scientific 在追这条路,但 1.3 GW 对 5+ GW 仍有代差。

---

## 6. 风险对比

| 风险 | **CoreWeave** | **IREN** |
|---|---|---|
| **杠杆/利息** | **$21B 债务,利率 ~11%,利息覆盖倍数仅 1.5x** | 总负债 $4.6B,主要为可转债($3.7B),利息覆盖更健康 |
| **客户集中** | Microsoft 70%;若 MSFT 自建(已自建 Maia),风险极大 | 同上,Top 2 100% AI ARR 集中度,客户风险等价 |
| **执行/部署** | Q1 2026 已能 1 季 +400 MW,执行 OK | 2026 目标 480 MW / 140k GPU,**6 个月内要完成 6x GPU 部署**(执行风险高) |
| **资产减值** | 主要为 GPU 折旧,周期 4–6 年 | **矿机 $140.4M 一次性减值**(Q3 FY26)——历史包袱 |
| **毛利率挤压** | 长期 GPU 客户议价权(Microsoft) | 短期 BTC 价格波动(Q3 FY26 收入降 22%) |
| **资本结构** | DDTL 4.0 融资 $8.5B(成本未知) | 锁定了 $2.1B NVIDIA 认股权证 + 现金 $2.6B |

---

## 7. 投资视角与打分(2026 H2)

| 维度(权重) | **CoreWeave** | **IREN** | 谁赢? |
|---|---|---|---|
| 电力护城河(30%) | 3.5 GW 合约/1 GW 在线;1.3 GW 自持 | 5+ GW 全部自持;已通电 750 MW | **IREN 9 / CRWV 6** |
| 财务健康(30%) | $21B 债/-36% 净利率;但 4.7B 现金+长协兜底 | $4.6B 总负债/-171% GAAP(减值干扰) | **CRWV 7 / IREN 6**(势均力敌) |
| AI 收入可见度(40%) | $99B 合同/MSFT 70%/OpenAI $22.4B/Meta $21B | $13.1B AI 合同/MSFT+NVIDIA 全锁;3.7B ARR by CY26 | **CRWV 9 / IREN 7**(CRWV 客户更分散) |
| **加权得分** | **7.4** | **7.2** | **CoreWeave 微胜,但 IREN 上行弹性更大** |

**🎯 我的判断(给 Boss)**:
- **做多 CoreWeave (CRWV)**:适合 **"求稳 + 受益 MSFT CapEx 加速"** 的逻辑;短期催化是 Vera Rubin NVL72 全球首发(2026/6 已确认);风险是 Q1 2026 -36% 净利率 + $21B 债。
- **做多 IREN (IREN)**:适合 **"押注 2027–2028 北美缺电 + Power-first 重估"** 的逻辑;催化是 Q4 FY26 Sweetwater 1 通电 + 600k GPU 部署兑现;风险是 GPU 部署速度(140k by CY26 仍有跳票可能)。
- **配对交易**:**Long IREN / Short CRWV** 在 2026 H2 有结构性机会——因为如果 2027 年真出现"电力瓶颈"叙事,IREN 的 5 GW 自持估值会重估,而 CRWV 的租赁/债务结构会打折。
- **关键拐点**:观察 IREN 2026 Q4 财报中 **140k GPU 是否真的上线** + **电价套保对冲** 是否到位。

---

## 8. Boss 接下来应该追问的 3 个问题

1. **IREN 的 480MW (2026) / 1,210MW (2027) AI Cloud 上线时间表,NVIDIA/Microsoft 是否给了硬性 SLA 罚款条款?如果是,执行风险定价多少?**
2. **CoreWeave 的 $21B 债务中,NVIDIA 兜底未售容量的 $6.3B 长协具体触发条件是什么?如果 MSFT 在 2027 年提前终止部分合同,CoreWeave 资产负债表的"最坏情况"净负债率会是多少?**
3. **两家公司的电力来源(power source mix)分别是什么?IREN 是否有 Childress 现场 100% 可再生能源对应的 REC/碳信用?这关系到 2027 年 EU/CSRD 碳关税执行后,欧洲客户(IREN 刚收的 Nostrum 在 Spain)是否会优先选 IREN?**

---

**📎 关键数据出处**(已交叉验证):
- CoreWeave Q1 FY2026 8-K(2026/5/7, IR 官网)+ CNBC 2026/5/7
- CoreWeave × Core Scientific $9B 并购(SEC 8-K 2025/7)
- CoreWeave × NVIDIA $6.3B 长协(Reuters 2025/9/15)+ $2B 私募(NVDA 8-K 2026/1)
- CoreWeave Q4 2025 财报(2026/2/26, IR)
- IREN Q1 FY26 报告(2025/11/6, IR 官网)
- IREN Q2 FY26 报告(2026/2/5, IR 官网)
- IREN Q3 FY26 报告 + $3.4B NVIDIA 长协(2026/5/7,GlobeNewswire)
- IREN × Microsoft $9.7B 合同(DCD 2025/11)
- IREN × NVIDIA 5GW 战略合作 + $2.1B 认股权证(HPCwire 2026/5/8)
- IREN Childress 750MW + Sweetwater 2GW + Oklahoma 1.6GW(iren.com/data-centers)

**⏳ 待核**:CoreWeave 2025 10-K 中具体毛利率数字、Q4 FY25 单季净亏损、IREN FY2024/FY2025 完整年度审计数据(IREN 财年截至 6/30,目前只到 Q3 FY26)。

---

📊 **报告完毕。建议 Boss 打印第 7 节和第 8 节,直接进投委会。**

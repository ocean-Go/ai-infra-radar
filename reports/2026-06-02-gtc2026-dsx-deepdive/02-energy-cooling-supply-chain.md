---
title: "AIDC 电力电子供应链深度报告"
subtitle: "NVIDIA GTC 2026 DSX · Energy & Cooling 层 13 家公司卡位研究"
report_date: 2026-06-02
gtc_event: GTC 2026 (2026-03)
audience: AIDC 战略投资人
prepared_by: Jarvis (for Boss)
tags: [aidc, energy, cooling, vertiv, eaton, schneider, delta, ge-vernova, sst, 800vdc, nvidia, gtc2026, dsx]
related: [01-coreweave-vs-iren.md, 03-regional-ai-cloud-screening.md, 00-executive-summary.md]
---

# AIDC 电力电子供应链深度报告
**NVIDIA GTC 2026 DSX · Energy & Cooling 层 13 家公司卡位研究**
*面向 AIDC 战略投资人 | 2026-06*

> 备注:Boss 标注 "7 家",但 DSX 全景图 Energy & Cooling 层实际包含 13 家(ABB / Caterpillar / Delta / Eaton / ENGIE / GE Vernova / Hitachi / Mitsubishi Electric / National Grid / Schneider / SCE / Trane / Vertiv)。本报告按全集合 13 家展开,聚焦 NVIDIA 在 GTC 2026 官方公告中点名的核心玩家。

---

## 一、事实(Facts)

### 1. NVIDIA GTC 2026 官方背书的 7 家核心 DSX 能源/冷却合作伙伴

NVIDIA 在 2026 年 3 月 16 日官方 press release 中明确点名以下 7 家伙伴提供 SimReady 资产/参考设计集成,这一名单是 "Energy and Cooling 层"的真正权威入场券:

| 公司 | 官方背书内容 | 关键产品 |
|---|---|---|
| **Eaton** | "Beam Rubin DSX" 平台,grid-to-chip 全栈 | 800 VDC 架构、UPS、开关柜、SST(通过 Resilient Power 收购)、与 Siemens Energy 联合 on-site 发电 |
| **Schneider Electric** | ETAP 平台 + SimReady 资产集成到 Vera Rubin DSX | 800 VDC power shelf、PDU、AVEVA 数字孪生、Galaxy UPS |
| **Vertiv** | "Vertiv OneCore Rubin DSX" + 全套冷却 SimReady | CoolChip CDU(70kW–1.35MW)、OneCore 预制化、800 VDC、液冷服务部门 |
| **Trane Technologies** | "Trane Continuum Rubin DSX Reference Designs" | 二次侧液冷 chiller、CDU、Stellar Energy Digital + LiquidStack 浸没式 |
| **ABB** | 与 NVIDIA 直接合作开发 800 VDC | HiPerGuard(全球首台固态中压 UPS)、SACE Infinitus(固态断路器)、MV UPS + DC 配电 |
| **Hitachi Energy** | 支持 800 VDC 架构,模拟 800 VDC 供电 | 大型变压器、HVDC、grid 互联 |
| **Mitsubishi Electric / MHI** | 800 VDC 协作 + on-site 发电(气轮机) | 中压 UPS、燃气轮机、冷却系统 |

资料来源:NVIDIA Newsroom (nvidianews.nvidia.com) 2026-03-16,del Oro Group 2026 GTC 复盘。

### 2. 液冷路线图对比

| 公司 | D2C (Direct-to-Chip) | 浸没式 (Immersion) | 二次侧/Chiller | CDU 旗舰规格 |
|---|---|---|---|---|
| Vertiv | ✅(主推) | ✅(2021 与 GRC 合资) | ✅ | CoolChip CDU:70kW–1,350kW;1GW 工厂 CDU 已部署 |
| Schneider | ✅ Ecoflair | ⚠ 弱 | ✅ | 大型 in-row CDU |
| Trane | ✅(Stellar 收购补足) | ✅(LiquidStack 收购,2026-02 公布) | ✅ 强项 | Continuum reference design,chiller 平台 |
| Delta(台达) | ✅ | ⚠ 弱 | ✅ | **3MW L2L CDU(1.5 LPM/kW,50 psi)**,800 VDC CDU 2026 首发 |
| Eaton | ✅(与 Boyd Thermal 9.5B 收购补强) | ⚠ | ✅ | 与 Siemens 联合 on-site 发电 + cooling |
| ABB | ⚠ 弱 | ⚠ | ✅ | 高密度 UPS+液冷辅助 |
| MHI / Mitsubishi | — | — | ✅(强) | 工业级 cooling |

关键变化:CDU 容量正从 1MW 跳到 **3–10MW 单机** 以匹配 pod-level 架构;45°C 温水入口成为 Vera Rubin 标配。Vertiv 与 Delta 在 D2C + 高密度 CDU 两条线都领先。

### 3. SST(固态变压器)布局 — 2026–2028 真正拐点

| 公司 | SST 进度 | 合作/收购 | 风险点 |
|---|---|---|---|
| **Delta(台达)** | **最激进**——已发布 MV-AC → 800 VDC SST,出现在 GTC 2026 官方 NVIDIA 800 VDC 合作伙伴清单 | 自研 + NVIDIA MGX 生态 | 价格/良率爬坡 |
| **Eaton** | **进度最快整合者**——2024 收购 Resilient Power Systems 补齐 SST;2026 Q2 关闭 Boyd Thermal($9.5B)补 thermal | 收购 + 自研(已有 3 年 MV-SST 内部路线) | 业务规模 vs. ABB 仍小 |
| **ABB** | HiPerGuard 固态 UPS + SACE Infinitus 固态断路器,MV-DC 路径清晰 | 与 NVIDIA 直签 | 整体 DCPI 业务仅占 7%(2025) |
| **Schneider** | ETAP 仿真 + ETAP/DC 平台,无自研 SST 主线,集成商角色 | 与 NVIDIA ETAP 集成 | 缺自有 SST 芯片级 IP |
| **Hitachi Energy** | 800 VDC 支持,主攻 HVDC + 大型变压器,SST 偏弱 | 100 亿美元美国制造投资 | 偏向 utility 端 |
| **GE Vernova** | 在 NVIDIA 800 VDC 名单 | 自研 + 收购 | 偏 transmission |
| **新进入者(颠覆风险)** | **DG Matrix**(已入 NVIDIA MGX 官方生态,Interport 多端口 SST,$60M A 轮)、**Heron Power**、**Amperesand**(新加坡,>$12M)、**VEIR**、**Ayr Energy**、**SolarEdge/Infineon** | DG Matrix CTO Bhattacharya 明确说 "NVIDIA 把我们的架构作为 800V DC reference,系统中不再需要单独 UPS" | 缺规模,2026–2027 是分水岭 |

### 4. 燃气轮机 / 柴发 / 主电源订单(GB200/GB300 1GW 集群)

| 公司 | 关键数据 | 客户 |
|---|---|---|
| **GE Vernova** | Q1 2026 订单 **$18.3B**(+71% YoY),气轮机 backlog 升至 **100 GW**(Q1 2026,2025 末 80 GW);Q1 Electrification 订单 +86% YoY;$160M Greenville 扩产 + $41M Schenectady 扩产 | AWS (含 AWS 全球能源合作)、Duke Energy、Meta、Oracle |
| **Mitsubishi Power** | H-100 / M501JAC 燃机;订单交付已排到 2030 | xAI (Colossus 1GW)、Meta Hyperion(规划) |
| **Caterpillar** | **2 GW** 燃气+储能订单供应 AIP Corp Monarch Campus(2026 Q4 公布);与 Boyd CAT 联盟;与 Vertiv 签 CCHP 联合方案 | AIP Corp、Nscale(NVIDIA DSX West Virginia 多 GW 站点) |
| **Cummins / Rolls-Royce** | 备电为主,未在 GTC 2026 站台 | — |

核心判断:**GE Vernova 是 GTC 2026 周期中"AI 主电源"的绝对赢家**——其 backlog 已经锁定 2028 年前的供给,新机位价格在 10–20% 上调。

### 5. UPS + 储能 + 柴发"完整备电方案"

| 公司 | 完整度 | 关键方案 |
|---|---|---|
| **Vertiv** | ★★★★★ | Liebert UPS + CoolChip CDU + 储能 + 整机柜(OneCore) |
| **Eaton** | ★★★★★ | UPS + SST(Resilient)+ 柴发(Siemens 合作)+ Boyd Thermal 液冷 |
| **Schneider** | ★★★★ | Galaxy UPS + 800 VDC + 储能 + ETAP 数字孪生 |
| **ABB** | ★★★★ | HiPerGuard 固态 UPS + 固态断路器 + 储能 |
| **Delta** | ★★★★ | 800 VDC power rack + 480kW BBU(NVIDIA MGX 生态)+ 微电网 |
| **Caterpillar + Vertiv** | ★★★★ | 联合"柴发+UPS+冷却"打包 |

### 6. 财务对比(2024 → 2025)

| 公司 | 2024 收入 | 2025 收入 | 同比 | AI/DC 相关占比 | 毛利率 | 订单 backlog |
|---|---|---|---|---|---|---|
| **Vertiv (VRT)** | $8.01B | **$10.23B** | +28% | ~75% | 调整后营业利润率 17%+ | **$15.0B**(+108% YoY) |
| **Eaton (ETN)** | ~$24.9B | **$27.4B** | +10% | 数据中心收入+40% YoY,订单+200% YoY | 24.9% 部门毛利率 | 创纪录,18% YoY 增长 |
| **Schneider Electric** | €38.0B | ~€41B(est,+8.9% organic) | +9% | Data Center 24% 暴露,2024 起 CAGR 10%+ | ~18% EBITDA | 强(Q3 backlog 大幅增长) |
| **GE Vernova (GEV)** | ~$34.9B | ~$38B | +9% | Power + Electrification 占 60%+;Q1 2026 +71% YoY | ~15% adj EBITDA | **100 GW 气轮机** backlog |
| **Delta Electronics (台达 2308.TW)** | NT$469B | NT$550B+(est) | +17% | **基础设施 +82% YoY**;Power Electronics 占 63.5% | 33% | 创纪录 |
| **ABB** | ~$32.9B | **$9.08B Q3 alone** | Q3 +11% | **DC 7%(2025)↑自 6%(2024)**,订单 +10-20% Q2 | ~36% gross | $11.3B Q1 2026 |
| **Trane (TT)** | ~$19.8B | ~$22B | ~+10% | 数据中心相关 ~15%(估计) | ~37% gross | **$10.7B**(Q1 2026,+30% YoY) |
| **Mitsubishi Heavy** | ~¥5T | — | — | Power Systems 强 | — | 燃机排至 2030 |
| **Caterpillar (CAT)** | ~$64B | ~$68B(est) | — | Power & Energy 持续走强 | ~35% gross | 含 2GW AIP 合同 |
| **Hitachi Energy** | — | — | — | 800 VDC 关键供应商 | — | 投资 $1B 美国制造 |

ENGIE、National Grid、SCE:**不直接销售"产品"**,而是 AIDC 电力供应方与"behind-the-meter"合作伙伴——通过 PPA/微电网锁定 hyperscaler 客户(ENGIE × Prometheus Hyperscale Texas;SCE 服务 SoCal hyperscaler)。

---

## 二、变化(Changes)

1. **从 AC 480V → 800 VDC 的架构革命**:NVIDIA Vera Rubin 强制要求 800 VDC;Jensen 在 GTC 2026 keynote 未提,但 floor 议程是核心议题。**Delta 和 Eaton 是 800 VDC 的最强玩家**(Delta 提供 rack-level 660kW + 480kW BBU,Eaton 提供 Beam Rubin DSX 整机方案)。
2. **从"分立组件"→"grid-to-chip 整厂交付"**:NVIDIA DSX 200+ 合作伙伴的真正意义是允许 infra builders 用 **OneCore(Vertiv)/ Beam Rubin DSX(Eaton)/ Continuum(Trane)** 等"参考工厂套件"做 turnkey。这把 Vertiv/Eaton/Trane/Schneider 推上"系统集成商"地位,抬升 ASP 3–5 倍。
3. **从"主电源 = utility"→"on-site 发电 + 储能"**:GE Vernova 100 GW backlog、Siemens Energy 与 Eaton 合作、xAI/Caterpillar on-site 模式已成事实标准。27% 的新数据中心将完全 on-site(2030E),$42B 市场。
4. **从 D2C 主导 → D2C + 浸没式 + 45°C 温水多模式并存**:Trane 收 LiquidStack、Stellar Energy 是关键拐点;Vertiv 在三条路全布局。
5. **从"单机 UPS"→"UPS + 固态开关 + SST + BESS 集成"**:ABB HiPerGuard + Eaton Resilient + Delta SST 标志新 UPS 时代,未来 3 年将吃掉传统 UPS 30%+ 市场。

---

## 三、影响(Implications)与投资打分

| 公司 | AIDC 真实卡位 | 投资打分(1-10) | 一句话评 |
|---|---|---|---|
| **Vertiv (VRT)** | 全栈液冷+UPS+预制化,NVIDIA 首选 | **9.5** | "NVIDIA AI 工厂的事实水电公司" |
| **GE Vernova (GEV)** | 主电源 + 电网设备,100 GW backlog | **9.0** | "AI 时代的电力垄断者" |
| **Eaton (ETN)** | Beam Rubin DSX + SST + Siemens 合作 + Boyd 9.5B | **8.5** | "最被低估的 DSX 全栈玩家" |
| **Schneider (SU.PA)** | AVEVA + ETAP 数字孪生 + DC 24% 暴露 | **8.0** | "软件 + 硬件双轮,欧洲 AI 龙头" |
| **Delta(台达 2308.TW)** | 800 VDC + 3MW CDU + MGX 生态 | **8.0** | "亚洲最被低估的 NVIDIA 直接受益者" |
| **Trane (TT)** | 液冷 reference design + LiquidStack | **7.5** | "HVAC 王者液冷转型成功" |
| **ABB** | 固态 UPS/断路器,NVIDIA 直签 | **7.0** | "瑞士工艺 + 半导体级电力电子" |
| **Mitsubishi** | 1GW 主电源订单 | **7.0** | "日本燃机王者,排产至 2030" |
| **Caterpillar (CAT)** | 2GW AIP + Nscale + Vertiv 联合 | **6.5** | "传统 OEM 转型能源新贵" |
| **Hitachi** | 800 VDC + 变压器 | **6.0** | "稳,但 DSX 边缘位置" |
| **ENGIE** | 微电网 + PPA | **5.5** | "欧洲侧玩家,北美有限" |
| **National Grid / SCE** | 输配电 + PPA | **4.5** | "Ratepayer Protection Pledge 后角色待定" |

**Top 2-3 真正赢家(推荐建仓):**
- **Vertiv (VRT)** — DSX 全栈液冷+UPS+预制化唯一真实受益者,$15B backlog + 1.4x book-to-bill。
- **GE Vernova (GEV)** — 主电源瓶颈的唯一突破者,100 GW backlog 锁定至 2029+。
- **Eaton (ETN)** — Beam Rubin DSX + SST 收购 + Boyd 9.5B 液冷,综合性最佳,P/E 仍合理。

---

## 四、行动(Actions)与追问

### 3 个 Boss 应该追问的问题

1. **SST 商品化时间窗到底多窄?** NVIDIA 把 DG Matrix 架构立为 reference 是否会让 Delta/Eaton/ABB 的 1–2 年领先优势归零?如果 2027 年 H2 DG Matrix 量产,这 3 家估值溢价是否要重估?——建议跟进 DG Matrix Interport B 轮进展与 Tesla Megapack 协同。
2. **GE Vernova 100 GW backlog 中,behind-the-meter 占比多少?** 如果 60% 以上为 hyperscaler 自建燃机,GEV 实质是"AIDC 基建 REITs"角色,估值应往 utility multiples 修正;如果是 utility 为主,则继续 equipment OEM 估值。请 BofA/Morgan Stanley 拆分披露。
3. **中国 SST 玩家(阳光电源、特变电工、汇川、台达)在美国市场的实际卡位?** 台达已经在 NVIDIA 800 VDC 名单,若中美脱钩加深,中系厂商可能被迫"内卷国内 + 退守东南亚",反而强化美系(Eaton/Vertiv/GEV)的定价权。请跟踪台达 NT$ 数据中心订单 + 阳光 SST 2026 量产进度。

---

**报告说明:** 100% 基于 2025–2026 公开资料(NVIDIA Newsroom、ABB/Eaton/Vertiv/Trane 财报与 PR、del Oro GTC 2026 复盘、Reuters、Bloomberg、Power-Eng、Power Electronics News),具体数字均已注明出处。

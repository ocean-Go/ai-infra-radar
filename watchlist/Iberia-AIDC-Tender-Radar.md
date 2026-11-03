# Iberia AIDC Tender Radar — 项目清单 + 监控维度

> 西葡 AIDC 招标监控的源真理表。Cron 任务 `iberia-aidc-tender-radar` 读取此档案。
>
> **Boss 指令 (2026-08-09)**: Nostrum 永久改名为 IREN。在所有 AIDC 投研 / cron / 简报中统一用 "IREN" 取代 "Nostrum"，指代同一组 Spain pipeline。仅在历史事件叙述 (例如 "Nostrum 收购前曾用名 Ingenostrum") 时保留旧名。

## 项目清单 (12 个，按优先级排序)

| # | 项目 | 国家 | 主体 | 规模 | 关键阶段 (2026-08 基线) | Huawei 触点 |
|---|---|---|---|---|---|---|
| 1 | **IREN** (含原 Nostrum pipeline) | ES | IREN (NASDAQ:IREN) | Spain pipeline +490MW + Evergreen 500MWe | 6/15 Nostrum 收购完成；8/4 Mirantis 收购完成 ($625M)；7/30 签 $2.8B AI Cloud 合同；5/8 NVIDIA $3.4B/5GW 战略合作；ARR 目标上调至 $4B+；Badajoz/Cáceres 214MW×2 + Guadalajara 29 + Pinto 21 + Zamudio 21 + Galicia 18 + Evergreen Phase 1 150MWe 设计中 (AECOM 中标 12/2/2025 €1.9bn) | DCF/PowerPOD/UPS/BESS 全栈 |
| 2 | **Templus** (AtlasEdge + Grupo Aire) | ES/PT | Templus | Iberia Edge 网络 + 60MW+ | 12/2025 收购 9 DC AtlasEdge (Madrid/Barcelona/Milan/Zurich/Paris/Amsterdam/London/Leeds/Copenhagen)；1/2026 收购 3 DC Grupo Aire (Madrid/Valencia/Lisbon)；750 客户；2026 目标 26 个 DC | DCF/UPS/冷却 |
| 3 | **EU AI Gigafactory** (西班牙联合体) | ES | 政府 + EuroHPC JU + 17 成员国 | Catalonia + Madrid (Móra la Nova Tarragona + San Fernando de Henares Madrid) | 7/30 欧委会发布招标 (ref EUROHPC-2026-CEI-AIGF-01)；**11/12/2026 16:00 CET 截标**；西班牙认缴 €719M (NextGenerationEU) + €300M EuroHPC 自愿金 = €1.019B 总包；2027 初授标；18 个月内 RFS | 全栈 (DCF/PowerPOD/UPS/BESS/冷却) |
| 4 | **MERLIN/Edged** | ES/PT | MERLIN Properties + Edged Energy | Phase I 64MW (10/2026 满租) + Phase II **254MW €2,756M commitment** | Phase I: Barcelona 22MW + Bilbao Arasur 22MW + Madrid Getafe 20MW；Phase II: Bilbao ARA 02&01 46+60MW + Lisbon LIS-VFX 80+100MW + Zaragoza 150MW (Wind)；EDP 能源合作；Meta 首三座主要客户 | PowerPOD/UPS/冷却 |
| 5 | **Start Campus (Sines 1.2GW)** | PT | Start Campus (EDP+Sinclair) | 1.2GW total；SIN01 29MW 投运 + SIN02 180MW 在建 | SIN01 12,600 Blackwell Ultra GPU for Microsoft (Q1 2026)；5/5 Nscale 扩 66,000+ Rubin GPU late 2027；Nscale 投 €695M (€230M 共享 + €465M SIN02 第二栋 200MW)；6/1 Datacloud Best in Europe；Schneider Electric 合作 | PowerPOD/UPS/BESS/冷却 |
| 6 | **Quetta (Azora)** | ES | Azora + Core Tech Capital | Zaragoza 150MW + 6 节点 Edge 60MW (3 MW×20) | DIGA 批准 (Aragon 政府)；TYPSA 设计中标 (7/23)；Madrid Tres Cantos 20MW + Barcelona Molins de Rei 10MW 已开工；€450M+ 投资；DLC 闭环液冷 PUE<1.15 WUE 0；剩余 4 节点 (含 Lisbon) 待招标 | DCF/冷却 (DLC) |
| 7 | **Solaria** (Digital Infrastructure) | ES | Solaria Energía | 600MW 已签 DC 需求 + 14.2GW pipeline + 18GW 2030 目标 | 2/26 与 Merlin 第二座 213MW DC (40 年 PPA 426MW PV + 10 年 600MWh BESS)；Q1 2026 利润 +50%；7/2026 IDAE €41M BESS 补贴；6.0MW 已签 + 14.2GW pipeline | PowerPOD/BESS/储能 EPC |
| 8 | **IGNIS + DayOne** (Escatrón 300MW) | ES | Ignis (可再生能源) + DayOne | 900 公顷；**IT 容量 300MW (DCD 英文版 + DCD-España 8/14 正文均为 300MW)**；€3bn+ | 6/10 官宣；"Bring Your Own Power" 模型；on-site generation + 电网接入；Aragon 政府已批 DIGA；DCD-España 8/14 标题写"444MW"系把 Escatrón 300MW IT 与 Ignis 在 Aragón 其它/并网/配套电源容量捆算，**不是 IT 容量上修到 444MW**；EPC/LLE/客户合同均未披露 | DCF/PowerPOD/BESS (on-site gen + 接入) |
| 9 | **Blackstone Aragon** (二期 +€5bn) | ES | Blackstone + Telefónica + Vauban | 8 DC + 变电站 + 光伏 | €12bn 总承诺；Q2 2026 实质开工；Aragon 集群关键项目 | 全栈 |
| 10 | **ACS + Benbros** (La Puebla de Alfindén, Zaragoza) | ES | ACS + Benbros | €1.254bn ($1.457bn) DC | 2026 H1 开工；2028 底完工 | DCF/UPS/冷却 |
| 11 | **EdgeMode + BlackBerry AIF + Mora** (Castilla-La Mancha) | ES | EdgeMode + BlackBerry AIF + Mora | €3bn ($3.4bn) AI campus, 300MW, 2×150,000m² | 申请 Castilla-La Mancha 优先项目状态 | 全栈 |
| 12 | **Thor Digital Madrid** (原 Form8tion) | ES | Thor Digital (Q-Energy 关联) | 2.5GW 土地 + 1.2GW 电力合同 + 5-building hyperscale | Madrid 园区施工中；1.75GW 全球已交付；后续 5 节点 + 全球经验 | 全栈 |

> **Boss 提的 8 个项目**全部覆盖 (IREN 合并 Nostrum 后);**样稿 cron 发现的 4 个新项目**纳入: Blackstone Aragon, ACS+Benbros, EdgeMode+BlackBerry, Thor Digital (Form8tion 更名)。

## 监控维度 (8 类)

| 维度 | 西葡渠道 | 中文检索词 | 关键搜索模板 |
|---|---|---|---|
| **发标 (tender/licitación)** | PLACSP / Tenders Electronic Daily (TED) / diario da republica | "licitación" / "concurso público" / "tender" | `<项目> tender <年份>` |
| **中标 (award)** | 公司 PR + BOE + DR | "adjudicación" / "awarded" | `<项目> awarded <年份>` |
| **EPC/GC** | Construction Enquirer / DCD / ENR | "EPC" / "general contractor" / "constructor" | `<项目> EPC award <年份>` |
| **设计/EPCM** | TYPSA / AECOM / IDOM PR | "EPCM" / "diseño" / "engineering" | `<项目> design award OR engineering <年份>` |
| **LLE 采购 (Long-Lead Equipment)** | Schneider / Vertiv / Eaton / Huawei PR | "transformer" / "UPS" / "switchgear" / "Long-Lead Equipment" | `<项目> transformer OR UPS order <年份>` |
| **供应商入围** | DCD / Baxtel / LinkedIn | "shortlist" / "vendor selected" | `<项目> shortlist vendor <年份>` |
| **RtB / RFS** | 公司 PR + BOE + 政府公告 | "Ready to Build" / "Ready for Service" | `<项目> RtB OR RFS <年份>` |
| **开工 + 阶段变化** | Construction press / LinkedIn | "groundbreaking" / "shovel-ready" / "Phase 2" | `<项目> groundbreaking OR phase 2 <年份>` |

## Huawei 机会映射 (5 类)

| Huawei 产品/方案 | 触发信号 (西葡场景) | 紧迫度判断 |
|---|---|---|
| **Huawei DCF (预制模块化数据中心)** | MW 级别 campus 项目进入 EPC 入围阶段；客户未绑定欧美 Tier-1 OEM；EU AI Gigafactory 7 个选址结果 | 高 — DG/预制化是 AIDC 新建标配，欧洲非 FLAP-D 市场对价格敏感 |
| **Huawei PowerPOD (智能电力模块)** | 中压配电招标；与 Schneider/ABB/Siemens 同台竞争；客户含 hyperscaler 或主权 AI | 高 — PowerPOD 是 Huawei 西葡最锋利的产品 (UPS+BMS 集成) |
| **Huawei UPS (UPS5000 / UPS2000)** | LLE 采购阶段；UPS 单价 100kW+ 集群；客户接受非 Schneider/Vertiv | 中 — UPS 进入门槛较低，但 Tier-1 hyperscaler 多锁 Schneider/Vertiv |
| **Huawei BESS (智能储能)** | PPA/BESS 招标；客户需 on-site gen 备份；岛式/孤岛电网场景；Ignis/Solaria 已有 IDAE 储能布局 | 高 — Iberia BESS 市场 €40M+ IDAE 补贴驱动，Huawei Smart String ESS 有成本优势 |
| **Huawei 冷却 (FusionCol / SmartLi)** | 液冷 DLC 项目；30MW+ 部署；客户为 hyperscaler 或 Tier-2 colo；客户已通过 OCP 认证 | 中 — 液冷是 AIDC 新标配，Huawei 在 DLC 集成有差异化但与 Vertiv 直接竞争 |

## 紧迫度评级规则

- **🔥 立即行动** = 招标公告 < 30 天 / 中标公布 / EU AI Gigafactory 节点 / 关键里程碑
- **⏰ 30 天内** = EPC 入围名单发布 / LLE 采购订单 / RtB 决定
- **📅 季度级** = Phase 2 启动 / 扩容规划 / 战略合作签字
- **👁 持续观察** = 行业趋势 / 容量扩张 / 政策动向

## 公开招标源 (cron 必须扫描)

| 国家 | 平台 | URL | 检索关键词 |
|---|---|---|---|
| Spain | PLACSP | contrataciondelestado.es | CPV: 30200000 (IT), 45214000 (construction), 45310000 (electrical), 71320000 (engineering) |
| Spain (EU) | TED | ted.europa.eu | "data center" + "Spain" |
| Portugal | Diário da República | diariodarepublica.pt | "centro de dados" + "Sines" OR "Lisboa" |
| Portugal (EU) | TED | ted.europa.eu | "data centre" + "Portugal" |
| EU | EuroHPC JU | eurohpc-ju.europa.eu | AI Gigafactory call updates |

## Cron 触发器优先级

1. **EU AI Gigafactory 11/12/2026 16:00 CET 招标截止** — 距今 ~3 个月，需高频扫描
2. **MERLIN/Edged Phase II 254MW €2,756M commitment** — 5 大区同时推进 LLE 集中采购窗口
3. **IREN Evergreen Phase 1 150MWe** — AECOM 设计进行中；mid-2026 建筑许可
4. **IGNIS+DayOne Escatrón 300MW IT** — €3bn 项目；Bring-Your-Own-Power 模型独特；**⚠️ 警惕 DCD-España 8/14 标题"444MW"陷阱**：标题数字不等于 IT 容量，正文与英文版一致为 300MW 渐进式 scale-up；444 是混合容量口径
5. **Start Campus SIN02/SIN03+** — 180MW 在建 + Nscale Rubin 66k GPU late 2027
6. **Solaria x Merlin 第二座 213MW** — 40 年 PPA + 10 年 600MWh BESS 锁定

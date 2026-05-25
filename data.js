// AI Infra 雷达图 · 数据配置
// 更新此文件即可刷新所有指标，无需修改 HTML

const RADAR_DATA = {
  // 六维评分 (0-100)
  axes: {
    capex:    { value: 90, label: 'AI Capex',      sublabel: '大厂投入仍在高位，IREN等新玩家加速扩张' },
    power:    { value: 42, label: '⚡ 电力约束',   sublabel: '接入与供电持续偏紧，排队建设成常态' },
    cooling:  { value: 76, label: '冷却技术',      sublabel: '液冷成为高密度标配，渗透继续提速' },
    scale:    { value: 88, label: '集群规模',      sublabel: 'AI园区规模扩张，5GW级别项目落地' },
    visibility: { value: 82, label: '订单可见度',  sublabel: 'NVIDIA-IREN等合作背书，赛道可见度提升' },
    pricing:  { value: 73, label: '定价权', sublabel: '供给受限+垂直整合支撑价格' }
  },

  // 市场信号
  signal: {
    status: '🟢 赛道升级：兑现验证期',
    phase: '⚡ 需求+扩张+供给约束三期叠加',
    headline: 'AI基础设施从"讲故事"进入"看兑现"阶段，IREN等垂直整合玩家开始被重新定价',
    sub: 'NVIDIA-IREN 5GW合作是赛道被主流机构认可的里程碑，光子链供给瓶颈逻辑持续强化'
  },

  // 关键评分
  scores: [
    { value: 90, label: 'Capex 动能',   color: 'green' },
    { value: 42, label: '电力余量',     color: 'yellow' },
    { value: 76, label: '冷却成熟度',   color: 'cyan' },
    { value: 88, label: '规模结构化',   color: 'green' }
  ],

  // 赛道总动能 (雷达图聚合)
  totalPulse: 78,

  // 仓位配置
  allocation: [
    { tag: 'core',   label: 'Eaton / Schneider',  sub: 'Core',        pct: 40, color: '#3b82f6' },
    { tag: 'growth', label: 'Vertiv',              sub: 'Growth',      pct: 20, color: '#22c55e' },
    { tag: 'growth', label: 'IREN',                sub: 'Growth+',     pct: 15, color: '#06b6d4' },
    { tag: 'opt',    label: '光子链 AXT/SIVE/AAOI/MRVL', sub: 'Opt',  pct: 15, color: '#eab308' },
    { tag: 'cash',   label: 'Cash',                sub: '',            pct: 10, color: '#475569' }
  ],

  // 今日操作
  action: {
    moves: [
      { delta: 'Hold',  text: '整体不追高，维持主结构' },
      { delta: '+IREN', text: '可关注 NVIDIA-IREN 合作带来的重新定价窗口' },
      { delta: '观察',  text: '光子链（AXT/SIVE）波动大，适合高风险偏好或定投建仓' }
    ],
    reason: '赛道方向没有变，但市场从"讲故事"逐步进入"看利润、看兑现"。IREN等垂直整合玩家+光子链供给链是下一阶段核心胜负手。'
  },

  // 关键触发
  triggers: [
    {
      icon: '⚡',
      iconClass: 'power',
      text: 'NVIDIA-IREN 5GW战略合作落地',
      meaning: '→ AI工厂成为全球基础设施，赛道从"边缘故事"升级为"核心资产"，大厂资本背书'
    },
    {
      icon: '🔗',
      iconClass: 'supply',
      text: '光子链供给瓶颈持续被验证',
      meaning: '→ AXT InP基板垄断、 SIVE CW激光源不可替代，NVDA投资Marvell确认CPO路线图'
    },
    {
      icon: '💧',
      iconClass: 'cool',
      text: '液冷成为高密度机柜标配',
      meaning: '→ 单机柜功率提升，散热价值量增加，Vertiv等核心供应商订单持续超预期'
    },
    {
      icon: '📈',
      iconClass: 'scale',
      text: '2027年产能开始兑现',
      meaning: '→ IREN 1,210MW、AAOI 10x营收增长、SIVE $500M→$1B — 兑现期到来'
    }
  ],

  // 市场状态
  marketStatus: {
    demand:    { label: '需求', color: 'green' },
    supply:    { label: '供给', color: 'yellow' },
    power:     { label: '电力', color: 'yellow' }
  },

  // 核心判断
  verdicts: [
    '赛道升级：AI工厂从"成长故事"进入"工业兑现"阶段',
    'NVIDIA-IREN 5GW合作是大厂资本对赛道持续投入的确认信号',
    'IREN：垂直整合（电力+土地+GPU+运营），是纯电力设备商的升级版本',
    '光子链（AXT/SIVE/AAOI/MRVL）是AI算力扩张的"卖水人"，供给瓶颈逻辑不可绕过',
    '2027年是关键兑现节点：IREN 1,210MW、AAOI 10x增长、SIVE $500M营收'
  ],

  // 一句话总结
  summary: 'AI基础设施从"讲故事"进入<em>兑现验证期</em>。NVIDIA-IREN合作是赛道被主流认可的里程碑；<em>光子链供给瓶颈</em>（AXT/SIVE）是下一个被机构轮动的方向。',

  // 公司快照
  companies: [
    {
      name: 'Vertiv',
      ticker: 'VRT · NYSE',
      tag: 'growth',
      insight: '液冷龙头，订单与交付仍强，估值消化中，2027高密度机柜放量是催化剂'
    },
    {
      name: 'Eaton',
      ticker: 'ETN · NYSE',
      tag: 'core',
      insight: '电力侧最稳受益者，订单能见度高，电力设备需求向配电侧集中'
    },
    {
      name: 'Schneider',
      ticker: 'SU · EPA',
      tag: 'core',
      insight: '数据中心+电力管理双轮驱动，垂直整合能力强，长期受益AI园区扩张'
    },
    {
      name: 'IREN',
      ticker: 'IREN · ASX',
      tag: 'growth',
      insight: 'NVIDIA $3.4B合同+5GW合作+潜在$2.1B股权注入，垂直整合AI工厂，2027年1,210MW进入兑现'
    },
    {
      name: 'AXT Inc.',
      ticker: 'AXTI · NASDAQ',
      tag: 'opt',
      insight: 'InP基板全球垄断，光子链核心瓶颈，4个供给链节点垂直整合，"光子链的 Strait of Hormuz"'
    },
    {
      name: 'Sivers Semi',
      ticker: 'SIVE · NASDAQ',
      tag: 'opt',
      insight: 'CPO CW激光源唯一来源，$290M市值被严重低估，NVDA-Marvell合作验证路线图，2028目标$500M营收'
    },
    {
      name: 'Applied Optoelectronics',
      ticker: 'AAOI · NASDAQ',
      tag: 'opt',
      insight: '全链路光模块（激光→设计→组装→光收发器），10x营收 ramp 预期 H2 2027，$6.6B市值被低估'
    },
    {
      name: 'Marvell',
      ticker: 'MRVL · NASDAQ',
      tag: 'opt',
      insight: 'CPO路线图被NVDA $2B投资确认，光子AI路线核心受益，长期机构持仓首选'
    }
  ]
};

// 颜色映射
const SCORE_COLORS = { green: '#22c55e', yellow: '#eab308', cyan: '#06b6d4', blue: '#3b82f6' };
const VALUE_COLOR  = v => v >= 80 ? '#22c55e' : v >= 60 ? '#06b6d4' : v >= 40 ? '#eab308' : '#ef4444';

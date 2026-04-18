// AI Infra 雷达图 · 数据配置
// 更新此文件即可刷新所有指标，无需修改 HTML

const RADAR_DATA = {
  // 六维评分 (0-100)
  axes: {
    capex:    { value: 88, label: 'AI Capex',    sublabel: '大厂投入仍在高位' },
    power:    { value: 42, label: '⚡ 电力约束',  sublabel: '接入与排队仍偏紧' },
    cooling:  { value: 74, label: '冷却技术',    sublabel: '液冷持续渗透' },
    scale:    { value: 86, label: '集群规模',    sublabel: '高密度集群持续扩张' },
    visibility: { value: 78, label: '订单可见度', sublabel: '进入交付与兑现阶段' },
    pricing:  { value: 72, label: '定价权',      sublabel: '供给受限支撑价格' }
  },

  // 市场信号
  signal: {
    status: '🟢 主升通道未变',
    phase: '⚡ 供给约束主导',
    headline: '整体仍在主升通道，AI基础设施需求没有降温',
    sub: '短期波动更多来自供给和节奏，而不是基本面反转'
  },

  // 关键评分
  scores: [
    { value: 88, label: 'Capex 动能',   color: 'green' },
    { value: 42, label: '电力余量',     color: 'yellow' },
    { value: 74, label: '冷却成熟度',   color: 'cyan' },
    { value: 86, label: '规模结构化',   color: 'green' }
  ],

  // 赛道总动能 (雷达图聚合)
  totalPulse: 73,

  // 仓位配置
  allocation: [
    { tag: 'core',   label: 'Eaton / Schneider', sub: 'Core',   pct: 50, color: '#3b82f6' },
    { tag: 'growth', label: 'Vertiv',            sub: 'Growth', pct: 30, color: '#22c55e' },
    { tag: 'opt',    label: '液冷/细分供应链',    sub: 'Optional', pct: 10, color: '#eab308' },
    { tag: 'cash',   label: 'Cash',              sub: '',       pct: 10, color: '#475569' }
  ],

  // 今日操作
  action: {
    moves: [
      { delta: 'Hold', text: '整体不追高，维持主结构' },
      { delta: '+5%',  text: '若组合里 Core 偏低，可小幅补到 Eaton / Schneider' },
      { delta: '分批', text: 'Vertiv 仅在 10–15% 回调时考虑加仓' }
    ],
    reason: '赛道方向没有变，但市场从“讲故事”逐步进入“看利润、看兑现”。高估值标的弹性更大，也更容易波动。'
  },

  // 关键触发
  triggers: [
    {
      icon: '⚡',
      iconClass: 'power',
      text: '电力接入瓶颈持续强化',
      meaning: '→ 项目不是不建，而是“排队建”，订单向电力设备商集中'
    },
    {
      icon: '🧠',
      iconClass: 'cool',
      text: 'AI capex 继续向高密度倾斜',
      meaning: '→ 单个数据中心价值量提升，利好液冷、电源和配电系统'
    },
    {
      icon: '📈',
      iconClass: 'scale',
      text: '市场更关注交付与兑现能力',
      meaning: '→ 从“讲故事”进入“看利润”，高估值公司波动加大'
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
    '赛道仍在正轨，当前主线没有被破坏',
    'AI Capex 维持高位，需求端没有明显降温',
    '电力与接入周期仍是核心瓶颈，决定项目节奏',
    '液冷渗透继续提升，高密度机柜成为新常态',
    '短期更适合“稳中偏进”，而不是追高猛冲'
  ],

  // 一句话总结
  summary: 'AI基础设施进入了<em>供给约束主导</em>阶段，增长还在，但现在更考验<em>电力接入、散热能力和兑现能力</em>。',

  // 公司快照
  companies: [
    {
      name: 'Vertiv',
      ticker: 'VRT · NYSE',
      tag: 'growth',
      insight: '订单与交付仍强，但市场开始关注估值消化'
    },
    {
      name: 'Eaton',
      ticker: 'ETN · NYSE',
      tag: 'core',
      insight: '电力侧最稳的受益者之一，订单能见度高'
    },
    {
      name: 'Schneider',
      ticker: 'SU · EPA',
      tag: 'core',
      insight: '数据中心+电力管理双轮驱动，增长质量稳定'
    }
  ]
};

// 颜色映射
const SCORE_COLORS = { green: '#22c55e', yellow: '#eab308', cyan: '#06b6d4', blue: '#3b82f6' };
const VALUE_COLOR  = v => v >= 80 ? '#22c55e' : v >= 60 ? '#06b6d4' : v >= 40 ? '#eab308' : '#ef4444';

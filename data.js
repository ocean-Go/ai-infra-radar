// AI Infra 雷达图 · 数据配置
// 更新此文件即可刷新所有指标，无需修改 HTML

const RADAR_DATA = {
  // 六维评分 (0-100)
  axes: {
    capex:    { value: 90, label: 'AI Capex',    sublabel: '大厂投入仍在上修' },
    power:    { value: 45, label: '⚡ 电力约束',  sublabel: '排队周期拉长' },
    cooling:  { value: 70, label: '冷却技术',    sublabel: '液冷从试点走向标配' },
    scale:    { value: 85, label: '集群规模',    sublabel: 'GW级超大规模持续落地' },
    visibility: { value: 80, label: '订单可见度', sublabel: '交付驱动，兑现期' },
    pricing:  { value: 75, label: '定价权',      sublabel: '供给偏紧，价格更稳' }
  },

  // 市场信号
  signal: {
    status: '🟢 需求稳 · 供给偏紧',
    phase: '⚡ 硬约束阶段',
    headline: '赛道在正轨，进入"供给决定节奏"阶段',
    sub: '需求稳 · 供给偏紧 · 不是降温，是被电力卡住'
  },

  // 关键评分
  scores: [
    { value: 90, label: 'Capex 动能',   color: 'green' },
    { value: 45, label: '电力余量',     color: 'yellow' },
    { value: 70, label: '冷却成熟度',   color: 'cyan' },
    { value: 85, label: '规模结构化',   color: 'green' }
  ],

  // 赛道总动能 (雷达图聚合)
  totalPulse: 74,

  // 仓位配置
  allocation: [
    { tag: 'core',   label: 'Eaton / Schneider', sub: 'Core',  pct: 55, color: '#3b82f6' },
    { tag: 'growth', label: 'Vertiv',             sub: 'Growth', pct: 25, color: '#22c55e' },
    { tag: 'opt',    label: '卫星仓位',           sub: 'Optional', pct: 10, color: '#eab308' },
    { tag: 'cash',   label: 'Cash',               sub: '',       pct: 10, color: '#475569' }
  ],

  // 今日操作
  action: {
    moves: [
      { delta: '-5%', text: 'Vertiv (Growth → Core 切换)' },
      { delta: '+5%', text: 'Eaton / Schneider (Core 稳健增配)' }
    ],
    reason: '短期进入"交付与兑现阶段"，稳健资产更占优。不是跌出来的机会，是"资金在成长和稳健之间切换"。'
  },

  // 关键触发
  triggers: [
    {
      icon: '⚡',
      iconClass: 'power',
      text: '电力与关键设备交付周期继续拉长',
      meaning: '→ 收入确认延后，但价格与利润更稳'
    },
    {
      icon: '💧',
      iconClass: 'cool',
      text: '液冷订单占比提升',
      meaning: '→ 从边缘走向主流，技术门槛提高，龙头优势扩大'
    },
    {
      icon: '🌐',
      iconClass: 'scale',
      text: 'GW级超大规模AI数据中心持续规划',
      meaning: '→ 需求从"周期性"变为"结构性长期"'
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
    '需求端：AI Capex 大厂投入稳定，节奏未变',
    '供给端：电力是硬约束，设备交付决定节奏',
    '技术端：液冷从试点走向标配，门槛提高',
    '资金端：结构切换中，稳健资产短期更优',
    '窗口判断：无明显"抄底"机会，属战略切换'
  ],

  // 一句话总结
  summary: 'AI基建还在加速，但现在拼的不是<em>需求</em>，而是<em>谁先把电接上、把热散掉</em>。',

  // 公司快照
  companies: [
    {
      name: 'Vertiv',
      ticker: 'VRT · NYSE',
      tag: 'growth',
      insight: '液冷+高密度方案 · 订单弹性最大'
    },
    {
      name: 'Eaton',
      ticker: 'ETN · NYSE',
      tag: 'core',
      insight: '电力设备供不应求 · 业绩稳定释放'
    },
    {
      name: 'Schneider',
      ticker: 'SU · EPA',
      tag: 'core',
      insight: '系统集成强 · 大型项目优势明显'
    }
  ]
};

// 颜色映射
const SCORE_COLORS = { green: '#22c55e', yellow: '#eab308', cyan: '#06b6d4', blue: '#3b82f6' };
const VALUE_COLOR  = v => v >= 80 ? '#22c55e' : v >= 60 ? '#06b6d4' : v >= 40 ? '#eab308' : '#ef4444';

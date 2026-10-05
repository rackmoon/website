import type { Copy } from './en';

const zh: Copy = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  nav: ['产品', '更新日志', '关于'],
  otherLang: 'EN',
  theme: '切换深色和浅色主题',
  contact: '联系我们',
  explore: '了解产品',
  meta: {
    home: {
      title: 'RackMoon · 为主机商和云服务商打造的经营软件',
      description:
        '财务系统、KVM 和 Hyper-V 虚拟化、物理机、Docker 容器分发、游戏服务器和监控，全部部署在你自己的服务器上。',
    },
    products: {
      title: '产品 · RackMoon',
      description:
        '七款自托管产品：财务系统、KVM 管理器、Hyper-V 管理器、Docker 容器分发、游戏服务器、DCIM 机房管理和监控系统。',
    },
    changelog: {
      title: '更新日志 · RackMoon',
      description: '所有 RackMoon 产品的版本说明，最新的在最前面。',
    },
    about: {
      title: '关于 · RackMoon',
      description: 'RackMoon 为主机商和云服务商打造自托管软件。联系我们：hello@rackmoon.com。',
    },
    notFound: {
      title: '页面不存在 · RackMoon',
      description: '你要找的页面不存在。',
    },
  },
  footer: {
    desc: 'RackMoon 为主机商和云服务商打造经营软件：财务系统、KVM 和 Hyper-V 虚拟化、物理机、Docker 容器分发、游戏服务器和监控，全部部署在你自己的服务器上。',
    cols: [
      {
        h: '产品',
        items: [
          '财务系统',
          'KVM 管理器',
          'Hyper-V 管理器',
          'Docker 容器分发',
          '游戏服务器',
          'DCIM 机房管理',
          '监控系统',
        ],
      },
      {
        h: '公司',
        items: ['关于', '联系我们', '更新日志'],
      },
      {
        h: '资源',
        items: ['品牌素材', 'GitHub'],
      },
    ],
    copy: '© 2026 RackMoon · 保留所有权利',
    rss: 'RSS',
    lang: 'English',
  },
  home: {
    pill: '为主机商和云服务商而做',
    h1: ['计费、开通、客服，', '托管业务一套管好。'],
    h1Hi: 1,
    lead: 'RackMoon 是给主机商和云服务商用的经营系统：七种计费方式、插件化开通、商家之间的货源网络，还有能安全执行操作的 AI 智能体，全部部署在你自己的服务器上。',
    note: ['自托管', '服务器和数据都在你手里'],
    console: {
      crumb: '订单',
      search: '搜索订单和客户',
      tag: '界面示意',
      side: ['概览', '订单', '服务', '账单', '客户', '工单', '货源', '智能体', '设置'],
      today: '今天',
      todaySub: '5 个订单 · 1 个待批准',
      filters: ['全部', '待处理', '开通中'],
      new: '新建订单',
      head: ['订单', '客户', '产品', '计费', '状态'],
      rows: [
        {
          id: '#10482',
          customer: 'nova.host',
          product: 'VPS · 2 核 / 4 GB',
          billing: '包月',
          state: 'ok',
          status: '已开通',
        },
        {
          id: '#10481',
          customer: 'orbit-labs',
          product: 'GPU 节点 · 1 × 80 GB',
          billing: '按秒',
          state: 'ok',
          status: '运行中',
        },
        {
          id: '#10480',
          customer: 'pixel-games',
          product: '游戏服 · 16 人位',
          billing: '按小时',
          state: 'warn',
          status: '已降速 · 余额不足',
        },
        {
          id: '#10479',
          customer: 'lunar.io',
          product: 'example.com',
          billing: '包年',
          state: 'ok',
          status: '已注册',
        },
        {
          id: '#10478',
          customer: 'rack-42',
          product: 'VPS · 上游货源',
          billing: '包月',
          state: 'ok',
          status: '已开通',
        },
      ],
      panelTitle: '智能体请求',
      agentKicker: '客服智能体 · 等待批准',
      agent: '为 nova.host 重启实例 vps-4821',
      approve: '批准',
      decline: '拒绝',
      agentNote: '已记录 · 批准前只读',
      log: [
        {
          k: '只读',
          v: '查询了账单 #8812',
        },
        {
          k: '客户已确认',
          v: '为 lunar.io 重置密码',
        },
      ],
    },
    shotCap: '界面示意：后台还在设计中，正式版本可能会调整。',
    facts: [
      {
        value: '7',
        label: '种计费方式',
      },
      {
        value: '1',
        label: '套开通接口接入所有面板',
      },
      {
        value: '0',
        label: 'RackMoon 经手的客户资金',
      },
      {
        value: '全部',
        label: 'AI 操作留痕',
      },
    ],
    rack: {
      k: '产品',
      h: '你托管的，都能卖',
      p: '所有产品共用一套计费引擎。新增一种产品，只要接上它的开通插件，不用改计费代码。',
      link: '查看全部产品类型',
      units: [
        {
          name: 'VPS',
          tags: ['包月', '按小时'],
        },
        {
          name: '独立服务器',
          tags: ['包月', '95 计费'],
        },
        {
          name: 'GPU',
          tags: ['按秒', '按 token'],
        },
        {
          name: '容器',
          tags: ['按用量'],
        },
        {
          name: '游戏服',
          tags: ['按小时', '按秒'],
        },
        {
          name: '域名',
          tags: ['包年'],
        },
        {
          name: '虚拟主机',
          tags: ['包月', '包年'],
        },
      ],
    },
    billing: {
      k: '计费引擎',
      h: '一套引擎，七种计费方式',
      p: '每个产品选一种，也可以组合使用。预付余额不够时，服务先降速，不会欠费。',
      chart: '24 小时内的扣费',
      of: '/',
      models: [
        {
          label: '包月',
          title: '按月续费',
          desc: '每个周期一张账单，每月同一天出账。续费从保存的支付方式或余额里扣。',
          unit: '每个周期一张账单',
          bars: [100, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        {
          label: '按小时',
          title: '余额按小时扣费',
          desc: '每小时从客户余额里扣一次。余额快用完时先降速，不会欠费。',
          unit: '每小时扣一次',
          bars: [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 18, 18, 18, 18, 18, 18, 18],
        },
        {
          label: '按用量',
          title: '动态用量',
          desc: '按服务实际用掉的 CPU 时长、流量或存储计费，边用边计。',
          unit: '按实际用量',
          bars: [20, 35, 50, 30, 60, 82, 45, 30, 25, 40, 70, 92, 65, 40, 35, 55, 76, 60, 45, 30, 20, 35, 50, 40],
        },
        {
          label: '按秒',
          title: '按秒计费',
          desc: 'GPU 服务器和按需游戏服按秒计时，客户只为实际运行的时间付钱。',
          unit: '精确到秒',
          bars: [10, 60, 15, 80, 20, 5, 70, 30, 90, 10, 40, 85, 15, 60, 25, 95, 30, 10, 75, 20, 55, 15, 65, 35],
        },
        {
          label: '按 token',
          title: '按 token 计费',
          desc: '推理 API 的每次请求，按处理的 token 数计费。',
          unit: '按 token 数',
          bars: [5, 5, 70, 90, 40, 5, 5, 5, 60, 100, 30, 5, 5, 80, 50, 5, 5, 5, 95, 45, 5, 5, 65, 20],
        },
        {
          label: '按流量 / 95',
          title: '按流量或 95 计费',
          desc: '带宽按总流量计费，或按当月用量的 95 百分位计费。',
          unit: '95 百分位线',
          bars: [30, 45, 40, 60, 55, 70, 65, 80, 75, 60, 50, 85, 90, 70, 60, 65, 55, 98, 60, 50, 45, 40, 35, 30],
        },
        {
          label: '包年和一次性',
          title: '包年和一次性',
          desc: '域名每年续费一次；安装费和授权费只收一次。',
          unit: '只收一次',
          bars: [100, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 64, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
      ],
    },
    modules: {
      k: '平台',
      h: '账单之外，该有的都有',
      p: '计费是核心，围绕它的是主机生意每天都要用到的那些部分。',
      prov: {
        title: '插件化开通',
        p: '所有面板都通过同一套开通接口接入，新增产品类型不用改计费代码。',
        items: ['VPS 面板', '游戏面板', 'GPU 市场', '域名注册商'],
        planned: '规划中',
      },
      supply: {
        title: '上下游货源',
        p: '直接转售其他主机商的产品，自动开通。钱在商家之间直接结算，RackMoon 不经手。',
        nodes: ['上游商家', '你', '客户'],
        note: '资金直达，不经过 RackMoon',
      },
      agents: {
        title: '安全的 AI 智能体',
        p: '先上线客服智能体，之后是增长、运维和风控。每个操作要么只读，要么经客户确认或你批准，全部留痕。',
        levels: [
          {
            k: '只读',
            d: '查询一张账单',
          },
          {
            k: '客户确认',
            d: '重置登录密码',
          },
          {
            k: '你来批准',
            d: '重启实例 vps-4821',
          },
        ],
      },
      client: {
        title: '客户信得过的客户中心',
        p: '中英双语客户中心，全球收款，自带优惠券和推广返利。',
        pays: ['Stripe', 'PayPal', 'USDT', '支付宝', '微信支付'],
        langs: '中文 · EN',
      },
      migrate: {
        title: '数据迁移',
        p: '把客户、产品和账单，从你现在用的系统迁过来。',
        items: ['客户', '产品', '账单'],
      },
    },
    auto: {
      k: '自动化',
      h: '从下单到续费，全程自动',
      p: '订单进来以后，扣费、开通、续费都按你定的规则自动完成，你只需要处理例外。',
      log: '事件日志 · vps-4821',
      events: [
        {
          time: '00:00:00',
          name: 'order.created',
          desc: '订单创建 · VPS 2 核 / 4 GB · 包月',
          state: 'ok',
        },
        {
          time: '00:00:01',
          name: 'invoice.paid',
          desc: '已付款 · Stripe',
          state: 'ok',
        },
        {
          time: '00:00:38',
          name: 'service.provisioned',
          desc: '已开通 · vps-4821 · 你的 VPS 面板',
          state: 'ok',
        },
        {
          time: '30 天后',
          name: 'service.renewed',
          desc: '已续费 · 从余额扣款',
          state: 'ok',
        },
        {
          time: '41 天后',
          name: 'balance.low',
          desc: '余额不足 · 先降速，充值后恢复',
          state: 'warn',
        },
      ],
    },
    deploy: {
      k: '部署与信任',
      h: '机柜是你的，数据和钱也是',
      p: 'RackMoon 是装在你自己服务器上的软件，不会站在你和客户的钱中间。',
      lanes: [
        {
          name: '服务',
          nodes: ['客户', '下单', '你的服务器 · RackMoon', '开通', '面板'],
        },
        {
          name: '资金',
          nodes: ['客户', '付款', '支付渠道', '直接结算', '你'],
        },
      ],
      note: '资金这条线上，没有 RackMoon。',
      trust: [
        {
          title: '自托管',
          text: '装在你自有或租用的服务器上。',
        },
        {
          title: '数据在你手里',
          text: '客户、账单和日志都在你自己的数据库里。',
        },
        {
          title: '不经手资金',
          text: '客户的钱直接付给你。',
        },
        {
          title: '持牌支付渠道',
          text: '支付宝和微信支付走持牌机构。',
        },
        {
          title: '操作全部留痕',
          text: 'AI 的每一步都分只读、确认、批准三级，并且有记录。',
        },
      ],
    },
    final: {
      h: '从一个机柜出发，奔向月亮。',
      p: '看看 RackMoon 能为你的主机生意做什么。',
    },
  },
  products: {
    pill: '七款产品，一个家族',
    h1: ['从计费到虚拟化，', '一套产品全部配齐。'],
    h1Hi: 1,
    lead: '财务系统、KVM 和 Hyper-V 虚拟化、物理机、Docker 容器、游戏服务器和监控。每款产品都部署在你自己的服务器上，可以单独使用，也能组合在一起。',
    note: ['自托管', '单独用或者全家桶'],
    core: '核心',
    learn: '了解更多',
    grid: {
      k: '全部产品',
      h: '按需选一款，或者全都用上。',
      p: '先用你现在最需要的那一款，业务长大了再加其他的。它们本来就是为互相配合而设计的。',
    },
    items: [
      {
        key: 'billing',
        name: '财务系统',
        desc: '主机业务的经营系统：订单、账单、客户、工单和 AI 智能体。',
        chips: ['七种计费方式', '货源网络', 'AI 智能体'],
        detail: {
          h: '整个产品家族的中枢。',
          p: '用七种计费方式卖任何产品，自动开通，日常工单交给 AI 智能体处理，关键操作由你批准。',
          items: [
            '订单、账单、退款和余额',
            '带支付和工单的客户中心',
            '商家之间互相分销的货源网络',
            '先问你再动手的 AI 智能体',
          ],
        },
      },
      {
        key: 'kvm',
        name: 'KVM 管理器',
        desc: '在你的节点上运行 KVM 虚拟机，直接当云服务器卖。',
        chips: ['系统模板', '快照', 'IP 池'],
        detail: {
          h: '用自己的硬件卖云服务器。',
          p: '添加节点、配好 IP 池和系统模板，之后创建、升降配和暂停虚拟机都由财务系统自动完成。',
          items: ['节点和集群总览', '系统模板和自定义 ISO', '快照和备份', 'VNC 控制台和流量统计'],
        },
      },
      {
        key: 'hyperv',
        name: 'Hyper-V 管理器',
        desc: '管理 Hyper-V 宿主机，交付开好远程桌面的 Windows 服务器。',
        chips: ['Windows 模板', '检查点', '远程桌面'],
        detail: {
          h: 'Windows 服务器，开箱即卖。',
          p: '在一个地方管理所有 Hyper-V 宿主机，客户付款后马上就能登录自己的 Windows 服务器。',
          items: [
            'Windows 和 Linux 模板',
            '每次变更前自动建检查点',
            '交付时自动发送远程桌面信息',
            '网络、IP 和流量限制',
          ],
        },
      },
      {
        key: 'containers',
        name: 'Docker 容器分发',
        desc: '把 Docker 镜像做成商品，几秒内部署到你的节点上。',
        chips: ['镜像市场', '端口映射', '资源限制'],
        detail: {
          h: '把 Docker 镜像当商品卖。',
          p: '挑选上架的镜像、设好资源限制，订单一付款就把容器部署到合适的节点上。',
          items: ['精选镜像市场', 'CPU、内存和磁盘限制', '端口映射和域名绑定', '日志和网页终端'],
        },
      },
      {
        key: 'games',
        name: '游戏服务器',
        desc: '用模板一键开服，控制台、文件、备份和计划任务都有。',
        chips: ['游戏模板', '网页控制台', '计划任务'],
        detail: {
          h: '付完款，服务器就开好了。',
          p: '选好游戏模板和人数，服务器自己就会启动。玩家有控制台、文件管理和备份可用。',
          items: ['热门游戏开服模板', '网页控制台和文件管理', '定时重启和自动备份', '按人数、内存或时长计费'],
        },
      },
      {
        key: 'dcim',
        name: 'DCIM 机房管理',
        desc: '出租物理机和机柜托管，电源、装系统、交换机端口和 IP 全部自动化。',
        chips: ['IPMI 电源', 'PXE 装机', '交换机端口'],
        detail: {
          h: '自己的硬件，按台卖出去。',
          p: '记下每台服务器、每个机柜和每个 IP。订单付款后，财务系统自动分配空闲机器、装好系统、打开交换机端口。',
          items: [
            '服务器、机柜和电力库存',
            'IPMI 电源和远程控制台',
            'PXE 装系统和救援模式',
            '交换机端口、带宽和 95 计费',
          ],
        },
      },
      {
        key: 'monitor',
        name: '监控系统',
        desc: '盯住节点、服务和流量，在客户发现之前通知到对的人。',
        chips: ['可用性检测', '性能指标', '告警通知'],
        detail: {
          h: '比客户先发现问题。',
          p: '跟踪每个节点和服务，留意流量变化，把告警发给对的人，或者直接转成工单。',
          items: [
            'CPU、内存、磁盘和流量指标',
            'HTTP、TCP 和 Ping 检测',
            '邮件、Webhook 和聊天工具告警',
            '告警自动在财务系统里开工单',
          ],
        },
      },
    ],
    mock: {
      billing: {
        title: '账单',
        tabs: ['全部', '未支付', '已逾期'],
        new: '新建账单',
        sum: [
          {
            k: '本月开票',
            v: '¥348,920',
          },
          {
            k: '账单数',
            v: '1,204',
          },
          {
            k: '按时支付',
            v: '98.6%',
          },
        ],
        rows: [
          {
            id: 'INV-2081',
            customer: 'nova.host',
            item: 'VPS · 2 核 / 4 GB',
            amount: '¥128.00',
            state: 'ok',
            status: '已支付',
          },
          {
            id: 'INV-2080',
            customer: 'orbit-labs',
            item: 'GPU 节点 · 按秒',
            amount: '¥2,960.50',
            state: 'ok',
            status: '已支付',
          },
          {
            id: 'INV-2079',
            customer: 'pixel-games',
            item: '游戏服 · 32 人位',
            amount: '¥168.00',
            state: 'warn',
            status: '3 天后到期',
          },
          {
            id: 'INV-2078',
            customer: 'lunar.io',
            item: 'example.com · 1 年',
            amount: '¥79.00',
            state: 'ok',
            status: '已支付',
          },
        ],
      },
      kvm: {
        title: '节点',
        sub: '3 个节点 · 96 台虚拟机',
        add: '添加节点',
        cpu: 'CPU',
        ram: '内存',
        nodes: [
          {
            name: 'node-01',
            cores: '64 核',
            cpu: 62,
            ram: 71,
            vms: '38 台',
            hot: false,
          },
          {
            name: 'node-02',
            cores: '64 核',
            cpu: 45,
            ram: 58,
            vms: '31 台',
            hot: false,
          },
          {
            name: 'node-03',
            cores: '48 核',
            cpu: 88,
            ram: 76,
            vms: '27 台',
            hot: true,
          },
        ],
        rows: [
          {
            id: 'vm-4821',
            spec: '2 核 · 4 GB',
            ip: '203.0.113.8',
            node: 'node-01',
            state: 'ok',
            status: '运行中',
          },
          {
            id: 'vm-4822',
            spec: '4 核 · 8 GB',
            ip: '203.0.113.9',
            node: 'node-02',
            state: 'ok',
            status: '运行中',
          },
          {
            id: 'vm-4823',
            spec: '8 核 · 16 GB',
            ip: '203.0.113.12',
            node: 'node-03',
            state: 'warn',
            status: '迁移中',
          },
          {
            id: 'vm-4824',
            spec: '1 核 · 1 GB',
            ip: '203.0.113.15',
            node: 'node-01',
            state: 'off',
            status: '已关机',
          },
        ],
      },
      hyperv: {
        title: 'win-srv-2207',
        state: '运行中',
        host: 'hv-host-02',
        os: 'Windows Server 2022 Datacenter',
        osSub: '9 月 28 日交付 · 远程桌面信息已发送',
        specs: [
          {
            k: 'vCPU',
            v: '4',
          },
          {
            k: '内存',
            v: '8 GB',
          },
          {
            k: '磁盘',
            v: '120 GB',
          },
          {
            k: 'IPv4',
            v: '198.51.100.24',
          },
        ],
        checkpointsTitle: '检查点',
        checkpoints: [
          {
            name: '更新前',
            when: '2 小时前',
          },
          {
            name: '每周',
            when: '周日 03:00',
          },
          {
            name: '交付时',
            when: '9 月 28 日',
          },
        ],
        actions: ['远程桌面', '建检查点', '重启'],
      },
      containers: {
        title: '镜像市场',
        sub: '24 个镜像',
        images: [
          {
            name: 'nginx',
            tag: '1.27',
          },
          {
            name: 'mysql',
            tag: '8.4',
          },
          {
            name: 'redis',
            tag: '7.4',
          },
          {
            name: 'postgres',
            tag: '17',
          },
          {
            name: 'node',
            tag: '22',
          },
          {
            name: 'wordpress',
            tag: '6.6',
          },
        ],
        pick: 5,
        deployTitle: '部署',
        fields: [
          {
            k: '镜像',
            v: 'wordpress:6.6',
          },
          {
            k: '节点',
            v: 'node-hk-02',
          },
          {
            k: '限制',
            v: '1 核 · 1 GB · 10 GB',
          },
          {
            k: '端口',
            v: '80 → 30080',
          },
        ],
        go: '部署',
        done: '6 秒后已在 node-hk-02 上运行',
      },
      games: {
        title: 'survival-01',
        state: '在线',
        sub: '生存模板 · 8 GB',
        stats: [
          {
            k: '玩家',
            v: '18 / 32',
            pct: 56,
          },
          {
            k: 'CPU',
            v: '38%',
            pct: 38,
          },
          {
            k: '内存',
            v: '5.2 / 8 GB',
            pct: 65,
          },
        ],
        log: [
          {
            time: '12:04:11',
            text: '服务器已在 27015 端口启动',
          },
          {
            time: '12:05:42',
            text: 'player_42 加入了游戏',
          },
          {
            time: '12:30:00',
            text: '定时备份完成 · 1.2 GB',
          },
          {
            time: '12:31:15',
            text: 'player_07 离开了游戏',
          },
        ],
        prompt: 'say 凌晨 4 点重启更新',
        actions: ['重启', '停止', '立即备份'],
      },
      dcim: {
        title: '机柜 R12',
        sub: '42U · 18 台服务器',
        add: '添加服务器',
        feeds: [
          {
            k: 'A 路电力',
            v: '3.1 kW',
            pct: 62,
          },
          {
            k: 'B 路电力',
            v: '2.9 kW',
            pct: 58,
          },
          {
            k: '上联 95 值',
            v: '6.8 Gbps',
            pct: 34,
          },
        ],
        rows: [
          {
            id: 'R12-U07',
            model: 'Dell R640 · 128 GB',
            port: '10 Gbps',
            power: true,
            state: 'ok',
            status: '已交付',
          },
          {
            id: 'R12-U09',
            model: '2 × E5-2680 · 64 GB',
            port: '1 Gbps',
            power: false,
            state: 'off',
            status: '空闲',
          },
          {
            id: 'R12-U11',
            model: 'EPYC 7543P · 256 GB',
            port: '10 Gbps',
            power: true,
            state: 'warn',
            status: '装系统中',
          },
          {
            id: 'R12-U14',
            model: 'Dell R740 · 192 GB',
            port: '1 Gbps',
            power: true,
            state: 'ok',
            status: '已交付',
          },
        ],
      },
      monitor: {
        title: '总览',
        sub: '最近 30 天',
        up: '可用率 99.98%',
        chart: '延迟',
        unit: '毫秒',
        alerts: [
          {
            time: '12:41',
            target: 'node-03',
            text: 'CPU 连续 5 分钟高于 90%',
            result: '已开工单 #3302',
            state: 'warn',
          },
          {
            time: '09:12',
            target: 'api.nova.host',
            text: 'HTTP 502 持续 2 分钟',
            result: '已通知值班 · 已恢复',
            state: 'ok',
          },
        ],
      },
    },
  },
  changelog: {
    k: '更新日志',
    h1: ['RackMoon', '最近更新了什么。'],
    h1Hi: 1,
    lead: '所有 RackMoon 产品的版本说明，最新的在最前面。',
    rss: 'RSS 订阅',
    all: '全部产品',
    sample: '示例内容',
    types: {
      new: '新增',
      imp: '改进',
      fix: '修复',
    },
    older: '更早的版本',
    sub: {
      h: '新版本，一个都不错过。',
      p: '用 RSS 订阅更新日志，或者让我们在新版本发布时给你发邮件。',
      email: '邮件订阅',
    },
  },
  about: {
    pill: '关于 RackMoon',
    h1: ['给托管服务商，', '做趁手的软件。'],
    h1Hi: 1,
    lead: 'RackMoon 为主机商和云服务商打造自托管软件：财务、虚拟化、物理机、容器、游戏服务器和监控。我们相信，服务器、数据和客户关系，都应该握在服务商自己手里。',
    values: {
      k: '我们的坚持',
      h: '这三件事，我们不会让步。',
      items: [
        {
          title: '服务器和数据都是你的',
          text: '所有东西都跑在你掌控的基础设施上。我们看不到你的客户，也不经手他们的钱。',
        },
        {
          title: '有风险的操作，要人点头',
          text: '日常工作自动完成；可能影响客户的操作，必须等你团队里的人批准。',
        },
        {
          title: '产品之间天然配合',
          text: '用一款或者七款都行。它们说同一种语言，需要时直接接在一起。',
        },
      ],
    },
    name: {
      k: '名字的由来',
      h: '从一个机柜出发，奔向月亮。',
      p: '每个主机生意都是从小做起的：一个机柜、几台服务器、第一批客户。RackMoon 这个名字，说的就是从那里出发、想走多远就走多远的路。我们的 logo 用一个个小方块拼出月亮，就像主机生意是一台服务器一台服务器搭起来的。',
      phases: ['一个机柜', '第一批客户', '更多节点', '新的产品', '月亮'],
    },
    contact: {
      k: '联系我们',
      h: '有问题，直接找人聊。',
      p: '关于产品或者合作，写信给我们，会有人亲自回复。',
      mailK: '销售和一般问题',
      mailCta: '发送邮件',
      cards: [
        {
          title: '品牌素材',
          text: 'logo、颜色，以及介绍 RackMoon 时的使用规范。',
          cta: '下载素材包',
        },
        {
          title: '更新日志',
          text: '按产品查看我们发布了什么。',
          cta: '查看更新日志',
        },
      ],
    },
  },
  notFound: {
    k: '404',
    h: '这个页面飘出了轨道。',
    p: '你要找的页面不存在，或者已经搬走了。',
    home: '回到首页',
  },
};

export default zh;

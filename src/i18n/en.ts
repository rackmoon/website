/** English copy for every page. The Chinese file mirrors this shape. */
const en = {
  lang: 'en',
  htmlLang: 'en',
  nav: ['Products', 'Pricing', 'Changelog', 'About'],
  otherLang: '中文',
  theme: 'Switch between dark and light',
  contact: 'Contact us',
  explore: 'Explore products',
  pricing: 'See pricing',
  meta: {
    home: {
      title: 'RackMoon · Software for hosting and cloud providers',
      description:
        'Billing, KVM and Hyper-V virtualization, Docker containers, game servers and monitoring for hosting and cloud providers. Self-hosted on your own servers.',
    },
    products: {
      title: 'Products · RackMoon',
      description:
        'Six self-hosted products for hosting businesses: Billing, KVM Manager, Hyper-V Manager, Containers, Game Servers and Monitoring.',
    },
    pricing: {
      title: 'Pricing · RackMoon',
      description:
        'Every RackMoon product is a self-hosted license on its own. Prices will be announced before launch.',
    },
    changelog: {
      title: 'Changelog · RackMoon',
      description: 'Release notes for every RackMoon product, newest first.',
    },
    about: {
      title: 'About · RackMoon',
      description:
        'RackMoon makes self-hosted software for hosting and cloud providers. Write to us at hello@rackmoon.com.',
    },
    notFound: {
      title: 'Page not found · RackMoon',
      description: 'The page you are looking for does not exist.',
    },
  },
  footer: {
    desc: 'RackMoon builds software for hosting and cloud providers: billing, KVM and Hyper-V virtualization, Docker containers, game servers and monitoring, all running on your own servers.',
    cols: [
      {
        h: 'Products',
        items: ['Billing', 'KVM Manager', 'Hyper-V Manager', 'Containers', 'Game Servers', 'Monitoring'],
      },
      {
        h: 'Company',
        items: ['About', 'Contact us', 'Changelog'],
      },
      {
        h: 'Resources',
        items: ['Pricing', 'Brand assets', 'GitHub'],
      },
    ],
    copy: '© 2026 RackMoon · All rights reserved',
    rss: 'RSS',
    lang: '中文',
  },
  home: {
    pill: 'Built for hosting and cloud providers',
    h1: ['Bill, provision', 'and support', 'everything you host.'],
    h1Hi: 2,
    lead: 'RackMoon is the business system for hosting and cloud providers. Seven ways to charge, pluggable provisioning, a supply network between providers and AI agents that act safely, all on your own servers.',
    note: ['Self-hosted license', 'Your servers, your data'],
    console: {
      crumb: 'Orders',
      search: 'Search orders and customers',
      tag: 'Product preview',
      side: ['Overview', 'Orders', 'Services', 'Invoices', 'Clients', 'Tickets', 'Supply', 'Agents', 'Settings'],
      today: 'Today',
      todaySub: '5 orders · 1 needs approval',
      filters: ['All', 'Needs action', 'Provisioning'],
      new: 'New order',
      head: ['Order', 'Customer', 'Product', 'Billing', 'Status'],
      rows: [
        {
          id: '#10482',
          customer: 'nova.host',
          product: 'VPS · 2 vCPU / 4 GB',
          billing: 'Monthly',
          state: 'ok',
          status: 'Provisioned',
        },
        {
          id: '#10481',
          customer: 'orbit-labs',
          product: 'GPU node · 1 × 80 GB',
          billing: 'Per second',
          state: 'ok',
          status: 'Running',
        },
        {
          id: '#10480',
          customer: 'pixel-games',
          product: 'Game server · 16 slots',
          billing: 'Hourly',
          state: 'warn',
          status: 'Slowed · low balance',
        },
        {
          id: '#10479',
          customer: 'lunar.io',
          product: 'example.com',
          billing: 'Yearly',
          state: 'ok',
          status: 'Registered',
        },
        {
          id: '#10478',
          customer: 'rack-42',
          product: 'VPS · from a supplier',
          billing: 'Monthly',
          state: 'ok',
          status: 'Provisioned',
        },
      ],
      panelTitle: 'Agent requests',
      agentKicker: 'Support agent · needs approval',
      agent: 'Restart vps-4821 for nova.host',
      approve: 'Approve',
      decline: 'Decline',
      agentNote: 'Logged · read-only until approved',
      log: [
        {
          k: 'Read-only',
          v: 'Looked up invoice #8812',
        },
        {
          k: 'Customer confirmed',
          v: 'Password reset for lunar.io',
        },
      ],
    },
    shotCap: 'Product preview. The admin console is still in design and may change.',
    facts: [
      {
        value: '7',
        label: 'ways to charge',
      },
      {
        value: '1',
        label: 'provider contract for every panel',
      },
      {
        value: '0',
        label: 'customer funds held by RackMoon',
      },
      {
        value: 'All',
        label: 'AI actions logged',
      },
    ],
    rack: {
      k: 'Products',
      h: 'Sell anything you host',
      p: 'Every product type runs on the same billing engine. Adding a new one means plugging in its provider, not rewriting billing.',
      link: 'See every product type',
      units: [
        {
          name: 'VPS',
          tags: ['Monthly', 'Hourly'],
        },
        {
          name: 'Dedicated servers',
          tags: ['Monthly', '95th percentile'],
        },
        {
          name: 'GPU',
          tags: ['Per second', 'Per token'],
        },
        {
          name: 'Containers',
          tags: ['Usage'],
        },
        {
          name: 'Game servers',
          tags: ['Hourly', 'Per second'],
        },
        {
          name: 'Domains',
          tags: ['Yearly'],
        },
        {
          name: 'Web hosting',
          tags: ['Monthly', 'Yearly'],
        },
      ],
    },
    billing: {
      k: 'Billing engine',
      h: 'One engine, seven ways to charge',
      p: 'Pick a model for each product, or mix them. When a prepaid balance runs low, services slow down instead of running up debt.',
      chart: 'Charges over 24 hours',
      of: 'of',
      models: [
        {
          label: 'Monthly',
          title: 'Monthly and recurring',
          desc: 'One invoice per cycle, on the same day each month. Renewals collect from the saved payment method or the balance.',
          unit: '1 invoice per cycle',
          bars: [100, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        {
          label: 'Hourly',
          title: 'Hourly, from a prepaid balance',
          desc: "Each hour is deducted from the customer's balance. When it runs low, the service slows down instead of running up debt.",
          unit: 'Charged every hour',
          bars: [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 18, 18, 18, 18, 18, 18, 18],
        },
        {
          label: 'Usage',
          title: 'Dynamic usage',
          desc: 'Billed by what the service actually used: CPU time, bandwidth or storage, measured as it runs.',
          unit: 'Metered as it runs',
          bars: [20, 35, 50, 30, 60, 82, 45, 30, 25, 40, 70, 92, 65, 40, 35, 55, 76, 60, 45, 30, 20, 35, 50, 40],
        },
        {
          label: 'Per second',
          title: 'Per second',
          desc: 'Metered to the second for GPU servers and on-demand game servers. Customers pay for exactly the time they ran.',
          unit: 'Metered to the second',
          bars: [10, 60, 15, 80, 20, 5, 70, 30, 90, 10, 40, 85, 15, 60, 25, 95, 30, 10, 75, 20, 55, 15, 65, 35],
        },
        {
          label: 'Per token',
          title: 'Per token',
          desc: 'For inference APIs, every request is charged by the tokens it processed.',
          unit: 'Charged per token',
          bars: [5, 5, 70, 90, 40, 5, 5, 5, 60, 100, 30, 5, 5, 80, 50, 5, 5, 5, 95, 45, 5, 5, 65, 20],
        },
        {
          label: 'Per GB / 95th',
          title: 'Per GB or 95th percentile',
          desc: 'Bandwidth billed by total traffic, or by the 95th percentile of usage over the month.',
          unit: '95th percentile line',
          bars: [30, 45, 40, 60, 55, 70, 65, 80, 75, 60, 50, 85, 90, 70, 60, 65, 55, 98, 60, 50, 45, 40, 35, 30],
        },
        {
          label: 'Yearly & one-time',
          title: 'Yearly and one-time',
          desc: 'Domains renew once a year. Setup fees and licenses are charged once.',
          unit: 'Charged once',
          bars: [100, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 64, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
      ],
    },
    modules: {
      k: 'Platform',
      h: 'Everything around the invoice',
      p: 'Billing is the core. Around it sit the pieces a hosting business runs on every day.',
      prov: {
        title: 'Pluggable provisioning',
        p: 'Every panel plugs in through one provider contract. New product types never touch billing code.',
        items: ['VPS panel', 'Game panel', 'GPU marketplace', 'Domain registrar'],
        planned: 'Planned',
      },
      supply: {
        title: 'A supply network',
        p: "Resell another provider's products with automatic provisioning. Money moves directly between merchants, and RackMoon never holds funds.",
        nodes: ['Supplier', 'You', 'Customer'],
        note: 'Paid directly, never through RackMoon',
      },
      agents: {
        title: 'AI agents that act safely',
        p: 'Support comes first, then growth, admin and risk agents. Every action is read-only, confirmed by the customer or approved by you, and logged.',
        levels: [
          {
            k: 'Read-only',
            d: 'Look up an invoice',
          },
          {
            k: 'Customer confirms',
            d: 'Reset a password',
          },
          {
            k: 'You approve',
            d: 'Restart vps-4821',
          },
        ],
      },
      client: {
        title: 'A client area customers trust',
        p: 'Bilingual client area, global payments and coupons and affiliates built in.',
        pays: ['Stripe', 'PayPal', 'USDT', 'Alipay', 'WeChat Pay'],
        langs: 'EN · 中文',
      },
      migrate: {
        title: 'Data migration',
        p: 'Bring customers, products and invoices over from the system you use today.',
        items: ['Customers', 'Products', 'Invoices'],
      },
    },
    auto: {
      k: 'Automation',
      h: 'From order to renewal, on its own',
      p: 'Once an order comes in, charging, provisioning and renewals follow your rules. You only handle the exceptions.',
      log: 'Event log · vps-4821',
      events: [
        {
          time: '00:00:00',
          name: 'order.created',
          desc: 'VPS · 2 vCPU / 4 GB, monthly',
          state: 'ok',
        },
        {
          time: '00:00:01',
          name: 'invoice.paid',
          desc: 'Paid with Stripe',
          state: 'ok',
        },
        {
          time: '00:00:38',
          name: 'service.provisioned',
          desc: 'vps-4821 on your VPS panel',
          state: 'ok',
        },
        {
          time: '+30 days',
          name: 'service.renewed',
          desc: 'Renewal paid from the balance',
          state: 'ok',
        },
        {
          time: '+41 days',
          name: 'balance.low',
          desc: 'Slowed down, back to full speed after a top-up',
          state: 'warn',
        },
      ],
    },
    deploy: {
      k: 'Deployment & trust',
      h: 'Your rack. Your data. Your money.',
      p: "RackMoon is licensed software that runs on your own servers. It never sits between you and your customers' money.",
      lanes: [
        {
          name: 'Service',
          nodes: ['Customers', 'Orders', 'Your servers · RackMoon', 'Provision', 'Panels'],
        },
        {
          name: 'Money',
          nodes: ['Customers', 'Pay', 'Payment providers', 'Settles directly', 'You'],
        },
      ],
      note: 'RackMoon never sits in the money lane.',
      trust: [
        {
          title: 'Self-hosted license',
          text: 'Installed on servers you own or rent.',
        },
        {
          title: 'Your data stays with you',
          text: 'Customers, invoices and logs live in your own database.',
        },
        {
          title: 'No funds held',
          text: 'Payments go from your customers straight to you.',
        },
        {
          title: 'Licensed payment channels',
          text: 'Alipay and WeChat Pay run through licensed providers.',
        },
        {
          title: 'Every action logged',
          text: 'AI actions are read-only, confirmed or approved, and recorded.',
        },
      ],
    },
    price: {
      k: 'Pricing',
      h: 'Self-hosted licenses',
      p: 'Pricing will be announced before launch. Tell us about your business and we will reach out.',
      cardK: 'License',
      cardH: 'Coming soon',
      cardItems: ['Licensed per product', 'Runs on your own servers', 'Prices announced before launch'],
    },
    final: {
      h: 'From one rack to the moon.',
      p: 'See what RackMoon can do for your hosting business.',
    },
  },
  products: {
    pill: 'Six products, one family',
    h1: ['Everything your', 'hosting business runs on.'],
    h1Hi: 1,
    lead: 'Billing, KVM and Hyper-V virtualization, Docker containers, game servers and monitoring. Every product runs on your own servers under a self-hosted license, and each one works alone or together with the rest.',
    note: ['Self-hosted license', 'Use one or all six'],
    core: 'Core',
    learn: 'Learn more',
    grid: {
      k: 'Products',
      h: 'Pick one, or run them all.',
      p: 'Start with the product you need today and add the others as you grow. They are built to plug into each other.',
    },
    items: [
      {
        key: 'billing',
        name: 'Billing',
        desc: 'The business system for hosting: orders, invoices, customers, tickets and AI agents.',
        chips: ['7 billing models', 'Supply network', 'AI agents'],
        detail: {
          h: 'The system everything plugs into.',
          p: 'Sell any product with seven billing models, provision it automatically, and let AI agents handle routine tickets with your approval.',
          items: [
            'Orders, invoices, refunds and credit',
            'Client area with payments and tickets',
            'Supply network for reselling between providers',
            'AI agents that ask before they act',
          ],
        },
      },
      {
        key: 'kvm',
        name: 'KVM Manager',
        desc: 'Run KVM virtual machines across your nodes and sell them as cloud servers.',
        chips: ['OS templates', 'Snapshots', 'IP pools'],
        detail: {
          h: 'Cloud servers on your own hardware.',
          p: 'Add nodes, set up IP pools and templates, and Billing creates, resizes and suspends virtual machines on its own.',
          items: [
            'Node and cluster overview',
            'OS templates and custom ISO',
            'Snapshots and backups',
            'VNC console and traffic stats',
          ],
        },
      },
      {
        key: 'hyperv',
        name: 'Hyper-V Manager',
        desc: 'Manage Hyper-V hosts and deliver Windows servers with remote desktop ready.',
        chips: ['Windows templates', 'Checkpoints', 'Remote desktop'],
        detail: {
          h: 'Windows servers, ready to sell.',
          p: 'Manage every Hyper-V host from one place and deliver Windows servers that customers can log in to the moment they pay.',
          items: [
            'Windows and Linux templates',
            'A checkpoint before every change',
            'Remote desktop details sent on delivery',
            'Network, IP and traffic limits',
          ],
        },
      },
      {
        key: 'containers',
        name: 'Containers',
        desc: 'Turn Docker images into products and deploy them to your nodes in seconds.',
        chips: ['Image catalog', 'Port mapping', 'Resource limits'],
        detail: {
          h: 'Sell Docker images as products.',
          p: 'Choose the images for your catalog, set resource limits, and deploy containers to the right node as soon as an order is paid.',
          items: [
            'Curated image catalog',
            'CPU, memory and disk limits',
            'Port mapping and domains',
            'Logs and a web terminal',
          ],
        },
      },
      {
        key: 'games',
        name: 'Game Servers',
        desc: 'Launch game servers from templates, with a console, files, backups and schedules.',
        chips: ['Game templates', 'Web console', 'Scheduled tasks'],
        detail: {
          h: 'Game on, right after checkout.',
          p: 'Pick a game template and the number of slots, and the server starts on its own. Players get a console, a file manager and backups.',
          items: [
            'Templates for popular games',
            'Web console and file manager',
            'Scheduled restarts and backups',
            'Billing by slots, memory or hours',
          ],
        },
      },
      {
        key: 'monitor',
        name: 'Monitoring',
        desc: 'Watch nodes, services and traffic, and alert the right people before customers notice.',
        chips: ['Uptime checks', 'Metrics', 'Alerts'],
        detail: {
          h: 'Know before your customers do.',
          p: 'Track every node and service, keep an eye on traffic, and route alerts to the right people or straight into a ticket.',
          items: [
            'CPU, memory, disk and traffic metrics',
            'HTTP, TCP and ping checks',
            'Alerts by email, webhook and chat apps',
            'Alerts open tickets in Billing',
          ],
        },
      },
    ],
    mock: {
      billing: {
        title: 'Invoices',
        tabs: ['All', 'Unpaid', 'Overdue'],
        new: 'New invoice',
        sum: [
          {
            k: 'Billed this month',
            v: '$48,920',
          },
          {
            k: 'Invoices',
            v: '1,204',
          },
          {
            k: 'Paid on time',
            v: '98.6%',
          },
        ],
        rows: [
          {
            id: 'INV-2081',
            customer: 'nova.host',
            item: 'VPS · 2 vCPU / 4 GB',
            amount: '$18.00',
            state: 'ok',
            status: 'Paid',
          },
          {
            id: 'INV-2080',
            customer: 'orbit-labs',
            item: 'GPU node · per second',
            amount: '$412.50',
            state: 'ok',
            status: 'Paid',
          },
          {
            id: 'INV-2079',
            customer: 'pixel-games',
            item: 'Game server · 32 slots',
            amount: '$24.00',
            state: 'warn',
            status: 'Due in 3 days',
          },
          {
            id: 'INV-2078',
            customer: 'lunar.io',
            item: 'example.com · 1 year',
            amount: '$12.00',
            state: 'ok',
            status: 'Paid',
          },
        ],
      },
      kvm: {
        title: 'Nodes',
        sub: '3 nodes · 96 VMs',
        add: 'Add node',
        cpu: 'CPU',
        ram: 'RAM',
        nodes: [
          {
            name: 'node-01',
            cores: '64 cores',
            cpu: 62,
            ram: 71,
            vms: '38 VMs',
            hot: false,
          },
          {
            name: 'node-02',
            cores: '64 cores',
            cpu: 45,
            ram: 58,
            vms: '31 VMs',
            hot: false,
          },
          {
            name: 'node-03',
            cores: '48 cores',
            cpu: 88,
            ram: 76,
            vms: '27 VMs',
            hot: true,
          },
        ],
        rows: [
          {
            id: 'vm-4821',
            spec: '2 vCPU · 4 GB',
            ip: '203.0.113.8',
            node: 'node-01',
            state: 'ok',
            status: 'Running',
          },
          {
            id: 'vm-4822',
            spec: '4 vCPU · 8 GB',
            ip: '203.0.113.9',
            node: 'node-02',
            state: 'ok',
            status: 'Running',
          },
          {
            id: 'vm-4823',
            spec: '8 vCPU · 16 GB',
            ip: '203.0.113.12',
            node: 'node-03',
            state: 'warn',
            status: 'Migrating',
          },
          {
            id: 'vm-4824',
            spec: '1 vCPU · 1 GB',
            ip: '203.0.113.15',
            node: 'node-01',
            state: 'off',
            status: 'Stopped',
          },
        ],
      },
      hyperv: {
        title: 'win-srv-2207',
        state: 'Running',
        host: 'hv-host-02',
        os: 'Windows Server 2022 Datacenter',
        osSub: 'Delivered 28 Sep · remote desktop sent',
        specs: [
          {
            k: 'vCPU',
            v: '4',
          },
          {
            k: 'Memory',
            v: '8 GB',
          },
          {
            k: 'Disk',
            v: '120 GB',
          },
          {
            k: 'IPv4',
            v: '198.51.100.24',
          },
        ],
        checkpointsTitle: 'Checkpoints',
        checkpoints: [
          {
            name: 'Before update',
            when: '2 hours ago',
          },
          {
            name: 'Weekly',
            when: 'Sun 03:00',
          },
          {
            name: 'Delivered',
            when: '28 Sep',
          },
        ],
        actions: ['Remote desktop', 'Checkpoint', 'Restart'],
      },
      containers: {
        title: 'Image catalog',
        sub: '24 images',
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
        deployTitle: 'Deploy',
        fields: [
          {
            k: 'Image',
            v: 'wordpress:6.6',
          },
          {
            k: 'Node',
            v: 'node-hk-02',
          },
          {
            k: 'Limits',
            v: '1 vCPU · 1 GB · 10 GB',
          },
          {
            k: 'Ports',
            v: '80 → 30080',
          },
        ],
        go: 'Deploy',
        done: 'Live on node-hk-02 in 6 s',
      },
      games: {
        title: 'survival-01',
        state: 'Online',
        sub: 'Survival template · 8 GB',
        stats: [
          {
            k: 'Players',
            v: '18 / 32',
            pct: 56,
          },
          {
            k: 'CPU',
            v: '38%',
            pct: 38,
          },
          {
            k: 'Memory',
            v: '5.2 / 8 GB',
            pct: 65,
          },
        ],
        log: [
          {
            time: '12:04:11',
            text: 'Server started on port 27015',
          },
          {
            time: '12:05:42',
            text: 'player_42 joined the game',
          },
          {
            time: '12:30:00',
            text: 'Scheduled backup finished · 1.2 GB',
          },
          {
            time: '12:31:15',
            text: 'player_07 left the game',
          },
        ],
        prompt: 'say Restarting at 04:00 for updates',
        actions: ['Restart', 'Stop', 'Backup now'],
      },
      monitor: {
        title: 'Overview',
        sub: 'Last 30 days',
        up: '99.98% uptime',
        chart: 'Latency',
        unit: 'ms',
        alerts: [
          {
            time: '12:41',
            target: 'node-03',
            text: 'CPU above 90% for 5 min',
            result: 'Ticket #3302 opened',
            state: 'warn',
          },
          {
            time: '09:12',
            target: 'api.nova.host',
            text: 'HTTP 502 for 2 min',
            result: 'On-call notified · recovered',
            state: 'ok',
          },
        ],
      },
    },
    license: {
      k: 'Licensing',
      h: 'License only what you use.',
      p: 'Each product is its own self-hosted license. Start with one, add the rest when you need them, and keep every byte of data on your servers. Pricing will be announced before launch.',
      cardK: 'Self-hosted licenses',
    },
  },
  pricingPage: {
    pill: 'Self-hosted licenses',
    h1: ['Simple licenses,', 'your own servers.'],
    h1Hi: 1,
    lead: 'Every RackMoon product is a self-hosted license on its own. Buy the ones you need, run them on your servers, and keep your customers, data and payments with you. Prices will be announced before launch.',
    emailCta: 'Email us',
    note: ['Licensed per product', 'Prices announced before launch'],
    card: {
      k: 'RackMoon license',
      rows: [
        {
          k: 'Licensed to',
          v: 'Your hosting company',
        },
        {
          k: 'Runs on',
          v: 'Your servers',
        },
        {
          k: 'Key',
          v: 'RMN-7Q4K-2HX9-PL3M',
        },
      ],
      state: 'Active',
    },
    list: {
      k: 'Price list',
      h: 'One license per product.',
      p: 'Start with one product and add more whenever you are ready. Each license works on its own.',
      type: 'Self-hosted',
      price: 'Announced before launch',
      notify: 'Tell me first',
      cols: ['Product', 'License', 'Price'],
    },
    includes: {
      k: 'Every license',
      h: 'What you can count on.',
      items: [
        {
          title: 'Your servers, your data',
          text: 'Install on servers you own or rent. Customers, invoices and logs stay in your own database.',
        },
        {
          title: 'Payments go straight to you',
          text: 'Customers pay through your own payment channels. RackMoon never holds customer funds.',
        },
        {
          title: 'Works alone or together',
          text: 'Each product runs by itself and plugs into the others when you add them.',
        },
        {
          title: 'Terms published with prices',
          text: 'Update and support terms will be announced together with prices.',
        },
      ],
    },
    faq: {
      k: 'Questions',
      h: 'Licensing, answered.',
      items: [
        {
          q: 'When will prices be announced?',
          a: 'Before launch. Write to hello@rackmoon.com and we will tell you first.',
        },
        {
          q: 'Do I have to buy all six products?',
          a: 'No. Each product is licensed on its own. Start with one and add the others when you need them.',
        },
        {
          q: 'Where does RackMoon run?',
          a: 'On your own servers. You install it, and all of its data stays in your database.',
        },
        {
          q: "Does RackMoon hold my customers' payments?",
          a: 'No. Customers pay you directly through your own payment channels.',
        },
        {
          q: 'Can I move over from the system I use now?',
          a: 'Yes. Billing can bring customers, products and invoices over from your current system.',
        },
      ],
    },
  },
  changelog: {
    k: 'Changelog',
    h1: ["What's new", 'in RackMoon.'],
    h1Hi: 1,
    lead: 'Release notes for every RackMoon product, newest first.',
    rss: 'RSS feed',
    all: 'All products',
    sample: 'Sample entries',
    types: {
      new: 'New',
      imp: 'Improved',
      fix: 'Fixed',
    },
    older: 'Older releases',
    sub: {
      h: 'Never miss a release.',
      p: 'Follow the changelog with RSS, or ask us to email you when a version ships.',
      email: 'Email updates',
    },
  },
  about: {
    pill: 'About RackMoon',
    h1: ['Built for the people', 'who host the internet.'],
    h1Hi: 1,
    lead: 'RackMoon makes self-hosted software for hosting and cloud providers: billing, virtualization, containers, game servers and monitoring. We believe providers should own their servers, their data and their customer relationships.',
    values: {
      k: 'What we believe',
      h: 'Three things we will not trade away.',
      items: [
        {
          title: 'Your servers, your data',
          text: 'Everything runs on infrastructure you control. We never see your customers or hold their payments.',
        },
        {
          title: 'A person approves the risky parts',
          text: 'Routine work runs on its own. Anything that could hurt a customer waits for someone on your team to say yes.',
        },
        {
          title: 'Products that fit together',
          text: 'Use one product or all six. They speak the same language and plug into each other when you need them to.',
        },
      ],
    },
    name: {
      k: 'The name',
      h: 'From one rack to the moon.',
      p: 'Every hosting business starts small: one rack, a few servers, the first customers. RackMoon is named after the road from there to as far as you want to go. Our logo draws the moon out of small squares, the way a hosting business is built one server at a time.',
      phases: ['One rack', 'First customers', 'More nodes', 'New products', 'The moon'],
    },
    contact: {
      k: 'Contact',
      h: 'Talk to a person.',
      p: 'Questions about the products, licensing or a partnership? Write to us and a person will reply.',
      mailK: 'Sales, licensing and general questions',
      mailCta: 'Send an email',
      cards: [
        {
          title: 'Brand assets',
          text: 'Logos, colors and guidelines for writing about RackMoon.',
          cta: 'Download the kit',
        },
        {
          title: 'Changelog',
          text: 'Follow what we ship, product by product.',
          cta: 'Read the changelog',
        },
      ],
    },
  },
  notFound: {
    k: '404',
    h: 'This page drifted out of orbit.',
    p: 'The page you are looking for does not exist or has moved.',
    home: 'Back to home',
  },
};

export type Copy = typeof en;
export default en;

import type { ProductKey } from './products';

export type ChangeType = 'new' | 'imp' | 'fix';

export interface Release {
  date: string;
  product: ProductKey;
  version: string;
  /** Placeholder entries from the design; they are labelled on the page and left out of the RSS feed. */
  sample?: boolean;
  en: ReleaseText;
  zh: ReleaseText;
}

interface ReleaseText {
  title: string;
  summary: string;
  changes: { type: ChangeType; text: string }[];
}

/** Newest first. */
export const releases: Release[] = [
  {
    date: '2026-10-02',
    product: 'billing',
    version: 'v0.6.0',
    sample: true,
    en: {
      title: 'Per-second billing for GPU nodes',
      summary: 'Meter usage by the second and invoice it at the end of each billing cycle.',
      changes: [
        {
          type: 'new',
          text: 'Per-second metering for usage-based products',
        },
        {
          type: 'imp',
          text: 'Invoice PDFs show a usage breakdown',
        },
        {
          type: 'fix',
          text: 'Rounding on yearly renewals',
        },
      ],
    },
    zh: {
      title: 'GPU 节点支持按秒计费',
      summary: '按秒计量用量，在每个计费周期结束时出账。',
      changes: [
        {
          type: 'new',
          text: '用量类产品支持按秒计量',
        },
        {
          type: 'imp',
          text: '账单 PDF 展示用量明细',
        },
        {
          type: 'fix',
          text: '按年续费的金额取整问题',
        },
      ],
    },
  },
  {
    date: '2026-09-24',
    product: 'kvm',
    version: 'v0.4.0',
    sample: true,
    en: {
      title: 'IPv6 pools and faster rebuilds',
      summary: 'Hand out IPv6 addresses from pools, and reinstall an OS in less time.',
      changes: [
        {
          type: 'new',
          text: 'IPv6 address pools',
        },
        {
          type: 'imp',
          text: 'OS rebuilds take less than half the time',
        },
        {
          type: 'fix',
          text: 'VNC console in Safari',
        },
      ],
    },
    zh: {
      title: 'IPv6 地址池，重装更快',
      summary: '从地址池分配 IPv6 地址，重装系统用时更短。',
      changes: [
        {
          type: 'new',
          text: 'IPv6 地址池',
        },
        {
          type: 'imp',
          text: '重装系统的用时不到原来的一半',
        },
        {
          type: 'fix',
          text: 'Safari 下的 VNC 控制台',
        },
      ],
    },
  },
  {
    date: '2026-09-18',
    product: 'monitor',
    version: 'v0.3.0',
    sample: true,
    en: {
      title: 'Alerts can open tickets',
      summary: 'Turn an alert into a Billing ticket so nothing gets lost between tools.',
      changes: [
        {
          type: 'new',
          text: 'Open a ticket in Billing from any alert rule',
        },
        {
          type: 'imp',
          text: 'Alerts for the same node are grouped',
        },
      ],
    },
    zh: {
      title: '告警可以直接开工单',
      summary: '把告警转成财务系统里的工单，问题不会在工具之间丢掉。',
      changes: [
        {
          type: 'new',
          text: '任意告警规则都能在财务系统里开工单',
        },
        {
          type: 'imp',
          text: '同一节点的告警自动合并',
        },
      ],
    },
  },
  {
    date: '2026-09-09',
    product: 'games',
    version: 'v0.2.0',
    sample: true,
    en: {
      title: 'Scheduled restarts and backups',
      summary: 'Players get fewer surprises: restarts and backups now run on a schedule.',
      changes: [
        {
          type: 'new',
          text: 'Schedules for restarts and backups',
        },
        {
          type: 'imp',
          text: 'The console keeps 5,000 lines of history',
        },
      ],
    },
    zh: {
      title: '定时重启和备份',
      summary: '重启和备份按计划自动执行，玩家少遇到意外。',
      changes: [
        {
          type: 'new',
          text: '重启和备份支持计划任务',
        },
        {
          type: 'imp',
          text: '控制台保留 5,000 行历史',
        },
      ],
    },
  },
  {
    date: '2026-09-01',
    product: 'containers',
    version: 'v0.2.0',
    sample: true,
    en: {
      title: 'Custom domains for containers',
      summary: 'Point a domain at any container port without touching the node.',
      changes: [
        {
          type: 'new',
          text: 'Bind a domain to a container port',
        },
        {
          type: 'fix',
          text: 'Memory limits now apply after a restart',
        },
      ],
    },
    zh: {
      title: '容器支持绑定自定义域名',
      summary: '把域名指向任意容器端口，不用登录节点。',
      changes: [
        {
          type: 'new',
          text: '给容器端口绑定域名',
        },
        {
          type: 'fix',
          text: '重启后内存限制没有生效',
        },
      ],
    },
  },
  {
    date: '2026-08-25',
    product: 'hyperv',
    version: 'v0.2.0',
    sample: true,
    en: {
      title: 'A checkpoint before every change',
      summary: 'Hyper-V Manager now takes a checkpoint before it resizes or rebuilds a server.',
      changes: [
        {
          type: 'new',
          text: 'Automatic checkpoints before resize and rebuild',
        },
        {
          type: 'imp',
          text: 'Remote desktop details in the delivery email',
        },
      ],
    },
    zh: {
      title: '每次变更前自动建检查点',
      summary: 'Hyper-V 管理器在升降配或重装前会先创建检查点。',
      changes: [
        {
          type: 'new',
          text: '升降配和重装前自动创建检查点',
        },
        {
          type: 'imp',
          text: '交付邮件里附上远程桌面信息',
        },
      ],
    },
  },
];

/** Anchor of a release on the changelog page. */
export function releaseId(release: Release): string {
  return `${release.product}-${release.version.replaceAll('.', '-')}`;
}


import { Zone, Layer, ReportChapter } from './types';

export const ZONES: Zone[] = [
  {
    id: 'GZ-Zone-A',
    name: '龙穴岛东侧近海',
    location: '南沙港区',
    type: '港口航运立体互通区',
    area: '20 km²',
    strategy: '避让航道。重点探索海底管线廊道（-20m以下）与港口物流无人机航路（+50m以上）。',
    color: 'bg-blue-500'
  },
  {
    id: 'GZ-Zone-B',
    name: '万顷沙南部海域',
    location: '珠江口外缘',
    type: '产业与科研试验区',
    area: '20 km²',
    strategy: '全层利用。海床开展海底数据中心；水体开展智能化网箱；水面布置波浪能。',
    color: 'bg-emerald-500'
  },
  {
    id: 'GZ-Zone-C',
    name: '明珠湾/横沥岛外',
    location: '滨海旅游与生态缓冲区',
    type: '滨海旅游与生态缓冲区',
    area: '20 km²',
    strategy: '生态优先。探索水面游艇通行权与水下生态修复/人工鱼礁。严禁高噪音。',
    color: 'bg-amber-500'
  }
];

export const LAYERS: Layer[] = [
  {
    id: 'L1',
    name: '高空层',
    range: '+20m ~ +100m',
    usage: ['物流无人机', '气象监测'],
    color: 'bg-sky-200'
  },
  {
    id: 'L2',
    name: '水面层',
    range: '0m ~ +20m',
    usage: ['光伏', '浮台', '休闲旅游'],
    color: 'bg-blue-300'
  },
  {
    id: 'L3',
    name: '水体层',
    range: '-20m ~ 0m',
    usage: ['网箱养殖', '人工鱼礁'],
    color: 'bg-blue-600'
  },
  {
    id: 'L4',
    name: '海床层',
    range: '-100m ~ -20m',
    usage: ['海底电缆', '管廊', '数据中心'],
    color: 'bg-slate-800'
  }
];

export const REPORT_CHAPTERS: ReportChapter[] = [
  {
    id: 1,
    title: "报告摘要",
    content: "本项目拟在广州市南沙区沿海设立三个试点区，针对既有海域资源，突破传统二维平面管理模式，实施“1 km² 网格化 + 海平面上下±100 m 三维分层”的确权管理。技术可行性分析显示，结合现有高精度水深数据及GIS技术，足以支撑精细化建模。"
  },
  {
    id: 2,
    title: "项目背景与必要性",
    content: "珠江口海域空间资源极度紧张。当前痛点包括空间重叠冲突（航运、管缆、风电）、资源利用率低以及市场化门槛高。试点必要性在于赋能大湾区低空经济与海洋牧场发展。"
  },
  {
    id: 3,
    title: "目标与基本原则",
    content: "构建“三维确权+在线交易+动态监管”的全生命周期体系。原则：安全优先（避让主航道）、生态红线（保护白海豚）、分层设权。"
  },
  {
    id: 4,
    title: "试点范围与选址",
    content: "选址逻辑结合了海洋功能区划。Zone A聚焦港航物流，Zone B聚焦全层科研，Zone C聚焦旅游生态。"
  },
  {
    id: 13,
    title: "投资估算与融资",
    content: "总投资约 1,450 万元。其中数据采集 600万，平台建设 350万。申请省级补助 1,000万。回收期约 6.2 年。"
  }
];

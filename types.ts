
export enum ViewType {
  OVERVIEW = 'overview',
  REPORT = 'report',
  MAP = 'map',
  THREE_D = 'three_d',
  FINANCE = 'finance',
  CHAT = 'chat'
}

export interface Zone {
  id: string;
  name: string;
  location: string;
  type: string;
  area: string;
  strategy: string;
  color: string;
}

export interface Layer {
  id: string;
  name: string;
  range: string;
  usage: string[];
  color: string;
}

export interface ReportChapter {
  id: number;
  title: string;
  content: string;
}

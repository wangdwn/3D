
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: ViewType.OVERVIEW, icon: '📊', label: '仪表盘' },
    { id: ViewType.REPORT, icon: '📄', label: '研究报告' },
    { id: ViewType.MAP, icon: '🗺️', label: '区域地图' },
    { id: ViewType.THREE_D, icon: '🧊', label: '三维模型' },
    { id: ViewType.FINANCE, icon: '💰', label: '投资分析' },
    { id: ViewType.CHAT, icon: '🤖', label: '智能问答' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-blue-500">GZ</span> Marine 3D
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">Pilot Project v1.0</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              currentView === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="bg-slate-800/50 p-4 rounded-xl text-xs space-y-1">
          <p>试点范围：60 km²</p>
          <p>确权范围：±100 m</p>
          <div className="h-1 bg-slate-700 w-full rounded-full mt-2">
            <div className="h-full bg-blue-500 w-[35%] rounded-full"></div>
          </div>
          <p className="text-slate-500 pt-1">当前进度: 数据采集阶段</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

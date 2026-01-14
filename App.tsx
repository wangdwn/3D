
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import ThreeDLayerModel from './components/ThreeDLayerModel';
import ReportViewer from './components/ReportViewer';
import FinancialDashboard from './components/FinancialDashboard';
import GeminiChat from './components/GeminiChat';
import { ZONES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.OVERVIEW);

  const handleExportPDF = () => {
    // Trigger the browser's native print functionality.
    // CSS media queries in index.html handle hiding navigation and UI chrome.
    window.print();
  };

  const renderView = () => {
    switch (currentView) {
      case ViewType.OVERVIEW:
        return (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">📐</div>
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Scale</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">试点总规模</h3>
                <p className="text-4xl font-black text-slate-900 mt-2">60 <span className="text-xl font-medium text-slate-400">km²</span></p>
                <p className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">●</span> 分为 3 个功能区 (Zones)
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">🏢</div>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Budget</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">投资估算</h3>
                <p className="text-4xl font-black text-slate-900 mt-2">1,450 <span className="text-xl font-medium text-slate-400">万元</span></p>
                <p className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1">
                   <span className="text-emerald-500 font-bold">●</span> 内部收益率 8.5%
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">🌊</div>
                  <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Dimension</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">确权维度</h3>
                <p className="text-4xl font-black text-slate-900 mt-2">±100 <span className="text-xl font-medium text-slate-400">m</span></p>
                <p className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">●</span> 海床下至低空
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ThreeDLayerModel />
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">试点区域概要</h2>
                    <p className="text-slate-500">南沙港及珠江口三个战略选址</p>
                  </div>
                  <button onClick={() => setCurrentView(ViewType.MAP)} className="text-blue-600 font-bold text-sm hover:underline no-print">查看完整地图 &rarr;</button>
                </div>
                <div className="space-y-4 flex-1">
                  {ZONES.map(zone => (
                    <div key={zone.id} className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-black text-slate-900 tracking-tight">{zone.name}</span>
                        <span className={`px-2 py-1 rounded text-[10px] font-bold text-white ${zone.color}`}>{zone.id}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2">{zone.type} · {zone.area}</p>
                      <p className="text-sm text-slate-700 line-clamp-2 leading-relaxed">{zone.strategy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.REPORT:
        return <ReportViewer />;
      case ViewType.MAP:
        return (
          <div className="p-8 space-y-8 flex flex-col items-center justify-center min-h-[70vh]">
            <div className="text-center max-w-2xl">
              <div className="text-6xl mb-6">🗺️</div>
              <h2 className="text-3xl font-black mb-4">广州海域三维选址交互地图</h2>
              <p className="text-slate-500 text-lg mb-8">
                本模块正接入广州高精度 GIS 底图数据，实时渲染龙穴岛、万顷沙、明珠湾的三维网格权属边界。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {ZONES.map(z => (
                  <div key={z.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-64 text-left">
                    <div className={`w-3 h-3 rounded-full ${z.color} mb-4`}></div>
                    <h4 className="font-bold text-slate-900">{z.name}</h4>
                    <p className="text-xs text-slate-500 mt-2">坐标系统: WGS-84</p>
                    <p className="text-xs text-slate-500">网格化: 1km x 1km</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case ViewType.THREE_D:
        return (
          <div className="p-8 max-w-6xl mx-auto h-[calc(100vh-100px)]">
             <ThreeDLayerModel />
          </div>
        );
      case ViewType.FINANCE:
        return <FinancialDashboard />;
      case ViewType.CHAT:
        return <GeminiChat />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <div className="no-print">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      </div>
      
      <main className="flex-1 ml-64 min-h-screen flex flex-col print:ml-0 print:block">
        <header className="h-20 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between border-b border-slate-100 no-print">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">广州试点可行性研究工作台</h2>
             </div>
             <span className="text-slate-300">|</span>
             <div className="flex gap-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Draft 01-2026</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleExportPDF}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors uppercase tracking-widest shadow-xl shadow-slate-900/10"
            >
              导出 PDF 报告
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
               👤
            </div>
          </div>
        </header>

        <section className="flex-1">
          {renderView()}
        </section>

        <footer className="p-8 bg-slate-50 border-t border-slate-100 text-center no-print">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            <p>© 2026 省级海域立体分层确权与市场化配置试点项目 (广州)</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Documentation</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;

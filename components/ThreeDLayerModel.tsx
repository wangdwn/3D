
import React from 'react';
import { LAYERS } from '../constants';

const ThreeDLayerModel: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">三维垂直分层模型</h2>
        <p className="text-slate-500">海平面上下 100m 空间确权示意</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 relative">
        {/* Sky Layers */}
        {LAYERS.map((layer, idx) => (
          <div 
            key={layer.id}
            className={`flex-1 rounded-2xl flex flex-col justify-center px-8 transition-all hover:scale-[1.02] border-2 border-transparent hover:border-blue-400 cursor-pointer ${layer.color} bg-opacity-30 relative overflow-hidden`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-2 ${layer.color} bg-opacity-100`}></div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{layer.range}</span>
                <h3 className="text-lg font-bold text-slate-800">{layer.name}</h3>
              </div>
              <div className="flex gap-2">
                {layer.usage.map((u, i) => (
                  <span key={i} className="bg-white/80 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                    {u}
                  </span>
                ))}
              </div>
            </div>
            {/* Conceptual divider for sea level */}
            {layer.id === 'L2' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500/50 flex items-center justify-center">
                <span className="bg-blue-500 text-white text-[10px] px-2 rounded-full absolute -bottom-2">SEA LEVEL (LAT)</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>基准面：理论最低潮面 (LAT)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <span>复核周期：每 2 年复核一次</span>
        </div>
      </div>
    </div>
  );
};

export default ThreeDLayerModel;

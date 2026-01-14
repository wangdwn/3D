
import React, { useState } from 'react';
import { REPORT_CHAPTERS } from '../constants';

const ReportViewer: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState(REPORT_CHAPTERS[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = REPORT_CHAPTERS.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex gap-6 p-6 h-[calc(100vh-100px)] print:block print:p-0">
      <div className="w-80 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden no-print">
        <div className="p-6 border-b border-slate-100">
          <input
            type="text"
            placeholder="搜索报告内容..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredChapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedChapter.id === chapter.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className="text-[10px] opacity-70 uppercase tracking-widest font-bold mb-0.5">Chapter {chapter.id}</div>
              <div className="font-semibold">{chapter.title}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 p-12 overflow-y-auto prose prose-slate max-w-none print:shadow-none print:border-none print:p-0 print:overflow-visible">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 print:hidden">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            第 {selectedChapter.id} 章
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            {selectedChapter.title}
          </h1>
          <div className="text-xl text-slate-700 leading-relaxed space-y-6">
            {selectedChapter.content.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-sm italic no-print">
            <span>© 2026 广州海域立体分层确权试点项目团队</span>
            <span>绝密文件 · 内部参阅</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;


import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/geminiService';
import { REPORT_CHAPTERS } from '../constants';

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '您好！我是试点项目 AI 助手。您可以问我关于广州海域三维确权、试点选址、投资预算或技术规范的任何问题。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const context = REPORT_CHAPTERS.map(c => `${c.title}: ${c.content}`).join('\n\n');
      const response = await askGemini(userMsg, context);
      setMessages(prev => [...prev, { role: 'ai', text: response || '抱歉，我现在无法回答。' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: '连接 AI 服务失败，请检查 API 配置。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] p-6 gap-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col flex-1 overflow-hidden relative">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-blue-50/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">🤖</div>
            <div>
              <h3 className="font-bold text-slate-800">项目智脑助手</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Gemini 3 Flash Powered</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Status: Online</span>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-6 py-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-6 py-4 flex gap-2 items-center text-slate-400 font-medium italic">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce [animation-delay:0.2s]">●</span>
                <span className="animate-bounce [animation-delay:0.4s]">●</span>
                <span className="ml-2 text-xs uppercase tracking-widest">AI正在思考...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-slate-100 bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="询问关于 60km² 试点区或财务预算..."
              className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 disabled:opacity-50"
            >
              发送
            </button>
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {['投资回报率是多少？', 'Zone A的选址逻辑？', '什么是±100m确权？'].map(q => (
              <button 
                key={q} 
                onClick={() => setInput(q)}
                className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-3 py-1.5 rounded-full border border-slate-100 hover:border-blue-200 hover:text-blue-500 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;

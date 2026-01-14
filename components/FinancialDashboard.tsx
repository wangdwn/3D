
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const investmentData = [
  { name: '基础数据采集', value: 600 },
  { name: '平台建设', value: 350 },
  { name: '研究与咨询', value: 150 },
  { name: '监测设备', value: 200 },
  { name: '运营预备', value: 150 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

const projectedIncome = [
  { year: 'Year 1', income: 0, cost: 725 },
  { year: 'Year 2', income: 0, cost: 725 },
  { year: 'Year 3', income: 300, cost: 100 },
  { year: 'Year 4', income: 450, cost: 100 },
  { year: 'Year 5', income: 500, cost: 100 },
  { year: 'Year 6', income: 600, cost: 120 },
];

const FinancialDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-6">总投资占比分析 (1,450万元)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={investmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {investmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-6">营收与成本预测 (万元)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectedIncome}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip cursor={{fill: '#f8fafc'}} />
              <Legend />
              <Bar dataKey="income" fill="#3b82f6" name="预测营收" radius={[4, 4, 0, 0]} />
              <Bar dataKey="cost" fill="#ef4444" name="预估支出" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2">
        <h3 className="text-xl font-bold mb-6">财务关键指标</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">内部收益率 (FIRR)</p>
            <p className="text-3xl font-bold text-blue-900 mt-2">8.5%</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-wider">投资回收期</p>
            <p className="text-3xl font-bold text-emerald-900 mt-2">6.2 Years</p>
          </div>
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider">折现率</p>
            <p className="text-3xl font-bold text-amber-900 mt-2">6.0%</p>
          </div>
          <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">盈亏平衡点</p>
            <p className="text-3xl font-bold text-indigo-900 mt-2">Yr 4-5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;

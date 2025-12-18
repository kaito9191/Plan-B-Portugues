
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, BarChart, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/mockData';
import { CourseStatus } from '../../types';

export default function Catalog() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(courses.map(c => c.category)))];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesFilter = filter === 'All' || course.category === filter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
           <Star size={14} fill="currentColor" /> Seleção de Elite Nacional
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Potencialize sua Carreira</h1>
        <p className="text-slate-500 max-w-2xl text-lg">Cursos pensados para os desafios reais do mercado de trabalho brasileiro.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Pesquisar especialidade..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00471b] focus:border-transparent outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                filter === cat ? 'bg-[#00471b] text-[#ffdf00] shadow-lg' : 'bg-white text-slate-400 border border-slate-100 hover:border-[#00471b]'
              }`}
            >
              {cat === 'All' ? 'Ver Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00471b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                  course.status === CourseStatus.OPEN ? 'bg-green-100 text-green-700' : 
                  course.status === CourseStatus.UPCOMING ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {course.status}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#ffdf00]" /> Certificado Nacional
                 </p>
              </div>
            </div>
            
            <div className="p-10 flex-grow flex flex-col">
              <div className="mb-4 text-[#00471b] text-[10px] font-black uppercase tracking-[0.3em]">{course.category}</div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#00471b] transition-colors">{course.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{course.subtitle}</p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#00471b]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart size={16} className="text-[#00471b]" />
                    {course.level}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">A partir de</span>
                     <span className="text-2xl font-black text-slate-900 leading-none">R$ {course.price}</span>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <div className="w-12 h-12 rounded-2xl bg-[#00471b] text-[#ffdf00] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                       <ChevronRight size={24} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

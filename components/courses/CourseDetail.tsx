
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, ShieldCheck, ArrowLeft, Play, Layout, Target, UserCheck } from 'lucide-react';
import { courses, teachers } from '../../data/mockData';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const teacher = teachers.find(t => t.id === course?.teacherId);

  if (!course) return <div className="pt-28 text-center font-bold">Curso não encontrado.</div>;

  return (
    <div className="bg-white">
      <section className="pt-32 pb-16 px-4 bg-[#00471b] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/catalog" className="flex items-center gap-2 text-yellow-400 mb-8 hover:text-yellow-300 transition-colors font-bold text-sm">
              <ArrowLeft size={20} /> VOLTAR PARA O CATÁLOGO
            </Link>
            <div className="mb-4">
              <span className="px-3 py-1 bg-yellow-400 text-[#00471b] rounded-lg text-[10px] font-black uppercase tracking-widest">{course.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed italic opacity-80">"{course.subtitle}"</p>
            <div className="flex flex-wrap gap-6 text-sm font-bold">
              <div className="flex items-center gap-2">
                <Calendar className="text-yellow-400" />
                <span>Duração: <strong className="text-yellow-400">{course.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-yellow-400" />
                <span>Certificado Lumina Brasil</span>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block relative">
             <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-green-900 group cursor-pointer relative">
               <img src={course.thumbnail} alt={course.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                  <div className="w-20 h-20 bg-yellow-400 text-[#00471b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play fill="currentColor" size={32} />
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4 text-slate-900">
                <Layout className="text-[#00471b]" /> Sobre a Formação
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {course.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4 text-slate-900">
                <Target className="text-[#00471b]" /> O que você vai dominar?
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-bold">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold mb-10">Estrutura de Aprendizado</h2>
              <div className="space-y-6">
                {course.program.map((module, i) => (
                  <div key={i} className="border-b border-slate-100 pb-6 group">
                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-4xl font-black text-slate-100 group-hover:text-yellow-400 transition-colors">0{i + 1}</span>
                      <h4 className="text-xl font-bold text-slate-900">{module.title}</h4>
                    </div>
                    <p className="text-slate-500 pl-16">{module.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden">
                <div className="p-10 text-center">
                  <div className="text-[10px] font-black text-[#00471b] uppercase tracking-[0.3em] mb-4">Investimento Especial</div>
                  <div className="flex items-baseline justify-center gap-2 mb-8">
                    <span className="text-xs font-bold text-slate-400">R$</span>
                    <span className="text-5xl font-black text-slate-900">{course.price}</span>
                  </div>
                  
                  <Link to="/contact">
                    <button className="w-full py-5 bg-[#ffdf00] text-[#00471b] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-100 mb-6">
                      Garantir minha vaga
                    </button>
                  </Link>
                  <p className="text-xs text-slate-400 font-medium">Parcele em até 12x no cartão via WhatsApp</p>
                </div>
              </div>

              {teacher && (
                <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="text-[#00471b]" />
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">Sua Mentora</h4>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={teacher.photo} alt={teacher.name} className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <p className="font-bold text-lg text-slate-900">{teacher.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{teacher.role}</p>
                    </div>
                  </div>
                  <Link to={`/teachers`} className="block mt-6 text-center text-xs font-black text-[#00471b] hover:underline uppercase tracking-widest">
                    Conhecer trajetória
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

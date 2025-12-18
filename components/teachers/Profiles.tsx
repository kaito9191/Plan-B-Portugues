
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Add ChevronRight to the lucide-react imports
import { Linkedin, Instagram, ExternalLink, Award, Sparkles, BookOpen, MapPin, ChevronRight } from 'lucide-react';
import { teachers, courses } from '../../data/mockData';
import { Link } from 'react-router-dom';
import TrajectoriesModal from './TrajectoriesModal';

export default function TeacherProfiles() {
  const [show, setShow] = useState(false);
  return (
    <div className="pt-28 pb-20 bg-[#fafdfb]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black text-[#00471b] bg-green-100 rounded-full uppercase tracking-[0.2em]"
          >
            🇧🇷 As Melhores do Brasil
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4">Mestras que Inspiram</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nossas mentoras não apenas ensinam; elas lideram o mercado brasileiro. Conheça as mentes por trás do seu próximo salto na carreira.
          </p>
        </div>

        <div className="space-y-24">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={teacher.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center bg-white rounded-[56px] p-8 lg:p-16 shadow-[0_32px_64px_-16px_rgba(0,71,27,0.08)] border border-green-50`}
            >
              {/* Photo Side */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative z-10 group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#00471b] to-yellow-400 rounded-[48px] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src={teacher.photo} 
                    alt={teacher.name} 
                    className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center justify-center border border-slate-50">
                    <Sparkles size={32} className="text-[#00471b]" />
                  </div>
                </div>
              </div>

              {/* Bio Side */}
              <div className="w-full lg:w-3/5">
                <div className="mb-4 text-[#00471b] font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                  <Award size={18} className="text-yellow-500" /> Especialista Senior
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4">{teacher.name}</h2>
                <h3 className="text-xl text-[#00471b] font-medium mb-8 flex items-center gap-2 italic">
                  {teacher.role} 
                  <span className="inline-block w-8 h-px bg-yellow-400"></span>
                </h3>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                  {teacher.bio}
                </p>

                <div className="mb-10">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Domínios de Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {teacher.specialties.map(spec => (
                      <span key={spec} className="px-5 py-2.5 bg-[#00471b]/5 rounded-2xl text-[#00471b] text-sm font-bold border border-[#00471b]/10">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 items-center mb-12">
                  {teacher.socials.linkedin && (
                    <a href={teacher.socials.linkedin} className="flex items-center gap-2 text-slate-400 hover:text-[#00471b] transition-all transform hover:-translate-y-1">
                      <Linkedin size={22} /> <span className="text-sm font-black uppercase tracking-widest">LinkedIn</span>
                    </a>
                  )}
                  {teacher.socials.instagram && (
                    <a href={teacher.socials.instagram} className="flex items-center gap-2 text-slate-400 hover:text-pink-600 transition-all transform hover:-translate-y-1">
                      <Instagram size={22} /> <span className="text-sm font-black uppercase tracking-widest">Instagram</span>
                    </a>
                  )}
                  {teacher.socials.portfolio && (
                    <a href={teacher.socials.portfolio} className="flex items-center gap-2 text-slate-400 hover:text-yellow-600 transition-all transform hover:-translate-y-1">
                      <ExternalLink size={22} /> <span className="text-sm font-black uppercase tracking-widest">Portfólio</span>
                    </a>
                  )}
                  </div>
                  <button onClick={() => setShow(true)} className="mt-12 px-10 py-5 border-2 border-[#00471b] rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#00471b] hover:text-white transition-all">Ver Trajetórias</button>

                <div className="pt-10 border-t border-slate-100">
                   <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                     <BookOpen size={20} className="text-[#00471b]" /> Formações Conduzidas:
                   </h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {teacher.featuredCourses.map(cid => {
                       const c = courses.find(course => course.id === cid);
                       if (!c) return null;
                       return (
                         <Link 
                            key={cid} 
                            to={`/course/${cid}`} 
                            className="p-4 bg-slate-50 rounded-2xl hover:bg-[#00471b] transition-all border border-transparent hover:border-[#00471b] flex items-center justify-between group"
                          >
                            <span className="text-sm font-black text-slate-700 group-hover:text-[#ffdf00] transition-colors">{c.title}</span>
                            <ChevronRight size={18} className="text-slate-400 group-hover:text-[#ffdf00] transform group-hover:translate-x-1 transition-all" />
                         </Link>
                       );
                     })}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {show && <TrajectoriesModal open={show} onClose={() => setShow(false)} teachers={teachers} courses={courses} />}
    </div>
  );
}

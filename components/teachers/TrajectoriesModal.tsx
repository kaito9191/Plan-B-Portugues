import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Teacher, Course } from '../../types';

type Props = {
  open: boolean;
  onClose: () => void;
  teachers: Teacher[];
  courses: Course[];
};

export default function TrajectoriesModal({ open, onClose, teachers, courses }: Props) {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex(i => Math.min(i + 1, teachers.length - 1));
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, teachers.length]);

  useEffect(() => {
    if (!open) setIndex(0);
  }, [open]);

  if (!open) return null;

  const t = teachers[index];

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50" onClick={onClose} />

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white rounded-3xl shadow-2xl w-[92%] max-w-4xl mx-auto p-6 md:p-12">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setIndex(i => Math.max(i - 1, 0))} aria-label="Anterior" className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100"><ChevronLeft /></button>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Trajetórias</p>
              <h3 className="text-2xl font-serif font-bold">{t.name}</h3>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-500">{index + 1} / {teachers.length}</div>
            <button onClick={() => setIndex(i => Math.min(i + 1, teachers.length - 1))} aria-label="Próxima" className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100"><ChevronRight /></button>
            <button onClick={onClose} aria-label="Fechar" className="p-2 rounded-full hover:bg-slate-100"><X /></button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <img src={t.photo} alt={t.name} className="w-full rounded-2xl object-cover aspect-[3/4] shadow-lg" />
            <div className="mt-4 flex gap-3">
              {t.socials.linkedin && <a href={t.socials.linkedin} className="text-sm text-[#00471b] font-black">LinkedIn</a>}
              {t.socials.instagram && <a href={t.socials.instagram} className="text-sm text-pink-600 font-black">Instagram</a>}
              {t.socials.portfolio && <a href={t.socials.portfolio} className="text-sm text-yellow-600 font-black">Portfólio</a>}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Sobre {t.name.split(' ')[0]}</h4>
            <p className="text-slate-600 mb-4">{t.bio}</p>

            <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-3">Especialidades</h5>
            <div className="flex flex-wrap gap-2 mb-6">
              {t.specialties.map(s => <span key={s} className="px-3 py-1 rounded-full bg-[#00471b]/5 text-[#00471b] text-sm font-bold">{s}</span>)}
            </div>

            <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-3">Formações</h5>
            <div className="space-y-3">
              {t.featuredCourses.map(cid => {
                const c = courses.find(x => x.id === cid);
                if (!c) return null;
                return (
                  <div key={cid} className="p-4 rounded-lg bg-slate-50 flex items-start justify-between">
                    <div>
                      <div className="text-sm font-black text-slate-800">{c.title}</div>
                      <div className="text-sm text-slate-500">{c.duration} • R$ {c.price}</div>
                    </div>
                    <a href="#contact" className="ml-4 text-[#00471b] font-black">Contato</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

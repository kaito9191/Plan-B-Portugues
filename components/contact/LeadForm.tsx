
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MessageSquare, Mail, MapPin } from 'lucide-react';
import { courses } from '../../data/mockData';

export default function LeadForm({ wide = true }: { wide?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className={`${wide ? '' : ''}`}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-black text-slate-700 uppercase tracking-widest">Nome Completo</label>
                <input id="name" name="name" required type="text" placeholder="Ex: Ana Souza" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-black text-slate-700 uppercase tracking-widest">Seu E-mail</label>
                <input id="email" name="email" required type="email" placeholder="ana@exemplo.com" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-black text-slate-700 uppercase tracking-widest">WhatsApp</label>
              <input id="phone" name="phone" required type="tel" placeholder="(11) 99999-9999" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
            </div>

            <div className="space-y-2">
              <label htmlFor="course" className="text-xs font-black text-slate-700 uppercase tracking-widest">Curso Desejado</label>
              <select aria-label="Curso desejado" id="course" name="course" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all bg-white font-bold text-slate-600">
                <option>Quero uma consultoria de carreira</option>
                {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-black text-slate-700 uppercase tracking-widest">O que você busca?</label>
              <textarea id="message" name="message" rows={4} placeholder="Conte um pouco sobre seus objetivos..." className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all resize-none font-medium"></textarea>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className={`w-full py-5 bg-[#00471b] text-[#ffdf00] rounded-2xl font-black uppercase tracking-widest hover:bg-green-900 transition-all shadow-xl flex items-center justify-center gap-3 ${loading ? 'opacity-70' : ''}`}
            >
              {loading ? 'ENVIANDO...' : <><Send size={20} /> QUERO MEU SUCESSO</>}
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sua privacidade é nossa prioridade absoluta.</p>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16 bg-slate-50 p-12 rounded-[28px]"
            role="status"
            aria-live="polite"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 italic">Recebemos seu pedido!</h3>
            <p className="text-slate-600 mb-10 text-lg">Em até 24h uma de nossas consultoras entrará em contato com você. Prepare-se para decolar!</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[#00471b] font-black hover:underline uppercase tracking-widest text-sm"
            >
              ENVIAR OUTRA MENSAGEM
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

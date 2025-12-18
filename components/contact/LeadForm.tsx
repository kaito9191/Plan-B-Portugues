
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MessageSquare, Mail, MapPin } from 'lucide-react';
import { courses } from '../../data/mockData';

export default function LeadForm() {
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
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 italic">Vamos brilhar juntos?</h1>
          <p className="text-xl text-slate-600 mb-12">Dúvidas sobre o melhor programa para sua carreira? Nosso time de especialistas brasileiros está aqui para te guiar.</p>
          
          <div className="space-y-10">
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#00471b] flex-shrink-0 group-hover:bg-[#00471b] group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900">WhatsApp Direto</h4>
                <p className="text-slate-500 mb-2">Atendimento de segunda a sexta, das 9h às 18h.</p>
                <a href="#" className="text-[#00471b] font-black hover:underline">+55 (11) 98765-4321</a>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#00471b] flex-shrink-0 group-hover:bg-[#00471b] group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900">E-mail Acadêmico</h4>
                <p className="text-slate-500 mb-2">Para empresas e parcerias institucionais.</p>
                <a href="mailto:contato@lumina.com.br" className="text-[#00471b] font-black hover:underline">contato@lumina.com.br</a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-10 bg-[#00471b] rounded-[40px] text-white relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <MapPin size={24} className="text-yellow-400" /> Onde estamos
               </h4>
               <p className="text-green-100 mb-8 opacity-80 font-medium">Base em São Paulo - Hub de Inovação Paulista</p>
               <div className="w-full h-40 bg-white/10 rounded-3xl flex items-center justify-center text-yellow-400 font-black uppercase tracking-widest italic border border-white/10 backdrop-blur-md">
                 Mapa Interativo
               </div>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 blur-[80px] rounded-full"></div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Nome Completo</label>
                    <input required type="text" placeholder="Ex: Ana Souza" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Seu E-mail</label>
                    <input required type="email" placeholder="ana@exemplo.com" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">WhatsApp</label>
                  <input required type="tel" placeholder="(11) 99999-9999" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all font-medium" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Curso Desejado</label>
                  <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all bg-white font-bold text-slate-600">
                    <option>Quero uma consultoria de carreira</option>
                    {courses.map(c => <option key={c.id}>{c.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">O que você busca?</label>
                  <textarea rows={4} placeholder="Conte um pouco sobre seus objetivos..." className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00471b] outline-none transition-all resize-none font-medium"></textarea>
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
                className="text-center py-16"
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
      </div>
    </div>
  );
}

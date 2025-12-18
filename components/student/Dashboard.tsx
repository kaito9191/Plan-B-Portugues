
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Download, PlayCircle, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { courses } from '../../data/mockData';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const enrolledIds = ['c1', 'c2'];
  const myCourses = courses.filter(c => enrolledIds.includes(c.id));

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-20 flex items-center justify-center bg-[#00471b]/5 px-4 min-h-[80vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl w-full max-w-md border border-slate-100 text-center">
           <div className="w-16 h-16 bg-[#00471b] rounded-2xl flex items-center justify-center text-[#ffdf00] font-black text-2xl mx-auto mb-8">L</div>
           <h2 className="text-3xl font-serif font-bold mb-2">Bem-vinda de volta</h2>
           <p className="text-slate-400 text-sm mb-10 font-medium">Continue sua jornada de transformação.</p>
           
           <form className="space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">E-mail Acadêmico</label>
                <input required type="email" defaultValue="aluno@lumina.com.br" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#00471b] font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Sua Senha</label>
                <input required type="password" defaultValue="senha123" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#00471b] font-medium" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#00471b] text-[#ffdf00] rounded-xl font-black uppercase tracking-widest hover:bg-green-900 transition-all shadow-xl shadow-green-100 mt-4">
                ENTRAR NO PORTAL
              </button>
           </form>
           <p className="mt-8 text-sm text-slate-400 font-medium">Esqueceu a senha? <a href="#" className="text-[#00471b] font-bold">Clique aqui</a></p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center">
            <div className="relative inline-block mb-4">
              <img src="https://i.pravatar.cc/150?u=maria" className="w-24 h-24 rounded-3xl mx-auto border-4 border-yellow-100 object-cover shadow-lg" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            <h4 className="font-bold text-xl text-slate-900">Oi, Maria Silva!</h4>
            <p className="text-[10px] text-green-600 font-black uppercase tracking-widest mt-1">Aluna Premium</p>
          </div>
          
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden font-bold text-sm">
             <button className="w-full flex items-center gap-4 p-5 bg-[#00471b] text-[#ffdf00] border-l-4 border-yellow-400">
                <LayoutDashboard size={20} /> Painel de Estudos
             </button>
             <button className="w-full flex items-center gap-4 p-5 text-slate-500 hover:bg-slate-50 transition-colors">
                <Book size={20} /> Meus Cursos
             </button>
             <button className="w-full flex items-center gap-4 p-5 text-slate-500 hover:bg-slate-50 transition-colors">
                <Settings size={20} /> Configurações
             </button>
             <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-4 p-5 text-rose-500 hover:bg-rose-50 transition-colors border-t border-slate-50">
                <LogOut size={20} /> Sair com Segurança
             </button>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900 italic">Onde paramos?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {myCourses.map(course => (
                <div key={course.id} className="bg-white rounded-[40px] border border-slate-100 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-bold text-lg">{course.title}</div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seu Progresso</span>
                      <span className="text-xs font-black text-[#00471b]">45% CONCLUÍDO</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full mb-8">
                      <div className="bg-gradient-to-r from-[#00471b] to-yellow-400 h-full w-[45%] rounded-full shadow-[0_0_10px_rgba(0,71,27,0.3)]"></div>
                    </div>
                    <div className="flex gap-3">
                       <button className="flex-2 py-3 px-6 bg-[#00471b] text-[#ffdf00] rounded-xl text-xs font-black uppercase tracking-widest hover:bg-green-900 transition-colors flex items-center justify-center gap-2">
                         <PlayCircle size={18} /> Acessar Aula
                       </button>
                       <button className="p-3 border-2 border-slate-100 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-[#00471b] transition-all">
                         <FileText size={20} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-2xl font-serif font-bold mb-8 text-slate-900">Biblioteca Exclusiva</h2>
             <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-50">
                   {[
                     { name: 'Manual do Personal Branding v2.pdf', size: '5.8 MB', type: 'GUIA' },
                     { name: 'Canvas de Proposta de Valor.xlsx', size: '1.2 MB', type: 'PLANILHA' },
                     { name: 'Links Úteis: Comunidade Slack.link', size: '-', type: 'ACESSO' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-6 hover:bg-green-50/30 transition-colors group">
                        <div className="flex items-center gap-5">
                           <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#00471b] group-hover:text-[#ffdf00] transition-all">
                             <FileText size={22} />
                           </div>
                           <div>
                             <p className="text-base font-bold text-slate-800">{item.name}</p>
                             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.size} • {item.type}</p>
                           </div>
                        </div>
                        <button className="p-3 text-[#00471b] bg-slate-50 rounded-xl hover:bg-[#ffdf00] hover:text-[#00471b] transition-all">
                          <Download size={22} />
                        </button>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

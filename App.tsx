
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Added ShieldCheck to the list of icons imported from lucide-react
import { Menu, X, BookOpen, Users, Mail, User as UserIcon, ChevronRight, Star, Sun, Coffee, Globe, Trophy, ShieldCheck } from 'lucide-react';
import { courses, teachers } from './data/mockData';
import Catalog from './components/courses/Catalog';
import CourseDetail from './components/courses/CourseDetail';
import TeacherProfiles from './components/teachers/Profiles';
import LeadForm from './components/contact/LeadForm';
import Dashboard from './components/student/Dashboard';

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const base = "px-8 py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs transition-all duration-500 flex items-center justify-center gap-3";
  const variants: any = {
    primary: "bg-[#ffdf00] text-[#00471b] hover:bg-[#00471b] hover:text-[#ffdf00] shadow-[0_20px_40px_-10px_rgba(255,223,0,0.4)] hover:-translate-y-1",
    secondary: "bg-[#00471b] text-white hover:bg-[#002e11] shadow-xl",
    outline: "bg-transparent text-[#00471b] border-2 border-[#00471b] hover:bg-[#00471b] hover:text-white",
    ghost: "text-[#00471b] hover:bg-green-50"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Cursos', path: '/catalog', icon: BookOpen },
    { name: 'Professoras', path: '/teachers', icon: Users },
    { name: 'Contato', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-[#00471b]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-[#00471b] rounded-2xl flex items-center justify-center text-[#ffdf00] font-black text-3xl shadow-xl group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-yellow-400 br-rhombus scale-[0.3] opacity-50 group-hover:scale-[0.5] transition-transform"></div>
               L
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 font-serif leading-none">Lumina</span>
              <span className="text-[9px] font-black text-[#00471b] uppercase tracking-[0.4em] flex items-center gap-2 mt-1">
                 Orgulho em Ser Brasil
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10 font-black text-[10px] uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`transition-all hover:text-[#00471b] relative py-2 ${location.pathname === link.path ? 'text-[#00471b]' : 'text-slate-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/student">
              <Button variant="secondary" className="px-6 py-2.5">Portal do Aluno</Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#00471b] p-3 bg-green-50 rounded-2xl">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
    {/* Estrutura da Bandeira do Brasil - Muito mais visível e moderna */}
    <div className="absolute inset-0 z-0 flex">
      <div className="w-1/2 h-full bg-[#fafdfb]"></div>
      <div className="w-1/2 h-full bg-gradient-to-br from-[#00471b] to-[#002e11] relative overflow-hidden">
         {/* Losango Amarelo Ouro */}
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-[#ffdf00] rotate-45 opacity-20"></div>
         {/* Círculo Azul Profundo sutil ao fundo */}
         <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px]"></div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 bg-[#00471b] text-[#ffdf00] rounded-full shadow-xl">
           <Globe size={18} />
           <span className="text-[11px] font-black uppercase tracking-[0.2em]">Liderança Brasileira em Educação</span>
        </div>
        
        <h1 className="text-6xl lg:text-[85px] font-serif font-bold text-slate-900 leading-[0.9] mb-10 tracking-tighter">
          Domine o Mercado <br />
          com a <span className="text-gradient-br italic underline decoration-yellow-400 decoration-4 underline-offset-8">Ginga</span> de <br />
          quem <span className="text-[#00471b]">Vence.</span>
        </h1>
        
        <p className="text-2xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
          Transformamos o talento natural brasileiro em autoridade profissional de elite. Cursos práticos com as maiores referências do país.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Link to="/catalog">
            <Button className="w-full sm:w-auto px-14 py-6 text-sm">Ver Catálogo de Cursos</Button>
          </Link>
          <div className="flex items-center gap-4 px-4 text-slate-400 font-bold text-sm">
             <Trophy className="text-[#00471b]" /> +15 mil alunos formados
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative lg:h-[700px] flex items-center justify-center"
      >
        {/* Container da Imagem com as cores da bandeira integradas no design do card */}
        <div className="relative w-full max-w-[500px] z-10">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00471b] via-[#ffdf00] to-blue-700 rounded-[60px] blur-2xl opacity-30"></div>
          
          <div className="relative bg-white p-3 rounded-[50px] shadow-2xl border border-slate-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Mestra Lumina" 
              className="w-full h-full object-cover rounded-[40px]" 
            />
            {/* Overlay de gradiente para legibilidade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00471b] via-[#00471b]/40 to-transparent"></div>
            
            {/* Badge de Certificação Brasil */}
            <div className="absolute top-10 right-10 bg-[#ffdf00] text-[#00471b] p-4 rounded-3xl shadow-xl flex flex-col items-center">
               <ShieldCheck size={28} />
               <span className="text-[8px] font-black uppercase mt-1">Premium</span>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
               <p className="text-white text-xl font-bold font-serif leading-tight mb-2">Beatriz Cavalcanti</p>
               <p className="text-[#ffdf00] text-[10px] font-black uppercase tracking-widest">Branding & Estratégia Tropical</p>
            </div>
          </div>
        </div>

        {/* Elemento Decorativo: O Losango da Bandeira (Muito mais visível agora) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffdf00] br-rhombus opacity-10 -z-0 rotate-12"></div>
      </motion.div>
    </div>
    
    {/* Faixa Inferior com as cores da bandeira */}
    <div className="absolute bottom-0 left-0 w-full h-2 flex">
       <div className="flex-grow bg-[#00471b]"></div>
       <div className="w-32 bg-[#ffdf00]"></div>
       <div className="w-16 bg-blue-800"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#002e11] text-white pt-24 pb-12 px-6 overflow-hidden relative">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-8 text-[#ffdf00]">
            <div className="w-12 h-12 bg-[#ffdf00] rounded-2xl flex items-center justify-center text-[#00471b] font-black text-2xl">L</div>
            <span className="text-3xl font-black font-serif italic text-white">Lumina</span>
          </div>
          <p className="max-w-sm text-lg text-white/60 font-medium mb-10 leading-relaxed">
            A academia que traduz o potencial brasileiro em carreiras de sucesso global. Nosso compromisso é com a sua evolução.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#ffdf00] transition-colors">{social}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-[#ffdf00] mb-8">Navegação</h4>
          <ul className="space-y-4 text-sm font-bold text-white/40">
            <li><Link to="/catalog" className="hover:text-white">Cursos Disponíveis</Link></li>
            <li><Link to="/teachers" className="hover:text-white">Time de Mestras</Link></li>
            <li><Link to="/student" className="hover:text-white">Portal do Aluno</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-[#ffdf00] mb-8">Academia</h4>
          <p className="text-sm font-bold text-white/40 leading-relaxed">
            Sede Central São Paulo<br />
            Hub Rio de Janeiro<br />
            100% On-line para o Brasil
          </p>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Lumina • A Força da Educação Brasileira</p>
        <div className="flex gap-2 opacity-50">
           <div className="w-8 h-5 bg-[#00471b] rounded-sm"></div>
           <div className="w-8 h-5 bg-[#ffdf00] rounded-sm"></div>
           <div className="w-8 h-5 bg-blue-800 rounded-sm"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-[#ffdf00] selection:text-[#00471b]">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/teachers" element={<TeacherProfiles />} />
            <Route path="/contact" element={<LeadForm />} />
            <Route path="/student" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

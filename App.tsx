import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, BookOpen, Users, Mail, ChevronRight, Star, Globe, 
  Trophy, ShieldCheck, Video, MessageSquare, CheckCircle2, 
  Target, Zap, ArrowRight, PlayCircle, Sparkles, TrendingUp, MapPin
} from 'lucide-react';
import { courses, teachers } from './data/mockData';
import LeadForm from './components/contact/LeadForm';

// --- COMPONENTES UI MODERNOS ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00471b]/5 border border-[#00471b]/10 text-[#00471b] text-[10px] font-bold uppercase tracking-widest mb-6">
    <Sparkles size={12} className="text-yellow-500" /> {children}
  </div>
);

const SectionHeading = ({ subtitle, title, centered = false }: any) => (
  <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
    <p className="text-[#00471b] font-black text-xs uppercase tracking-[0.4em] mb-4">{subtitle}</p>
    <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-none">{title}</h2>
  </div>
);

// --- NAVEGACIÓN (Glassmorphism) ---
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<'home'|'about'|'courses'|'teachers'|'contact'|'portal'>('home');

  useEffect(() => {
    const sections = ['home','about','courses','teachers','contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(id as any);
        });
      }, { threshold: 0.4 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[32px] px-8 h-20 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00471b] rounded-xl flex items-center justify-center text-[#ffdf00] font-black text-xl">L</div>
          <span className="text-xl font-black font-serif italic">Lumina</span>
        </a>
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <a href="#home" className={`hover:text-[#00471b] ${active === 'home' ? 'text-[#00471b]' : ''}`}>Inicio</a>
          <a href="#about" className={`hover:text-[#00471b] ${active === 'about' ? 'text-[#00471b]' : ''}`}>Sobre</a>
          <a href="#courses" className={`hover:text-[#00471b] ${active === 'courses' ? 'text-[#00471b]' : ''}`}>Cursos</a>
          <a href="#teachers" className={`hover:text-[#00471b] ${active === 'teachers' ? 'text-[#00471b]' : ''}`}>Mentoras</a>
          <a href="#contact" className={`hover:text-[#00471b] ${active === 'contact' ? 'text-[#00471b]' : ''}`}>Contato</a>
          <a href="#portal" className={`bg-[#00471b] text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform ${active === 'portal' ? 'ring-2 ring-[#ffdf00]/30' : ''}`}>Portal</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#00471b]"><Menu /></button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-md mx-auto shadow-lg">
          <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-widest text-slate-600">
            <a href="#home" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="#courses" onClick={() => setIsOpen(false)}>Cursos</a>
            <a href="#teachers" onClick={() => setIsOpen(false)}>Mentoras</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contato</a>
            <a href="#portal" onClick={() => setIsOpen(false)} className="bg-[#00471b] text-white px-4 py-2 rounded-md text-center">Portal</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- SECCIÓN HERO (Potencia Visual) ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-36 pb-44 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f8ef] via-white to-[#eaf4ff] -z-10" />
        <div className="absolute -left-40 -top-28 w-[28rem] h-[28rem] bg-[#e6f9ec] rounded-full blur-3xl opacity-70 -z-20"></div>
        <div className="absolute -right-40 -bottom-28 w-[28rem] h-[28rem] bg-[#fff6d6] rounded-full blur-3xl opacity-50 -z-20"></div>
        <div className="absolute -left-10 top-1/3 w-72 h-72 bg-[#dff3ff] rounded-full blur-3xl opacity-40 -z-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Badge>Liderança Brasileira em Educação</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-serif font-bold text-slate-900 leading-[0.9] mb-6 tracking-tighter">
              A Arte de <span className="text-[#00471b] italic">Vencer</span> no Mercado
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-2xl font-medium leading-relaxed">
              Treinamentos práticos, entregues por especialistas do Brasil, pensados para profissionais e iniciantes que querem resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#courses">
                <button aria-label="Ver cursos" className="px-8 py-4 bg-[#00471b] text-[#ffdf00] rounded-[20px] font-black uppercase text-xs tracking-widest shadow-lg hover:scale-105 transition-all">Ver Cursos</button>
              </a>
              <a href="#contact">
                <button aria-label="Fale conosco" className="px-6 py-4 border-2 border-[#00471b] rounded-[20px] font-black uppercase text-xs tracking-widest hover:bg-[#00471b] hover:text-[#ffdf00] transition-all">Fale com a equipe</button>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <motion.div style={{ y: y1 }} className="relative z-10">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00471b] via-[#ffdf00] to-blue-500 rounded-[60px] blur-3xl opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" className="rounded-[50px] border-[12px] border-white shadow-2xl" alt="Lumina Hero" />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <TrendingUp className="text-green-500" />
                <span className="text-3xl font-black">98%</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aprovação Profissional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SECCIÓN METODOLOGÍA (Bento Grid) ---
const Methodology = () => (
  <section id="about" className="py-40 bg-white relative overflow-hidden">
    <div className="absolute -left-44 -top-24 w-[28rem] h-[28rem] bg-[#e9f7ec] rounded-full blur-3xl opacity-70 -z-10"></div>
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading subtitle="Nosso Diferencial" title="Um Método Dual" centered />
      <p className="text-center text-slate-500 mb-12 max-w-3xl mx-auto">Nossa missão é tornar seu talento aplicável ao mercado — com aulas práticas, acompanhamento e projetos reais para seu portfólio.</p>
      
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-slate-50 rounded-[28px] p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="max-w-md relative z-10">
            <h3 className="text-4xl font-serif font-bold mb-6">Inmersão Técnica Profunda</h3>
            <p className="text-slate-500 mb-8">Não ensinamos apenas teoria. Ensinamos a estratégia real usada nas maiores agências e empresas do Brasil.</p>
            <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#00471b]">Descubra como <ArrowRight size={16} /></button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffdf00]/10 -rotate-12 translate-x-20 group-hover:rotate-0 transition-transform"></div>
        </div>
        
        <div className="lg:col-span-4 bg-[#00471b] text-white rounded-[28px] p-8 flex flex-col justify-center items-center text-center">
          <Video size={48} className="mb-6 text-[#ffdf00]" />
          <h3 className="text-3xl font-serif font-bold mb-4">Aulas Ao Vivo</h3>
          <p className="text-green-100 opacity-60 text-sm">Feedback instantâneo das maiores mentes do mercado.</p>
        </div>
        
        <div className="lg:col-span-4 bg-yellow-400 rounded-[28px] p-8 flex flex-col justify-center">
          <Globe size={48} className="mb-6 text-[#00471b]" />
          <h3 className="text-3xl font-serif font-bold mb-4 text-[#00471b]">Rede Nacional</h3>
          <p className="text-[#00471b]/60 text-sm">Conecte-se com alunos e profissionais de todo o Brasil.</p>
        </div>
        
        <div className="lg:col-span-8 bg-slate-50 rounded-[28px] p-8 flex items-center gap-8">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-[#00471b] shadow-sm"><ShieldCheck size={40} /></div>
          <div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Certificação de Elite</h3>
            <p className="text-slate-500 text-sm">Selo Lumina de Excelência, reconhecido pelo mercado de branding nacional.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Course card with expandable description (accessible)
const CourseCard = ({ c }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="group bg-white rounded-[28px] p-4 border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
      <div className="relative h-64 rounded-[20px] overflow-hidden mb-6">
        <img src={c.thumbnail} className="w-full h-full object-cover" alt={c.title} />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">{c.duration}</span>
        </div>
      </div>
      <p className="text-[#00471b] font-black text-[10px] uppercase tracking-[0.3em] mb-2">{c.category}</p>
      <h4 className="text-2xl font-serif font-bold mb-3">{c.title}</h4>
      <p className={`text-slate-500 text-sm mb-4 ${open ? '' : 'line-clamp-3'}`}>{c.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-[10px] font-black uppercase text-slate-400">Valor</span>
          <div className="text-2xl font-black text-slate-900">R$ {c.price}</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="text-[#00471b] font-black uppercase text-xs tracking-widest">{open ? 'Menos' : 'Ver mais'}</button>
          <a href="#contact" className="w-12 h-12 bg-[#00471b] text-[#ffdf00] rounded-2xl flex items-center justify-center shadow-xl"><ChevronRight /></a>
        </div>
      </div>
    </article>
  );
};

// --- SECCIÓN CURSOS (Visuales Premium) ---
const PopularCourses = () => (
  <section id="courses" className="py-40 bg-slate-50 relative overflow-hidden">
    <div className="absolute -right-44 -top-24 w-[28rem] h-[28rem] bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10"></div>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <SectionHeading subtitle="Explore as Trilhas" title="Nossas Formações" />
        <a href="#courses" className="mb-20 text-[#00471b] font-black text-xs uppercase tracking-widest border-b-2 border-[#00471b] pb-2">Ver Catálogo Completo</a>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {courses.slice(0, 3).map((c) => (
          <motion.div key={c.id} whileHover={{ y: -8 }} className="transition-transform">
            <CourseCard c={c} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => (
  <main className="bg-white">
    <Hero />
    <Methodology />

    <section id="teachers" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="As Mentoras" title="Mentes que Lideram" />
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">Não somos apenas uma escola. Somos um hub de conhecimento liderado por quem está na linha de frente do mercado.</p>
            <div className="space-y-6">
              {['Didática Prática', 'Networking Direto', 'Consultoria de Carreira'].map(text => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"><CheckCircle2 size={14} /></div>
                  <span className="font-bold text-slate-900">{text}</span>
                </div>
              ))}
            </div>
            <a href="#teachers">
              <button className="mt-12 px-10 py-5 border-2 border-[#00471b] rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#00471b] hover:text-white transition-all">Ver Trajetórias</button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {teachers.map((t, i) => (
              <img key={t.id} src={t.photo} className={`w-full aspect-[3/4] object-cover rounded-[40px] shadow-xl ${i % 2 !== 0 ? 'translate-y-12' : ''}`} alt={t.name} />
            ))}
          </div>
        </div>
      </div>
    </section>

    <PopularCourses />

    <section className="py-44 text-center bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter">Pronto para <br />o <span className="text-[#00471b] italic">Sucesso?</span></h2>
        <a href="#contact">
          <button className="px-16 py-8 bg-[#00471b] text-[#ffdf00] rounded-[32px] font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:scale-110 transition-all flex items-center gap-4 mx-auto">
            Garanta sua vaga <Sparkles />
          </button>
        </a>
      </div>
    </section>
  </main>
);

const ContactSection = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-44 bg-gradient-to-tr from-[#e9f7ec] to-white relative overflow-hidden">
      <div className="absolute -right-24 -top-12 w-96 h-96 bg-[#ffdf00]/12 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={container} className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div variants={item} className="pt-6">
            <SectionHeading subtitle="Fale Conosco" title="Contato" centered={false} />
            <p className="text-lg text-slate-600 mb-8">Se preferir, escolha uma das formas abaixo — nosso time responde rápido e com atenção personalizada.</p>

            <div className="space-y-8">
              <motion.div variants={item} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-[#00471b] flex-shrink-0">
                  <MessageSquare size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">WhatsApp Direto</h4>
                  <p className="text-slate-500 mb-2">Atendimento de segunda a sexta, das 9h às 18h.</p>
                  <a href="#" className="text-[#00471b] font-black hover:underline">+55 (11) 98765-4321</a>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-[#00471b] flex-shrink-0">
                  <Mail size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">E-mail Acadêmico</h4>
                  <p className="text-slate-500 mb-2">Para empresas e parcerias institucionais.</p>
                  <a href="mailto:contato@lumina.com.br" className="text-[#00471b] font-black hover:underline">contato@lumina.com.br</a>
                </div>
              </motion.div>

              <motion.div variants={item} className="mt-4 p-8 bg-[#00471b] rounded-[32px] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin size={22} className="text-yellow-400" /> Onde estamos</h4>
                  <p className="text-green-100 mb-6 opacity-80 font-medium">Base em São Paulo - Hub de Inovação Paulista</p>
                  <div className="w-full h-40 bg-white/10 rounded-3xl flex items-center justify-center text-yellow-400 font-black uppercase tracking-widest italic border border-white/10 backdrop-blur-md">Mapa Interativo</div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 blur-[80px] rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item} className="pt-6">
            <LeadForm wide />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#002e11] text-white pt-32 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
        <div className="max-w-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#ffdf00] text-[#00471b] rounded-xl flex items-center justify-center font-black text-2xl">L</div>
            <span className="text-4xl font-black font-serif italic">Lumina</span>
          </div>
          <p className="text-white/40 font-medium text-lg leading-relaxed">Desenvolvendo a autoridade brasileira com excelência global.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 uppercase tracking-[0.2em] font-black text-[10px]">
          <div className="space-y-6">
            <p className="text-yellow-400">Plataforma</p>
            <ul className="space-y-4 opacity-40">
              <li>Cursos</li>
              <li>Mentoria</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-yellow-400">Suporte</p>
            <ul className="space-y-4 opacity-40">
              <li>FAQ</li>
              <li>Termos</li>
              <li>Privacidade</li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-yellow-400">Social</p>
            <ul className="space-y-4 opacity-40">
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/5 pt-8 pb-6">
        <div className="text-sm">Tem dúvidas? <a href="#contact" className="text-yellow-400 font-black hover:underline">Fale conosco</a></div>
        <div className="space-x-4 opacity-90">
          <a aria-label="Instagram" href="#" className="text-yellow-400">Instagram</a>
          <a aria-label="LinkedIn" href="#" className="ml-4">LinkedIn</a>
        </div>
      </div>
      <div className="text-center pt-10 border-t border-white/5 opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2023 Lumina Academia • Orgulho em Ser Brasil
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
      <div className="min-h-screen flex flex-col selection:bg-[#ffdf00] selection:text-[#00471b] scroll-smooth">
        <a href="#home" className="sr-only focus:not-sr-only z-50 fixed top-4 left-4 bg-white/90 px-4 py-2 rounded-md border border-slate-200">Saltar al conteúdo</a>
        <Navigation />
        <main className="flex-grow">
          <Home />
          <ContactSection />
        </main>
        <Footer />
      </div>
  );
}
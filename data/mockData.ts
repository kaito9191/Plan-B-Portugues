
import { Course, Teacher, CourseLevel, CourseStatus } from '../types';

export const teachers: Teacher[] = [
  {
    id: 't1',
    name: 'Beatriz "Bia" Cavalcanti',
    role: 'Mestra em Branding & Axé nos Negócios',
    bio: 'Nascida em Salvador e lapidada no mercado de São Paulo, Bia traz a mistura perfeita entre estratégia rigorosa e a energia vibrante do Brasil. Já posicionou marcas que hoje são ícones da nossa cultura.',
    specialties: ['Personal Branding', 'Marketing Sensorial', 'Estratégia Tropical'],
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: '#',
      instagram: '#',
      portfolio: '#'
    },
    featuredCourses: ['c1', 'c3']
  },
  {
    id: 't2',
    name: 'Tainá Guajajara',
    role: 'Designer de Experiências & Futuro Ancestral',
    bio: 'Tainá une tecnologia de ponta com design afetivo. Sua missão é criar produtos digitais que tenham a alma brasileira: acolhedores, coloridos e extremamente eficientes.',
    specialties: ['UX Design', 'Design Thinking', 'Inovação Social'],
    photo: 'https://images.unsplash.com/photo-1590649662133-d523a38e878c?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: '#',
      portfolio: '#'
    },
    featuredCourses: ['c2']
  }
];

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'Marca com Borogodó',
    subtitle: 'O segredo da autoridade que encanta e fideliza o público brasileiro.',
    category: 'Marketing',
    level: CourseLevel.INTERMEDIATE,
    status: CourseStatus.OPEN,
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    price: 997,
    duration: '8 semanas',
    teacherId: 't1',
    description: 'Aprenda a criar uma marca pessoal que não apenas vende, mas brilha. Um mergulho na psicologia do consumidor brasileiro e no poder da nossa narrativa única.',
    objectives: [
      'Descobrir seu diferencial competitivo com alma.',
      'Criar um ecossistema de conteúdo apaixonante.',
      'Dominar o networking com a simpatia que abre portas.'
    ],
    program: [
      { title: 'Módulo 1: A Essência do Brilho', description: 'O que te torna único no mercado.' },
      { title: 'Módulo 2: Storytelling Tropical', description: 'Contando histórias que conectam de verdade.' },
      { title: 'Módulo 3: Autoridade no LinkedIn e Além', description: 'Posicionamento estratégico de elite.' }
    ]
  },
  {
    id: 'c2',
    title: 'UX Design: Ginga e Tecnologia',
    subtitle: 'Projete experiências digitais fluidas e apaixonantes.',
    category: 'Design',
    level: CourseLevel.BEGINNER,
    status: CourseStatus.OPEN,
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    price: 1450,
    duration: '14 semanas',
    teacherId: 't2',
    description: 'O design centrado no ser humano levado ao nível brasileiro. Aprenda a equilibrar estética vibrante com funcionalidade absoluta.',
    objectives: [
      'Dominar ferramentas de prototipagem (Figma).',
      'Realizar pesquisas de campo com usuários reais.',
      'Criar interfaces que celebram a diversidade brasileira.'
    ],
    program: [
      { title: 'Módulo 1: O Coração do Usuário', description: 'Empatia e escuta ativa.' },
      { title: 'Módulo 2: Arquitetura de Informação', description: 'Caminhos fáceis e intuitivos.' },
      { title: 'Módulo 3: Interface com Alma', description: 'Cores, formas e acessibilidade.' }
    ]
  },
  {
    id: 'c3',
    title: 'Aceleração de Negócios: Sucesso com Axé',
    subtitle: 'Estratégias de Growth para quem quer dominar o mercado nacional.',
    category: 'Marketing',
    level: CourseLevel.ADVANCED,
    status: CourseStatus.UPCOMING,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    price: 1890,
    duration: '6 semanas',
    teacherId: 't1',
    description: 'Para quem já tem um negócio e quer escalar com inteligência brasileira. Métricas, experimentos e resultados exponenciais.',
    objectives: [
      'Escalar vendas usando tráfego pago e orgânico.',
      'Otimizar a jornada do cliente (Funil de Vendas).',
      'Liderança de times de alta performance no Brasil.'
    ],
    program: [
      { title: 'Módulo 1: Growth na Prática', description: 'Experimentos que geram lucro.' },
      { title: 'Módulo 2: Fidelização e Comunidade', description: 'Transformando clientes em fãs.' }
    ]
  }
];

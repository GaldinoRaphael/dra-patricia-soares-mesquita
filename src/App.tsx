/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Heart, 
  Leaf, 
  LineChart,
  GraduationCap,
  Stethoscope,
  Brain
} from 'lucide-react';

const CONTENT = {
  nav: { 
    name: "Dra. Patrícia Soares Mesquita",
    links: [
      { name: "Início", href: "#" },
      { name: "Sobre", href: "#sobre" },
      { name: "Serviços", href: "#servicos" },
      { name: "Contato", href: "#contato" }
    ],
    cta: "Agendar Consulta"
  },
  hero: {
    badge: "Psiquiatra Residente",
    title: {
      regular: "Acolhimento &",
      accent: "Cuidado Mental"
    },
    subtitle: "Dra. Patrícia Soares Mesquita • UFSJ 2023",
    tagline: "Onde a ciência encontra a humanidade. Proporcionando um espaço seguro para florescer e resgatar sua qualidade de vida através de uma psiquiatria moderna e empática.",
    primaryCta: "Iniciar Tratamento",
    secondaryCta: "Saiba mais sobre mim",
    photoUrl: "src\\assets\\profile_1.png", // Add a URL here to swap the initials for a real image
    photoAlt: "Dra. Patrícia Soares Mesquita"
  },
  about: {
    heading: "Trajetória e Propósito",
    body: [
      "Minha jornada médica na UFSJ consolidou a visão de que tratar a mente é, antes de tudo, compreender a complexidade do ser humano em sua totalidade.",
      "Como residente em psiquiatria, atuo na interseção entre protocolos clínicos rigorosos e a escuta terapêutica sensível, acreditando que cada paciente carrega uma história única que merece ser honrada."
    ],
    quote: "A saúde mental não é a ausência de conflitos, mas a capacidade de lidar com eles com dignidade e suporte.",
    features: [
      { 
        title: "Formação Sólida", 
        description: "Graduada em Medicina pela UFSJ em 2023, com foco integral em saúde mental comunitária e clínica.",
        icon: GraduationCap
      },
      { 
        title: "Especialização", 
        description: "Residência Médica em Psiquiatria em andamento, garantindo atualização constante com as melhores práticas.",
        icon: Stethoscope
      },
      { 
        title: "Visão Holística", 
        description: "Abordagem biopsicossocial que considera fatores biológicos, psicológicos e sociais no tratamento.",
        icon: Brain
      }
    ]
  },
  services: {
    label: "Metodologia",
    heading: "Pilares do Atendimento",
    items: [
      { 
        title: "Escuta Ativa", 
        description: "Um ambiente seguro onde sua subjetividade é respeitada. A escuta é a ferramenta primordial para o diagnóstico preciso e o vínculo.",
        icon: Heart,
        color: "bg-secondary-container"
      },
      { 
        title: "Tempo de Florescer", 
        description: "Respeito ao ritmo individual. Intervenções farmacológicas e terapêuticas são planejadas para resultados sustentáveis e orgânicos.",
        icon: Leaf,
        color: "bg-primary-container"
      },
      { 
        title: "Rigor Científico", 
        description: "Medicina baseada em evidências. Tratamentos atualizados conforme as diretrizes internacionais de psiquiatria clínica.",
        icon: LineChart,
        color: "bg-tertiary-container"
      }
    ]
  },
  contact: {
    heading: "Vamos dar o próximo passo juntos?",
    cta: "Estou disponível para consultas presenciais e online. Sua jornada de autoconhecimento e equilíbrio começa com uma conversa.",
    whatsappCta: "Agendar via WhatsApp",
    emailCta: "Enviar E-mail",
    quote: "Cuidar de si é o ato mais corajoso de liberdade.",
    email: "contato@drapatriciamesquita.com.br",
    phone: "(32) 99999-9999"
  },
  footer: { 
    name: "Dra. Patrícia Soares Mesquita",
    tagline: "Psiquiatria humanizada e fundamentada em ciência. Atendimento em São João del-Rei e Online.",
    copyright: "© 2025 Dra. Patrícia Soares Mesquita. CRM-XX 0000. Todos os direitos reservados.",
    credit: "Desenvolvido com propósito."
  }
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen hero-pattern">
      {/* Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 glass rounded-full px-8 py-4 shadow-sm transition-all duration-500 hover:shadow-lg">
        <nav className="flex justify-between items-center w-full">
          <div className="text-xl font-bold tracking-tight text-primary font-serif">
            {CONTENT.nav.name}
          </div>
          <div className="hidden md:flex items-center gap-10">
            {CONTENT.nav.links.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-xs uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-xs uppercase tracking-widest hover:bg-tertiary transition-all transform hover:scale-[1.02] active:scale-95 shadow-md">
              {CONTENT.nav.cta}
            </button>
          </div>
          {/* Mobile menu button could go here */}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen pt-48 pb-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">
          <FadeIn direction="right">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-primary/40"></span>
                  <span className="font-label text-xs text-primary uppercase tracking-[0.2em]">{CONTENT.hero.badge}</span>
                </div>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-on-surface leading-[1.05] tracking-tight">
                  {CONTENT.hero.title.regular} <br/>
                  <span className="italic text-primary">{CONTENT.hero.title.accent}</span>
                </h1>
                <p className="font-serif text-2xl text-primary/70 font-light">
                  {CONTENT.hero.subtitle}
                </p>
              </div>
              <p className="font-sans text-xl text-on-surface-variant max-w-xl leading-relaxed font-light">
                {CONTENT.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-6 items-center pt-4">
                <button className="bg-primary text-on-primary text-lg px-12 py-5 rounded-full font-semibold shadow-xl hover:bg-tertiary transition-all duration-300 transform hover:-translate-y-1">
                  {CONTENT.hero.primaryCta}
                </button>
                <a href="#sobre" className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group">
                  {CONTENT.hero.secondaryCta} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </FadeIn>
          
          <div className="relative">
            <FadeIn delay={0.2} direction="left">
              <div className="relative z-10 photo-frame">
                <div className="w-full aspect-[4/5] rounded-full shadow-2xl bg-primary-container/20 border-[16px] border-surface flex items-center justify-center overflow-hidden">
                   {CONTENT.hero.photoUrl ? (
                     <img 
                       src={CONTENT.hero.photoUrl} 
                       alt={CONTENT.hero.photoAlt}
                       className="w-full h-full object-cover transition-all duration-1000" 
                     />
                   ) : (
                     <span className="text-8xl font-serif text-primary/30">PM</span>
                   )}
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-surface-container-low/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <FadeIn>
                  <h2 className="font-serif text-5xl text-on-surface mb-12 relative leading-tight">
                    {CONTENT.about.heading}
                    <span className="absolute -top-10 -left-8 text-primary/10 text-[12rem] font-serif select-none pointer-events-none">"</span>
                  </h2>
                  <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-light">
                    {CONTENT.about.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <div className="p-10 border-l-2 border-primary/30 bg-surface/50 italic font-serif text-primary text-3xl leading-relaxed rounded-r-editorial">
                      "{CONTENT.about.quote}"
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 mt-12 lg:mt-0">
                {CONTENT.about.features.map((feature, i) => (
                  <FadeIn key={i} delay={0.1 * (i + 1)}>
                    <div className={`glass p-10 rounded-editorial space-y-6 hover:shadow-2xl transition-all group ${i === 1 ? 'md:mt-12' : ''}`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-3xl text-on-surface">{feature.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed font-light">{feature.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 space-y-6">
            <FadeIn>
              <span className="font-label text-xs text-primary uppercase tracking-[0.2em]">{CONTENT.services.label}</span>
              <h2 className="font-serif text-5xl text-on-surface mt-4">{CONTENT.services.heading}</h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mt-6"></div>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CONTENT.services.items.map((item, i) => (
              <FadeIn key={i} delay={0.2 * i}>
                <div className="glass p-12 rounded-editorial hover:shadow-2xl transition-all group text-center md:text-left">
                  <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-10 mx-auto md:mx-0 group-hover:-translate-y-2 transition-transform shadow-sm`}>
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl text-on-surface mb-6">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 px-8">
          <FadeIn>
            <div className="max-w-5xl mx-auto bg-primary text-on-primary rounded-[64px] p-12 md:p-20 text-center shadow-[0_30px_100px_rgba(74,100,87,0.3)] relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                {CONTENT.contact.heading}
              </h2>
              <p className="font-sans text-xl text-primary-fixed/80 mb-16 max-w-2xl mx-auto font-light">
                {CONTENT.contact.cta}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
                <a 
                  href={`https://wa.me/${CONTENT.contact.phone.replace(/\D/g, '')}`}
                  className="bg-white text-primary px-12 py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-on-primary transition-all shadow-xl group border border-transparent"
                >
                  <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                  {CONTENT.contact.whatsappCta}
                </a>
                <a 
                  href={`mailto:${CONTENT.contact.email}`}
                  className="border border-white/30 text-white px-12 py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Mail className="w-6 h-6" />
                  {CONTENT.contact.emailCta}
                </a>
              </div>
              <p className="mt-16 font-serif italic opacity-60 text-xl tracking-wide">
                "{CONTENT.contact.quote}"
              </p>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200 bg-surface-container-low/30 mt-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="text-2xl font-bold text-primary font-serif">
                {CONTENT.footer.name}
              </div>
              <p className="text-on-surface-variant max-w-xs font-light text-lg">
                {CONTENT.footer.tagline}
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <h5 className="font-label text-xs uppercase tracking-widest text-primary/60">Navegação</h5>
                <ul className="space-y-4 text-on-surface-variant font-light">
                  {CONTENT.nav.links.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="font-label text-xs uppercase tracking-widest text-primary/60">Legal</h5>
                <ul className="space-y-4 text-on-surface-variant font-light">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
                </ul>
              </div>
              <div className="space-y-6 col-span-2 md:col-span-1">
                <h5 className="font-label text-xs uppercase tracking-widest text-primary/60">Contato</h5>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  {CONTENT.contact.email} <br/>
                  {CONTENT.contact.phone}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
            <p>{CONTENT.footer.copyright}</p>
            <p className="font-serif italic">{CONTENT.footer.credit}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

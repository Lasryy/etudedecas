import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import {
  ArrowUpRight, ArrowRight, Zap, PiggyBank, Shield, Leaf, Puzzle,
  Cog, Layers, Sparkles, MapPin, Building2, Video,
  BadgeCheck, Microscope, HardHat, Factory, Film,
  Wrench, CheckCircle, Users, Linkedin,
  Download
} from 'lucide-react';

/* ─────────────────── Navbar ─────────────────── */
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-flame rounded-lg flex items-center justify-center">
          <Layers className="w-4 h-4 text-white" />
        </div>
        <span className="font-grotesk font-bold text-xl tracking-tight uppercase">La Nouvelle École</span>
        <span className="hidden md:inline-flex items-center gap-1.5 ml-3 text-xs font-medium text-flame bg-flame/10 border border-flame/20 rounded-full px-3 py-1">
          <BadgeCheck className="w-3.5 h-3.5" />
          Certifié Qualiopi
        </span>
      </div>
      <button
        data-tally-open="zxKEz0"
        data-tally-layout="modal"
        data-tally-width="700"
        data-tally-overlay="1"
        data-tally-hide-title="1"
        className="hidden sm:flex items-center gap-2 bg-flame text-white font-grotesk font-bold text-sm px-6 py-2.5 rounded-full hover:bg-flame-light transition-all hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden group"
      >
        <span className="relative z-10">Obtenir un devis</span>
        <ArrowUpRight className="w-4 h-4 relative z-10" strokeWidth={2.5} />
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  </nav>
);

/* ─────────────────── Hero ─────────────────── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-40 pb-20 text-center">
    <div className="cad-grid" />
    <div className="absolute left-[10%] top-[20%] w-32 h-32 rounded-full border border-white/10 opacity-40 pointer-events-none" />
    <div className="absolute right-[15%] bottom-[20%] w-64 h-64 rounded-full border border-dashed border-flame/20 opacity-60 pointer-events-none" />

    <div className="relative z-10 max-w-5xl flex flex-col gap-8 items-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-flame">
        <span className="w-2 h-2 rounded-full bg-flame animate-pulse" />
        Formation certifiante
      </div>

      <h1 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
        Formation{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame to-flame-light">
          Imprimante 3D
        </span>{' '}
        pour votre entreprise
      </h1>

      <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
        Boostez votre entreprise avec l'impression 3D. Un accompagnement sur-mesure de A à Z, de l'initiation à la production.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          data-tally-open="zxKEz0"
          data-tally-layout="modal"
          data-tally-width="700"
          data-tally-overlay="1"
          data-tally-hide-title="1"
          className="flex items-center justify-center gap-2 bg-flame text-white font-grotesk font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-flame/25 hover:bg-flame-light hover:shadow-flame/40 transition-all cursor-pointer"
        >
          Obtenir un devis personnalisé
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <a
          href="#programme"
          className="flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white font-grotesk font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
        >
          Voir le programme
          <Download className="w-4 h-4" strokeWidth={2.5} />
        </a>
      </div>
    </div>

    {/* Hero image band */}
    <div className="relative mt-16 w-full max-w-6xl aspect-[16/7] overflow-hidden rounded-xl border border-white/10 bg-panel group">
      <img
        src="/hero.png"
        alt="Imprimante 3D métal en action"
        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex gap-6">
        <div className="flex flex-col">
          <span className="text-xs text-muted uppercase tracking-wider">Technologie</span>
          <span className="text-lg font-bold text-white">SLM / DMLS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted uppercase tracking-wider">Matériaux</span>
          <span className="text-lg font-bold text-white">Titane, Inconel, Acier</span>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────── Secteurs ─────────────────── */
const secteurs = [
  { icon: Cog, label: "Prototypage & outillage" },
  { icon: Microscope, label: "Médical / Dentaire" },
  { icon: HardHat, label: "BTP / Architecture" },
  { icon: Factory, label: "Industrie / R&D" },
  { icon: Film, label: "Props / Audiovisuel" },
];

const Secteurs = () => (
  <section className="px-6 md:px-12 lg:px-24 py-20 bg-panel/50">
    <div className="max-w-7xl mx-auto text-center">
      <span className="inline-block bg-flame text-white font-grotesk font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
        Secteurs d'application
      </span>
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl tracking-tight mb-12">
        Une technologie pour chaque industrie
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {secteurs.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-panel p-6 hover:border-flame/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-flame">
              <s.icon className="w-7 h-7" />
            </div>
            <span className="font-grotesk font-bold text-sm text-white text-center">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── Benefits (5 exact points) ─────────────────── */
const benefits = [
  { icon: Zap, title: "Accélérez vos prototypes", desc: "Testez rapidement vos idées." },
  { icon: PiggyBank, title: "Réduisez vos coûts", desc: "Produisez à la demande, limitez les stocks." },
  { icon: Puzzle, title: "Personnalisez vos produits", desc: "Offrez des solutions sur-mesure." },
  { icon: Shield, title: "Renforcez votre autonomie", desc: "Fabriquez en interne vos pièces de rechange." },
  { icon: Leaf, title: "Innovez durablement", desc: "Réduisez les déchets." },
];

const Benefits = () => (
  <section className="px-6 md:px-12 lg:px-24 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl uppercase tracking-tight">
          Pourquoi choisir<br /><span className="text-flame">La Nouvelle École ?</span>
        </h2>
        <p className="max-w-md text-muted">Optimisez vos processus de production et gagnez en indépendance grâce à l'impression 3D.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="group relative flex flex-col overflow-hidden rounded-xl bg-panel p-8 border border-white/5 hover:border-flame/50 transition-colors duration-300">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 text-flame">
              <b.icon className="w-6 h-6" />
            </div>
            <h3 className="font-grotesk font-bold text-lg mb-2 text-white">{b.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── Expertise (Logiciels) ─────────────────── */
const logiciels = ["Fusion 360", "SolidWorks", "Rhino", "Blender", "Revit", "SketchUp", "Creo"];

const ExpertiseSection = () => (
  <section className="px-6 md:px-12 lg:px-24 py-20">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl tracking-tight mb-4 text-center">
        Notre expertise logicielle
      </h2>
      <p className="text-muted text-center max-w-xl mx-auto mb-12">
        Nous formons sur les logiciels de CAO/FAO les plus utilisés dans l'industrie.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {logiciels.map((l, i) => (
          <div key={i} className="rounded-xl bg-panel border border-white/10 px-6 py-4 flex items-center gap-3 hover:border-flame/50 transition-colors">
            <Wrench className="w-5 h-5 text-flame" />
            <span className="font-grotesk font-bold text-white">{l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── Modalités ─────────────────── */
const modalities = [
  { icon: MapPin, label: "Dans nos locaux", detail: "40 rue du Château d'Eau, 75010 Paris", badge: "Immersion totale" },
  { icon: Building2, label: "Dans vos locaux", detail: "Formation personnalisée adaptée à vos équipements", badge: "Sur-mesure", popular: true },
  { icon: Video, label: "En distanciel", detail: "Visioconférence interactive en direct", badge: "Flexible" },
];

const Modalites = () => (
  <section id="programme" className="px-6 md:px-12 lg:px-24 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl mb-6">Modalités de formation</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">Une formation adaptée à votre contexte, vos besoins et vos contraintes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modalities.map((m, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center justify-center rounded-xl p-8 text-center transition-transform hover:-translate-y-1 ${m.popular
              ? 'border-2 border-flame bg-flame/5'
              : 'border border-white/10 bg-panel'
              }`}
          >
            {m.popular && (
              <div className="absolute -top-3 bg-flame text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Le plus populaire
              </div>
            )}
            <div className={`mb-6 rounded-full p-4 ${m.popular ? 'bg-flame/20 text-flame' : 'bg-white/5 text-flame'}`}>
              <m.icon className="w-7 h-7" />
            </div>
            <h3 className="font-grotesk font-bold text-lg text-white mb-2">{m.label}</h3>
            <p className="text-sm text-muted mb-4">{m.detail}</p>
            <div className={`mt-auto rounded-full px-3 py-1 text-xs ${m.popular ? 'bg-flame/20 text-flame' : 'bg-white/5 text-white'}`}>
              {m.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── Footer CTA ─────────────────── */
const FooterCTA = () => (
  <footer className="border-t border-white/10 bg-panel pt-20 pb-10 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl mb-6">
          Prêt à former vos équipes ?
        </h2>
        <p className="text-muted max-w-xl mb-8">
          Obtenez un devis personnalisé en quelques clics.
        </p>
        <button
          data-tally-open="zxKEz0"
          data-tally-layout="modal"
          data-tally-width="700"
          data-tally-overlay="1"
          data-tally-hide-title="1"
          className="flex items-center justify-center gap-3 bg-flame text-white font-grotesk font-bold text-lg px-10 py-4 rounded-full shadow-xl shadow-flame/20 hover:scale-105 hover:bg-flame-light transition-all cursor-pointer mb-8"
        >
          Obtenir un devis personnalisé
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-flame" />
            Financement OPCO & CPF
          </span>
          <span className="text-edge">|</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-flame" />
            Aide dossier OPCO
          </span>
          <span className="text-edge">|</span>
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="w-4 h-4 text-flame" />
            Certification Qualiopi
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 border-t border-white/5 pt-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Layers className="w-5 h-5 text-flame" />
            La Nouvelle École
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} La Nouvelle École. Tous droits réservés.</p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="hover:text-flame transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-flame transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-flame transition-colors">Contact</a>
        </div>
        <div className="flex gap-3">
          <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ─────────────────── App ─────────────────── */
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen">

      <Navbar />
      <Hero />
      <Secteurs />
      <Benefits />
      <ExpertiseSection />
      <Modalites />
      <FooterCTA />
    </div>
  );
};

export default App;

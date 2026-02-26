import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import {
  ArrowUpRight, ArrowRight, Zap, PiggyBank, Shield, Leaf, Puzzle,
  Cog, MapPin, Building2, Video, GraduationCap,
  BadgeCheck, Microscope, HardHat, Factory, Film,
  Wrench, CheckCircle, Users, Linkedin,
  Eye, Youtube, Facebook, Instagram,
} from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.41-5.46.02-2.32 1.52-4.46 3.65-5.34 1.25-.53 2.66-.67 4-.41V15.7c-1.1-.06-2.23.27-3.04.99-.8.71-1.14 1.83-.87 2.87.27 1.05 1.14 1.83 2.2 1.94 1.08.11 2.22-.38 2.89-1.22.58-.72.88-1.63.88-2.54V.02h4.21z" />
  </svg>
);

/* ─────────────────── Navbar ─────────────────── */
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-flame rounded-full flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        <span className="font-grotesk font-bold text-xl tracking-tight uppercase">La Nouvelle École</span>
        <span className="hidden md:inline-flex items-center gap-1.5 ml-3 text-xs font-medium text-flame bg-flame/10 border border-flame/20 rounded-full px-3 py-1">
          <BadgeCheck className="w-3.5 h-3.5" />
          Certifié Qualiopi
        </span>
      </Link>
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
        <button
          onClick={() => {
            if (window.__lenis) {
              window.__lenis.scrollTo('#programme', { duration: 1.2 });
            } else {
              document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white font-grotesk font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          Voir le programme
          <Eye className="w-4 h-4" strokeWidth={2.5} />
        </button>
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
            <GraduationCap className="w-5 h-5 text-flame" />
            La Nouvelle École
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} La Nouvelle École. Tous droits réservés.</p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link to="/mentions-legales" className="hover:text-flame transition-colors">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:text-flame transition-colors">Confidentialité</Link>
          <Link to="/contact" className="hover:text-flame transition-colors">Contact</Link>
        </div>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/company/nouvelleecole/" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@la_nouvelle_ecole" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/p/La-Nouvelle-%C3%89cole-Impression-3D-100086016202226/" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/nouvelle_ecole.fr/" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@lanouvelleecole" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-flame transition-colors">
            <TikTokIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ─────────────────── Dummy Pages ─────────────────── */
const DummyPage = ({ title }) => {
  // Scroll to top on mount
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-grotesk font-black text-4xl mb-8 text-white">{title}</h1>
        <div className="text-muted space-y-6 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────── Home Page ─────────────────── */
const Home = () => (
  <>
    <Hero />
    <Secteurs />
    <Benefits />
    <ExpertiseSection />
    <Modalites />
  </>
);

/* ─────────────────── App ─────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
      // Small delay to let the DOM settle, then restart
      requestAnimationFrame(() => {
        lenis.start();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Store globally so ScrollToTop and other components can use it
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<DummyPage title="Mentions légales" />} />
            <Route path="/confidentialite" element={<DummyPage title="Politique de confidentialité" />} />
            <Route path="/contact" element={<DummyPage title="Contactez-nous" />} />
          </Routes>
        </main>
        <FooterCTA />
      </div>
    </Router>
  );
};

export default App;

import { ShieldCheck, Globe } from 'lucide-react';
import { Language } from '../i18n/translations';
import { motion } from 'motion/react';

interface NavbarProps {
  dict: any;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ dict, lang, setLang }: NavbarProps) {
  return (
    <motion.header 
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative z-50 w-full pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden bg-white">
              <img src="/icon.png" alt="Z-enix Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tighter uppercase mt-1">Z-enix</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase text-blue-700 bg-blue-50 border border-blue-200">
              <ShieldCheck className="w-3 h-3" />
              <span>{dict.certified}</span>
            </div>
            
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all text-xs font-bold text-slate-700"
            >
              <Globe className="w-4 h-4" />
              <span>{dict.switchLang}</span>
            </button>

            <a href="#download" className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 transition-all text-xs font-bold uppercase tracking-[0.1em] text-white">
              {dict.download}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

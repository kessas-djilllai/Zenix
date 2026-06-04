import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer({ dict }: { dict: any }) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative z-10 py-10 border-t border-slate-200 mt-16 bg-white/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 overflow-hidden bg-white">
              <img src="/icon.png" alt="Z-enix Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tighter uppercase mt-0.5">Z-enix</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="space-y-1 text-center md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center justify-center md:justify-end gap-2">
                {dict.statusLabel}
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40"></span> 
              </p>
              <p className="text-sm font-bold text-slate-700 flex items-center justify-center md:justify-end gap-2">
                {dict.statusValue}
                <Shield className="w-4 h-4 text-emerald-500" />
              </p>
            </div>
            <div className="space-y-1 text-center md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{dict.developedBy}</p>
              <p className="text-sm tracking-widest font-bold text-slate-700" dir="ltr">{dict.rights} {new Date().getFullYear()}</p>
            </div>
          </div>
          
        </div>
      </div>
    </motion.footer>
  );
}

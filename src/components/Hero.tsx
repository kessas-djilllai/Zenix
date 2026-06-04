import { MonitorSmartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8 text-center ltr:lg:text-left rtl:lg:text-right z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">{dict.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.2] tracking-tight whitespace-pre-line">
              {dict.titleLine1}
              <span className="hidden rtl:inline"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r rtl:bg-gradient-to-l from-blue-600 to-indigo-600 ltr:block">
                {dict.titleLine2}
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {dict.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" id="download">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold transition-all hover:scale-105 hover:bg-slate-800 shadow-md shadow-slate-900/10">
                <MonitorSmartphone className="w-4 h-4" />
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="text-[8px] uppercase tracking-wider opacity-80">{dict.downloadAndroid}</span>
                  <span className="text-sm mt-0.5">{dict.downloadAndroidOS}</span>
                </div>
              </button>
            </div>
            
            <p className="text-sm text-slate-500 font-medium pt-4 tracking-wide">
              {dict.disclaimer}
            </p>
          </motion.div>

          {/* Visual/Icon representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-full z-10 flex justify-center"
          >
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-[340px] h-[480px] bg-white rounded-[48px] p-4 border border-slate-200 shadow-2xl shadow-blue-900/5"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-2xl z-20 border-b border-x border-slate-200"></div>
              <div className="w-full h-full rounded-[36px] bg-slate-50 overflow-hidden flex flex-col p-8 items-center justify-center gap-12 relative border border-slate-100 shadow-inner">
                <div className="absolute top-20 right-0 w-32 h-32 bg-blue-400 rounded-full blur-[80px] opacity-20 pointer-events-none transform-gpu"></div>
                
                {/* Advanced Conceptual App Icon Display */}
                <div className="w-48 h-48 rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-600/20 border border-white/50 z-10 hover:scale-105 transition-transform duration-500 overflow-hidden bg-white/50">
                  <img src="/icon.png" alt="Z-enix App Icon" className="w-full h-full object-cover" />
                </div>
                
                <div className="z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-2 bg-blue-600/20 rounded-full"></div>
                  <div className="text-slate-400 font-bold tracking-widest uppercase text-xs pt-2">Z-enix App</div>
                </div>
                
                <div className="absolute bottom-6 flex justify-around items-center w-32">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { Bell, Layers, Layout, LockKeyhole, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features({ dict }: { dict: any }) {
  const icons = [Layers, Shield, Bell, LockKeyhole, Layout, Zap];
  
  return (
    <section className="py-24 relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-3">{dict.badge}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r rtl:bg-gradient-to-l from-blue-600 to-indigo-600">{dict.titleHighlight}</span>{dict.titleRest}
          </h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.list.map((feature: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white rounded-[36px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-shadow duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight relative z-10">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

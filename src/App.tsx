/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Language, translations } from './i18n/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const dict = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden transition-colors duration-300">
      {/* Abstract Glowing Background Elements */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-400 opacity-[0.15] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-400 opacity-[0.1] rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar dict={dict.nav} lang={lang} setLang={setLang} />
        <main className="flex-grow">
          <Hero dict={dict.hero} />
          <Features dict={dict.features} />
        </main>
        <Footer dict={dict.footer} />
      </div>
    </div>
  );
}

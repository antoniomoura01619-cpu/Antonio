import React from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Sparkles, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { PIZZERIA_INFO, IMAGES } from '../data/pizzas';

interface HeroProps {
  onContactClick: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreMenu }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#EA580C]/15 via-[#E31837]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-5">
              <span>Água Clara · MS</span>
              <span aria-hidden="true">·</span>
              <span>Forno a Lenha Tradicional</span>
              <span aria-hidden="true">·</span>
              <span>Massa de 48h</span>
            </div>

            {/* Magnetic large headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              O calor vivo da lenha. <br className="hidden sm:inline" />
              <span className="text-gradient-fire">A alma</span> de cada fatia.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-8 font-light">
              Na <strong className="text-white font-medium">Sucão Pizzaria</strong>, cada receita começa com fermentação natural de 48 horas e atinge o ápice a mais de 420°C em forno rústico. Crosta aerada, queijo derretido no ponto exato e sucos artesanais feitos na hora.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onContactClick}
                className="px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#EA580C]/25 flex items-center gap-3 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </button>

              <button
                type="button"
                onClick={onExploreMenu}
                className="px-6 py-4 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800 rounded-xl border border-stone-800 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Ver Cardápio Digital</span>
                <span className="text-stone-500 text-xs">↓</span>
              </button>
            </div>

            {/* Trust markers inline */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-stone-800/80 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#EA580C]" />
                <span>Madeira nobre reflorestada</span>
              </div>
              <span className="hidden sm:inline text-stone-700">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#EA580C]" />
                <span>Entrega rápida em Água Clara</span>
              </div>
              <span className="hidden sm:inline text-stone-700">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                <span>Catupiry & Mozzarella legítimos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src={IMAGES.hero}
                alt="Pizzaiolo retirando pizza artesanal crocante com queijo borbulhante do forno a lenha na Sucão Pizzaria"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Bottom Card Over Scrim */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#EA580C] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Forno a 420°C
                  </span>
                  <span className="text-stone-300 font-medium">Água Clara - MS</span>
                </div>
                <p className="text-xs text-stone-300">
                  Massas abertas manualmente com farinha especial de alta hidratação.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Item Feature Strip Below Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#EA580C]/40 transition-colors">
            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Processo</span>
            <div className="text-lg font-display font-semibold text-white mb-1">48 Horas</div>
            <p className="text-xs text-stone-400">Fermentação lenta para máxima leveza e digestão fácil.</p>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#EA580C]/40 transition-colors">
            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Cocção</span>
            <div className="text-lg font-display font-semibold text-white mb-1">Forno a Lenha</div>
            <p className="text-xs text-stone-400">Defumação sutil e crosta napolitana com bordas coroadas.</p>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#EA580C]/40 transition-colors">
            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Ingredientes</span>
            <div className="text-lg font-display font-semibold text-white mb-1">100% Selecionados</div>
            <p className="text-xs text-stone-400">Catupiry original, molho rústico e vegetais frescos diários.</p>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 hover:border-[#EA580C]/40 transition-colors">
            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Exclusivo</span>
            <div className="text-lg font-display font-semibold text-white mb-1">Sucos Especiais</div>
            <p className="text-xs text-stone-400">Os famosos 'Sucões' naturais batidos com fruta de verdade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

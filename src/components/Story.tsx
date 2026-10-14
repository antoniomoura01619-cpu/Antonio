import React from 'react';
import { motion } from 'motion/react';
import { Award, Flame, Heart, Sparkles, Star } from 'lucide-react';
import { IMAGES } from '../data/pizzas';

export const Story: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-[#0C0A09] border-t border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Atmosphere (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
              <img
                src={IMAGES.ambiance}
                alt="Mestre pizzaiolo preparando massa fresca em frente ao forno a lenha na Sucão Pizzaria"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Float quote card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <p className="text-xs italic text-stone-300 font-light leading-relaxed">
                  &ldquo;A pizza perfeita não aceita atalhos. O fogo da lenha não perdoa a pressa e a massa precisa do seu próprio tempo para respirar.&rdquo;
                </p>
                <div className="mt-2 text-[11px] font-semibold text-[#EA580C] uppercase tracking-wider">
                  — Equipe Sucão Pizzaria
                </div>
              </div>
            </div>
          </div>

          {/* Story Narrative & Quantitative Rigor (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-3">
              <span>Tradição & Amor à Gastronomia</span>
              <span aria-hidden="true">·</span>
              <span>Água Clara - MS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-6">
              Nossa Paixão pelo Fogo <br className="hidden sm:inline" />
              e pela Verdadeira Arte da Pizza.
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-10">
              <p>
                A <strong className="text-white font-medium">Sucão Pizzaria</strong> nasceu no coração de Água Clara com um propósito inegociável: levar para a mesa das famílias sul-mato-grossenses o sabor inconfundível do autêntico forno a lenha, sem conservantes e sem fórmulas industriais.
              </p>
              <p>
                Nossa massa passa por um descanso paciente de 48 horas de fermentação natural. O resultado? Uma borda alta e aerada com pequenas bolhas tostadas (&quot;cornicione&quot;), centro fino e crocante, e uma digestibilidade extraordinária que faz você saborear cada fatia com total leveza.
              </p>
              <p>
                E para acompanhar, criamos nossos tradicionais <em>Sucões</em> da casa: frutas frescas selecionadas, batidas na hora e sem miséria, completando o banquete com o frescor que a nossa terra pede.
              </p>
            </div>

            {/* Stats Metrics with Tabular Rigor */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-800">
              <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                  <Award className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Tradição</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                  12+
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Anos em Água Clara</div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                  <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Produção</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                  +8.500
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Pizzas assadas/mês</div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Satisfação</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                  99.4%
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Avaliações 5 estrelas</div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Maturação</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                  48h
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Fermentação natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

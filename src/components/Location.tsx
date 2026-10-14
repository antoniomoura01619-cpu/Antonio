import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Bike, Store } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/pizzas';

export const Location: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Av. Júlio Maia, 1031 B - Centro, Água Clara - MS, 79680-000 Sucão Pizzaria'
  )}`;

  return (
    <section id="localizacao" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-3">
            <span>Visite Nosso Salão ou Peça em Casa</span>
            <span aria-hidden="true">·</span>
            <span>Centro de Água Clara</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Onde a Brasa Acontece
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Estamos estrategicamente localizados na Avenida Júlio Maia, com fácil estacionamento e atendimento ágil tanto para quem retira quanto para delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#14110F] border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#EA580C] mb-3">
                  <div className="p-2.5 rounded-xl bg-[#EA580C]/10 border border-[#EA580C]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Endereço Oficial</h3>
                    <span className="text-xs text-stone-500">Água Clara - Mato Grosso do Sul</span>
                  </div>
                </div>

                <p className="text-sm text-stone-300 font-medium leading-relaxed mb-4 pl-1">
                  {PIZZERIA_INFO.address}
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 border border-stone-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
              </a>
            </div>

            {/* Hours & Contact */}
            <div className="p-6 rounded-2xl bg-[#14110F] border border-stone-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[#EA580C] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Horário de Funcionamento</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Terça a Domingo: das 18h00 às 23h30
                  </p>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    (Segundas-feiras reservadas para manutenção do forno e descanso da equipe)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-800/80">
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[#EA580C] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Telefone & WhatsApp</h4>
                  <p className="text-xs text-stone-300 font-semibold mt-0.5 tabular-nums">
                    {PIZZERIA_INFO.phone}
                  </p>
                  <span className="text-[11px] text-stone-500 block">
                    Linha direta para pedidos rápidos e reservas de mesas
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery coverage highlights */}
            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bike className="w-5 h-5 text-[#EA580C]" />
                <div>
                  <span className="text-white font-medium block">Delivery em toda Água Clara</span>
                  <span>Tempo médio: 35 a 50 min em embalagens térmicas</span>
                </div>
              </div>
              <Store className="w-5 h-5 text-stone-600 hidden sm:block" />
            </div>
          </div>

          {/* Styled Dark Visual Map Preview (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-800 bg-[#14110F] flex flex-col relative min-h-[380px]">
            {/* Interactive styled dark map view */}
            <div className="relative flex-1 w-full bg-stone-950 p-6 flex flex-col justify-between overflow-hidden">
              {/* Decorative map grid lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Map simulated header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-stone-800/80">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-white">Sucão Pizzaria · Ponto Central</span>
                  <span className="text-stone-500">Água Clara - MS</span>
                </div>
                <span className="text-xs text-stone-400 hidden sm:inline">CEP 79680-000</span>
              </div>

              {/* Center Map Beacon */}
              <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#EA580C]/20 border border-[#EA580C] flex items-center justify-center text-[#EA580C] animate-pulse">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-[#EA580C]/30 animate-ping opacity-30" />
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                  Av. Júlio Maia, 1031 B
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 max-w-sm mb-4">
                  Região central de fácil acesso, próximo aos principais comércios e com entrega rápida para todos os bairros.
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg shadow-[#EA580C]/25"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navegar até a Pizzaria</span>
                </a>
              </div>

              {/* Map Footer Bairros */}
              <div className="relative z-10 pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <span>Atendimento presencial & Entrega expressa</span>
                <span>Centro · Primavera · Santos Dumont · Palmeiras</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

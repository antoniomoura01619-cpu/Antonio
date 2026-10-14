import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/pizzas';

export const WhatsAppButton: React.FC = () => {
  const message = 'Olá, equipe da Sucão Pizzaria! Gostaria de fazer um pedido pelo cardápio.';
  const whatsappUrl = `https://wa.me/${PIZZERIA_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet pulse tooltip on desktop */}
      <span className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-stone-200 text-xs font-semibold shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
        Pedir no WhatsApp
      </span>

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp da Sucão Pizzaria"
        className="relative group p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-40 group-hover:opacity-75 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </aside>
  );
};

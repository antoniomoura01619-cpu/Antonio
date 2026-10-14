import React from 'react';
import { PIZZERIA_INFO } from '../data/pizzas';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-stone-800/80 bg-[#080706] text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Wordmark */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-display font-bold text-white tracking-tight">
              <span className="text-[#EA580C]">Sucão</span> Pizzaria
            </span>
            <p className="text-stone-500 mt-1 max-w-sm">
              Tradição no forno a lenha, fermentação lenta de 48h e sucos naturais artesanais em Água Clara - MS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-stone-300 font-medium">
            <a href="#inicio" className="hover:text-[#EA580C] transition-colors">Início</a>
            <a href="#cardapio" className="hover:text-[#EA580C] transition-colors">Cardápio</a>
            <a href="#sobre" className="hover:text-[#EA580C] transition-colors">História</a>
            <a href="#localizacao" className="hover:text-[#EA580C] transition-colors">Localização</a>
            <a href="#contato" className="hover:text-[#EA580C] transition-colors">Contato</a>
          </div>

          {/* Direct Address & Phone */}
          <div className="text-center md:text-right text-stone-500">
            <p className="text-stone-300 font-semibold">{PIZZERIA_INFO.phone}</p>
            <p className="mt-0.5">{PIZZERIA_INFO.address}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-600 text-[11px]">
          <p>© {currentYear} Sucão Pizzaria. Todos os direitos reservados. Água Clara - MS.</p>
          <p>Massa artesanal · Forno a lenha autêntico · Sucos naturais da fruta</p>
        </div>
      </div>
    </footer>
  );
};

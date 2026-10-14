import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, PhoneCall } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/pizzas';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'História', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0A09]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#inicio"
              className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="text-[#EA580C]">Sucão</span>
              <span className="font-light text-stone-200">Pizzaria</span>
            </a>

            {/* Zone 2: 4-5 single-line nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action + Cart trigger */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Cart trigger button */}
              <button
                type="button"
                onClick={onOpenCart}
                aria-label="Abrir pedido digital"
                className="relative p-2.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-800 transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-[#EA580C]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#E31837] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse tabular-nums">
                    {cartCount}
                  </span>
                )}
                <span className="hidden xl:inline text-xs font-semibold text-stone-300">
                  {cartCount === 0 ? 'Pedido' : `${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
                </span>
              </button>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#EA580C]/20 whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Entrar em contato</span>
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
                className="md:hidden p-2.5 text-stone-300 hover:text-white bg-stone-900/80 rounded-lg border border-stone-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/80 backdrop-blur-md flex flex-col pt-24 px-6 pb-8 transition-opacity">
          <div className="flex flex-col gap-5 text-lg font-medium text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-3 border-b border-stone-800/80 hover:text-[#EA580C] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-stone-600 text-xs">→</span>
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-stone-900 border border-stone-800 text-white font-medium flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-[#EA580C]" />
                <span>Ver Pedido Digital ({cartCount})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#E31837] text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
            </div>

            <div className="mt-auto pt-6 text-xs text-stone-500 text-center">
              {PIZZERIA_INFO.address}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

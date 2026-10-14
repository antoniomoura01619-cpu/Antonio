import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Flame, Leaf } from 'lucide-react';
import { MENU_ITEMS } from '../data/pizzas';
import { MenuItem } from '../types';

interface MenuProps {
  onSelectItem: (item: MenuItem) => void;
  onDirectOrder: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectItem, onDirectOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todo o Cardápio' },
    { id: 'tradicionais', label: 'Tradicionais da Brasa' },
    { id: 'especiais', label: 'Especiais da Casa' },
    { id: 'doces', label: 'Doces Forneadas' },
    { id: 'bebidas', label: 'Sucos Naturais & Bebidas' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="cardapio" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-3">
              <span>Cardápio Digital</span>
              <span aria-hidden="true">·</span>
              <span>Forno a Lenha</span>
              <span aria-hidden="true">·</span>
              <span>Água Clara - MS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Sabores Forjados no Fogo
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Receitas autorais e clássicos atemporais, montados com queijos nobres e massa leve de fermentação natural de 48 horas.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por sabor ou ingrediente..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#EA580C] transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#E31837] text-white shadow-md shadow-[#EA580C]/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center text-stone-400 bg-stone-900/30 rounded-2xl border border-stone-800">
            <p className="text-base text-stone-300 mb-1">Nenhum item encontrado para esta busca.</p>
            <p className="text-xs text-stone-500">Tente buscar por termos como &quot;queijo&quot;, &quot;pepperoni&quot;, &quot;suco&quot; ou limpe os filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#14110F] border border-stone-800/80 hover:border-stone-700 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-transparent to-black/20" />

                  {/* Highlight pill text */}
                  {item.highlight && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-stone-200">
                      {item.highlight}
                    </div>
                  )}

                  {/* Attributes */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {item.vegetarian && (
                      <span className="p-1.5 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs" title="Opção Vegetariana">
                        <Leaf className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {item.spicy && (
                      <span className="p-1.5 rounded-md bg-red-950/80 border border-red-800 text-red-400 text-xs" title="Toque Picante">
                        <Flame className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-1.5">
                      <span className="capitalize">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category === 'bebidas' ? 'Bebida Artesanal' : 'Forno a Lenha'}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#EA580C] transition-colors mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>

                    {/* Ingredients list */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.ingredients.slice(0, 3).map((ing) => (
                        <span
                          key={ing}
                          className="text-[11px] px-2 py-0.5 rounded bg-stone-900 border border-stone-800/80 text-stone-400"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 block">
                        {item.priceLarge ? 'A partir de' : 'Valor'}
                      </span>
                      <span className="text-lg font-bold text-white tabular-nums">
                        R$ {item.priceMedium.toFixed(2)}
                      </span>
                      {item.priceLarge && (
                        <span className="text-[11px] text-stone-400 block tabular-nums">
                          Grande: R$ {item.priceLarge.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md shadow-[#EA580C]/15 whitespace-nowrap"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{item.category === 'bebidas' ? 'Adicionar' : 'Personalizar'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { CRUST_OPTIONS } from '../data/pizzas';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const isPizza = item.category !== 'bebidas';
  const [size, setSize] = useState<'media' | 'grande' | 'unica'>(isPizza ? 'grande' : 'unica');
  const [crust, setCrust] = useState(CRUST_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const basePrice = size === 'grande' && item.priceLarge ? item.priceLarge : item.priceMedium;
  const crustPrice = isPizza ? crust.price : 0;
  const singleItemPrice = basePrice + crustPrice;
  const totalPrice = singleItemPrice * quantity;

  const handleConfirm = () => {
    const newCartItem: CartItem = {
      cartId: `${item.id}-${size}-${crust.id}-${Date.now()}`,
      menuItem: item,
      size,
      price: singleItemPrice,
      crust: isPizza ? crust.name : 'Padrão',
      crustPrice,
      notes,
      quantity,
    };

    onAddToCart(newCartItem);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#14110F] border border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-stone-300 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold">
              {item.category === 'tradicionais' ? 'Tradicional Artesanal' : item.category === 'especiais' ? 'Especial da Casa' : item.category === 'doces' ? 'Pizza Doce' : 'Bebida Artesanal'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-stone-300 leading-relaxed">
            {item.description}
          </p>

          {/* Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-2">
                Ingredientes Principais
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-stone-300">
                {item.ingredients.map((ing) => (
                  <span key={ing} className="px-2.5 py-1 bg-stone-900 rounded-md border border-stone-800">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pizza Size Choice */}
          {isPizza && item.priceLarge && (
            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-3">
                1. Escolha o Tamanho
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSize('grande')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    size === 'grande'
                      ? 'border-[#EA580C] bg-[#EA580C]/10 text-white shadow-sm'
                      : 'border-stone-800 bg-stone-900/50 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">Grande (8 fatias)</span>
                    <span className="text-xs font-medium text-[#EA580C]">R$ {item.priceLarge.toFixed(2)}</span>
                  </div>
                  <span className="text-xs text-stone-400 block">Ideal para 3 a 4 pessoas (35cm)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSize('media')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    size === 'media'
                      ? 'border-[#EA580C] bg-[#EA580C]/10 text-white shadow-sm'
                      : 'border-stone-800 bg-stone-900/50 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">Média (6 fatias)</span>
                    <span className="text-xs font-medium text-[#EA580C]">R$ {item.priceMedium.toFixed(2)}</span>
                  </div>
                  <span className="text-xs text-stone-400 block">Ideal para 2 pessoas (30cm)</span>
                </button>
              </div>
            </div>
          )}

          {/* Crust Selection */}
          {isPizza && (
            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-3">
                2. Borda Recheada (Opcional)
              </label>
              <div className="space-y-2">
                {CRUST_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCrust(c)}
                    className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between text-xs sm:text-sm ${
                      crust.id === c.id
                        ? 'border-[#EA580C] bg-[#EA580C]/10 text-white'
                        : 'border-stone-800 bg-stone-900/40 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="font-medium text-stone-400">
                      {c.price === 0 ? 'Inclusa' : `+ R$ ${c.price.toFixed(2)}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Observations */}
          <div>
            <label htmlFor="notes-input" className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2">
              Observações ou Retiradas
            </label>
            <input
              id="notes-input"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: sem cebola, massa bem tostada, caprichar no manjericão..."
              className="w-full px-4 py-3 text-xs sm:text-sm bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-[#EA580C]"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-stone-900/80 border-t border-stone-800 flex items-center justify-between gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-stone-700 rounded-lg bg-stone-950 p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Diminuir quantidade"
              className="p-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-sm font-semibold tabular-nums text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Aumentar quantidade"
              className="p-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleConfirm}
            className={`flex-1 py-3.5 px-4 rounded-xl font-semibold text-sm text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
              addedSuccess
                ? 'bg-emerald-600'
                : 'bg-gradient-to-r from-[#EA580C] to-[#E31837] hover:brightness-110 active:scale-[0.98]'
            }`}
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Adicionado com Sucesso!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Adicionar · R$ {totalPrice.toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

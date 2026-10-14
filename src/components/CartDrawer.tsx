import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { CartItem } from '../types';
import { PIZZERIA_INFO } from '../data/pizzas';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'retirada'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pix');

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 90 ? 0 : 5) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    // Build structured PT-BR message
    const orderLines = items.map((item, idx) => {
      const sizeLabel = item.size === 'grande' ? 'Grande (8 fatias)' : item.size === 'media' ? 'Média (6 fatias)' : '';
      const crustLabel = item.crust && item.crust !== 'Padrão' ? `\n   ↳ Borda: ${item.crust}` : '';
      const notesLabel = item.notes ? `\n   ↳ Obs: "${item.notes}"` : '';
      return `${idx + 1}. *${item.menuItem.name}* (${item.quantity}x)${sizeLabel ? ` - ${sizeLabel}` : ''}${crustLabel}${notesLabel} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    }).join('\n\n');

    const message = `🍕 *NOVO PEDIDO - SUCÃO PIZZARIA*
━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${customerName.trim() || 'Não informado'}
🛵 *Tipo:* ${orderType === 'delivery' ? 'Entrega em Domicílio' : 'Retirada no Balcão'}
${orderType === 'delivery' ? `📍 *Endereço:* ${customerAddress.trim() || 'A combinar'}\n` : ''}💳 *Pagamento:* ${paymentMethod}
━━━━━━━━━━━━━━━━━━━━
📋 *ITENS:*
${orderLines}
━━━━━━━━━━━━━━━━━━━━
💰 *Subtotal:* R$ ${subtotal.toFixed(2)}
🛵 *Taxa de Entrega:* ${deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2)}`}
🔥 *TOTAL:* R$ ${total.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━
_Pedido gerado pelo Cardápio Digital da Sucão Pizzaria._`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PIZZERIA_INFO.phoneRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#14110F] border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl relative">
          {/* Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/50">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#EA580C]" />
              <h2 className="text-lg font-display font-bold text-white">
                Seu Pedido Digital
              </h2>
              <span className="text-xs text-stone-400 tabular-nums">
                ({items.reduce((sum, i) => sum + i.quantity, 0)} itens)
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar carrinho"
              className="p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-4 text-[#EA580C]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-base font-semibold text-stone-200 mb-1">
                  Seu carrinho está vazio
                </h3>
                <p className="text-xs text-stone-400 max-w-xs mb-6">
                  Escolha suas pizzas favoritas com massa de fermentação lenta e monte seu pedido.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-white transition-colors"
                >
                  Explorar Cardápio
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.cartId}
                      className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/90 flex flex-col gap-2 relative"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.menuItem.name}
                          </h4>
                          <div className="text-xs text-stone-400 mt-0.5">
                            {item.size === 'grande' ? 'Grande (8 fatias)' : item.size === 'media' ? 'Média (6 fatias)' : 'Porção Única'}
                            {item.crust && item.crust !== 'Padrão' && ` · ${item.crust}`}
                          </div>
                          {item.notes && (
                            <p className="text-xs text-[#EA580C] italic mt-1">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.cartId)}
                          aria-label={`Remover ${item.menuItem.name}`}
                          className="text-stone-500 hover:text-red-400 p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-stone-800/60">
                        <span className="text-sm font-semibold text-[#EA580C] tabular-nums">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center border border-stone-700 rounded-md bg-stone-950 p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="p-1 text-stone-400 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold tabular-nums text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="p-1 text-stone-400 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                  >
                    Esvaziar pedido
                  </button>
                </div>

                {/* Delivery Options & Details */}
                <div className="pt-4 border-t border-stone-800 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    Modalidade de Entrega
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        orderType === 'delivery'
                          ? 'border-[#EA580C] bg-[#EA580C]/10 text-white'
                          : 'border-stone-800 bg-stone-900/40 text-stone-400'
                      }`}
                    >
                      🛵 Entrega Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('retirada')}
                      className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        orderType === 'retirada'
                          ? 'border-[#EA580C] bg-[#EA580C]/10 text-white'
                          : 'border-stone-800 bg-stone-900/40 text-stone-400'
                      }`}
                    >
                      🏪 Retirar no Balcão
                    </button>
                  </div>

                  <div>
                    <label className="text-xs text-stone-400 block mb-1">Seu Nome</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="text-xs text-stone-400 block mb-1">Endereço e Bairro em Água Clara</label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Rua, número, complemento e bairro"
                        className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs text-stone-400 block mb-1">Forma de Pagamento</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-white focus:outline-none focus:border-[#EA580C]"
                    >
                      <option value="Pix">Pix (Chave rápida no WhatsApp)</option>
                      <option value="Cartão de Crédito">Cartão de Crédito (Maquininha)</option>
                      <option value="Cartão de Débito">Cartão de Débito (Maquininha)</option>
                      <option value="Dinheiro">Dinheiro (Informar troco)</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Subtotals & WhatsApp Order */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-900/90 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Subtotal dos itens</span>
                  <span className="tabular-nums">R$ {subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-stone-400">
                    <span>Taxa de Entrega estimada</span>
                    <span className="tabular-nums">
                      {deliveryFee === 0 ? <strong className="text-emerald-400">Grátis</strong> : `R$ ${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-stone-800">
                  <span>Total do Pedido</span>
                  <span className="text-[#EA580C] tabular-nums">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#EA580C]/25"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Atendimento direto com a equipe Sucão: {PIZZERIA_INFO.phone}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

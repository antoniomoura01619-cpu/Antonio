import React, { useState } from 'react';
import { Phone, MessageSquare, Send, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/pizzas';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Pedido Delivery');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formattedText = `Olá, equipe da *Sucão Pizzaria*! 🍕
Meu nome é: *${name.trim()}*
Telefone/WhatsApp: ${phone.trim() || 'Não informado'}
Assunto: *${serviceType}*
Mensagem:
${message.trim() || 'Gostaria de fazer um pedido ou tirar dúvidas sobre o cardápio.'}

_Enviado pelo site oficial da Sucão Pizzaria._`;

    const encoded = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${PIZZERIA_INFO.phoneRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 relative bg-[#0C0A09] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Human Touch (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-3">
                <span>Atendimento Rápido</span>
                <span aria-hidden="true">·</span>
                <span>Fale Conosco</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
                Estamos Prontos para Acender o Forno
              </h2>
              <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
                Quer tirar dúvidas sobre sabores, reservar mesa para a família ou pedir aquela pizza especial para hoje à noite? Nossa equipe atende com carinho e rapidez.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${PIZZERIA_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Olá! Gostaria de falar com a Sucão Pizzaria.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 hover:border-emerald-600 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-600 text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 block font-medium">WhatsApp Oficial</span>
                    <span className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors tabular-nums">
                      {PIZZERIA_INFO.phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Chamar agora →
                </span>
              </a>

              <a
                href={`tel:+5567996420752`}
                className="w-full p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-stone-800 text-[#EA580C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Ligação Telefônica</span>
                    <span className="text-base font-semibold text-white tabular-nums">
                      {PIZZERIA_INFO.phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Ligar →
                </span>
              </a>
            </div>

            {/* Practical Notes */}
            <div className="p-5 rounded-2xl bg-[#14110F] border border-stone-800/80 space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Atendimento de terça a domingo das 18h00 às 23h30.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Balcão para retirada na Av. Júlio Maia, 1031 B - Centro, Água Clara.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#14110F] border border-stone-800 p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Envie sua Mensagem Direta
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-6 font-light">
              Preencha os campos abaixo e entraremos em contato direto com você pelo WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-1.5">
                    WhatsApp ou Telefone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(67) 9..."
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-1.5">
                  Tipo de Solicitação
                </label>
                <select
                  id="contact-service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#EA580C] transition-colors"
                >
                  <option value="Pedido Delivery">Fazer Pedido Delivery</option>
                  <option value="Retirada no Balcão">Agendar Retirada no Balcão</option>
                  <option value="Reserva de Mesa">Reserva de Mesa no Salão</option>
                  <option value="Dúvida sobre Cardápio / Ingredientes">Dúvida sobre Cardápio ou Ingredientes</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold text-stone-300 uppercase tracking-wider block mb-1.5">
                  Mensagem ou Detalhes do Pedido
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem ou os sabores que você gostaria de pedir..."
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#EA580C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#EA580C] to-[#E31837] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#EA580C]/25"
              >
                <Send className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mensagem preparada! Abrindo conversa direta no WhatsApp...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Story } from './components/Story';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ItemModal } from './components/ItemModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      // Check if identical item (same id, size, crust, notes) exists
      const existingIdx = prev.findIndex(
        (i) =>
          i.menuItem.id === newItem.menuItem.id &&
          i.size === newItem.size &&
          i.crust === newItem.crust &&
          i.notes === newItem.notes
      );

      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const menuElem = document.getElementById('cardapio');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#F5F5F4] relative selection:bg-[#EA580C] selection:text-white">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onContactClick={scrollToContact}
      />

      {/* Main Content Sections (Strict order: inicio -> cardapio -> sobre -> localizacao -> contato) */}
      <main>
        <Hero
          onContactClick={scrollToContact}
          onExploreMenu={scrollToMenu}
        />

        <Menu
          onSelectItem={(item) => setSelectedMenuItem(item)}
          onDirectOrder={(item) => setSelectedMenuItem(item)}
        />

        <Story />

        <Location />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Customization & Addition Modal */}
      <ItemModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

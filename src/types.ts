export type PizzaCategory = 'todos' | 'tradicionais' | 'especiais' | 'doces' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: 'tradicionais' | 'especiais' | 'doces' | 'bebidas';
  description: string;
  priceMedium: number; // Média (6 fatias)
  priceLarge?: number;  // Grande (8 fatias)
  image: string;
  highlight?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  ingredients: string[];
}

export interface CartItem {
  cartId: string;
  menuItem: MenuItem;
  size: 'media' | 'grande' | 'unica';
  price: number;
  crust: string; // Borda (Tradicional, Catupiry, Cheddar)
  crustPrice: number;
  notes: string;
  quantity: number;
}

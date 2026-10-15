import { MenuItem } from '../types';

import heroSucaoFachada from '../assets/images/hero_sucao_fachada_1792078355024.jpg';
import heroPizzaWoodfire from '../assets/images/hero_pizza_woodfire_1791910480684.jpg';
import pizzaMargherita from '../assets/images/pizza_margherita_special_1791910481629.jpg';
import pizzaPepperoni from '../assets/images/pizza_pepperoni_premium_1791910481890.jpg';
import pizzaQuatroQueijos from '../assets/images/pizza_quatro_queijos_1791910482401.jpg';
import salaoInternoSucao from '../assets/images/salao_interno_sucao_1792079014201.jpg';

export const IMAGES = {
  hero: heroSucaoFachada,
  heroPizza: heroPizzaWoodfire,
  margherita: pizzaMargherita,
  pepperoni: pizzaPepperoni,
  quatroQueijos: pizzaQuatroQueijos,
  ambiance: salaoInternoSucao,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'margherita-especial',
    name: 'Margherita Verace',
    category: 'tradicionais',
    description: 'Molho de tomate San Marzano artesanal, mozzarella di bufala fatiada, folhas frescas de manjericão roxo e fio de azeite extra virgem.',
    priceMedium: 58,
    priceLarge: 74,
    image: pizzaMargherita,
    highlight: 'Receita Clássica',
    vegetarian: true,
    ingredients: ['Tomates San Marzano', 'Mozzarella de Búfala', 'Manjericão Fresco', 'Azeite Extra Virgem']
  },
  {
    id: 'pepperoni-suprema',
    name: 'Pepperoni Artesanal Curado',
    category: 'especiais',
    description: 'Fatias nobres de pepperoni levemente defumado que formam canoinhas crocantes no forno, queijo mozzarella derretido e orégano selvagem.',
    priceMedium: 64,
    priceLarge: 82,
    image: pizzaPepperoni,
    highlight: 'Mais Pedida',
    ingredients: ['Pepperoni Selecionado', 'Mozzarella Especial', 'Molho Rústico', 'Orégano']
  },
  {
    id: 'quatro-queijos-real',
    name: 'Quatro Queijos D’Ouro',
    category: 'tradicionais',
    description: 'Harmonia aveludada entre mozzarella artesanal, gorgonzola curado, provolone levemente tostado e o autêntico requeijão Catupiry.',
    priceMedium: 62,
    priceLarge: 79,
    image: pizzaQuatroQueijos,
    highlight: 'Cremosa & Marcante',
    vegetarian: true,
    ingredients: ['Mozzarella', 'Gorgonzola Nobre', 'Catupiry Original', 'Provolone Curado']
  },
  {
    id: 'calabresa-defumada',
    name: 'Calabresa Artesanal na Brasa',
    category: 'tradicionais',
    description: 'Calabresa fatiada fina defumada artesanalmente, cebolas caramelizadas no azeite, azeitonas pretas chilenas e toque de pimenta dedo-de-moça.',
    priceMedium: 56,
    priceLarge: 72,
    image: pizzaPepperoni,
    highlight: 'Tradição do Forno',
    spicy: true,
    ingredients: ['Calabresa Defumada', 'Cebola Roxa Caramelizada', 'Azeitonas Pretas', 'Ervas Frescas']
  },
  {
    id: 'sucao-especial',
    name: 'Sucão da Casa Prime',
    category: 'especiais',
    description: 'Picanha fatiada marinada em ervas, requeijão Catupiry gratinado, champignon fresco salteado na manteiga de garrafa e alho-poró crocante.',
    priceMedium: 69,
    priceLarge: 89,
    image: heroPizzaWoodfire,
    highlight: 'Especialidade da Casa',
    ingredients: ['Picanha Grelhada', 'Catupiry Original', 'Champignon', 'Alho-Poró']
  },
  {
    id: 'frango-catupiry',
    name: 'Frango Desfiado com Catupiry',
    category: 'tradicionais',
    description: 'Peito de frango desfiado temperado com páprica doce e ervas finas, coberto com generosas espirais do legítimo Catupiry e milho doce selecionado.',
    priceMedium: 59,
    priceLarge: 76,
    image: pizzaQuatroQueijos,
    ingredients: ['Frango Temperado', 'Catupiry Original', 'Milho Verde', 'Salsinha Fresca']
  },
  {
    id: 'doce-nutella-morangos',
    name: 'Nutella com Morangos Selecionados',
    category: 'doces',
    description: 'Massa fina e crocante recheada com pura Nutella aveludada, morangos frescos cortados e lascas de amêndoas tostadas.',
    priceMedium: 52,
    priceLarge: 68,
    image: pizzaMargherita,
    highlight: 'Sobremesa Irresistível',
    vegetarian: true,
    ingredients: ['Nutella Original', 'Morangos Frescos', 'Amêndoas Laminadas']
  },
  {
    id: 'doce-romeu-julieta',
    name: 'Romeu & Julieta Forneada',
    category: 'doces',
    description: 'Goiabada cascão cremosa derretida na brasa com queijo minas curado e mozzarella fresca gratinada com canela em pó.',
    priceMedium: 48,
    priceLarge: 62,
    image: pizzaQuatroQueijos,
    vegetarian: true,
    ingredients: ['Goiabada Cascão', 'Queijo Minas Curado', 'Toque de Canela']
  },
  {
    id: 'sucao-citrico-artesanal',
    name: 'Sucão Especial da Casa (500ml)',
    category: 'bebidas',
    description: 'Nosso suco assinatura: laranja pera espremida na hora, polpa fresca de maracujá e hortelã macerada no gelo.',
    priceMedium: 14,
    image: pizzaMargherita,
    highlight: '100% Fruta Natural',
    vegetarian: true,
    ingredients: ['Laranja Pera', 'Maracujá Fresco', 'Hortelã Orgânica']
  },
  {
    id: 'sucao-vermelho',
    name: 'Sucão Frutas Vermelhas (500ml)',
    category: 'bebidas',
    description: 'Amora silvestre, morango e framboesa batidos na hora com gotas de limão siciliano. Refrescância pura.',
    priceMedium: 16,
    image: pizzaPepperoni,
    vegetarian: true,
    ingredients: ['Amora', 'Morango', 'Framboesa', 'Limão Siciliano']
  },
  {
    id: 'refrigerante-lata',
    name: 'Refrigerante Lata (350ml)',
    category: 'bebidas',
    description: 'Coca-Cola, Guaraná Antarctica ou Coca Zero, servidos bem gelados.',
    priceMedium: 7,
    image: heroPizzaWoodfire,
    ingredients: ['Lata 350ml Gelada']
  }
];

export const CRUST_OPTIONS = [
  { id: 'tradicional', name: 'Borda Tradicional Crocante', price: 0 },
  { id: 'catupiry', name: 'Borda Vulcão com Catupiry Original', price: 12 },
  { id: 'cheddar', name: 'Borda Recheada com Cheddar Cremoso', price: 12 },
  { id: 'chocolate', name: 'Borda Recheada com Chocolate ao Leite', price: 14 },
];

export const PIZZERIA_INFO = {
  name: 'Sucão Pizzaria',
  phone: '(67) 99642-0752',
  phoneRaw: '5567996420752',
  address: '1031 B - Av. Júlio Maia, 1031 B - Centro, Água Clara - MS, 79680-000',
  city: 'Água Clara - MS',
  openingHours: 'Terça a Domingo: das 18h00 às 23h30',
  deliveryTime: '35 a 50 min',
  deliveryFee: 'Consulte seu bairro (grátis acima de R$ 90 no Centro)',
};

// productData.ts
export interface Product {
    id: number;
    name: string;
    type: 'on-grid' | 'off-grid' | 'hybrid';
    wattage: '100w' | '200w' | '500w';
    brand: 'khushali' | 'brand-a' | 'brand-b';
    price: number; 
    efficiency: number; 
    popularity: number; 
    image: string; 
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Khushali Solar Panel 100W',
      type: 'on-grid',
      wattage: '100w',
      brand: 'khushali',
      price: 5000,
      efficiency: 18,
      popularity: 85,
      image: '/image1.jpg',
    },
    {
      id: 2,
      name: 'Brand A Solar Inverter 200W',
      type: 'off-grid',
      wattage: '200w',
      brand: 'brand-a',
      price: 12000,
      efficiency: 22,
      popularity: 90,
      image: '/image.jpg',
    },
    {
      id: 3,
      name: 'Khushali Solar Battery 500W',
      type: 'hybrid',
      wattage: '500w',
      brand: 'khushali',
      price: 25000,
      efficiency: 20,
      popularity: 75,
      image: '/aboutimage.jpg',
    },
    {
      id: 4,
      name: 'Brand B Solar Panel 200W',
      type: 'on-grid',
      wattage: '200w',
      brand: 'brand-b',
      price: 8000,
      efficiency: 19,
      popularity: 65,
      image: '/aboutimage3.jpg',
    },
    {
      id: 5,
      name: 'Khushali Solar Inverter 500W',
      type: 'off-grid',
      wattage: '500w',
      brand: 'khushali',
      price: 18000,
      efficiency: 23,
      popularity: 88,
      image: '/aboutimage4.jpg',
    },
    {
      id: 6,
      name: 'Brand A Solar Battery 100W',
      type: 'hybrid',
      wattage: '100w',
      brand: 'brand-a',
      price: 15000,
      efficiency: 17,
      popularity: 70,
      image: '/aboutimage2.jpg',
    },
  ];
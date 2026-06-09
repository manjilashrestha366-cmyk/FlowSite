import React from 'react';
import menuItems from '../data/menuItems';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Menu() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                <button className="flex items-center bg-[#6B4F4F] text-white px-4 py-2 rounded hover:bg-[#5A3E3E]">
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

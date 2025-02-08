import React from "react";

const assets = [
  { id: 1, name: "Epic Sword", price: "$15" },
  { id: 2, name: "Mystic Shield", price: "$20" },
  { id: 3, name: "Dragon Helmet", price: "$25" },
  { id: 4, name: "Fire Bow", price: "$18" },
  { id: 5, name: "Stealth Boots", price: "$12" },
  { id: 6, name: "Thunder Axe", price: "$30" },
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Game Assets Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 p-5 rounded-2xl shadow-xl transition-transform transform hover:scale-105 cursor-pointer hover:shadow-red-500/50"
          >
            <div className="w-full h-48 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
              {asset.name}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">{asset.name}</span>
              <span className="text-red-400 font-bold">{asset.price}</span>
            </div>
            <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

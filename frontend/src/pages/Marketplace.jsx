import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const assets = [
  { id: 1, name: "Epic Sword", price: "0.05 ETH" },
  { id: 2, name: "Mystic Shield", price: "0.08 ETH" },
  { id: 3, name: "Dragon Helmet", price: "0.12 ETH" },
  { id: 4, name: "Fire Bow", price: "0.07 ETH" },
  { id: 5, name: "Stealth Boots", price: "0.04 ETH" },
  { id: 6, name: "Thunder Axe", price: "0.15 ETH" },
];

const Marketplace = () => {
  const [search, setSearch] = useState("");

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Game Assets Marketplace</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search assets..."
            className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 p-5 rounded-2xl shadow-xl transition-transform transform hover:scale-105 cursor-pointer hover:shadow-blue-500/50"
          >
            <div className="w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center text-white text-xl font-bold">
              {asset.name}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">{asset.name}</span>
              <span className="text-blue-400 font-bold">{asset.price}</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

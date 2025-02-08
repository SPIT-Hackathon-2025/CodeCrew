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
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl flex justify-between items-center mb-12">

        <div className="relative mt-8">
          <input
            type="text"
            placeholder="Search assets..."
            className="bg-gray-800 text-white px-6 py-3 pl-12 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-lime-500 border-2 border-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 p-6 rounded-3xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer hover:border-lime-500 border-2 border-gray-700"
          >
            <div className="w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold border-b-2 border-gray-600">
              {asset.name}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-semibold">{asset.name}</span>
              <span className="text-lime-400 font-bold">{asset.price}</span>
            </div>
            <button className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-black py-3 rounded-xl transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

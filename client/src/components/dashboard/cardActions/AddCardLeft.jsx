import { currencies } from "@/data/currencies";
import React from "react";

function AddCardLeft({ form, setForm }) {

  // Card design options with gradients
  const currencySymbol = currencies.find(
    (c) => c.value === form.currency
  ).symbol;

  const cardDesigns = [
    {
      name: "blue",
      gradient: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      name: "purple",
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      name: "orange",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      gradient: "from-orange-400 to-red-400",
    },
    {
      name: "green",
      gradient: "from-green-400 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-600 to-emerald-600",
    },
    {
      name: "teal",
      bgColor: "bg-gradient-to-br from-teal-600 to-cyan-600",
      gradient: "from-teal-400 to-cyan-400",
    },
    {
      name: "light",
      bgColor: "bg-gradient-to-br from-blue-100 to-indigo-200",
      gradient: "from-blue-300 to-indigo-400",
    },

    {
      name: "dark",
      gradient: "from-red-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-slate-800 to-slate-600",
    },
  ];

  const selectedDesign =
    cardDesigns.find((design) => design.name === form.design) || cardDesigns[0];

  // Format card number display
  const formatCardNumber = () => {
    return "1234 5678 9012 3456";
  };

  // Format balance display
  const formatBalance = (balance) => {
    if (!balance) return `${currencySymbol} 0.00`;
    return `${currencySymbol} ${parseFloat(balance).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    })}`;
  };

  const handleDesignChange = (designName) => {
    setForm((prev) => ({ ...prev, design: designName }));
  };

  return (
    <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Card Preview */}
      <div
        className={`w-80 h-48 bg-gradient-to-r ${selectedDesign.gradient} rounded-xl text-white p-6 shadow-lg mb-6 relative overflow-hidden`}
      >
        {/* Card Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-4 translate-y-4"></div>

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Card Header */}
          <div className="flex justify-between items-start">
            <div className="text-lg font-semibold">
              {form.type.toUpperCase()}
            </div>
            <div className="text-sm opacity-75">{form.currency}</div>
          </div>

          {/* Card Number */}
          <div className="mt-6 text-xl tracking-widest font-mono">
            {formatCardNumber()}
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs opacity-75 uppercase">Cardholder</div>
              <div className="text-sm font-medium">
                {form.name || "CARDHOLDER NAME"}
              </div>
            </div>
            <div>
              <div className="text-xs opacity-75">Balance</div>
              <div className="text-lg font-bold">
                {formatBalance(form.balance)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Selector */}
      <div className="flex gap-3 mt-4 overflow-x-auto w-full justify-center">
        {cardDesigns.map((design) => (
          <div
            key={design.name}
            className={`w-16 h-10 rounded-md cursor-pointer border-2 transition-all ${
              form.design === design.name
                ? "border-blue-500 scale-105"
                : "border-gray-300 hover:border-gray-400"
            } ${design.bgColor}`}
            onClick={() => handleDesignChange(design.name)}
            title={`${design.name} card design`}
          />
        ))}
      </div>

      {/* Design Label */}
      <p className="text-sm text-gray-600 mt-2 capitalize">
        Selected: {form.design} design
      </p>
    </div>
  );
}

export default AddCardLeft;

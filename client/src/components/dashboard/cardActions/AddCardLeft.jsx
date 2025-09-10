import React from "react";

function AddCardLeft({ form }) {
  return (
    <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Card Preview */}
      <div className="w-80 h-48 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl text-white p-6 shadow-lg mb-6">
        <div className="text-lg font-semibold">BANK</div>
        <div className="mt-6 text-xl tracking-widest">1234 5678 9012 3456</div>
        <div className="flex justify-between mt-4 text-sm">
          <span>{form.name || "CARDHOLDER NAME"}</span>
          <span>12/24</span>
        </div>
      </div>

      {/* Slider with 5 rectangle placeholders */}
      <div className="flex gap-3 mt-4 overflow-x-auto w-full justify-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-16 h-10 rounded-md bg-gray-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default AddCardLeft;

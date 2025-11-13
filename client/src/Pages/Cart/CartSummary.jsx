import React from "react";

/*
Simple order summary card.
Props:
- count: number of selected items (sum of quantities)
- total: total price (string or number)
- onCheckout?: () => void
*/
const CartSummary = ({ count = 0, total = 0, onCheckout }) => {
  const totalStr = typeof total === "number" ? total.toFixed(2) : total;
  return (
    <aside className="w-full md:w-80 lg:w-96 border rounded-md p-4 bg-gray-50 md:sticky md:top-4">
      <div className="flex justify-between text-gray-700">
        <span>{count} {count === 1 ? "item" : "items"}</span>
        <span className="font-semibold">${totalStr}</span>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between font-semibold text-gray-800">
        <span>Total</span>
        <span className="text-red-500">${totalStr}</span>
      </div>
      <button
        className="mt-4 w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded disabled:opacity-50"
        disabled={Number(total) === 0}
        onClick={onCheckout}
      >
        Proceed to Checkout
      </button>
    </aside>
  );
};

export default CartSummary;

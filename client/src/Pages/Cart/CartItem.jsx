import React from "react";

/*
Contract:
Props:
- item: { id, name, price, image, color, quantity, selected }
- onToggle: (id: string|number, selected: boolean) => void
- onQuantityChange: (id: string|number, qty: number) => void
- onRemove: (id: string|number) => void

Behavior:
- Checkbox at the far left toggles selected state
- Quantity input is number type (min 1)
- Subtotal shows price * quantity
- Delete button triggers onRemove
*/

const CartItem = ({ item, onToggle, onQuantityChange, onRemove }) => {
  if (!item) return null;
  const { id, name, price, image, color, quantity = 1, selected = true } = item;
  const subtotal = (price * quantity).toFixed(2);

  const handleQty = (e) => {
    const value = Number(e.target.value || 1);
    const next = Math.max(1, value);
    onQuantityChange?.(id, next);
  };

  const dec = () => onQuantityChange?.(id, Math.max(1, quantity - 1));
  const inc = () => onQuantityChange?.(id, quantity + 1);

  return (
    <div className="flex items-center gap-4 border rounded-md p-3">
      {/* select checkbox */}
      <input
        aria-label="Select to buy"
        type="checkbox"
        checked={selected}
        onChange={(e) => onToggle?.(id, e.target.checked)}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />

      {/* image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-contain bg-white border rounded"
      />

      {/* details */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-800 line-clamp-2">{name}</h3>
        <div className="mt-1 text-red-500 font-semibold">${price?.toFixed ? price.toFixed(2) : price}</div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="font-semibold">Type:</span> {color}
        </div>
      </div>

      {/* quantity */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Decrease quantity"
          onClick={dec}
          className="px-2 py-1 border rounded disabled:opacity-50"
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleQty}
          className="w-16 text-center border rounded py-1"
        />
        <button
          aria-label="Increase quantity"
          onClick={inc}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>

      {/* subtotal */}
      <div className="w-24 text-right text-red-500 font-semibold">${subtotal}</div>

      {/* remove */}
      <button
        aria-label="Remove from cart"
        onClick={() => onRemove?.(id)}
        className="text-gray-500 hover:text-red-600 p-2"
        title="Remove"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartItem;

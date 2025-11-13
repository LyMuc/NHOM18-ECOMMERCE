import React, { useState, useMemo } from 'react';
import "../../style.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
    // Demo data; in real app, load from API or Redux
    const itemList=[
        {
                id: "1",
                name: "ADRO Men Print Regular Fit Hoodie For Men",
                price: 31.0,
                image:
                    "https://cdn.shopify.com/s/files/1/0682/2102/4660/files/adro-hoodie-blue.png?v=1669211111",
                color: "Blue",
                quantity: 1,
                selected: true,
            },
            {
                id: "2",
                name: "Evans Lichfield Sunningdale Velvet Pillow",
                price: 35.0,
                image:
                    "https://images.unsplash.com/photo-1582582494700-45236c2f3a58?q=80&w=600&auto=format&fit=crop",
                color: "Yellow",
                quantity: 1,
                selected: true,
            },
            {
                id: "3",
                name: "Nike Air Max 270 React ENG",
                price: 150.0,
                image:
                    "https://cdn.shopify.com/s/files/1/0682/2102/4660/files/adro-hoodie-blue.png?v=1669211111",
                color: "Black",
                quantity: 1,
                selected: true,
            }
    ];
        const [items, setItems] = useState(itemList);

    const toggleItem = (id, selected) => {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, selected } : it)));
    };

    const changeQty = (id, qty) => {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, quantity: qty } : it)));
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

        const { total, count } = useMemo(() => {
            const filtered = items.filter((it) => it.selected);
            const totalNum = filtered.reduce((sum, it) => sum + it.price * it.quantity, 0);
            const countNum = filtered.reduce((sum, it) => sum + it.quantity, 0);
            return { total: totalNum.toFixed(2), count: countNum };
        }, [items]);

    return (
            <>
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h1 className="py-6 font-bold text-3xl text-left">Cart</h1>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                        {/* Left: items card */}
                        <div className="border rounded-lg bg-white overflow-hidden">
                            <div className="px-4 py-3 border-b font-semibold">Shopping Cart</div>
                            <div className="p-4 space-y-3">
                                {items.length === 0 ? (
                                    <div className="p-6 text-gray-600">Your cart is empty.</div>
                                ) : (
                                    items.map((it) => (
                                        <CartItem
                                            key={it.id}
                                            item={it}
                                            onToggle={toggleItem}
                                            onQuantityChange={changeQty}
                                            onRemove={removeItem}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Right: summary */}
                        <CartSummary count={count} total={Number(total)} />
                    </div>

                    <div className="mt-4 text-sm text-gray-600">&larr; Continue shopping</div>
                </div>
            </>
    );
}

export default Cart;
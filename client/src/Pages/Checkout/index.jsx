import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faTruckRampBox, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "@mui/material";

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [promoCode, setPromoCode] = useState("");
    const [showDetails, setShowDetails] = useState(true);

    // Sample cart item
    const cartItem = {
        name: "Apple Watch SE 44mm GPS+Cellular Gold",
        price: 65.00,
        quantity: 1,
        color: "Latte",
        image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/117-large_default/apple-watch-se-44mm-gpscellular-gold.jpg"
    };

    const shipping = 7.00;
    const subtotal = cartItem.price * cartItem.quantity;
    const total = subtotal + shipping;

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Checkout Form */}
                    <div className="lg:col-span-2">
                        {/* Step 1 - Personal Information */}
                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        ✓
                                    </div>
                                    <h2 className="text-lg font-bold">Personal Information</h2>
                                </div>
                                <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                                    <span>✎</span>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>

                        {/* Step 2 - Addresses */}
                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <h2 className="text-lg font-bold">Addresses</h2>
                            </div>
                            
                            <div className="p-6">
                                <p className="text-gray-700 mb-6">
                                    The selected address will be used both as your personal address (for invoice) and as your delivery address.
                                </p>

                                {/* Form Fields */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-semibold mb-2">Alias</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            />
                                            <span className="text-sm text-gray-500">Optional</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-semibold mb-2">First name</label>
                                            <input 
                                                type="text" 
                                                defaultValue="Nguyen"
                                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-2">Last name</label>
                                            <input 
                                                type="text" 
                                                defaultValue="Phuc"
                                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Company</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                        />
                                        <span className="text-sm text-gray-500">Optional</span>
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Address</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Address Complement</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                        />
                                        <span className="text-sm text-gray-500">Optional</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-semibold mb-2">City</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-2">State</label>
                                            <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500">
                                                <option>Please choose</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-semibold mb-2">Zip/Postal Code</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-2">Country</label>
                                            <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500">
                                                <option>United States</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Phone</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                        />
                                        <span className="text-sm text-gray-500">Optional</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="useForInvoice" className="w-4 h-4" />
                                        <label htmlFor="useForInvoice" className="text-sm">
                                            Use this address for invoice too
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 - Shipping Method */}
                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            <div className="flex items-center gap-3 px-6 py-4">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <h2 className="text-lg font-bold text-gray-400">Shipping Method</h2>
                            </div>
                        </div>

                        {/* Step 4 - Payment */}
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 px-6 py-4">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                                    4
                                </div>
                                <h2 className="text-lg font-bold text-gray-400">Payment</h2>
                            </div>
                        </div>
                    </div>

                    {/* Right - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-100 rounded-lg p-6 sticky top-8">
                            <h3 className="font-bold text-lg mb-4">1 item</h3>
                            
                            <button 
                                onClick={() => setShowDetails(!showDetails)}
                                className="text-gray-700 font-semibold mb-4 flex items-center gap-2 hover:text-gray-900 transition-colors"
                            >
                                Show Details
                                <span>{showDetails ? "▲" : "▼"}</span>
                            </button>

                            {/* Cart Item - Collapsible */}
                            <Collapse in={showDetails}>
                                <div className="bg-white rounded p-4 mb-4 flex gap-4">
                                    <div className="w-16 h-16 flex-shrink-0">
                                        <img 
                                            src={cartItem.image} 
                                            alt={cartItem.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm mb-2">{cartItem.name}</h4>
                                        <p className="text-xs text-gray-600 mb-1">x{cartItem.quantity}</p>
                                        <p className="text-xs text-gray-600 mb-2">
                                            <span className="font-semibold">Color:</span> {cartItem.color}
                                        </p>
                                        <p className="text-red-500 font-bold">${cartItem.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </Collapse>

                            {/* Summary */}
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Subtotal</span>
                                    <span className="text-red-500 font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Shipping</span>
                                    <span className="text-red-500 font-bold">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-300 pt-3">
                                    <span className="text-gray-700">Total (tax excl.)</span>
                                    <span className="text-red-500 font-bold">${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between bg-white p-3 rounded">
                                    <span className="font-bold">Total (tax incl.)</span>
                                    <span className="text-red-500 font-bold text-lg">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-semibold">Taxes:</span> <span className="text-red-500">$0.00</span>
                            </p>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <div className="flex gap-2">
                                    <input 
                                        type="text"
                                        placeholder="Promo code"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                                    />
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded transition-colors">
                                        APPLY
                                    </button>
                                </div>
                                <button className="text-sm text-gray-600 mt-2 hover:underline">Close</button>
                                <p className="text-sm mt-2">Take advantage of our exclusive offers:</p>
                                <p className="text-sm">
                                    <span className="text-green-600 font-bold">GET25OFF</span> - <span className="font-semibold">Promo Code</span>
                                </p>
                            </div>

                            {/* Info Icons */}
                            <div className="space-y-4 bg-white rounded p-4">
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faTruckFast} className="text-gray-600 text-xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-1">Free Shipping & Returns :</h4>
                                        <p className="text-xs text-gray-600">Available on all orders over $99</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faTruckRampBox} className="text-gray-600 text-xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-1">Estimated Delivery :</h4>
                                        <p className="text-xs text-gray-600">Orders are typically dispatched within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faShieldHalved} className="text-gray-600 text-xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-1">Security Policy :</h4>
                                        <p className="text-xs text-gray-600">Ensuring top-level security for your data and transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;


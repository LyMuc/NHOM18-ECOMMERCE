import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faTruckFast, faTruckRampBox, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState("gold");  
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const images = [
    "https://prestashop.codezeel.com/PRS21/PRS210502/default/117-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
    "https://prestashop.codezeel.com/PRS21/PRS210502/default/118-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
    "https://prestashop.codezeel.com/PRS21/PRS210502/default/119-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
    "https://prestashop.codezeel.com/PRS21/PRS210502/default/120-large_default/apple-watch-se-44mm-gpscellular-gold.jpg"
  ];

    const product = {
        brand: "MegaMart",
        name: "Apple Watch SE 44mm GPS+Cellular Gold",
        price: 65.00,
        rating: 5,
        reviews: 6,
        features: [
            "Easy to use and maintain with cleaning",
            "Our products cater to all age groups beginners",
            "Many of our electronics are built energy"
        ],
        colors: [
            { name: "blue", value: "#3B82F6" },
            { name: "gold", value: "#D4A574" },
            { name: "red", value: "#EF4444" },
        ]
    }


    return(
        <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        {
                            images.map((img, index) => (
                                <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 h-20 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-400'} `}>
                                    <img src={img} alt={`Product view ${index + 1}`} className="w-full h-full object-cover"/>
                                </button>
                            ))
                        }
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden shadow-md aspect-square max-h-[600px]" >
                        <img src={images[selectedImage]} alt="Product main view" className="w-full h-auto object-cover" />
                    </div>

                </div>

                <div className="flex flex-col gap-6">
                    {/* Brand */}
                    <div className="text-orange-500 font-semibold text-sm">
                        {product.brand}
                    </div>

                    {/* Name */}
                    <h1 className="text-3xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>

                    <span className="text-gray-600 text-sm">
                        ({product.reviews} Reviews)
                    </span>

                    </div>

                    {/* Features list */}
                    <ul className="space-y-2">
                        {
                            product.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <span className="text-green-500 mt-1">•</span>
                                <span>{feature}</span>
                            </li>
                            ))
                        }
                    </ul>

                    {/* Color Selector */}
                    <div className="space-y-3">
                        <div className="font-medium text-gray-900">
                            Color: <span className="capitalize">{selectedColor}</span>
                        </div>

                        <div className="flex gap-2">
                            {
                                product.colors.map((color) => (
                                    <button key={color.name} 
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-10 h-10 rounded-md border-2 transition-all ${selectedColor == color.name 
                                                ? 'border-gray-800 scale-110' 
                                                : 'border-gray-300 hover:border-gray-500'}`}
                                                style={{backgroundColor: color.value}}
                                                aria-label={`Select ${color.name} color`}></button>
                                ))
                            }
                        </div>
                    </div>

                    {/* Price and Delivery */}
                    <div className="border-t border-b border-gray-200 py-4 space-y-2">
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-bold text-orange-500">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-600">
                                Est. Delivery Time 2-3 Days
                            </span>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                        <span className="font-medium text-gray-900">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100 transition-colors">-</button>
                            <span className="px-6 py-2 border-x border-gray-300 min-w-[60px] text-center">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100 transition-colors">+</button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">
                            ADD TO CART
                        </button>
                        <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors">
                            BUY NOW
                        </button>
                    </div>

                    {/* Wishlist and Compare */}
                    <div className="flex gap-4 text-sm">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors">
                            <span className="text-xl">♡</span>
                            <span>Add to Wishlist</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors">
                            <span className="text-xl">⚖</span>
                            <span>Add to compare</span>
                        </button>
                    </div>

                    {/* In stock Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg w-fit">
                        <span className="text-lg">✓</span>
                        <span className="font-medium">In stock</span>
                    </div>

                    {/* Share section */}
                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-gray-900">Share: </span>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPinterest} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLink} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info Section - Free shipping, Delivery, Security*/}
                    <div className="border-t border-gray-200 pt-6 space-y-4">
                        {/* Free Shipping */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                                <FontAwesomeIcon icon={faTruckFast} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Free Shipping & Returns</h3>
                                <p className="text-sm text-gray-600">Available on all orders over $99</p>
                            </div>
                        </div>

                        {/* Estimated Delivery */}
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                                <FontAwesomeIcon icon={faTruckRampBox} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
                                <p className="text-sm text-gray-600">Orders are typically dispatched within 24 hours</p>
                            </div>
                        </div>

                        {/* Security Policy */}
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Security Policy</h3>
                                <p className="text-sm text-gray-600">Ensuring top-level security for your data and transactions</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 border border-gray-200 rounded-lg">
                {/* Tab Headers*/}
                <div className="flex border-b border-gray-200">
                    <button onClick={() => setActiveTab("description")} className={`px-6 py-3 font-semibold transition-colors relative ${activeTab === "description" ? "text-red-500" : "text-gray-600 hover:text-gray-900"}`}>
                        Description
                        {
                            activeTab === "description" && (<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>)
                        }
                    </button>

                    <button onClick={() => setActiveTab("details")} className={`px-6 py-3 font-semibold transition-colors relative ${activeTab === "details" ? "text-red-500" : "text-gray-600 hover:text-gray-900"}`}>
                        Product Details
                        {
                            activeTab === "details" && (<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>)
                        }
                    </button>
                </div>

                {/* Tab Content */}
                <div className="py-8">
                    {
                        activeTab === "description" 
                        ? (
                            <div className="space-y-6">
                                {/* Product Highlights */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Product Highlights</h2>
                                    <p>
                                        Latest 40dB Active Noise Cancelling Headphones: Music, streaming or talking...the Crossbeats Roar 2.0 Bluetooth headphones is a great product with benchmark active noise cancelling audio. With Ambient and ANC modes, you can switch between two different worlds to experience world class audio. With 35dB noise cancelling, these ANC headphones wireless are a must have gadget.
                                    </p>
                                </div>

                                {/* Banner Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/products-banner-3.jpg" className="w-full h-auto"/>
                                </div>

                                {/* Additional Details */}
                                <div className="space-y-4 text-gray-700">
                                    <p className="leading-relaxed">
                                        <strong>Immersive Bass Audio:</strong> Get yourself the best Bluetooth Headphones in the market, the Crossbeats Roar comes with 47mm Neodymium drivers and HyperBassTM technology that delivers outstanding concert level audio on these Headphones with ANC.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Comfortable Ear Cushioning:</strong> Bluetooth Headphones with ANC is a must have gadget, also comfort matter the most in such BT headphones, so we have constructed the Roar ANC Bluetooth headphones with superior cushioning and flexibility.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Focus Assisted Microphones:</strong> Roar Bluetooth neckband headphones comes with great microphone quality for crystal clear Bluetooth calling experience, they also capture voice with much consistency even in windy environments. Roar is a great work from home headphones that can also be used for everyday commute and light workouts.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Up to 85 hours Playtime:</strong> Whether you love to listen to music all day during commute, at work or even love to watch movies in the night, the Crossbeats Roar is a perfect entertainment partner. Comes with up to 85 hours playtime, you can max out your entertainment quotient without guilt. Roar is a type C Bluetooth headphone that delivers 5 hours of playtime with just 10 minutes of charging.
                                    </p>
                                </div>
                            </div>
                        )
                        : (
                            <div className="py-8">
                                <p className="text-gray-600">Product Details content will be here...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

        
    )
}

export default ProductDetail;
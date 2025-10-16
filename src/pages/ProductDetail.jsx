import { useState } from "react";

const ProductDetail = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState("gold");  
    const [quantity, setQuantity] = useState(1);

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
                    <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden shadow-md">
                        <img src={images[selectedImage]} alt="Product main view" className="w-full h-auto object-contain" />
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

                </div>

            </div>
        </div>
    )
}

export default ProductDetail;
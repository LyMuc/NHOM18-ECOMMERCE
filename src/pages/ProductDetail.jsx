import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faTruckFast, faTruckRampBox, faShieldHalved, faComments, faThumbsUp, faThumbsDown, faFlag, faPen } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogTitle, DialogActions, DialogContent, Rating, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { IoClose } from "react-icons/io5";

const ProductDetail = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState("gold");  
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const[openReviewDialog, setOpenReviewDialog] = useState(false);
    const[reviewForm, setReviewForm] = useState({
        title: "",
        name: "",
        review: "",
        rating: 3,
        agreeTerms: false
    });

    const images = [
        "https://prestashop.codezeel.com/PRS21/PRS210502/default/117-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
        "https://prestashop.codezeel.com/PRS21/PRS210502/default/118-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
        "https://prestashop.codezeel.com/PRS21/PRS210502/default/119-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
        "https://prestashop.codezeel.com/PRS21/PRS210502/default/120-large_default/apple-watch-se-44mm-gpscellular-gold.jpg"
    ];

    const relatedProducts = [
        {
            id: 1,
            name: "Real Diamond Jewellery Gold Diamond Ring",
            brand: "Cartify",
            price: 129.00,
            rating: 5,
            reviews: 3,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/2-home_default/real-diamond-jewellery-gold-diamond-ring.jpg",
            badge: "-15%"
        },
        {
            id: 2,
            name: "Diamond Stud Eulla Earring Rose Gold",
            brand: "EcomZone",
            price: 250.00,
            rating: 5,
            reviews: 2,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/8-home_default/diamond-stud-eulla-earring-rose-gold.jpg",
            badge: "-10%"
        },
        {
            id: 3,
            name: "MVMT Chrono Analog Black Dial Men Watch",
            brand: "MegaMart",
            price: 46.00,
            oldPrice: 56.00,
            rating: 5,
            reviews: 3,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/30-home_default/mvmt-chrono-analog-black-dial-men-watch.jpg",
            badge: "-8%"
        },
        {
            id: 4,
            name: "Google Pixel Buds Pro - Noise Canceling Earbuds",
            brand: "EcomZone",
            price: 55.00,
            rating: 4,
            reviews: 4,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/86-home_default/google-pixel-buds-pro-noise-canceling-earbuds.jpg"
        },
        {
            id: 5,
            name: "Lizoleor Slip On Block Heels Women Pointed Toe",
            brand: "EcomZone",
            price: 21.00,
            rating: 5,
            reviews: 4,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/104-home_default/lizoleor-slip-on-block-heels-women-pointed-toe.jpg"
        },
        {
            id: 6,
            name: "Evans Lichfield Sunningdale Velvet Pillow",
            brand: "QuickCart",
            price: 35.00,
            rating: 5,
            reviews: 3,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/151-home_default/evans-lichfield-sunningdale-velvet-pillow.jpg",
            badge: "PACK"
        },
        {
            id: 7,
            name: "Rico Lounge Chair Single Sofas Poufs",
            brand: "SmartShop",
            price: 89.00,
            rating: 4,
            reviews: 5,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/155-home_default/rico-lounge-chair-single-sofas-poufs.jpg",
            badge: "-15%"
        }
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

    const reviews = [
        {
            id: 1,
            author: "Lily Wright",
            date: "4/22/25, 12:57 AM",
            rating: 5,
            title: "Wow it's amazing.",
            comment: "Light weight and easy to use , super product.I am happy 😊",
            likes: 0,
            dislikes: 0
        },
        {
            id: 2,
            author: "Jan Novak",
            date: "4/22/25, 12:56 AM",
            rating: 5,
            title: "Elevates Any Room",
            comment: "A beautiful focal point that makes a lasting impression!",
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            author: "Chloe Brooks",
            date: "4/22/25, 12:56 AM",
            rating: 4,
            title: "A Perfect Statement Piece",
            comment: "This item is truly a showstopper!!!",
            likes: 0,
            dislikes: 0
        }
    ]


    return(
        <div className="container mx-auto px-4 py-8 bg-white">

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
                    <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden shadow-md aspect-square max-h-[500px]" >
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
                                <span className="mt-0 font-extrabold">•</span>
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
                        <button className="w-full bg-red-500 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors">
                            ADD TO CART
                        </button>
                        <button className="w-full bg-black hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">
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


            {/* Related Products Section */}
            <div className="max-w-7xl mx-auto px-4 mt-16 mb-12">
                <h2 className="text-2xl font-bold mb-6">You might also like</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {
                        relatedProducts.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">

                                {/* Product Image */}
                                <div className="relative aspect-square overflow-hidden bg-gray-50">
                                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    {
                                        item.badge && (
                                            <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${item.badge === "PACK" ? "bg-green-500" : "bg-red-500"}`}>
                                                {item.badge}
                                            </div>
                                        )
                                    }
                                </div>

                                {/* Product Info */}
                                <div className="p-3">
                                    {/* Brand */}
                                    <p className="text-xs text-gray-500 mb-1">{item.brand}</p>

                                    {/* Product Name */}
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                                        {item.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="flex text-yellow-400 text-xs">
                                            {
                                                [...Array(5)].map((_, i) => (
                                                    <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                                                ))
                                            }
                                        </div>
                                        <span className="text-xs text-gray-500">({item.reviews})</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-red-500">${item.price.toFixed(2)}</span>
                                        {
                                            item.oldPrice && (
                                                <span className="text-sm text-gray-400 line-through">${item.oldPrice.toFixed(2)}</span>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-7xl mx-auto px-4 mt-16 mb-12">
                {/* Reviews Header*/}
                <div className="flex items-center justify-between bg-gray-100 px-6 py-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faComments} className="text-gray-600" />
                        <h2>Comments ({reviews.length})</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Grade</span>
                        <div className="flex text-yellow-400 text-xl">
                            {
                                [...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div>
                    <div className="divide-y divide-gray-200">
                        {
                            reviews.map((review, index) => (
                                <div key={review.id} className="p-6 bg-white">
                                    <div className="flex gap-6 ">
                                        {/* Left column - Rating, Date & Author */}
                                        <div className="flex-shrink-0 w-48 border-r border-gray-200">
                                            {/* Rating */}
                                            <div className="flex text-yellow-400 text-lg mb-3">
                                                {
                                                    [...Array(5)].map((_, i) => (
                                                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                                                    ))
                                                }
                                            </div>
                                            {/* Date */}
                                            <p className="text-sm text-gray-600 mb-2">{review.date}</p>
                                            {/* Author */}
                                            <p className="text-sm text-gray-900 font-medium">By {review.author}</p>
                                        </div>

                                        {/* Right column - Title, Comment, Likes/Dislikes */}
                                        <div className="flex-1">
                                            {/* Review Title */}
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">{review.title}</h3>
                                            {/* Review Comment */}
                                            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                                            {/* Action Buttons */}
                                            <div className="flex items-center gap-4 text-sm">
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                                                    <FontAwesomeIcon icon={faThumbsUp}/>
                                                    <span>{review.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                                                    <FontAwesomeIcon icon={faThumbsDown}/>
                                                    <span>{review.dislikes}</span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                                                    <FontAwesomeIcon icon={faFlag} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Write Review Button */}
                <div className="flex justify-center mt-8">
                    <button onClick={() => setOpenReviewDialog(true)} className="bg-red-500 hover:bg-black text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                        <FontAwesomeIcon icon={faPen} />
                        <span>WRITE YOUR REVIEW</span>
                    </button>
                </div>

            </div>

            <Dialog open={openReviewDialog} onClose={() => setOpenReviewDialog(false)} maxWidth="sm" fullWidth>
                {/* Header */}
                <DialogTitle className="font-extrabold">Write Your Review</DialogTitle>
                <DialogContent className="pt-6">
                    {/* Product Info */}
                    <div className="flex gap-4 mb-6">
                        <img src={images[0]} className="w-20 h-20 object-cover " />
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                            <ul className="text-sm text-gray-700">
                                {
                                    product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-6">
                        <span>Quality:</span>
                        <Rating value={reviewForm.rating} onChange={(e, newValue) => setReviewForm({...reviewForm, rating: newValue})} size="large"></Rating>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <TextField label="Review Title" required fullWidth value={reviewForm.title} onChange={(e) => setReviewForm({...reviewForm, title: e.target.value})}></TextField>
                        <TextField label="Your name" required fullWidth value={reviewForm.name} onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}></TextField>
                    </div>
                    <TextField label="Review" required fullWidth multiline rows={4} value={reviewForm.review} onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})} className="mb-4"></TextField>
                    

                    {/* Terms Checkbox */}
                    <FormControlLabel control={<Checkbox checked={reviewForm.agreeTerms} onChange={(e) => setReviewForm({...reviewForm, agreeTerms: e.target.checked})}></Checkbox>} label="I agree to the terms and conditions and the privacy policy"></FormControlLabel>
                    <p className="text-sm text-gray-500 mt-2">*Required fields</p>

                    
                </DialogContent>
                {/* Action Buttons */}
                <DialogActions>
                    <button onClick={() => setOpenReviewDialog(false)} className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors font-semibold">CANCEL</button>
                    <button onClick={() => setOpenReviewDialog(false)} className="px-6 py-2 text-white bg-red-500 border-red-600 rounded hover:bg-red-600 transition-colors font-semibold">SEND</button>
                </DialogActions>
            </Dialog>
                                
        </div>

        
    )
}

export default ProductDetail;
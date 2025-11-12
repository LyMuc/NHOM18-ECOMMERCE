import { useState } from "react";
import { Select, MenuItem, IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
    const [sortBy, setSortBy] = useState("name-asc");
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Apple Watch SE 44mm GPS+Cellular Gold",
            price: 65.00,
            image: "https://prestashop.codezeel.com/PRS21/PRS210502/default/117-large_default/apple-watch-se-44mm-gpscellular-gold.jpg",
            color: "Gold"
        }
        // Add more items here if needed
    ]);

    const handleRemoveItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const handleAddToCart = (item) => {
        console.log("Add to cart:", item);
        // Add your add to cart logic here
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold">
                        My wishlist <span className="text-gray-500 font-normal">({wishlistItems.length})</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700">Sort by:</span>
                        <Select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            size="small"
                            sx={{
                                minWidth: 180,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#e5e7eb',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#d1d5db',
                                },
                            }}
                        >
                            <MenuItem value="name-asc">Name, A to Z</MenuItem>
                            <MenuItem value="name-desc">Name, Z to A</MenuItem>
                            <MenuItem value="price-asc">Price, low to high</MenuItem>
                            <MenuItem value="price-desc">Price, high to low</MenuItem>
                        </Select>
                    </div>
                </div>

                {/* Wishlist Items Grid */}
                {wishlistItems.length === 0 ? (
                    <div className="bg-white rounded-lg p-12 text-center">
                        <p className="text-gray-500 text-lg">Your wishlist is empty</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="relative">
                                {/* Delete Button - Outside card */}
                                <div className="absolute -top-2 -right-2 z-10">
                                    <IconButton
                                        onClick={() => handleRemoveItem(item.id)}
                                        size="small"
                                        sx={{
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                                            '&:hover': {
                                                backgroundColor: '#fee2e2',
                                                color: '#dc2626',
                                            }
                                        }}
                                    >
                                        <MdDelete size={18} />
                                    </IconButton>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                    {/* Product Image */}
                                    <div className="aspect-square bg-gray-50 overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                                        {item.name}
                                    </h3>
                                    <p className="text-red-500 font-bold text-lg mb-4">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;

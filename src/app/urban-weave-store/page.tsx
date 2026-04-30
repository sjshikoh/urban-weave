"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
};

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [loadedImages, setLoadedImages] = useState<Record<number, boolean >>({});
  const [refreshKey,setRefreshKey] = useState(0);

  useEffect(() => {
  const handleBack = () => {
    setRefreshKey((prev) => prev + 1); // force re-render
  };

  window.addEventListener("pageshow", handleBack);

  return () => {
    window.removeEventListener("pageshow", handleBack);
  };
}, []);

  useEffect(() => {
  const handleFocus = () => {
    // reset images when user returns (fix WhatsApp issue)
    setLoadedImages({});
  };

  window.addEventListener("focus", handleFocus);

  return () => {
    window.removeEventListener("focus", handleFocus);
  };
}, []);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const addToCart = (product: Product) => {
  setCart((prev) => [...prev, product]);
};


const [isCartOpen, setIsCartOpen] = useState(false);

const total = cart.reduce((acc, item) => {
  return acc + parseInt(item.price.replace(/[^0-9]/g, ""));
}, 0);

const generateWhatsAppMessage = () => {
  if (cart.length === 0) return "";

  let message = "I want to order:%0A%0A";

  cart.forEach((item) => {
    message += `• ${item.name} — ${item.price}%0A`;
  });

  message += `%0A*Total:* PKR ${total}`;

  return message;
};

const toggleWishlist = (id: number) => {
  setWishlist((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};

  const products: Product[] = [
    { id: 1, name: "Classic Pink Tee", price: "PKR 2,500", image: "/tshirt.jpg", category: "T-Shirts"},
    { id: 2, name: "Urban Hoodie", price: "PKR 4,200", image: "/hoodie.jpg", category: "Hoodies" },
    { id: 3, name: "Pakistani Dress", price: "PKR 3,200", image: "/product1.jpg", category: "Dresses" },
    { id: 4, name: "Streetwear Jacket", price: "PKR 6,000", image: "/jacket.jpg", category: "Jackets" },
    { id: 5, name: "Denim Jeans", price: "PKR 4,800", image: "/jeans.jpg", category: "Jeans"  },
    { id: 6, name: "Casual Pants", price: "PKR 3,500", image: "/pants.jpg", category: "Pants" },
  ];

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
  const matchesCategory =
    selectedCategory === "All" || product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      

      <header className="flex justify-between items-center p-6 shadow-sm sticky top-0 bg-white z-50">
  <Link href="/" className="text-2xl font-bold">
    Urban Weave
  </Link>

  <div className="flex items-center gap-6">
    <Link href="/urban-weave" className="text-sm">
      Case Study
    </Link>

    {/* Cart */}
    <div
      className="relative cursor-pointer"
      onClick={() => setIsCartOpen(true)}
    >
      🛒
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      )}
    </div>
  </div>
</header>

      {/* Search + Filter */}
      <section className="px-6 pt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-xl w-full md:w-1/2"
          />

          {/* Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-4 py-2 rounded-xl w-full md:w-1/4"
          >
            <option>All</option>
            <option>T-Shirts</option>
            <option>Hoodies</option>
            <option>Shirts</option>
            <option>Jackets</option>
            <option>Pants</option>
          </select>

        </div>
      </section>
    
      {/* Products */}
      <section className="px-6 py-20 bg-gray-50">
        <div
          key={refreshKey}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {filteredProducts.map((product) => {
  const isLoaded = loadedImages[product.id] ?? false;

  return (
    <div
      key={product.id}
      className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={() => setSelectedProduct(product)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">

        {/* Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={product.id === 1}
          onLoad={() => {
            setLoadedImages((prev) => ({
              ...prev,
              [product.id]: true,
            }));
          }}
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
            loadedImages[product.id] ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Quick View
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        <h3 className="font-semibold text-lg tracking-tight">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm">
          {product.category}
        </p>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">
            {product.price}
          </p>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`p-2 rounded-full transition ${
              wishlist.includes(product.id)
                ? "bg-red-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            ❤️
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-full bg-black text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
        
  );
})}
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-[modalFadeIn_0.25s_ease]"
        onClick={() => setSelectedProduct(null)}
        >
          <div className="bg-white rounded-2xl p-6 max-w-md w-full relative animate-[modalScaleIn_0.25s_ease]"
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <img
              src={selectedProduct!.image}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {selectedProduct.price}
            </p>

            <a
              href={`https://wa.me/923482209380?text=I want to order ${selectedProduct.name}`}
              className="block bg-green-500 text-white text-center py-3 rounded-xl"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
      {/* CART DRAWER */}
{isCartOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    onClick={() => setIsCartOpen(false)}
  >
    <div
      className="w-80 h-full bg-white p-6 shadow-xl animate-[slideIn_0.3s_ease]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={() => setIsCartOpen(false)}>✕</button>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <p className="font-semibold mt-4">Total: PKR {total}</p>
          <a
            href={`https://wa.me/923482209380?text=${generateWhatsAppMessage()}`}
            target="_blank"
            onClick={() => setIsCartOpen(false)}
            className="block w-full bg-green-500 text-white text-center py-3 rounded-xl"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
}










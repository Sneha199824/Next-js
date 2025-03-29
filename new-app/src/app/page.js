import React from "react";
import { FaShoppingCart, FaHeart, FaPhoneAlt } from "react-icons/fa";

const Header = () => (
  <header>
    {/* Top Bar */}
    <div className="bg-red-600 text-white text-sm py-2 px-6 flex justify-between">
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">My Account</a>
        <a href="#" className="hover:underline">Wishlist</a>
        <a href="#" className="hover:underline">Checkout</a>
      </div>
      <p>Free shipping for all orders of $150</p>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Store Location</a>
        <a href="#" className="hover:underline">Language</a>
      </div>
    </div>

    {/* Main Header */}
    <div className="bg-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <FaShoppingCart className="text-red-600 text-2xl" />
        <h1 className="text-2xl gray-900 font-bold">ROISER</h1>
      </div>
      <div className="flex items-center w-1/2 border rounded-lg overflow-hidden">
        <select className="bg-gray-900 px-3 py-2 border-r text-sm">
          <option>All Categories</option>
        </select>
        <input type="text" placeholder="Search Keywords..." className="flex-grow px-3 py-2 outline-none" />
        <button className="bg-red-600 text-white px-4 py-2">SEARCH HERE</button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          <p className="text-gray-500">Call Us Now:</p>
          <p className="text-lg font-bold">+ (258) 2159-2159</p>
        </div>
        <FaPhoneAlt className="text-gray-500 text-xl" />
        <FaHeart className="text-gray-500 text-xl" />
      </div>
    </div>

    {/* Navigation Bar */}
    <nav className="bg-black text-white py-3 px-6 flex justify-between items-center">
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">SHOP</a>
        <a href="#" className="hover:underline">WOMEN</a>
        <a href="#" className="hover:underline">MEN</a>
        <a href="#" className="hover:underline">PAGES</a>
        <a href="#" className="hover:underline">BLOG</a>
        <a href="#" className="hover:underline">CONTACT</a>
      </div>
      <div className="bg-red-600 px-4 py-2 text-sm font-bold">Get 30% Discount</div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-200 text-black py-10 px-6 mt-6 text-sm">
    <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">
      {/* About Store */}
      <div>
        <h3 className="font-bold mb-3">About Store</h3>
        <p>Have questions? Call Us 24/7</p>
        <p className="text-red-500 font-bold text-lg">+258 3692 2569</p>
        <p>Monday-Friday: 8:00am - 6:00pm</p>
        <p>Saturday: 8:00am - 6:00pm</p>
        <p>Sunday: Service Close</p>
      </div>
      {/* Our Stores */}
      <div>
        <h3 className="font-bold mb-3">Our Stores</h3>
        <p>New York</p>
        <p>London SF</p>
        <p>Los Angeles</p>
        <p>Chicago</p>
        <p>Las Vegas</p>
      </div>
      {/* Shop Categories */}
      <div>
        <h3 className="font-bold mb-3">Shop Categories</h3>
        <p>New Arrivals</p>
        <p>Best Selling</p>
        <p>Vegetables</p>
        <p>Fresh Meat</p>
        <p>Fresh Seafoods</p>
      </div>
      {/* Useful Links */}
      <div>
        <h3 className="font-bold mb-3">Useful Links</h3>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
        <p>Latest News</p>
        <p>Our Sitemap</p>
      </div>
      {/* Newsletter */}
      <div>
        <h3 className="font-bold mb-3">Our Newsletter</h3>
        <p>Subscribe for updates on new arrivals and discounts.</p>
        <div className="flex mt-3">
          <input type="email" placeholder="Your email address" className="p-2 w-full text-gray-900" />
          <button className="bg-red-500 px-3 py-2 text-white">SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
      <div>
        <p>Payment System:</p>
        <div className="flex space-x-2">
          <img src="visa.png" alt="Visa" className="h-6" />
          <img src="mastercard.png" alt="Mastercard" className="h-6" />
          <img src="paypal.png" alt="PayPal" className="h-6" />
        </div>
      </div>
      <p>&copy; 2024 Roiser. All rights reserved.</p>
    </div>
  </footer>
);

const YourPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 bg-gray-100">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Store</h1>
          <p className="text-gray-600 mt-2">Discover the best products curated just for you.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YourPage;

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return <div className="container">
      <header className="header-container">
        <div className="logo-container">
          <img 
            src="/meowzon-logo.png" 
            alt="Meowfy Logo" 
            className="logo"
          />
        </div>
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/store">STORE</a></li>
            <li><a href="/cart">CART</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Explore our curated collection of premium products designed for your lifestyle</p>

        <motion.div className="products-grid" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          {products.map(product => <motion.article key={product.id} className="product-card" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.2
        }}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <h2>{product.title}</h2>
              <p className="price">${product.price}</p>
            </motion.article>)}
        </motion.div>
      </main>

      <footer className="bg-black text-white">
        <div className="container py-16">
          <div className="footer-content">
            <div className="footer-section">
              <h3>BE THE FIRST TO KNOW</h3>
              <p className="mb-4">Sign up for updates from Meowzon.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your e-mail..." />
                <button type="submit">SUBSCRIBE</button>
              </form>
            </div>

            <div className="footer-section">
              <h3>QUICK LINKS</h3>
              <div className="quick-links-grid">
                <div>
                  <h4>meowzon</h4>
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/stories">Stories</a></li>
                    <li><a href="/artisans">Artisans</a></li>
                    <li><a href="/boutiques">Boutiques</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/eu-compliance">EU Compliances Docs</a></li>
                  </ul>
                </div>
                <div>
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li><a href="/orders">Orders & Shipping</a></li>
                    <li><a href="/join">Join/Login as a Seller</a></li>
                    <li><a href="/payment">Payment & Pricing</a></li>
                    <li><a href="/returns">Return & Refunds</a></li>
                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <div className="contact-currency">
                <div className="contact-info">
                  <h3>CONTACT US</h3>
                  <p>+44 221 133 5360</p>
                  <p>customercare@meowzon.com</p>
                </div>
                <div className="currency-selector">
                  <h3>CURRENCY</h3>
                  <button className="currency-btn">
                    <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" alt="USD" className="flag-icon" />
                    USD
                  </button>
                  <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
              </div>
              <div className="payment-section">
                <div className="social-links">
                  <h3>FOLLOW US</h3>
                  <div className="social-icons">
                    <a href="https://instagram.com/meowzon" target="_blank" rel="noopener noreferrer">
                      <Instagram size={20} />
                    </a>
                    <a href="https://facebook.com/meowzon" target="_blank" rel="noopener noreferrer">
                      <Facebook size={20} />
                    </a>
                    <a href="https://twitter.com/meowzon" target="_blank" rel="noopener noreferrer">
                      <Twitter size={20} />
                    </a>
                    <a href="https://linkedin.com/company/meowzon" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="mt-8">meowzon ACCEPTS</h3>
                <div className="payment-icons">
                  <img src="https://picsum.photos/200" alt="Google Pay" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                  <img src="https://picsum.photos/200" alt="American Express" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" />
                  <img src="https://picsum.photos/200" alt="Shop Pay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}

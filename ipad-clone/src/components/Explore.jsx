import React from 'react';
import ipad1 from "../images/ipad-1.png"
import ipad2 from "../images/ipad-2.png"
import ipad3 from "../images/ipad-3.png"
import ipad4 from "../images/ipad-4.png"
import ipad5 from "../images/small-ipad.png"
import ipad6 from "../images/small-ipad1.png"
import ipad7 from "../images/small-ipad2.png"
import ipad8 from "../images/small-ipad3.png"
import ipad9 from "../images/small-ipad4.png"
import ipad from "../images/small-ipad5.png"
import "../App.css"
import ProductList from './ProductList';

// Define a Product Component
const Product = ({ id, title, description, price, image }) => {
  return (
    <>
      <section className="product" id={id}>
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="price">{price}</p>
          <div className="buttons">
            <button className="cta-button">Learn More</button>
            <button className="cta-button buy-button">Buy</button>
          </div>
        </div>
      </section>

    </>

  );
};

// Main component
const Explore = () => {
  return (
    <div className='Explore'>
      {/* Header Section */}
      <header>
        <nav className="navbar3">
          <h1>Explore the iPad Lineup</h1>
          <a href="#" className="cta-button">
            Compare Models
          </a>
        </nav>
      </header>

      <main className="product-row">
        <ul>
          
          <li>
            <Product
              id="ipad-pro"
              title="iPad Pro"
              description="The ultimate iPad experience with the most advanced technology."
              price="From $899 or $83.25/mo. for 12 mo."
              image={ipad1}
            />
            <ProductList
            
            img1={ipad5}
            img2={ipad6}
            img3={ipad7}
            img4={ipad8}
            img5={ipad9}
            img6={ipad}
            />

          </li>
          <li>
            <Product
              id="ipad-air"
              title="iPad Air"
              description="The perfect balance of power and portability."
              price="From $599 or $49.91/mo. for 12 mo."
              image={ipad2}
            />
            <ProductList 
            img1={ipad5}
            img2={ipad6}
            img3={ipad7}
            img4={ipad8}
            img5={ipad9}
            img6={ipad}
            />

          </li>
          <li>
            <Product
              id="ipad"
              title="iPad"
              description="The standard iPad with all the essentials you need."
              price="From $329 or $27.42/mo. for 12 mo."
              image={ipad3}
            />
            <ProductList
            img1={ipad5}
            img2={ipad6}
            img3={ipad7}
            img4={ipad8}
            img5={ipad9}
            img6={ipad}
            />

          </li>
          <li>
            <Product
              id="ipad-mini"
              title="iPad mini"
              description="Small, but powerful. The iPad mini has it all."
              price="From $499 or $41.58/mo. for 12 mo."
              image={ipad4}
            />
            <ProductList 
            img1={ipad5}
            img2={ipad6}
            img3={ipad7}
            img4={ipad8}
            img5={ipad9}
            img6={ipad}
            />

          </li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Explore;

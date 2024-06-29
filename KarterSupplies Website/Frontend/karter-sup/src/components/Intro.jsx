import React from 'react';
import './style.css';
import cargo from '../assets/Cargo.jpg'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h2>Know About Us</h2>
          <p>Welcome to Karter Supplies, your premier destination for a vast selection of products and services designed to meet the ever-evolving demands of businesses both in Zambia and around the world. Since our inception in 2019, we have established ourselves as a leading general supplier, unwavering in our commitment to excellence and customer satisfaction.</p>
          <p>Our mission is to empower businesses of every size with the supplies and support they need to thrive. From office essentials to industrial machinery, Karter Supplies boasts a vast inventory that encompasses all your business requirements. We are not just a supplier; we are a partner invested in your success, providing value, reliability, and efficiency with every interaction.</p>
          <p>Experience the difference with Karter Supplies, where our extensive product range and exceptional services, including prompt delivery and personalized customer care, come together to create a seamless and satisfying procurement experience. Join the multitude of satisfied clients who rely on us for their business needs, and let us contribute to your success story.</p>
        </div>
        <div className="intro-image">
          <img src={cargo} alt="About Us" />
        </div>
      </div>
      <div className="intro-extras">
        <div className="extra-item">
          <h3></h3>
          <p>Catch me on Twitch every Saturday as I make art live.</p>
        </div>
        <div className="extra-item">
          <h3>Services</h3>
          <p>Videos to guide and to inspire you create.</p>
        </div>
        <div className="extra-item">
          <h3>Top Picks & Recos</h3>
          <p>Materials I stand by and would love for you to try.</p>
        </div>
      </div>
      <div className="intro-categories">
        <div className="category-item">
          <img src="../assets/art.jpg" alt="Art" />
          <p>Art</p>
        </div>
        <div className="category-item">
          <img src="../assets/inspo.jpg" alt="Inspo" />
          <p>Inspo</p>
        </div>
        <div className="category-item">
          <img src="../assets/fashion.jpg" alt="Fashion" />
          <p>Fashion</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Popup from "./ProductDetail";
import SellerForm from "./SellerForm";
import img from "../images/robo.png";
import Back from "../common/Back";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showReadMorePopup, setShowReadMorePopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSellerForm, setShowSellerForm] = useState(false);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleReadMoreClick = (product) => {
    setSelectedProduct(product);
    setShowReadMorePopup(true);
  };

  const handleSellClick = (product) => {
    setSelectedProduct(product);
    setShowSellerForm(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeReadMorePopup = () => {
    setShowReadMorePopup(false);
  };

  const closeSellerForm = () => {
    setShowSellerForm(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const updatedData = data.map((product) => ({
          ...product,
          deletedPrice: Math.floor(product.price + Math.random() * 20), // Generate random deleted price
        }));
        setProducts(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="services mb">
        <Back name="All-Items" title="Products List" cover={img} />
      </section>
      <div
        id="products"
        className={showPopup || showReadMorePopup || showSellerForm ? "blur" : ""}
      >
        {products.map((product) => (
          <div key={product._id} className="card">
            <div className="card-image">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => handleImageClick(product)}
                title="Click here to Sell!"
              />
              <div className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Humnabad</span>
              </div>
            </div>
            <div className="card-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">
                <span className="currency">&#8377;</span>
                {product.price}
                <span className="unit">kg</span>
                <span className="deleted-price">&#8377;{product.deletedPrice}</span>
              </p>
              <div className="buttons">
                <button onClick={() => handleSellClick(product)}>Sell</button>
                <button onClick={() => handleReadMoreClick(product)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <Popup product={selectedProduct} onClose={closePopup} />}
      {showReadMorePopup && (
        <Popup product={selectedProduct} onClose={closeReadMorePopup} />
      )}
      {showSellerForm && (
        <SellerForm
          product={selectedProduct}
          onClose={closeSellerForm}
          setShowSellerForm={setShowSellerForm}
        />
      )}
    </>
  );
}

export default ProductList;
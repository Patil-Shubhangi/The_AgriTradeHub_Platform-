// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Main.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;
  const sliderRef = useRef(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const showSlide = (index) => {
    const slides = sliderRef.current.querySelectorAll('.list .item');
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  };


  // Define your items data
  const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg',
      alt: 'AgriTradeHub',
      type: 'RED BERRY',
      description:
        'Agricultural Trading Hub is your global gateway to the world of agriculture. Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    // Other items...
    {
        src: 'https://cdn.pixabay.com/photo/2016/09/10/13/34/grapes-1659118_960_720.jpg',
        alt: 'AgriTradeHub',
        type: 'STRING FRUITS',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture. Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_960_720.jpg',
        alt: 'AgriTradeHub',
        type: 'SWEET CARROTS',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://getwallpapers.com/wallpaper/full/2/8/9/1443674-cool-wallpaper-fruits-and-vegetables-1920x1080-download-free.jpg',
        alt: 'AgriTradeHub',
        type: 'NATURAL FRUITS',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg',
        alt: 'AgriTradeHub',
        type: 'SWEET HARVEST',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://th.bing.com/th/id/R.df25f1b8edd3bd4622c49941f8366a68?rik=TZfyMakWTAnLvQ&riu=http%3a%2f%2fculinarybackstreets.com%2fwp-content%2fuploads%2fcb_tbilisi_carlacapalbo_georgia_cc_final2.jpg&ehk=sIwhj%2bUQijUhlAfAWyc%2fDfgxD%2frrmtRowr8f2nSaxvU%3d&risl=&pid=ImgRaw&r=0',
        alt: 'AgriTradeHub',
        type: 'RED TOMATO',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/06/17/16/tomato-2823824_1280.jpg',
        alt: 'AgriTradeHub',
        type: 'RED TOMATO',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    {
        src: 'https://th.bing.com/th/id/OIP.x4JsK8Mhikb8Qg8xK12zBAHaE8?rs=1&pid=ImgDetMain',
        alt: 'AgriTradeHub',
        type: 'SWEET HARVEST',
        description: 'Agricultural Trading Hub is your global gateway to the world of agriculture.Our platform connects you with international partners, ensuring the smooth flow of quality products across borders. Explore our offerings and discover premium solutions in the agricultural trade domain! 🌾🚜🌱',
    },
    // ...
  ];

  return (
    <div className="home-container">
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {items.map((item, index) => (
            <div key={index} className={'item' + (index === currentIndex ? ' active' : '')}>
              <img src={item.src} alt={item.alt} />
              <div className="content">
                <div className="title">{item.alt}</div>
                <div className="type">{item.type}</div>
                <div className="description">{item.description}</div>
                <div className="button">
                  <button>See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      {/* Additional content */}
      {/* ... */}
    </div>
  );
};

export default Home;

   // Other items...
  
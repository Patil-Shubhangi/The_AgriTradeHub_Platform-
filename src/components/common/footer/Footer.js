import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
            <img src='https://img.freepik.com/premium-vector/agriculture-icon-logo-vector-design-template_827767-2376.jpg' alt='AgriTradeHub' />
              <h2>Do You Need Help With Anything?</h2>
            </div>
            <div className='para'>
            <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>
            </div>
            <div className='legal'>
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
        <div className="socialIcons">
          <a href="https://www.facebook.com/profile.php?id=100074467951245&sfnsn=wiwspwa&mibextid=RUbZ1f"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-google-plus"></i></a>
          <a href="https://www.instagram.com/shubhee_patil?igsh=MTAzMzV4NnRoMnZiMQ=="><i className="fab fa-instagram"></i></a>       
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Contact">Contact-us</a></li>
            <li><a href="/">Our Team</a></li>
          </ul>
        </div>
      </div>
          </div>
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;

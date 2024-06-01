import React, { useState } from "react";
import axios from "axios";
import "./style.css"; // Import your CSS file here
import Back from "../common/Back";
import img from "../images/veg.png";

function Blog() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveContainer, setIsActiveContainer] = useState(false);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:9000/signUp", signupData);
      console.log(response.data);
      // Reset form fields after successful submission if needed
      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:9000/login", loginData);
      console.log(response.data);

      setLoginData({
        email: "",
        password: "",
      });
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const toggleLoginForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null); // Clear error when toggling forms
  };

  const handleRegisterClick = () => {
    setIsActiveContainer(true);
  };

  const handleLoginClick = () => {
    setIsActiveContainer(false);
  };

  return (
    <>
      <section className="Register">
        <Back
          name="Registration Page"
          title="Sign UP & Sign In"
          cover={img}
        />
      </section>
      <div className={`container3 ${isActiveContainer ? 'active' : ''}`} id="container3">
        <div className={`form-container3 ${isLoginForm ? 'sign-up' : 'sign-in'}`}>
          <form onSubmit={isLoginForm ? handleLoginSubmit : handleSignupSubmit}>
            {!isLoginForm ? (
              <>
                <h1>Create Account</h1>
                <div className="social-icons">
                  {/* Add social signup options */}
                  <a href="https://accounts.google.com/signup" className="icon"><i className="fab fa-google-plus-g"></i></a>
                  <a href="https://www.facebook.com/r.php" className="icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://github.com/join" className="icon"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/signup" className="icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="span" >or use your email for registration</span>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleSignupChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleSignupChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </>
            ) : (
              <>
                <h1>Sign In</h1>
                <div className="social-icons">
                  {/* Add social signup options */}
                  <a href="https://accounts.google.com/signup" className="icon"><i className="fab fa-google-plus-g"></i></a>
                  <a href="https://www.facebook.com/r.php" className="icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://github.com/join" className="icon"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/signup" className="icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="span">or use your email password</span>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </>
            )}
            {isLoading ? (
              <button type="button" disabled>Loading...</button>
            ) : (
              <button type="submit">{isLoginForm ? "Sign In" : "Sign Up"}</button>
            )}
          </form>
        </div>
        <div className="toggle-container3">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className={!isLoginForm ? "hidden" : ""} onClick={toggleLoginForm}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all site features</p>
              <button className={isLoginForm ? "hidden" : ""} onClick={toggleLoginForm}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

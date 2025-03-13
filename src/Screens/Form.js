import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    setIsLoading(true); // Set loading state to true

    // Simulate a delay before navigating
    setTimeout(() => {
      setIsLoading(false); // Reset loading state
      navigate("/success"); // Navigate to the success screen
    }, 3000); // 3-second delay
  };

  return (
    <div>
      <Header />

      <div className="form">
        <form className="form-c" onSubmit={handleSubmit}>
          <h3>PERSONAL INFORMATION</h3>
          <label>Name:</label>
          <input type="text" placeholder="Input your full name" required />
          <label>Email:</label>
          <input type="text" placeholder="Input your email" required />
          <label>Contact Number:</label>
          <input type="text" placeholder="Input your phone number" required />
          <label>Country of Residence</label>
          <input
            type="text"
            placeholder="Input your country of residence"
            required
          />
          <div className="form-group">
            <label htmlFor="location">Location of Property You Want</label>
            <select id="location">
              <option>Select your location here</option>
              <option>Benin City</option>
              <option>Ibadan</option>
              <option>Abeokuta</option>
              <option>Akure</option>
              <option>Enugu</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="property-type">Property Type</label>
            <select id="property-type">
              <option>Select your preferred property type</option>
              <option>2-Bedroom Bungalow</option>
              <option>3-Bedroom Bungalow</option>
              <option>4-Bedroom Bungalow</option>
              <option>2-Bedroom Duplex</option>
              <option>3-Bedroom Duplex</option>
              <option>4-Bedroom Duplex</option>
              <option>2-Bedroom Apartment Flat</option>
              <option>3-Bedroom Apartment Flat</option>
            </select>
          </div>
          <label>Additional Note</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>

          <div className="f-btn">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      <Faq />
      <Footer />
    </div>
  );
};

export default Form;

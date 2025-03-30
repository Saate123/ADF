import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Import Email.js
import Header from "../Components/Header";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsLoading(true);

    const form = e.target; // Get form data

    emailjs
      .sendForm(
        "service_vxjyv3d", // Replace with your Email.js Service ID
        "template_6tertpk", // Replace with your Email.js Template ID
        form,
        "UCaEPq-9SFYj28WNK" // Replace with your Email.js Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsLoading(false);
          navigate("/success"); // Navigate to success page
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div>
      <Header />

      <div className="form">
        <form className="form-c" onSubmit={sendEmail}>
          <h3>PERSONAL INFORMATION</h3>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Input your full name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Input your email"
            required
          />

          <label>Contact Number:</label>
          <input
            type="text"
            name="phone"
            placeholder="Input your phone number"
            required
          />

          <label>Country of Residence</label>
          <input
            type="text"
            name="country"
            placeholder="Input your country of residence"
            required
          />

          <div className="form-group">
            <label htmlFor="location">Location of Property You Want</label>
            <select id="location" name="location">
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
            <select id="property-type" name="property_type">
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
            name="message"
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

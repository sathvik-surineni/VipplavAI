import React, { useState } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div className="contact-container flex justify-center items-center min-h-screen bg-gray-2000">
      <div className="form-container text-white p-10 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="form-Items">
          <div className="form-Items1">
            <form onSubmit={handleSubmit} className="w-1/2 pr-6">
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="form-Items2">
            <div className="contact-info w-1/2 pl-6 text-sm">
              <h2 className="contact-us-title font-bold mb-6 text-green-500">
                Contact <span className="text-blue-500">Us</span>
              </h2>
              <p className="mb-6">For questions, technical assistance,</p>
              <p>
                or collaboration opportunities via the contact information
                provided.
              </p>
              <p className="flex items-center mb-4">
                <i className="fas fa-phone-alt mr-3"></i> +123-456-7890
              </p>
              <p className="flex items-center mb-4">
                <i className="fas fa-envelope mr-3"></i>{" "}
                hello@reallygreatsite.com
              </p>
              <p className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt mr-3"></i> 123 Anywhere St.,
                Any City, ST 12345
              </p>
              <div className="google-map mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5558970089275!2d-122.41941568468157!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818cd9b3a849%3A0x8dbd6b9a312a98db!2s123%20Anywhere%20St%2C%20Any%20City%2C%20ST%2012345!5e0!3m2!1sen!2sus!4v1623857864833!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

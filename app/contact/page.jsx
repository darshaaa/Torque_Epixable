"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    services: [],
    message: "",
    agreement: false,
    captcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "agreement") {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({
          ...formData,
          services: checked
            ? [...formData.services, value]
            : formData.services.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.agreement) {
      alert("Please agree to the Privacy Policy & Terms.");
      setIsSubmitting(false);
      return;
    }

    if (formData.captcha !== "4") {
      alert("Please answer the captcha correctly.");
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters to match your EmailJS template exactly
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      vehicleYear: formData.vehicleYear || "Not specified",
      vehicleMake: formData.vehicleMake || "Not specified", 
      vehicleModel: formData.vehicleModel || "Not specified",
      services: formData.services.length > 0 ? formData.services.join(", ") : "No services selected",
      message: formData.message || "No additional message provided",
    };

    try {
      const result = await emailjs.send(
        "service_tnphdpb", // Your EmailJS Service ID
        "template_n6ss2p4", // Your EmailJS Template ID
        templateParams,
        "YP21SDfp07F2Tce0O" // Your EmailJS Public Key
      );

      console.log("Email sent successfully:", result);
      
      // Redirect to Thank You page instead of showing alert
      router.push("/thankyoupage");

    } catch (error) {
      console.error("Email send failed:", error);
      alert("Something went wrong. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-zinc-200 overflow-hidden">
      <Navlinks isComplete={true} />
      <div className="flex flex-col md:flex-row px-4 md:px-40 py-12 gap-8 mt-30">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 md:sticky md:top-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-[#00DAFF]">
            Business Info
          </h2>
          <div className="text-sm leading-relaxed text-center md:text-left">
            <p>
              <a
                href="https://www.google.com/maps?q=3-29,+4th+B+Cross,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                3-29, 4th B Cross, Koramangala Industrial Layout, <br /> Koramangala, Bengaluru, Karnataka 560034, India
              </a>
            </p>
            <p className="mt-2">
              📞{" "}
              <a href="tel:+919686968315" className="hover:underline text-white">
                +91 96869 68315
              </a>{" "}
              /{" "}
              <a href="tel:+918884440944" className="hover:underline text-white">
                +91 8884440944
              </a>
              <br />
              ✉️{" "}
              <a href="mailto:torquedetailingstudio@gmail.com" className="hover:underline text-white">
                torquedetailingstudio@gmail.com
              </a>
            </p>
            <p className="mt-2 italic">Mon - Sunday: 9am - 8pm (By Appointment)</p>
          </div>
          <iframe
            className="w-full h-72 rounded-xl border-2 border-[#00DAFF]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.271563222612!2d77.61333207506796!3d12.934526287380113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500619c4a47%3A0xebb2a980aa4ccb3e!2sTorque%20Detailing%Studio!5e0!3m2!1sen!2sin!4v1712652482055!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-4">
            CONTACT <span className="text-[#00DAFF]">US</span>
          </h2>
          <p className="text-sm text-center md:text-left mb-6">
            Limited slots only! Book in 24 hrs & get  Benefit
          </p>
          <form onSubmit={handleSubmit}>
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Full Name *"
                onChange={handleChange}
                required
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email *"
                onChange={handleChange}
                required
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
              />
            </div>
            
            <div className="mt-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone *"
                onChange={handleChange}
                required
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white w-full"
              />
            </div>

            {/* Vehicle Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                name="vehicleYear"
                value={formData.vehicleYear}
                placeholder="Vehicle Year"
                onChange={handleChange}
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
              />
              <input
                type="text"
                name="vehicleMake"
                value={formData.vehicleMake}
                placeholder="Vehicle Make"
                onChange={handleChange}
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
              />
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                placeholder="Vehicle Model"
                onChange={handleChange}
                className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
              />
            </div>

            {/* Services */}
            <div className="mt-6">
              <p className="text-sm mb-2">Choose your services:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  "Ceramic Coating",
                  "Paint Correction",
                  "Exterior Detailing",
                  "Interior Detailing",
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Anything else you'd like to share?"
              className="mt-4 p-3 w-full h-24 bg-black/40 text-white border border-white/20 text-sm rounded resize-none focus:outline-none focus:border-[#00DAFF]"
            />

            {/* Agreement & Captcha */}
            <div className="mt-4 flex items-start gap-2">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <span className="text-xs">
                I agree with the Privacy Policy & Terms *
              </span>
            </div>

            <div className="mt-4 flex gap-2 items-center">
              <label className="text-sm">4 + 0 = *</label>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="p-2 bg-black/40 text-white text-sm w-20 border border-white/20 text-center rounded focus:outline-none focus:border-[#00DAFF]"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center md:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 rounded border border-[#00DAFF] text-[#00DAFF] hover:bg-[#00daff2a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "Get free inspection "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
"use client"
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = process.env.SERVICE_ID;     // Your EmailJS Service ID
    const TEMPLATE_ID = process.env.TEMPLATE_ID;   // Your EmailJS Template ID  
    const PUBLIC_KEY = process.env.PUBLIC_KEY;   // Your EmailJS Public Key

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          alert("Message sent successfully! 🎉");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again. ❌");
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center px-2 py-4" id="contact">
      <div className="w-full max-w-4xl border border-gray-700 rounded-xl p-12 space-y-6">
        <p className="text-center uppercase text-sm mb-4 tracking-wide">GET IN TOUCH</p>
        <h2 className="text-center text-4xl font-bold text-red-400 mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:work.abhinavsingh2@gmail.com"
            className="flex items-center justify-center border border-gray-700 rounded-lg py-4 px-2 hover:bg-gray-800 transition"
          >
            <span className="mr-2">📧</span> work.abhinavsingh2@gmail.com
          </a>
          <a
            href="https://wa.me/9936356326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-gray-700 rounded-lg py-4 px-2 hover:bg-gray-800 transition"
          >
            <span className="mr-2">💬</span> WhatsApp
          </a>
        </div>

        <p className="text-center text-sm text-gray-400">Or send a message</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-zinc-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-zinc-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-zinc-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md h-40 bg-zinc-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-md border border-gray-700 text-white transition ${
              isLoading 
                ? "bg-gray-600 cursor-not-allowed" 
                : "hover:bg-pink-500"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
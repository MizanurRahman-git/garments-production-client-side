import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-slate-400 max-w-2xl mb-12">
          Have a project in mind, a question, or just want to say hi? I'd love
          to hear from you. Fill out the form below or reach out directly
          through email or social media.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 uppercase">Email</p>
                  <p className="font-medium break-all lg:break-normal">
                    mizanurrahmanhridoy42@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase">Phone</p>
                  <p className="font-medium">+8801703310706</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase">Location</p>
                  <p className="font-medium">Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <Link
                  to="https://www.facebook.com/mizanurrahmanfindd"
                  className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://x.com/1mizanurrahman1"
                  className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://www.instagram.com/___mizanur_rahman_hridoy___/"
                  className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

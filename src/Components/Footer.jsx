import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "../assets/logo (2).png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-t from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Fabric Fusion"
                className="w-14 h-14 rounded-full ring-2 ring-indigo-500/40 transition hover:scale-105"
              />
              <h2 className="text-xl font-bold text-white">
                Fabric Fusion Industries Ltd.
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Fabric Fusion connects local pet owners and buyers for adoption
              and pet care products.
            </p>

            <p className="text-sm font-semibold text-gray-300">
              Providing reliable tech since 2025
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Contact", path: "/contact" },
                { name: "About Us", path: "/about-us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mizanurrahmanfindd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-indigo-500 hover:scale-110"
              >
                <FaFacebookF className="text-white text-sm" />
              </a>

              <a
                href="https://www.instagram.com/___mizanur_rahman_hridoy___/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-pink-500 hover:scale-110"
              >
                <FaInstagram className="text-white text-sm" />
              </a>

              <a
                href="https://x.com/1mizanurrahman1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-sky-500 hover:scale-110"
              >
                <FaTwitter className="text-white text-sm" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Fabric Fusion Industries Ltd. All
            rights reserved.
          </p>
          <p className="hover:text-white transition cursor-pointer">
            Designed with ❤️ for modern fashion brands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

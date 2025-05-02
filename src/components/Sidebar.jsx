import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaGlobe,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Sidebar = () => {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-20 w-full bg-gray-900 flex items-center justify-between px-6 z-50 shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-6 text-white">
        <Link to="/" className="hover:text-purple-400">
          <FaHome size={22} />
        </Link>
        <Link to="/perfil" className="hover:text-purple-400">
          <FaUserAlt size={22} />
        </Link>
      </div>

      {/* Central Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/furia-logo-small.png"
          alt="FURIA"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="relative">
        <button
          onClick={() => setShowSocials(!showSocials)}
          className="text-white hover:text-purple-400"
        >
          <FaGlobe size={22} />
        </button>

        {/* Social Media Icons Dropdown */}
        {showSocials && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col space-y-3">
            <a
              href="https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-red-500"
            >
              <FaYoutube size={20} />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/furiagg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-pink-500"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://x.com/FURIA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-blue-400"
            >
              <FaTwitter size={20} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/furiagg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-blue-600"
            >
              <FaFacebook size={20} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.furia.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaGlobe size={20} />
              <span>Site Oficial</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

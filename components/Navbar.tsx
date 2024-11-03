"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/public/navLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#110a38] shadow-lg fixed w-full z-50">
      <div className="mx-auto px-4 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-end">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-16">
                <Image
                  src={logo}
                  alt="Coding Souls"
                  fill
                  className="object-contain pt-2"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-violet-700 text-lg font-semibold">
              Home
            </Link>
            <Link
              href="https://codingsouls.com/services"
              className="text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              href="https://codingsouls.com/projects/"
              className="text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Projects
            </Link>
            <Link
              href="https://codingsouls.com/blog"
              className="text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Blog
            </Link>
            <Link
              href="https://codingsouls.com/about"
              className="text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              About Us
            </Link>
            <Link
              href="https://codingsouls.com/contact"
              className="text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-violet-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              GET A QUOTE →
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#110a38] p-4 space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block text-violet-700 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              href="https://codingsouls.com/services"
              onClick={toggleMenu}
              className="block text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              href="https://codingsouls.com/projects/"
              onClick={toggleMenu}
              className="block text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Projects
            </Link>
            <Link
              href="https://codingsouls.com/blog"
              onClick={toggleMenu}
              className="block text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Blog
            </Link>
            <Link
              href="https://codingsouls.com/about"
              onClick={toggleMenu}
              className="block text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              About Us
            </Link>
            <Link
              href="https://codingsouls.com/contact"
              onClick={toggleMenu}
              className="block text-gray-400 hover:text-violet-600 text-lg font-semibold"
            >
              Contact
            </Link>
            <Link
              href="/"
              onClick={toggleMenu}
              className="block bg-gradient-to-r from-violet-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
            >
              GET A QUOTE →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

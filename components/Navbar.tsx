import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-12">
                {/* Replace with your actual logo */}
                <Image
                  src={logo}
                  alt="Coding Souls"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-violet-600 hover:text-violet-700">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-violet-600"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-violet-600"
            >
              Projects
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-violet-600">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-violet-600">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-violet-600"
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="bg-gradient-to-r from-violet-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              GET A QUOTE →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

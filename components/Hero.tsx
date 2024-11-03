import Image from "next/image";
import bgimg from "@/public/bgimg.jpeg";
import logo from "@/public/logo.webp";
import python from "@/public/python.png";
import codelgniter from "@/public/CodeIgniter.png";
import flutter from "@/public/flutter.png";
import node from "@/public/node.png";
import laravel from "@/public/laravel.png";
import wordpress from "@/public/wordpress.png";
import react from "@/public/react.png";
import php from "@/public/php.png";
import Link from "next/link";

export default function Hero() {
  const calculatePosition = (index: number, total = 8) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2;
    const radius = 150;

    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
      transform: "translate(-50%, -50%)",
    };
  };

  return (
    <section
      className="min-h-screen w-full bg-[#0A051A] text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto px-4 py-16 md:py-24 lg:py-32 mt-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:mt-32">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10 lg:ml-32">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Coding the Future
              <br />
              Today
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Coding Souls is your trusted coding partner, empowering businesses
              and individuals to reach new heights since 2020. With cutting-edge
              solutions and expertise, we bring innovative ideas to life through
              code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-cyan-400 max-w-xl mx-auto lg:mx-0">
              {[
                "Free 6 Months Support",
                "101% Client Satisfaction",
                "Any Coding & CMS Solution",
                "Custom Web/APP Development",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 justify-center lg:justify-start"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="https://codingsouls.com/contact/"
              className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              CONTACT
            </Link>
          </div>

          {/* Right Content - Rotating Icons */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-8 pb-16 lg:py-0">
            <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[440px] lg:h-[440px]">
              {/* Rotating outer circle */}
              <div className="absolute inset-0 animate-spin-slow">
                {[
                  {
                    src: php,
                    alt: "PHP",
                    bg: "bg-gradient-to-br from-violet-400 to-violet-800",
                  },
                  { src: react, alt: "React", bg: "bg-[#282c34]" },
                  { src: wordpress, alt: "WordPress", bg: "bg-[#d0e7f1]" },
                  { src: laravel, alt: "Laravel", bg: "bg-[#f5e1e0]" },
                  {
                    src: flutter,
                    alt: "Flutter",
                    bg: "bg-gradient-to-br from-blue-900 to-blue-400",
                  },
                  {
                    src: python,
                    alt: "Python",
                    bg: "bg-gradient-to-br from-indigo-900 to-yellow-500",
                  },
                  { src: codelgniter, alt: "CodeIgniter", bg: "bg-[#f7b467]" },
                  { src: node, alt: "Node.js", bg: "bg-[#6cee72]" },
                ].map((icon, index) => (
                  <div
                    key={icon.alt}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden"
                    style={calculatePosition(index)}
                  >
                    <div
                      className={`w-full h-full ${icon.bg} p-2 sm:p-2.5 md:p-3 lg:p-4 animate-spin-slow-reverse`}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 relative flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="Coding Souls Logo"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-2 left-1 w-1/2 h-1/2 bg-blue-700 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-1 right-1 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

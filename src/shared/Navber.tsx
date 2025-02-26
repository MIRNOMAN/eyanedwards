'use client'
import {  useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import logo1 from "@/assets/logo/logo_1.png";
import logo2 from "@/assets/logo/logo_2.png";
import logo3 from "@/assets/logo/logo_4.png";
import logo4 from "@/assets/logo/logo_3.png";

export default function Navber() {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path

  // Map pathnames to specific logos
  const logoMap: Record<string, StaticImageData> = {
    "/": logo1,
    "/our-services": logo2,
    "/credit-card-liquidation": logo3,
    "/group-economics": logo4,
   "/about-us" : logo1,
  };

  // Default to logo1 if no match
  const logo = logoMap[pathname] || logo1;

 


    return (
        <nav className={` top-0   w-full z-50 absolute bg-black `}>
        <div className="container font-montserrat font-normal mx-auto flex items-center justify-between px-4 py-9">
        <Link href="/" className="flex items-center gap-2">
        <Image className="md:w-[130px] w-[50px] object-contain" src={logo} alt="nav logo" />
      </Link>
  
          <div className="hidden items-center gap-8 lg:flex">
            {[
              { name: "Home", path: "/" },
              { name: "Our Services", path: "/our-services" },
              { name: "Credit Card Liquidation", path: "/credit-card-liquidation" },
              { name: "Group Economics", path: "/group-economics" },
              { name: "Red Card", path: "/red-card" },
              { name: "Get The Book", path: "/get-the-book" },
              { name: "About Us", path: "/about-us" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={` hover:text-gray-900 text-white`}
              >
                {link.name}
              </Link>
            ))}
          </div>
  
          <div className="hidden items-center gap-4 lg:flex">
            <button className="hidden font-clash rounded-[8px] border  px-6 py-[10px] font-medium text-white md:block">
            Contact Us
            </button>
           
          </div>
  
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? (
              <X className="text-[22px] font-semibold text-black" />
            ) : (
              <RxHamburgerMenu className="text-[25px] font-semibold text-black" />
            )}
          </button>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-0 z-50 transform bg-white px-4 py-6 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-y-0" : "hidden"
          }`}
        >
          <div className="container mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Image className="w-[150px] object-contain" src={logo || "/placeholder.svg"} alt="nav logo" />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="text-[22px] font-semibold text-black" />
              </button>
            </div>
  
            <div className="flex flex-col gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "Our Services", path: "/our-services" },
                { name: "Credit Card Liquidation", path: "/credit-card-liquidation" },
                { name: "Group Economics", path: "/group-economics" },
                { name: "Red Card", path: "/red-card" },
                { name: "Get The Book", path: "/get-the-book" },
                { name: "About Us", path: "/about-us" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-black font-medium ${pathname === link.path ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
            </div>
          </div>
        </div>
  
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    );

}

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo_1 from "@/assets/logo/logo_1.png";
import logo_2 from "@/assets/logo/logo_2.png";
import logo_3 from "@/assets/logo/logo_3.png";
import logo_4 from "@/assets/logo/logo_4.png";
import logo_icon_1 from "@/assets/home/instagram.png";
import logo_icon_2 from "@/assets/home/tiktok.png";
import logo_icon_3 from "@/assets/home/youtube.png";
import logo_icon_4 from "@/assets/home/envelope.png";

import { StaticImageData } from "next/image";

export default function Footer() {
  const pathname = usePathname();

  const logoMap: Record<string, StaticImageData> = {
    "/": logo_1,
    "/our-services": logo_2,
    "/credit-card-liquidation": logo_3,
    "/group-economics": logo_4,
    "/about-us": logo_1,
  };

  const logo = logoMap[pathname] || logo_1;

  return (
    <footer className="px-6 md:px-12 lg:px-20 py-16 bg-black text-white">
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Logo & Operating Hours */}
        <div className="flex flex-col items-center sm:items-start">
          <Image src={logo} alt="Company Logo" width={110} height={85} className="h-20 w-auto" />
          <h1 className="text-lg font-bold mt-3 text-primary">Operating Hours</h1>
          <p className="text-sm mt-1 text-gray-400">Mon - Fri (9am - 9pm)</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Resources</Link></li>
            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold text-primary mb-3">Contact Us</h2>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Image src={logo_icon_1} alt="Email Icon" width={22} height={22}  />
            <Link href="mailto:info@hightickeofferfinancing.com" className="hover:text-white md:text-[15px] text-[13px]">info@hightickeofferfinancing.com</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold text-primary mb-3">Follow Us</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Image src={logo_icon_2} alt="Instagram" width={22} height={22} />
              <Link href="#" className="hover:text-white">Instagram</Link>
            </li>
            <li className="flex items-center space-x-2">
              <Image src={logo_icon_3} alt="TikTok" width={22} height={22} />
              <Link href="#" className="hover:text-white">TikTok</Link>
            </li>
            <li className="flex items-center space-x-2">
              <Image src={logo_icon_4} alt="YouTube" width={22} height={22} />
              <Link href="#" className="hover:text-white">YouTube</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

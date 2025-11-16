"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-10 px-4">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-600 text-[16px]">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-orange-600"
          >
            <FaInstagram className="cursor-pointer" />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-orange-600"
          >
            <FaTwitter className="cursor-pointer" />
          </Link>

          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-orange-600"
          >
            <FaFacebookF className="cursor-pointer" />
          </Link>

          <Link
            href="https://wa.me/918099990221"
            target="_blank"
            className="hover:text-orange-600"
          >
            <FaWhatsapp className="cursor-pointer" />
          </Link>

          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-orange-600"
          >
            <FaYoutube className="cursor-pointer" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6 text-gray-900">
          <div className="h-6 border-l border-gray-300" />

          <Link href="tel:+918099990221" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">+91 8099990221</span>
          </Link>

          <Link href="mailto:info@shinengo.org" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@shinengo.org</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

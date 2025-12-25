import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <aside className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo/logo.png"
                alt="LifeCare Hub Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold text-primary">LifeCare Hub</h2>
            </div>

            <p className="text-sm leading-relaxed text-neutral-content/80">
              Reliable LifeCare Hub Platform.
              <br />
              Providing trusted care since 2025.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-base-100 text-primary hover:bg-primary hover:text-white transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-base-100 text-primary hover:bg-primary hover:text-white transition"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-base-100 text-primary hover:bg-primary hover:text-white transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </aside>

          {/* Services */}
          <nav>
            <h6 className="footer-title mb-3">Services</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/baby-care"
                  className="link link-hover block"
                >
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/elderly-care"
                  className="link link-hover block"
                >
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/special-needs"
                  className="link link-hover block"
                >
                  Special Needs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mental-support"
                  className="link link-hover block"
                >
                  Mental Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title mb-3">Company</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="link link-hover block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link link-hover block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="link link-hover block">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title mb-3">Legal</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="link link-hover block">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="link link-hover block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="link link-hover block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-content/20 mt-10 pt-6 text-center text-sm text-neutral-content/70">
          © {new Date().getFullYear()} LifeCare Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

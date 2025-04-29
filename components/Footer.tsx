"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import NodeLogo from "../public/node-footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FaStar, FaEnvelope } from "react-icons/fa";
import { OswaldFont, PoppinsFont } from "@/fonts";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, async: boolean) => void;
    };
  }
}

const SocialIcon = React.memo(({ href, icon, label, hoverColor }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={`transition-all duration-300 text-sm md:text-base ${hoverColor}`}
  >
    <FontAwesomeIcon icon={icon} />
  </a>
));

const Stars = () => (
  <div className="flex justify-end mt-2 gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-yellow-400 text-[10px]" />
    ))}
  </div>
);

const Footer = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "https://nodeagency.co/work" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com",
      icon: faLinkedin,
      hoverColor: "hover:text-blue-800",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      icon: faYoutube,
      hoverColor: "hover:text-red-600",
      label: "YouTube",
    },
    {
      href: "https://twitter.com",
      icon: faTwitter,
      hoverColor: "hover:text-sky-500",
      label: "Twitter",
    },
    {
      href: "https://facebook.com",
      icon: faFacebookF,
      hoverColor: "hover:text-blue-700",
      label: "Facebook",
    },
  ];

  const officeLocations = [
    {
      region: "USA",
      address:
        "7091 4TH ST STE 300 ST PETERSBERG, Florida, NY 33702, United States",
    },
    {
      region: "ASIA",
      address: "VIP, Service Road East, Ghauri Town, 44000, Islamabad",
    },
  ];

  const infoItems = [
    {
      type: "text",
      content:
        "Skip the hassle. Get immediate access to top-notch software and IT skills!",
      extraClass: "pb-5",
    },
    {
      type: "link",
      content: "hrjobs@nodeagency.co",
      href: "mailto:hrjobs@nodeagency.co",
      extraClass: "pb-20",
    },
  ];

  const footerLinks = [
    {
      href: "/",
      text: "Terms of Services",
      withBorder: true,
    },
    {
      href: "/",
      text: "Privacy Policy",
      withBorder: false,
    },
  ];

  const sharedTextClass = `lg:text-[17px] text-[hsla(0,0%,100%,.7)] pb-[10px] ${PoppinsFont}`;
  const sharedLinkClass = `px-2 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`;
  const borderRightClass = "border-r-2 border-gray-600";

  useEffect(() => {
    const initTrustpilotWidget = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(
          document.getElementById("trustpilot-widget"),
          true
        );
      }
    };

    if (window.Trustpilot) {
      initTrustpilotWidget();
    } else {
      window.addEventListener("trustpilot_ready", initTrustpilotWidget);
    }

    return () => {
      window.removeEventListener("trustpilot_ready", initTrustpilotWidget);
    };
  }, []);

  return (
    <div className="px-[5vw] pt-[60px] bg-[#1C1C1C] pb-12 relative z-50">
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event("trustpilot_ready"));
        }}
      />

      <div className="bg-black rounded-xl p-10 relative">
        <div className="flex lg:flex-row flex-col justify-evenly lg:gap-20 gap-6 w-full pb-5">
          <div className="lg:w-[23%] w-full text-center">
            <div className="flex items-center justify-center lg:pb-4">
              <Link href="/">
                <Image
                  className="w-auto h-[45px] lg:h-[55px]"
                  src={NodeLogo}
                  height={75}
                  alt="Node Logo"
                />
              </Link>
            </div>

            {infoItems.map((item, index) =>
              item.type === "text" ? (
                <p
                  key={index}
                  className={`${sharedTextClass} ${item.extraClass}`}
                >
                  {item.content}
                </p>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`${sharedTextClass} ${item.extraClass} hover:text-[#F97316] transition-all flex justify-center items-center gap-1 w-fit max-w-full m-auto`}
                  style={{ paddingBottom: 0 }}
                  target="_blank"
                >
                  <FaEnvelope />
                  {item.content}
                </a>
              )
            )}

            <div className="justify-center items-center gap-3 mt-5 hidden">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>

          <div className="lg:w-[27%] w-full p-4 lg:p-0">
            <h4
              className={`text-[20px] lg:text-2xl font-bold mb-6 text-center lg:mb-8 ${OswaldFont}`}
            >
              LOCATIONS
            </h4>
            <div className="space-y-4 lg:space-y-6">
              {officeLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left gap-2 sm:gap-4 lg:gap-6"
                >
                  <p
                    className={`flex flex-col lg:flex-row gap-4 lg:gap-9 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
                  >
                    <strong className="text-white">{loc.region}</strong>
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[20%] w-full flex flex-col">
            <h4
              className={`text-[20px] lg:text-2xl font-bold mb-6 text-center ${OswaldFont} uppercase`}
            >
              Site Links
            </h4>
            <ul className={`space-y-4 text-center ${PoppinsFont}`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="lg:text-[17px] text-1xl hover:text-[#F97316]  transition-all text-[hsla(0,0%,100%,.7)] tracking-[0.9px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <div
                id="trustpilot-widget"
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="680269cab6723fa6a6d265c7"
                data-style-height="52px"
                data-style-width="100%"
              >
                <a
                  href="https://www.trustpilot.com/review/nodeagency.co"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 lg:mt-0 mt-7 items-center justify-center text-center md:justify-between border-t-[0.5px] border-gray-300 pt-6">
          <p className={`text-sm text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}>
            Node Agency &copy; 2025. All Rights Reserved
          </p>
          <div className="hidden items-center">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${sharedLinkClass} ${
                  link.withBorder ? borderRightClass : ""
                } hover:text-white transition-all duration-200`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

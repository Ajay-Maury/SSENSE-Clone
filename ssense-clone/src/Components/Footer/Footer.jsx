import React from "react";
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const linkText = [
    {
      id: 1,
      title: "COUNTRY/REGION: INDIA",
      to: "/",
    },
    {
      id: 2,
      title: "NEWSLETTER SIGNUP",
      to: "/",
    },
    {
      id: 3,
      title: "CUSTOMER CARE",
      to: "/",
    },
    {
      id: 4,
      title: "LOCATION",
      to: "/",
    },
    {
      id: 5,
      title: "EDITORIAL ARCHIVE",
      to: "/",
    },
    {
      id: 6,
      title: "CAREERS",
      to: "/",
    },
    {
      id: 7,
      title: "AFFLIATES",
      to: "/",
    },
    {
      id: 8,
      title: "SITEMAP",
      to: "/",
    },
  ];
  const SocialIcons = [
    {
      id: 1,
      icon: <FaFacebookF />,
      to: "https://www.facebook.com/SSENSEofficial",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      to: "https://twitter.com/ssense",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      to: "https://instagram.com/ssense",
    },
    {
      id: 4,
      icon: <FaYoutube />,
      to: "https://www.youtube.com/user/ssense",
    },
  ];
  const bottemLinks = [
    {
      id: 1,
      title: "@2022ssense.com",
      to: "/",
    },
    {
      id: 2,
      title: "Terms & Conditions",
      to: "/",
    },

    {
      id: 3,
      title: "Privacy Policy",
      to: "/",
    },
    {
      id: 4,
      title: "Cookies",
      to: "/",
    },
    {
      id: 5,
      title: "Accessibility",
      to: "/",
    },
  ];
  return (
    <div className="footer">
      <div className="footer-conatiner">
        <div className="footer-up">
          <div className="textLinks">
            {linkText.map((link) => (
              <a href={link.to} key={link.id} className="link">
                {link.title}
              </a>
            ))}
          </div>
          <div className="socialIcons">
            {SocialIcons.map((icon) => (
              <a href={icon.to} key={icon.id} className="link">
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          {bottemLinks.map((link) => (
            <a href={link.to} key={link.id} className="bottemlink">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};



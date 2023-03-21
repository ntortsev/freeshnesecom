import React from "react";

function Footer() {
  const footerInfo = [
    {
      title: "Get in touch",
      subtitle: ["About Us", "Careers", "Press Releases", "Blog"],
    },
    {
      title: "Connections",
      subtitle: ["Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn"],
    },
    {
      title: "Earnings",
      subtitle: [
        "Become an Affiliate",
        "Advertise your product",
        "Sell on Market",
      ],
    },
    {
      title: "Account",
      subtitle: [
        "Your account",
        "Returns Centre",
        "100 % purchase protection",
        "Chat with us",
        "Help",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-top">
        {footerInfo.map((obj, i) => (
          <div className="blog" key={i}>
            <h1>{obj.title}</h1>
            <ul>
              {obj.subtitle.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span>Copyright © 2020 petrbilek.com</span>
    </div>
  );
}

export default Footer;

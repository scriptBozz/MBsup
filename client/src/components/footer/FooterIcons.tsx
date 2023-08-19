import React from "react";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

export default function FooterIcons() {
  return (
    <div className="footerIcons">
      <img src={facebook} alt="media" height="30px" className="footerImage" />
      <img src={instagram} alt="media" height="30px" />
      <img src={twitter} alt="media" height="30px" />
      <img src={youtube} alt="media" height="30px" />
    </div>
  );
}

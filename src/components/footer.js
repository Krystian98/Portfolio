import React from "react";
import { SocialIcon } from "react-social-icons";

import "./footer.css";

export default function Footer() {
    return (
      <div className="home-container">
          <SocialIcon url="mailto:kystiankrawczyk98@gmail.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35}}/>
          <SocialIcon url="https://www.instagram.com/krystianbp/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35}}/>    
      </div>
    );
  }
  
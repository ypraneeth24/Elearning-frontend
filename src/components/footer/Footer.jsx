import React from 'react';
import "./footer.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your E-Learning Platform. All rights reserved. <br />
                Made with ❤️ <a href="">Praneeth</a>
            </p>
            <div className="social-links">
                <a href=""><AiFillFacebook/></a>
                <a href=""><FaXTwitter/></a>
                <a href=""><AiOutlineInstagram/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

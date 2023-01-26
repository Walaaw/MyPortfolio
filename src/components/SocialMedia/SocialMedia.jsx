import React from "react";
import { BsFacebook,BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillFilePdf  } from "react-icons/ai";
export default function SocialMedia() {
  return (
    <>
      <div className="app__social">
        <a target="_blank" href="https://www.facebook.com/walaa.sweed.1">
          <div>
            <BsFacebook />
          </div>
        </a>
        <a target="_blank" href="https://www.instagram.com/walaa_mahmoudd/">
          <div>
            <BsInstagram />
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/walaa-mahmoud213">
          <div>
            <BsLinkedin />
          </div>
        </a>  <a target="_blank" href="https://github.com/Walaaw">
          <div>
            <BsGithub />
          </div>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1VwFpaQo1rhM-6uPuDE2t8e3ZOvFTnI-O/view?usp=sharing">
          <div>
            <AiFillFilePdf />
          </div>
        </a>
      </div>
    </>
  );
}

import React from "react";
import "./Contact.css";

import { AiFillLinkedin } from "react-icons/Ai";
import { AiFillGithub } from "react-icons/Ai";
import { MdPhonelinkRing } from "react-icons/Md";
import { GrMail } from "react-icons/Gr";

const Contact = () => {
  return (
<>
<div className="contact">
      <div className="icon">
        
        <div className="linkedin"><AiFillLinkedin size={45} /></div>
        
        <div className="git"> <AiFillGithub size={45} /></div>
        
         <div className="cel"> <MdPhonelinkRing size={45} /> </div>
        <div className="mail"> <GrMail size={45} /></div>
      </div>
    </div>

</>
  );
};

export default Contact;

// .moviesGrid{
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 230px);
//   gap: 40px;
//   padding: 40px;
//   justify-content: center;
// }

// @media (max-width: 560px){
//   .moviesGrid{
//       grid-template-columns: 100%;
//   }
// }

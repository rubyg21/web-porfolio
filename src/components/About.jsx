import "./About.css";

import { ImHtmlFive } from "react-icons/Im";
import { DiCss3 } from "react-icons/Di";
import { SiJavascript } from "react-icons/Si";
import { RiVuejsFill } from "react-icons/Ri";
import { GrReactjs } from "react-icons/Gr";
import { IoLogoNodejs } from "react-icons/Io";
import { SiMysql } from "react-icons/Si";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1> About me </h1>
          <p className="aboutText">
            Hi there! My name is Agustin, and I am passionate and enthusiastic
            about creating on the web! My interest in development began when I
            decided to create a small website for a personal project with
            standard templates. Not being able to achieve the level of detail
            that I had I mind, I decided to get into the programming world, and
            since moment i did, I loved it! I like to write clean, tidy and work
            hard, I am currently looking to work in a place that allows me to
            grow, learn and progress in web development.
          </p>
        </div>
        <div className="conteinerIcon">
          
          <div className="html"> 
           
            <ImHtmlFive size="70px" />
            <p >HTML</p>
          </div>
          <div className="css"> 
            
            <DiCss3 size="80px" /> 
            <p>CSS</p>
          </div>
          <div className="js"> 
           
            <SiJavascript size="65px" />
            <p>Javascript</p>
          </div>
          <div className="vue">
            
            <RiVuejsFill size="70px" />
            <p>Vue</p>
          </div>
          <div className="react">
            
            <GrReactjs size="70px" />
            <p> React </p>
          </div>
          <div className="node">

            <IoLogoNodejs size="70px" />
            <p>Node</p>
          </div>
          <div className="mysql">



            <SiMysql size="80px" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

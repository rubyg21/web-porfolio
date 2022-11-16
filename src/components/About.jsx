import React, { useState } from "react";
import "./About.css";
import Skills from "./Skills";
import NoSkills from "./NoSkills";

const About = () => {
  const [name, setName] = useState(<NoSkills />);

  const handelClick = () => {
    setName(<Skills />);
  };

  return (
    <>
      <div className="about">
        <div>
          <h1> About me </h1>
          <p>
            Hi there! My name is Agustin, and I am passionate and enthusiastic
            about creating on the web! My interest in development began when I
            decided to create a small website for a personal project with
            standard templates. Not being able to achieve the level of detail
            that I had I mind, I decided to get into the programming world, and
            since moment i did, I loved it! I like to write clean, tidy and work
            hard, I am currently looking to work in a place that allows me to
            grow, learn and progress in web development.
          </p>
          <button className="skills" onClick={handelClick}>
            {" "}
            Skills
          </button>
        </div>
        <div> {name} </div>
      </div>
    </>
  );
};

export default About;

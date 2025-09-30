import React from "react";
import "../styles/home.css"
import {Typewriter} from "react-simple-typewriter";

function Home() {
  return (
    <>

      {/* /* Start your code here */}
      <div className="home-section">

        <div className="hero-content">
          
          <h1> Hello, I'm <span className="highlight"> Sia Garg!</span> </h1>

          <h2> 

          I'm {" "}
          
          <span className="typewriter">
          <Typewriter
          words={[
            "a Software Developer" ,
            "a Computer Vision Enthusiast" ,
            "an Integration Finder" ,
            "a Problem Solver"
          ]}loop
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
          cursorColor="blue"
          />

        </span>
        </h2>

        <p className="hero-desc">
          I love building interactive websties, I love working on large language models and exploring AI focused challenges.
        </p>

        <button 
          className = "view_button"
          onClick = {() => document.getElementById("projects").scrollIntoView({behaviour:"smooth"})}
        >
          View my Projects
        </button>

        </div>

      </div>

    </>
  );
}

export default Home;
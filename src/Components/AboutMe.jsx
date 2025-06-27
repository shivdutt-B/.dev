import React from "react";
import Me from "../assets/displayPicture/color_stripe_me.jpg";

function Intro() {
  return (
    <div
      className="flex justify-center relative mt-[5rem] mb-[10rem] px-5"
      id="about"
    >
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] w-full gap-8">
        <div className="flex justify-center md:justify-start w-[100%]">
          <img
            className="rounded-md w-full h-auto md:w-[500px] object-cover"
            src={Me}
            alt="Shivdutt Bhadakwad"
          />
        </div>

        {/* Right Side (Text Section) */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[clamp(30px,8vw,40px)] font-[var(--max-weight)] text-[var(--dark-txt)] mb-4">
            About Me🤷‍♂️
          </h1>
          <p className="text-[var(--light-txt)] mb-0 text-[clamp(16px,1.5vw,20px)] leading-relaxed">
            Hi, I'm Shivdutt Bhadakwad, a Fullstack Developer with a strong
            passion for Machine Learning.
            <br />
            <br />
            Currently, I'm in my second year of studying Computer Engineering in
            Pune, India, where I'm actively building my skills and knowledge in
            both web development and cutting-edge technologies like AI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;

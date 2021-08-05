import React from "react";
import heroImage from "../../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="relative text-base py-8">
      <div className="container flex flex-col md:flex-row-reverse items-center justify-between ">
        <div className="flex-1">
          <img className="w-full" src={heroImage} alt="" />
        </div>
        <div className="flex-1 space-y-6 ">
          <h1 className="w-10/12 text-center md:text-left mx-auto md:mx-0 text-3xl  lg:text-5xl text-very-dark-blue font-medium">
            A Simple Bookmark Manager
          </h1>
          <p className="w-10/12 text-center md:text-left mx-auto md:mx-0 text-grayish-blue">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-6 justify-center md:justify-start items-center">
            <button className="text-sm btn btn-blue">Get it on Chrome</button>
            <button className="text-sm btn btn-gray">Get it on Firefox</button>
          </div>
        </div>
        {/* background box */}
        <div className="hidden md:block absolute bg-soft-blue rounded-l-full -z-10 w-2/5 h-52 md:h-2/3 bottom-58 md:bottom-0 right-0 "></div>
      </div>
    </div>
  );
};

export default Hero;

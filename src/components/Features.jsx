import React from "react";
import Tabbed from "./Tabbed";

const Features = () => {
  return (
    <div className="relative">
      <div className=" container space-y-8 py-16  md:py-24">
        <div className="text-center text-very-dark-blue space-y-5">
          <h1 className="text-3xl md:text-4xl font-medium">Features</h1>
          <p className="text-grayish-blue max-w-lg mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Tabbed />
        <div className="hidden md:block absolute bg-soft-blue rounded-r-full -z-10 w-2/5 left-0 md:bottom-36 lg:bottom-28 xl:bottom-12 right-0 md:h-32 xl:h-72"></div>
      </div>
    </div>
  );
};

export default Features;

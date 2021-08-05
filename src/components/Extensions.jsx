import React from "react";
import Cards from "./Cards";

const Extensions = () => {
  return (
    <div className="container space-y-8 -mt-6  lg:mt-20 pb-16 md:pb-20">
      <div className="text-center text-very-dark-blue space-y-5">
        <h1 className="text-3xl font-medium">Download the extension</h1>
        <p className="text-grayish-blue max-w-lg mx-auto">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Extensions;

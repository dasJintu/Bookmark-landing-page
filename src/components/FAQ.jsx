import React from "react";
import FAQList from "./FAQList";

const FAQ = () => {
  return (
    <div className="container space-y-8 py-16 md:py-20">
      <div className="text-center text-very-dark-blue space-y-5">
        <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
        <p className="text-grayish-blue max-w-lg mx-auto">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <FAQList />
      <div className="grid place-content-center">
        <button className=" btn btn-blue">More Info</button>
      </div>
    </div>
  );
};

export default FAQ;

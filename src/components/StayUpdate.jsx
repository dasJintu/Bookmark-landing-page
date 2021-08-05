import React from "react";

const StayUpdate = () => {
  return (
    <div className=" bg-soft-blue py-12">
      <div className="container flex flex-col gap-6 md:gap-8 items-center">
        <p className="uppercase leading-loose text-white">
          35,000+ already joined
        </p>
        <h2 className="text-3xl font-medium max-w-md text-center text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-3 space-x-0 md:space-x-3"
        >
          <input
            className="py-3 px-2 w-full md:w-auto md:px-4 lg:px-4 rounded-md placeholder-gray-300 focus:outline-none"
            placeholder="Enter your email address"
            type="email"
          />
          <button className="w-full md:w-auto btn btn-red focus:outline-none">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default StayUpdate;

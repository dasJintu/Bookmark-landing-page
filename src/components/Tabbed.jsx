import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import firstImg from "../../images/illustration-features-tab-1.svg";
import secondImg from "../../images/illustration-features-tab-2.svg";
import thirdImg from "../../images/illustration-features-tab-3.svg";

const Tabbed = () => {
  const [tabbed] = useState([
    {
      id: 1,
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      text: " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      btnText: "More Info",
      img: firstImg,
    },
    {
      id: 2,
      title: "Speedy Searching",
      heading: "Intelligent search",
      text: " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      btnText: "More Info",
      img: secondImg,
    },
    {
      id: 3,
      title: "Easy Sharing",
      heading: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      btnText: "More Info",
      img: thirdImg,
    },
  ]);
  return (
    <Tab.Group>
      <Tab.List className=" max-w-xl mx-auto flex flex-col md:flex-row justify-between border-b border-grayish-blue">
        {tabbed.map((section) => (
          <Tab
            key={section.id}
            className={({ selected }) =>
              selected
                ? "text-very-dark-blue font-medium border-b-4 py-4 border-soft-red px-4"
                : "text-grayish-blue font-medium hover:text-soft-red  py-4 px-4 border-b md:border-0 border-grayish-blue"
            }
          >
            {section.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabbed.map((section) => (
          <Tab.Panel
            key={section.id}
            className="py-16 flex flex-col md:flex-row gap-9 items-center"
          >
            <div className="flex-1">
              <img className="w-full" src={section.img} alt="cover" />
            </div>
            <div className="flex-1 pl-0 md:pl-28  space-y-6">
              <h1 className="text-center md:text-left text-3xl md:text-4xl font-medium text-very-dark-blue">
                {section.heading}
              </h1>
              <p className="text-center md:text-left text-base text-grayish-blue">
                {section.text}
              </p>
              <button className="btn btn-blue hidden md:block">
                {section.btnText}
              </button>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabbed;

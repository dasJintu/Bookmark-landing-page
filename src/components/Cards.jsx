import React, { useState } from "react";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";
import bgDots from "../../images/bg-dots.svg";

const Cards = () => {
  const [cardContent] = useState([
    {
      id: 1,
      title: "Add to Chrome",
      text: "Minimum version 62",
      btn: "Add & Install Extension",
      img: chrome,
      margin: 0,
    },
    {
      id: 2,
      title: "Add to Firefox",
      text: "Minimum version 55",
      btn: "Add & Install Extension",
      img: firefox,
      margin: 16,
    },
    {
      id: 3,
      title: "Add to Opera",
      text: "Minimum version 46",
      btn: "Add & Install Extension",
      img: opera,
      margin: 32,
    },
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start">
      {cardContent.map((card) => (
        <div
          key={card.id}
          className={`justify-self-auto max-w-xs rounded-lg shadow-lg py-8  flex flex-col  items-center justify-center mt-4 md:mt-${card.margin}`}
        >
          <img className="py-4" src={card.img} alt="browser logo" />
          <h3 className="text-xl font-medium text-very-dark-blue pt-3 pb-2">
            {card.title}
          </h3>
          <p className="pb-4 text-grayish-blue">{card.text}</p>
          <img className="pb-6 w-full" src={bgDots} alt="" />
          <button className="text-sm btn btn-blue">{card.btn}</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;

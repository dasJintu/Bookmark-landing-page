import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Example() {
  const [FAQContent] = useState([
    {
      id: 1,
      title: "What is Bookmark?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: 2,
      title: "How can I request a new browser?",
      text: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: 3,
      title: "Is there a mobile app?",
      text: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
  ]);
  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-2xl">
      {FAQContent.map((faq) => (
        <Disclosure key={faq.id}>
          {({ open }) => (
            <div className="border-b border-gray-600">
              <Disclosure.Button className="flex justify-between w-full py-4 text-lg font-medium text-left text-very-dark-blue  rounded-lg hover:text-soft-red focus:outline-none focus-visible:ring focus-visible:ring-soft-red focus-visible:ring-opacity-75">
                <span>{faq.title}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180 text-soft-red" : ""
                  } w-5 h-5 text-soft-blue`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 text-gray-500">
                {faq.text}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

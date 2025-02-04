
import React, { useState } from 'react';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-10">
     <p className='text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-[#3675ff] via-[#0c7aa9] to-[#000000] bg-clip-text text-transparent'>Frequently Asked Questions ?</p>
      <div className=" rounded-2xl p-4 bg-[#EDF3FF]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`border-b last:border-none overflow-hidden transition-all`}
          >
            <button
              className={`flex items-center rounded-xl mb-3 justify-between w-full text-left p-4 font-semibold text-gray-800 dark:text-gray-100 ${
                activeIndex === index ? 'bg-white' : 'bg-[#3675FF] '
              }`}
              onClick={() => handleClick(index)}
            >
              <span className={`${activeIndex === index ? 'text-black': 'text-white'}`}>{tab.title}</span>
              <span
                className={`text-2xl font-bold transform transition-transform ${
                  activeIndex === index ? 'rotate-45 text-black' : 'rotate-0 text-white'
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? 'max-h-screen opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-4 pb-4 text-zinc-500">
                {tab.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

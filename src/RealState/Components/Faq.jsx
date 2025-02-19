
import React, { useState } from 'react';

const tabs = [
  {
    title: 'How do I start the process of buying a home?',
    description:
      'The first step is to get pre-approved for a mortgage. This will help you understand your budget and show sellers that you’re a serious buyer. Next, work with a real estate agent to find properties that meet your needs.',
  },
  {
    title: 'What should I look for in a neighborhood?',
    description:
      'Consider factors like safety, school districts, proximity to work, public transportation, and local amenities like parks, restaurants, and shopping centers. Visiting the neighborhood at different times of the day can also give you a better feel for the area.',
  },
  {
    title: 'How long does it take to close on a house?',
    description:
      'The closing process typically takes 30 to 45 days, but it can vary depending on factors like the complexity of the transaction, the responsiveness of all parties involved, and the type of financing.',
  },
  {
    title: 'What costs are involved in buying a home?',
    description:
      'In addition to the down payment, you’ll need to budget for closing costs, which include fees for appraisal, title insurance, inspections, and more. You should also consider ongoing costs like property taxes, insurance, and maintenance.',
  },
  {
    title: 'Can I sell my home while buying a new one?',
    description:
      'Yes, it’s possible to sell your current home while buying a new one. Many buyers use a bridge loan or negotiate a rent-back agreement with the buyer of their current home to ensure a smooth transition.',
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

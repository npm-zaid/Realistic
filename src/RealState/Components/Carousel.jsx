import React, { useRef } from "react";

const Carousel = () => {
  const cardContainerRef = useRef(null);

  const scrollNext = () => {
    const container = cardContainerRef.current;
    container.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
  };

  const scrollPrev = () => {
    const container = cardContainerRef.current;
    container.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
  };

  const cards = [
    {
      rating: "4.6",
      title: "Clash Royale",
      description:
        "Dare to step on the sand! From the creators of Clash of Clans, comes Clash Royale, a real-time multiplayer game starring your favorite Clash.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/1.png",
    },
    {
      rating: "4.1",
      title: "Assassins Creed",
      description:
        "It is a series of video games, comics, books, and shorts of historical fiction. Video games are action-adventure, stealth and open world.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/2.png",
    },
    {
      rating: "4.8",
      title: "Fortnite",
      description:
        "Fortnite is a video game of the year 2017 developed by the company Epic Games, released as different software packages that present different game modes.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/4.png",
    },
    {
      rating: "3.9",
      title: "Angry Birds",
      description:
        "Angry Birds is a casual video game from 2009 developed by Rovio Entertainment.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/5.png",
    },
    {
      rating: "4.2",
      title: "Clash of Clans",
      description:
        "Also known as CoC is an online strategy and village building video game, for mobile devices with IOS and Android platforms.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/6.png",
    },
    {
      rating: "4.9",
      title: "Dark Souls",
      description:
        "The Souls series is a series of video games belonging to the role-playing and action genre, created and developed by the company From Software.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/7.png",
    },
    {
      rating: "3.6",
      title: "Far Cry 4",
      description:
        "An open-world first-person action video game developed by Ubisoft Montreal in conjunction with Ubisoft Red Storm.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/8.png",
    },
    {
      rating: "3.8",
      title: "Final Fantasy",
      description:
        "Final Fantasy XV is a video game of the ARPG genre developed by Square Enix, for PlayStation 4, Xbox One, and Microsoft Windows.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/9.png",
    },
    {
      rating: "4.7",
      title: "Gears of War",
      description:
        "Gears of War 4 or Gears 4 is a third-person shooter and action video game developed by The Coalition.",
      image: "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/10.png",
    },
  ];

  return (
    <div className="relative flex items-center justify-center bg-gray-100 w-full h-screen overflow-hidden">
      {/* Left Button */}
      <button
        onClick={scrollPrev}
        className="min-w-[60px] h-[60px] rounded-xl bg-white shadow-lg hover:-translate-y-2 transition-transform duration-200 absolute left-4 z-10"
      >
        <i className="bx bxs-chevron-left text-2xl"></i>
      </button>

      {/* Card Container */}
      <div
        ref={cardContainerRef}
        className="flex items-center space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-8 w-full max-w-5xl"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-2xl shadow-lg transition-transform duration-200 hover:-translate-y-2 relative"
          >
            <h3 className="absolute top-2 left-2 bg-gray-200 px-3 py-1 rounded-lg text-sm font-bold">
              {card.rating}
            </h3>
            <i className="bx bx-heart absolute top-2 right-2 text-xl"></i>
            <div className="relative overflow-hidden flex justify-center mt-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[200px] object-cover"
              />
              <img
                src={card.image}
                alt={`${card.title} blur`}
                className="absolute top-6 blur-md opacity-30 -z-10"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollNext}
        className="min-w-[60px] h-[60px] rounded-xl bg-zinc-800 shadow-lg hover:-translate-y-2 transition-transform duration-200 absolute right-4 z-10"
      >
        <i className=" text-white text-2xl"></i>
      </button>
    </div>
  );
};

export default Carousel;

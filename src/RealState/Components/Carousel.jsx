import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      name: "Andy Smith",
      location: "New York, NY",
      describe:
        "Realestic turned our house hunt into a smooth and enjoyable experience. Perfect for anyone looking to buy their first home!",
      image:
        "https://framerusercontent.com/images/bczeGdNKTrWwY98gGWrdHXwBvnI.webp",
    },
    {
      id: 2,
      name: "Emma Johnson",
      location: "Los Angeles, CA",
      describe:
        "An amazing service! They made everything so easy and stress-free. Highly recommend to first-time home buyers.",
      image:
        "https://framerusercontent.com/images/AlRfrZRG5AeZFq6ZVozOjD0bgus.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      location: "Chicago, IL",
      describe:
        "I never thought buying a house would be this simple. The support team was incredible. Thank you, Realestic!",
      image:
        "https://framerusercontent.com/images/kC4NaEZxsydpz9tHiu9G7wUvUK8.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      location: "Austin, TX",
      describe:
        "From start to finish, an exceptional experience. Their expertise and guidance helped me find my dream home!",
      image:
        "https://framerusercontent.com/images/ie0hz9F9UkilyHfVVz9heaaoKQ.jpg",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-3">
            <div className="bg-blue-500  text-white p-6 rounded-3xl shadow-xl  flex flex-col gap-5">
              {/* Profile Image */}
              <div className="w-28 h-28 mx-auto">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="object-cover w-full h-full  rounded-full border-4 border-white shadow-2xl shadow-black/60"
                />
              </div>

              {/* Testimonial Content */}
              <div className=" text-center w-[80%] m-auto">
                <p className="text-lg font-light">"{slide.describe}"</p>
                <h3 className="mt-4 text-xl font-semibold">{slide.name}</h3>
                <p className="text-gray-200">{slide.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

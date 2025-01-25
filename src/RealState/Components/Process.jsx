import { useEffect, useState } from "react";

const sections = [
  {
    id: 1,
    title: "Find Your Ideal Property",
    description:
      "Browse our extensive listings, filter by location, price, and features to discover your perfect home",
    image:
      "https://framerusercontent.com/images/Zg7BtvLfz3jIjRBcMTxccPa3mE.jpg",
  },
  {
    id: 2,
    title: "Schedule a Viewing",
    description:
      "Easily book a property tour online at a time that suits you, or request a virtual walkthrough",
    image: "https://framerusercontent.com/images/VsWWiwE6hqN50p2a0UBU1yVKKM.jpg",
  },
  {
    id: 3,
    title: "Secure Your Deal",
    description:
      "Make an offer or apply for financing through our website, and let our experts guide you",
    image: "https://framerusercontent.com/images/3MVCp6bbIpzmHw1waN9Kj7SQEM.jpg",
  },
];

export default function Process() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeClass("fade-out"); // Trigger fade-out
      setTimeout(() => {
        setActiveSection((current) => {
          const nextIndex =
            sections.findIndex((section) => section.id === current.id) + 1;
          return sections[nextIndex] || sections[0];
        });
        setFadeClass("fade-in"); // Trigger fade-in
      }, 300); // Match fade-out transition duration
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Section: List of Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative pl-6 cursor-pointer transition-colors hover:bg-gray-50 p-4 rounded-lg"
                onClick={() => setActiveSection(section)}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    activeSection.id === section.id
                      ? "bg-blue-600"
                      : "bg-gray-200"
                  }`}
                />
                <div  className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-lg">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Image */}
          <div className="relative h-full rounded-3xl overflow-hidden">
            <div className={`relative w-full h-full ${fadeClass}`}>
              <img
                src={activeSection.image || "/placeholder.svg"}
                alt={activeSection.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      {/* CSS for fade effect */}
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.3s ease-in;
        }
        .fade-out {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

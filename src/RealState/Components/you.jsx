import { useState } from "react";

export default function You() {
  const [type, setType] = useState("House");
  const [bedroom, setBedroom] = useState("1 Br");
  const [category, setCategory] = useState("Sale");
  const [searchQuery, setSearchQuery] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState({
    type: false,
    bedroom: false,
    category: false,
  });

  
  const handleSearch = () => {
    console.log("Searching for:", {
      type,
      bedroom,
      category,
      searchQuery,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      {/* Hero Section */}
      <div className="text-center">
        <span className="bg-white text-blue-600 px-4 py-1 rounded-full font-semibold">
          For-Rent
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Find the right home <br /> and start packing
        </h1>
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200">
          Book Now
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 mt-8 rounded-full flex items-center gap-4 shadow-md text-gray-700 w-full max-w-3xl">
        {/* Type Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setDropdownOpen({ ...dropdownOpen, type: !dropdownOpen.type })
            }
            className="px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
          >
            {type} ⌄
          </button>
          {dropdownOpen.type && (
            <div className="absolute left-0 top-16 bg-white text-gray-700 rounded-lg shadow-lg w-32">
              {["House", "Apartment", "Villa"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setType(t);
                    setDropdownOpen({ ...dropdownOpen, type: false });
                  }}
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bedroom Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setDropdownOpen({ ...dropdownOpen, bedroom: !dropdownOpen.bedroom })
            }
            className="px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
          >
            {bedroom} ⌄
          </button>
          {dropdownOpen.bedroom && (
            <div className="absolute left-0 top-16 bg-white text-gray-700 rounded-lg shadow-lg w-28">
              {["1 Br", "2 Br", "3 Br"].map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setBedroom(b);
                    setDropdownOpen({ ...dropdownOpen, bedroom: false });
                  }}
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  {b}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() =>
              setDropdownOpen({ ...dropdownOpen, category: !dropdownOpen.category })
            }
            className="px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
          >
            {category} ⌄
          </button>
          {dropdownOpen.category && (
            <div className="absolute left-0 top-16 bg-white text-gray-700 rounded-lg shadow-lg w-28">
              {["Sale", "Rent"].map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setDropdownOpen({ ...dropdownOpen, category: false });
                  }}
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for home"
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 text-white"
        >
          🔍
        </button>
      </div>
    </div>
  );
}

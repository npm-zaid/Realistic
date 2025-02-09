import React, { useEffect, useState } from "react";
import { cards } from './data';
import Card from './Card';

const Propheader = () => {
  const [type, setType] = useState('default');
  const [bedroom, setBedroom] = useState('default');
  const [search, setSearch] = useState(""); // New state for search
  const [filterCard, setFilterCard] = useState([]);

  // Filtering Logic
  const SortProduct = () => {
    let copy = [...cards]; // Copy original array

    // Filter by type (rent or sale)
    if (type !== 'default') {
      copy = copy.filter(card => (type === 'rent' ? !card.isSale : card.isSale));
    }

    // Filter by bedroom count
    if (bedroom !== 'default') {
      copy = copy.filter(card => card.bedrooms === Number(bedroom));
    }

    // Filter by search input (case-insensitive match on title or description)
    if (search.trim() !== "") {
      copy = copy.filter(card =>
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterCard(copy);
  };

  useEffect(() => {
    SortProduct();
  }, [type, bedroom, search]); // Include search in dependency array

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className='h-[80vh] rounded-3xl bg-[#3675FF] flex justify-center items-center flex-col text-white gap-8 relative'>
        <p className='bg-[#588CFF] text-white px-5 py-2 rounded-full'>Properties</p>
        <div className='text-center'>
          <h1 className='sm:text-[4.5vw] text-[6.2vw] font-semibold leading-10'>Find the right home</h1>
          <h1 className='sm:text-[4.5vw] text-[6.2vw] font-semibold'>and start packing</h1>
        </div>
        <button className='px-8 py-3 font-semibold bg-white rounded-full text-nowrap text-black'>Book Now</button>

        {/* Filters Section */}
        <div className="p-8 rounded-full sm:bg-white absolute sm:-bottom-16 -bottom-[70px] w-[80%] flex flex-wrap gap-4 justify-center">
          <form className="flex sm:flex-row flex-col items-center justify-center gap-4  w-full">
            {/* Property Type Dropdown */}
            <select 
              className="p-4 w-fit bg-[#3675FF] font-semibold rounded-full text-white outline-none"
              onChange={(e) => setType(e.target.value)}
            >
              <option value='default'>Select Type</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>

            {/* Bedroom Dropdown */}
            <select 
              className="p-4 w-fit bg-[#3675FF] font-semibold rounded-full text-white outline-none"
              onChange={(e) => setBedroom(e.target.value)}
            >
              <option value='default'>Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            {/* 🔍 Search Bar */}
            <input
              type="text"
              placeholder="Search for a house..."
              className="p-4 w-full bg-[#EDF3FF] rounded-full  border outline-none text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Property Cards Display */}
      <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-4">
        {filterCard.length > 0 ? (
          filterCard.map((card, index) => (
            <Card key={index} {...card} />
          ))
        ) : (
          <p className="text-center col-span-3 text-lg font-semibold text-gray-600">
            ❌ No properties found. Try adjusting your filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default Propheader;

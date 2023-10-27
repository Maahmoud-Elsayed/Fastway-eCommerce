import React, { useEffect, useState } from "react";

import Card from "./Card";

import { FaFilter } from "react-icons/fa";

const ProductsList = ({ products, all, search }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortingOption, setSortingOption] = useState("none");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (search) {
      const regex = new RegExp(`\\b${search}`, "i");
      setFilteredProducts(
        products.filter((product) => regex.test(product.title))
      );
      setCategory("All");
      setMinPrice("");
      setMaxPrice("");
      setSortingOption("none");
    } else {
      setFilteredProducts(products);
    }
  }, [products, search]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleFilter = () => {
    setShowFilter((prrevState) => !prrevState);
  };
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };
  const clearFilters = () => {
    setCategory("All");
    setMinPrice("");
    setMaxPrice("");
    setSortingOption("none");
    if (search) {
      const regex = new RegExp(`\\b${search}`, "i");
      setFilteredProducts(
        products.filter((product) => regex.test(product.title))
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const applyFilters = () => {
    let filtered = [];
    if (search) {
      const regex = new RegExp(`\\b${search}`, "i");
      filtered = products.filter((product) => regex.test(product.title));
    } else {
      filtered = products;
    }

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseInt(minPrice)
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseInt(maxPrice)
      );
    }

    if (sortingOption !== "none") {
      filtered = filtered.map((product) => {
        let disc;
        if (product.id % 2 === 0) {
          disc = product.price - product.price * (20 / 100);
        } else {
          disc = product.price;
        }
        return {
          ...product,
          disc: disc,
        };
      });

      if (sortingOption === "lowToHigh") {
        filtered = filtered.sort((a, b) => a.disc - b.disc);
      } else if (sortingOption === "highToLow") {
        filtered = filtered.sort((a, b) => b.disc - a.disc);
      } else if (sortingOption === "rate") {
        filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    }

    setFilteredProducts(filtered);
    setShowFilter(false);
  };

  return (
    <>
      <div className="container-fixed my-5 sm:my-9">
        <button
          onClick={handleFilter}
          className=" px-4 py-2 rounded-full flex gap-2 items-center justify-center btn-sec"
        >
          <FaFilter />
          <span>Filter</span>
        </button>
        {showFilter && (
          <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:flex  md:flex-row md:justify-between items-end gap-5">
            {all && (
              <div className="w-full flex flex-col gap-3">
                <label className="ml-3">Category :</label>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="input px-3 py-1"
                >
                  <option value="All">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
                </select>
              </div>
            )}
            <div className="w-full flex flex-col gap-2">
              <label className="ml-3">Min price :</label>
              <input
                type="number"
                min={0}
                value={minPrice}
                onChange={handleMinPriceChange}
                className="input px-3 py-1 "
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="ml-3">Max price :</label>
              <input
                type="number"
                value={maxPrice}
                min={0}
                onChange={handleMaxPriceChange}
                className="input px-3 py-1"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="ml-3">Sort :</label>
              <select
                value={sortingOption}
                onChange={handleSortingChange}
                className="input px-3 py-1"
              >
                <option value="none">None</option>
                <option value="lowToHigh">Price: Low to high</option>
                <option value="highToLow">Price: High to low</option>
                <option value="rate">Rate</option>
              </select>
            </div>
            <div className="flex flex-row gap-2 sm:justify-center">
              <button
                onClick={applyFilters}
                className=" px-4 py-2  whitespace-nowrap btn-sec"
              >
                Apply filter
              </button>
              <button
                onClick={clearFilters}
                className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-full whitespace-nowrap"
              >
                Clear filter
              </button>
            </div>
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-40 bg-gray-100 shadow-inner ">
          <h3 className=" text-xl">No products found.</h3>
        </div>
      ) : (
        <div className="bg-gray-100 shadow-inner">
          <div className=" container-fixed grid py-11 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center ">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                description={product.description}
                category={product.category}
                discount={product.id % 2 === 0}
                id={product.id}
                title={product.title}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsList;

'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { products} from './productData';
import Image from 'next/image';

const ProductFilters = () => {
  const [filters, setFilters] = useState({
    type: '',
    wattage: '',
    brand: '',
  });
  const [sortBy, setSortBy] = useState('');


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 100,
  //     },
  //   },
  //   hover: {
  //     scale: 1.05,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  // const overlayVariants = {
  //   hidden: { y: '100%', opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 100,
  //       damping: 20,
  //       duration: 0.3,
  //     },
  //   },
  // };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => (filters.type ? product.type === filters.type : true))
    .filter((product) => (filters.wattage ? product.wattage === filters.wattage : true))
    .filter((product) => (filters.brand ? product.brand === filters.brand : true))
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'efficiency') return b.efficiency - a.efficiency;
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return 0;
    });

  return (
    <section className="bg-blue-50 py-10 sm:py-12 md:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-8"
      >
       
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6 sm:mb-8"
        >
          Refine Your Selection
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          Customize your search with filters and sort options to find the perfect solar solution.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <motion.div variants={itemVariants} className="relative">
            <label htmlFor="type" className="block text-sm sm:text-base font-medium text-blue-700 mb-2">
              Filter by Type
            </label>
            <select
              id="type"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full p-2 sm:p-3 border border-blue-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            >
              <option value="">All Types</option>
              <option value="on-grid">On-grid</option>
              <option value="off-grid">Off-grid</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <label htmlFor="wattage" className="block text-sm sm:text-base font-medium text-blue-700 mb-2">
              Filter by Wattage
            </label>
            <select
              id="wattage"
              name="wattage"
              value={filters.wattage}
              onChange={handleFilterChange}
              className="w-full p-2 sm:p-3 border border-blue-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            >
              <option value="">All Wattages</option>
              <option value="100w">100W</option>
              <option value="200w">200W</option>
              <option value="500w">500W</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <label htmlFor="brand" className="block text-sm sm:text-base font-medium text-blue-700 mb-2">
              Filter by Brand
            </label>
            <select
              id="brand"
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full p-2 sm:p-3 border border-blue-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            >
              <option value="">All Brands</option>
              <option value="khushali">Khushali</option>
              <option value="brand-a">Brand A</option>
              <option value="brand-b">Brand B</option>
            </select>
          </motion.div>

         
          <motion.div variants={itemVariants} className="relative">
            <label htmlFor="sort" className="block text-sm sm:text-base font-medium text-blue-700 mb-2">
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="w-full p-2 sm:p-3 border border-blue-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            >
              <option value="">Select Sorting</option>
              <option value="price">Price</option>
              <option value="efficiency">Efficiency</option>
              <option value="popularity">Popularity</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-center"
        >
          {Object.values(filters).some((val) => val) || sortBy ? (
            <p className="text-gray-600 text-sm sm:text-base">
              Applied Filters: {Object.entries(filters)
                .filter(([ val]) => val)
                .map(([key, val]) => `${key}: ${val}`)
                .join(', ')}{' .'}
              {sortBy && `Sort: ${sortBy}`}
            </p>
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">No filters or sorting applied.</p>
          )}
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <div
        key={product.id}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
      >
       
        <div className="relative w-full h-64 sm:h-72 md:h-80">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-700/70 flex flex-col justify-center items-center text-white p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm sm:text-base mb-1"><strong>Type:</strong> {product.type}</p>
            <p className="text-sm sm:text-base mb-1"><strong>Wattage:</strong> {product.wattage}</p>
            <p className="text-sm sm:text-base mb-1"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-sm sm:text-base mb-1"><strong>Price:</strong> ₹{product.price}</p>
            <p className="text-sm sm:text-base mb-1"><strong>Efficiency:</strong> {product.efficiency}%</p>
            <p className="text-sm sm:text-base mb-3"><strong>Popularity:</strong> {product.popularity}</p>
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-span-full text-center text-gray-600 text-base sm:text-lg">
      No products match your criteria.
    </div>
  )}
</div>
      </motion.div>
    </section>
  );
};

export default ProductFilters;
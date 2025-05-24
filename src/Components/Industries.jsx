import React from 'react';
import {
  HeartPulse, Factory, Car, ShoppingCart, Hotel, Banknote, Truck, Briefcase
} from 'lucide-react';
import {
  FaMoneyCheckAlt
} from 'react-icons/fa';
import { Link } from 'react-router';

const industries = [
  { name: 'Insurance & Financial Sectors', icon: <FaMoneyCheckAlt className="w-36 h-36 text-indigo-600" />,link:"/insurence" },
  { name: 'Healthcare', icon: <HeartPulse className="w-36 h-36 text-red-500" /> ,link:"/healthcare"},
  { name: 'Manufacturing', icon: <Factory className="w-36 h-36 text-yellow-600" /> ,link:"/manufature"},
  { name: 'Automobile', icon: <Car className="w-36 h-36 text-blue-600" /> ,link:"/automobile"},
  { name: 'Retail & E-Commerce', icon: <ShoppingCart className="w-36 h-36 text-green-600" />,link:"/ecommerce" },
  { name: 'Hospitality', icon: <Hotel className="w-36 h-36 text-pink-500" /> ,link:"/hospitality"},
  { name: 'Banking', icon: <Banknote className="w-36 h-36 text-purple-600" />,link:"/banking" },
  { name: 'Supply Chain Management', icon: <Truck className="w-36 h-36 text-gray-700" /> ,link:"/supply-chain"},
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-18 px-4 md:px-16">
      {/* Hero Section with Left Icon */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Icon */}
        <div className="flex justify-center md:justify-end">
          <div className= " rounded-2xl shadow-lg">
           <img src="/industries.jpg" alt="Industries"    />
          </div>
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Empowering Businesses Across Industries with Tailored IT Solutions
          </h2>
          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              In today’s fast-evolving digital world, technology touches every aspect of life—from children to seniors, from small local shops to global corporations.
              At Intelli Tek IT Solutions, we understand that staying ahead with the right technology can be the key to success for any business.
            </p>
            <p>
              Intelli Tek IT Solutions offers strategic IT consulting and a full range of information technology services across the USA, supporting a wide spectrum of industries.
            </p>
            <p>
              With years of proven experience, we help businesses harness technology to drive productivity, streamline operations, and achieve long-term growth.
            </p>
            <p>
              At Intelli Tek IT Solutions, we don’t just provide IT services—we build partnerships that grow with your business.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Industries We Serve</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 text-center flex flex-col items-center"
          >
            {industry.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{industry.name}</h3>
            <button className="text-blue-500 text-xl pt-2 font-bold hover:underline">
              <Link to={industry.link}>Explore &#10503;</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;

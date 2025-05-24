import React from 'react';
import {
  FaUniversity,
  FaMobileAlt,
  FaSyncAlt,
  FaBalanceScale,
  FaCloud,
  FaShieldAlt,
} from 'react-icons/fa';

const services = [
  { title: 'Digital Transformation Strategy', icon: <FaMobileAlt className="w-36 h-36 text-indigo-600 text-3xl" /> },
  { title: 'Core Banking Modernization', icon: <FaSyncAlt className="w-36 h-36 text-green-600 text-3xl" /> },
  { title: 'Regulatory Compliance & Risk Advisory', icon: <FaBalanceScale className="w-36 h-36 text-red-500 text-3xl" /> },
  { title: 'Cloud Strategy & Migration', icon: <FaCloud className="w-36 h-36 text-blue-600 text-3xl" /> },
  { title: 'Cybersecurity & Data Protection', icon: <FaShieldAlt className="w-36 h-36 text-yellow-600 text-3xl" /> },
];

const Banking = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Visual */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img src="/banking.png" alt="banking sector" />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Your Trusted IT Consulting Partner for Banking Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we specialize in secure, scalable, and future-ready IT consulting for the banking and financial services sector. Our deep industry expertise, client-centric approach, and flexible engagement models enable seamless digital innovation and transformation.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            From core banking modernization to cybersecurity and cloud strategy, we guide banks through every stage of their digital journey. Let’s collaborate to shape the future of banking — one smart solution at a time.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Our Core Consulting Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div>{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mt-12">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banking;

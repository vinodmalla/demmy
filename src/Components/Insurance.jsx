import React from 'react';
import { FaShieldAlt, FaChartLine, FaDatabase, FaLaptopCode, FaMoneyCheckAlt, FaUserShield, FaCogs } from 'react-icons/fa';

const services = [
  { title: 'Custom software development', icon: <FaLaptopCode className="w-36 h-36 text-indigo-600 text-3xl" /> },
  { title: 'Business operations tracking', icon: <FaChartLine className=" w-36 h-36 text-green-600 text-3xl" /> },
  { title: 'Data security and compliance', icon: <FaShieldAlt className="w-36 h-36 text-red-500 text-3xl" /> },
  { title: 'Digital banking solutions', icon: <FaMoneyCheckAlt className="w-36 h-36 text-blue-600 text-3xl" /> },
  { title: 'Real-time analytics and reporting', icon: <FaDatabase className="w-36 h-36 text-yellow-600 text-3xl" /> },
  { title: 'Risk management systems', icon: <FaUserShield className= "w-36 h-36 text-purple-600 text-3xl" /> },
  { title: 'Behavioral analytics and decision support tools', icon: <FaCogs className="w-36 h-36 text-gray-700 text-3xl" /> },
];

const Insurance = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Icon/Visual Side */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img src='/insurence.png' alt="insurence" />
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Innovative IT Consulting for the Insurance & Financial Sectors
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we specialize in delivering tailored IT consulting and digital
            transformation services for clients in the insurance and financial industries. Our goal is
            to help businesses unlock new growth opportunities by aligning cutting-edge technologies
            with their unique operational needs.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We implement forward-thinking solutions powered by AI, ML, cloud computing, telematics,
            and IoT. Our strategies include DevOps, microservices, managed IT, and CRM platforms.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
              <div>{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mt-12">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;

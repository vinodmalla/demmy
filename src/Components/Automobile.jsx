import React from 'react';
import {
  FaCarSide,
  FaMicrochip,
  FaNetworkWired,
  FaLock,
  FaChartBar,
  FaCloud,
  FaTools
} from 'react-icons/fa';

const services = [
  { title: 'AI & Machine Learning Solutions', icon: <FaMicrochip className="w-36 h-36 text-indigo-600 text-3xl" /> },
  { title: 'Human-Machine Interface (HMI) Systems', icon: <FaCarSide className="w-36 h-36 text-green-600 text-3xl" /> },
  { title: 'IoT for Connected Vehicles', icon: <FaNetworkWired className="w-36 h-36 text-red-500 text-3xl" /> },
  { title: 'Blockchain for Secure Transactions', icon: <FaLock className="w-36 h-36 text-blue-600 text-3xl" /> },
  { title: 'Big Data & Predictive Analytics', icon: <FaChartBar className="w-36 h-36 text-yellow-600 text-3xl" /> },
  { title: 'Cloud-based Mobility Solutions', icon: <FaCloud className="w-36 h-36 text-purple-600 text-3xl" /> },
  { title: 'Custom Automotive Applications', icon: <FaTools className="w-36 h-36 text-gray-700 text-3xl" /> },
];

const Automobile = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Visual */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img src="/automobile.png" alt="automobile" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Accelerating Digital Transformation in the Automobile Industry
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we deliver end-to-end IT consulting services designed specifically for
            the evolving needs of the automobile industry. From production lines to post-sales support, we
            help automotive businesses integrate next-generation technologies that enhance efficiency,
            innovation, and customer engagement.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our solutions are powered by advanced digital tools and platforms, including AI, HMI systems, IoT,
            blockchain, big data, and cloud-based mobility platforms. We streamline every stage of the
            automotive value chain—from production automation to digital sales and CRM.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Our Services
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

export default Automobile;

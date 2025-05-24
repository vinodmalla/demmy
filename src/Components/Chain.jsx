import React from 'react';
import {
  FaChartLine,
  FaCogs,
  FaBoxes,
  FaTruckMoving,
  FaHandshake,
  FaChartPie,
} from 'react-icons/fa';

const services = [
  {
    title: 'Supply Chain Digital Transformation',
    icon: <FaChartLine className="w-36 h-36 text-indigo-600 text-3xl" />,
  },
  {
    title: 'ERP & SCM System Integration',
    icon: <FaCogs className="w-36 h-36 text-green-600 text-3xl" />,
  },
  {
    title: 'Demand Forecasting & Inventory Optimization',
    icon: <FaBoxes className="w-36 h-36 text-orange-500 text-3xl" />,
  },
  {
    title: 'Logistics & Warehouse Automation',
    icon: <FaTruckMoving className="w-36 h-36 text-blue-600 text-3xl" />,
  },
  {
    title: 'Supplier Relationship Management (SRM)',
    icon: <FaHandshake className="w-36 h-36 text-purple-600 text-3xl" />,
  },
  {
    title: 'Real-Time Data Visibility & Analytics',
    icon: <FaChartPie className="w-36 h-36 text-yellow-600 text-3xl" />,
  },
];

const Chain = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Visual */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img
              src="/Chain.png"
              alt="Supply Chain Management"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Transforming Supply Chain Operations with Smart IT Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we help supply chain-driven businesses build resilient, transparent, and efficient supply chains through intelligent technology integration. Our deep domain expertise enables us to create practical solutions that align with your operational goals.
          </p>
          <p className="text-lg text-gray-600">
            From digitizing workflows and integrating ERP/SCM systems to leveraging IoT, AI, and real-time analytics — our consulting services enable agility and innovation across your entire value chain.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Our Supply Chain Consulting Services
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

export default Chain;

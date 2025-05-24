import React from 'react';
import {
  FaShoppingCart,
  FaBrain,
  FaProjectDiagram,
  FaUsers,
  FaRobot,
  FaLayerGroup,
  FaGlasses
} from 'react-icons/fa';

const services = [
  { title: 'Artificial Intelligence & Deep Learning', icon: <FaBrain className="w-36 h-36 text-indigo-600 text-3xl" /> },
  { title: 'Omnichannel Retail Platforms', icon: <FaProjectDiagram className="w-36 h-36 text-green-600 text-3xl" /> },
  { title: 'AR for Product Visualization', icon: <FaGlasses className="w-36 h-36 text-red-500 text-3xl" /> },
  { title: 'Customer Relationship Management (CRM)', icon: <FaUsers className="w-36 h-36 text-blue-600 text-3xl" /> },
  { title: 'AI-powered Chatbots & Virtual Assistants', icon: <FaRobot className="w-36 h-36 text-yellow-600 text-3xl" /> },
  { title: 'Enterprise Resource Planning (ERP)', icon: <FaLayerGroup className="w-36 h-36 text-purple-600 text-3xl" /> },
  { title: 'E-commerce Workflow Automation', icon: <FaShoppingCart className="w-36 h-36 text-gray-700 text-3xl" /> },
];

const Ecommerce = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Visual */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img src="/ecommerce.png" alt="ecommerce" />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Smart IT Consulting Solutions for Retail & E-Commerce
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we help retail and e-commerce businesses embrace digital innovation
            to stay ahead in a fast-paced, competitive market. Our team continuously explores emerging
            technologies to deliver personalized, forward-thinking solutions that drive growth, improve
            customer experiences, and streamline operations.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            From automating workflows to enhancing customer engagement and sales tracking, we equip your
            business with modern tools like AI, AR, CRM, ERP systems, and omnichannel platforms to deliver a
            smarter, more connected retail experience.
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

export default Ecommerce;

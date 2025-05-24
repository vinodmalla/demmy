import React from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { FaIndustry, FaCloud, FaNetworkWired, FaUsersCog, FaMicrochip } from "react-icons/fa";
import { Layers } from "lucide-react";

const services = [
  {
    title: "Artificial Intelligence (AI) & Machine Learning",
    icon: <AiOutlineRobot className="w-36 h-36 text-gray-600" />,
  },
  {
    title: "Industrial Robotics & Automation",
    icon: <FaIndustry className="w-36 h-36 text-violet-400" />,
  },
  {
    title: "Cloud Computing & Data Integration",
  icon: <FaCloud className="w-36 h-36 text-sky-400" />,
  },
  {
    title: "Augmented Reality (AR) & Virtual Reality (VR)",
    icon: <Layers className="w-36 h-36 text-indigo-600" />,
  },
  {
    title: "Internet of Things (IoT) for Connected Factory Environments",
    icon: <FaNetworkWired className="w-36 h-36 text-red-500" />,
  },
  {
    title: "Customer Relationship Management (CRM) Systems",
    icon: <FaUsersCog className="w-36 h-36 text-cyan-400" />,
  },
  {
    title: "Nanotechnology and Smart Sensors",
    icon: <FaMicrochip className="w-36 h-36 text-blue-600" />,
  },
];

const Manufacturing = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Side */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img
              src="/Manufacture.png"
              alt="Manufacturing Technology"
              
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Driving Innovation in Manufacturing with Advanced IT Consulting
          </h2>
          <p  className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we empower manufacturing companies to embrace digital
            transformation and streamline their operations through smart, scalable technology solutions.
            With a strong track record of supporting manufacturers across the United States, we bring deep
            industry expertise and a consultative approach to solving complex challenges.
          </p>
          <p  className="text-lg text-gray-600 mb-4">
            Our IT consulting services for the manufacturing sector are designed to boost efficiency, reduce
            costs, and improve product quality. We help clients adopt advanced technologies such as:
          </p>
         
          <p  className="text-lg text-gray-600 mb-4">
            By automating repetitive tasks and optimizing internal workflows, manufacturers can significantly
            enhance productivity and deliver consistent, high-quality output. Our goal is to help clients
            reduce operational overheads while remaining competitive in an increasingly digital
            marketplace.
          </p>
          <p  className="text-lg text-gray-600 mb-4">
            With Intelli Tek IT Solutions as your trusted IT consulting partner, you gain the tools and insights
            needed to innovate faster, work smarter, and lead confidently in the era of smart manufacturing.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Our Manufacturing Technology Services Include:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
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

export default Manufacturing;

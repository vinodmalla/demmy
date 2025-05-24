import React from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { FaNetworkWired, FaUserMd, FaDatabase, FaLaptopMedical } from "react-icons/fa";
import { HeartPulse } from "lucide-react";

const services = [
  {
    title: "Artificial Intelligence (AI) & Machine Learning",
    icon: <AiOutlineRobot className="w-36 h-36 text-blue-600" />,
  },
  {
    title: "Internet of Things (IoT)",
    icon: <FaNetworkWired className="w-36 h-36 text-green-500" />,
  },
  {
    title: "Customer Relationship Management (CRM)",
    icon: <FaUserMd className="w-36 h-36 text-gray-900" />,
  },
  {
    title: "Patient Monitoring & Remote Care Systems",
    icon: <FaLaptopMedical className="w-36 h-36 text-cyan-500" />,
  },
  {
    title: "Healthcare Data Management & Integration",
    icon: <FaDatabase className="w-36 h-36 text-shadow-emerald-300" />,
  },
  {
    title: "Personalized Patient Management Platforms",
    icon: <HeartPulse className="w-36 h-36 text-pink-500" />,
  },
];

const Healthcare = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image Side */}
        <div className="flex justify-center">
          <div className="p-8 rounded-2xl shadow-lg">
            <img
              src="/Healthcare.png"
              alt="Healthcare Technology"
              className="w-96 h-96"
             
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Transforming Healthcare Through Strategic IT Consulting
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Intelli Tek IT Solutions, we recognize that the healthcare industry demands advanced,
            reliable, and innovative technology to address complex challenges in patient care and
            operational management. As one of the most vital and regulated sectors in the United States,
            healthcare requires precision, security, and efficiency—values that are at the core of our IT
            consulting services.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We provide comprehensive technology solutions to a wide range of healthcare entities, including
            private hospitals, public health organizations, and clinical laboratories. Our client-centric
            approach ensures that each solution is tailored to meet specific operational needs and
            regulatory requirements.
          </p>

          {/* Services Grid */}
          </div>
           </div>

          <div className="mt-12 max-w-6xl mx-auto">
             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Our Healthcare Technology Services Include:
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

export default Healthcare;

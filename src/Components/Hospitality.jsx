import React from 'react';
import {
  FaRobot,
  FaHotel,
  FaCamera,
  FaUserCheck,
  FaUsers,
  FaMoneyBillWave,
  FaKey
} from 'react-icons/fa';

const services = [
  { title: 'AI & Chatbots', icon: <FaRobot className="w-36 h-36 text-indigo-600 text-3xl" /> },
  { title: 'IoT for Smart Facility Management', icon: <FaHotel className="w-36 h-36 text-green-600 text-3xl" /> },
  { title: 'AR & VR for Immersive Experiences', icon: <FaCamera className="w-36 h-36 text-red-500 text-3xl" /> },
  { title: 'Recognition Technology for Personalization', icon: <FaUserCheck className="w-36 h-36 text-blue-600 text-3xl" /> },
  { title: 'CRM Systems', icon: <FaUsers className="w-36 h-36 text-yellow-600 text-3xl" /> },
  { title: 'Contactless Payments & Digital Kiosks', icon: <FaMoneyBillWave className="w-36 h-36 text-purple-600 text-3xl" /> },
  { title: 'Smart Energy & Keyless Entry Systems', icon: <FaKey className="w-36 h-36 text-gray-700 text-3xl" /> },
];

const Hospitality = () => {
  return (
    <section className="bg-gray-50 py-22 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Visual */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img src="/hospitality.png" alt="hospitality" />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Innovative IT Consulting for the Evolving Hospitality Industry
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The hospitality industry continues to grow and adapt, regardless of season, location, or circumstance. At Intelli Tek IT Solutions, we help hospitality businesses deliver exceptional guest experiences through smart, future-ready technology solutions. Our IT consulting services are designed to enhance service delivery, streamline operations, and build long-term customer loyalty.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            From smart room controls to touchless check-ins, our solutions empower hospitality brands to provide seamless, personalized guest journeys. We integrate technologies like IoT, AR/VR, CRM, and digital kiosks to ensure your operations are efficient and guest-centric.
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

export default Hospitality;

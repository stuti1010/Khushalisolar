"use client";

import { useState } from "react";
import Image from "next/image";

const sections = [
  { title: "Commercial", description: "Solar Panel for Commercial",
     content: "In the commercial sector, a social panel helps businesses improve customer engagement, streamline internal communication, and promote brand visibility. It enables companies to showcase corporate updates, interact with consumers, and implement corporate social responsibility (CSR) initiatives, fostering a positive business reputation."
     },
  { title: "Industrial", description: "Solar Panel for Industrial",
     content: "For industries, a social panel acts as a hub for workforce engagement, safety awareness, and operational transparency. It facilitates real-time communication between management and employees, ensuring compliance with industry standards while enhancing collaboration for sustainable industrial growth."
     },
  { title: "Environment", description: "Solar Panel for Environment",
     content: "A social panel dedicated to environmental causes supports sustainability efforts, eco-awareness campaigns, and corporate green policies. It enables organizations to educate communities, promote eco-friendly initiatives, and drive action toward reducing carbon footprints and environmental conservation."
     },
  { title: "Institute", description: "Solar Panel for Institutes", 
    content: "In educational institutions, a social panel serves as a digital space for students, faculty, and administrators to share academic updates, event notifications, and important announcements. It fosters a connected learning environment by enhancing communication and participation within schools, colleges, and universities."
 },
  { title: "Public Facilities", description: "Solar Panel for Public Facilities",
     content: "Public facilities such as government offices, healthcare centers, and transportation hubs benefit from a social panel by improving citizen engagement and service transparency. It ensures timely updates, enhances accessibility, and encourages public participation in civic initiatives."
     },
  { title: "Hotels & Resorts", description: "Solar Panel for Hotels & Resorts", 
    content: "For the hospitality industry, a social panel enhances guest experiences by providing information about hotel services, upcoming events, special promotions, and customer feedback mechanisms. It creates an interactive space for guests to engage with the hotel, ensuring a seamless and enjoyable stay."
 },
];

export default function SolarPanelSection() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-14 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Solar Panel Solutions
      </h1>

      <div className="flex flex-col md:flex-row bg-gray-50 w-full max-w-7xl mx-auto items-stretch h-auto md:h-[550px]">
        
        <div className="w-full md:w-1/4 bg-blue-600 text-white p-6 rounded-lg shadow-lg space-y-4 flex flex-col justify-center">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section)}
              className={`block w-full text-left px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 font-semibold ${
                activeSection.title === section.title ? "bg-white text-blue-600 shadow-md" : "bg-blue-600 text-white"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

       
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg mx-0 md:mx-4 my-4 md:my-0 flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{activeSection.description}</h2>
          <p className="text-gray-600 text-lg text-center">{activeSection.content}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>

        <div className="hidden md:flex w-full md:w-1/3 h-full">
          <Image
            src="/image3.jpg"
            alt="Solar Panel"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
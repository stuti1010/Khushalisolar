import Image from 'next/image';
import { FaWind, FaWrench, FaSolarPanel, FaFan,FaPhone } from 'react-icons/fa'; 

const serviceData = [
  { 
    title: 'Wind Turbines', 
    description: 'We offer end-to-end logistics tailored for specific markets, providing solutions.',
    icon: <FaWind className="w-8 h-8 text-blue-500" />,
  },
  { 
    title: 'Maintenance', 
    description: 'We offer end-to-end logistics tailored for specific markets, providing solutions.',
    icon: <FaWrench className="w-8 h-8 text-blue-500" />,
  },
  { 
    title: 'Wind Generators', 
    description: 'We offer end-to-end logistics tailored for specific markets, providing solutions.',
    icon: <FaFan className="w-8 h-8 text-blue-500" />,
  },
  { 
    title: 'Solar Energy', 
    description: 'We offer end-to-end logistics tailored for specific markets, providing solutions.',
    icon: <FaSolarPanel className="w-8 h-8 text-blue-500" />,
  },
];

export default function Grid() {
  return (
    <div className="py-8">
      <section className="relative px-4 py-12 md:px-12 lg:px-24 bg-white min-h-[600px]">
        
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-15"
          style={{
            backgroundImage: "url('/image5.jpg')",
            zIndex: 0,
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           
            <div className="md:col-span-1  flex items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Things you need to know and we know{' '}
                <span className="text-blue-500">your&apos;s</span>
              </h2>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceData.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-200 h-52 flex flex-col justify-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 group"
                >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r rounded-2xl from-blue-500 to-blue-200"></div>

                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white group-hover:rotate-[360deg] rounded-full p-2 shadow-md border border-gray-200 transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="text-center pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 uppercase mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceData.slice(2, 4).map((service, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-200 h-52 flex flex-col justify-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 group"
                >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r rounded-2xl from-blue-500 to-blue-200"></div>
          
                 
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-[360deg] bg-white rounded-full p-2 shadow-md border border-gray-200 transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="text-center pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 uppercase mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

           
<div className=" relative h-72 w-full rounded-lg overflow-hidden shadow-lg">
  <Image 
    src="/image4.jpg" 
    alt="Worker at wind farm" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-lg"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white z-10">
    <h3 className="text-2xl font-semibold uppercase tracking-wider">Have you any questions?</h3>
    <p className="text-xl font-bold mt-2">Don&apos;t Waste a Second! Call Us</p>
    <p className="mt-4 text-xl flex items-center gap-2">
    <FaPhone className="text-white" /> +91 9691013327
    </p>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}
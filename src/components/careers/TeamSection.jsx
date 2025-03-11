import iitBombayLogo from '../../assets/images/colleges/iit-bombay.png';
import iitJammuLogo from '../../assets/images/colleges/iit-jammu.png';
import nitKurukshetraLogo from '../../assets/images/colleges/nit-kurukshetra.png';
import iitPatnaLogo from '../../assets/images/colleges/iit-patna.png';
import iitGandhinagarLogo from '../../assets/images/colleges/iit-gandhinagar.png';
import vitVelloreLogo from '../../assets/images/colleges/vit-vellore.png';

export default function TeamSection() {
  const colleges = [
    {
      name: "IIT BOMBAY",
      logo: iitBombayLogo,
      alt: "IIT Bombay Logo"
    },
    {
      name: "IIT JAMMU",
      logo: iitJammuLogo,
      alt: "IIT Jammu Logo"
    },
    {
      name: "NIT KURUKSHETRA",
      logo: nitKurukshetraLogo,
      alt: "NIT Kurukshetra Logo"
    },
    {
      name: "IIT PATNA",
      logo: iitPatnaLogo,
      alt: "IIT Patna Logo"
    },
    {
      name: "IIT GANDHINAGAR",
      logo: iitGandhinagarLogo,
      alt: "IIT Gandhinagar Logo"
    },
    {
      name: "VIT VELLORE",
      logo: vitVelloreLogo,
      alt: "VIT Vellore Logo"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12">
          OUR TEAM COMES FROM
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {colleges.map((college, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img 
                  src={college.logo} 
                  alt={college.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center">{college.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
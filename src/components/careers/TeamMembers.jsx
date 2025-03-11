export default function TeamMembers() {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      education: "IIT Bombay"
    },
    {
      name: "Priya Singh",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      education: "IIT Gandhinagar"
    },
    {
      name: "Amit Patel",
      position: "Head of Product",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      education: "VIT Vellore"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-sm text-gray-500">{member.education}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
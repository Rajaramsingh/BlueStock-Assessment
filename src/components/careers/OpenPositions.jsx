export default function OpenPositions() {
  const positions = [
    {
      title: "Social Media Internship & Job",
      type: "Internship",
      badge: "Apply Now",
      isActive: true
    },
    {
      title: "Python Tech Round",
      type: "Full-time",
      isActive: true
    },
    {
      title: "Catalog DOC",
      type: "Document",
      isActive: true
    }
  ];

  const domains = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Product Management",
    "Digital Marketing",
    "Data Analysis"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Open Positions */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{position.title}</h3>
                      <span className="text-sm text-gray-600">{position.type}</span>
                    </div>
                    {position.badge && (
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                        {position.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Domains */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Domains</h2>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-3"
                >
                  <span className="text-blue-600">•</span>
                  <span>{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Get Bluestock™</h3>
              <p className="text-gray-600">Mobile App</p>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <img src="/playstore.png" alt="Play Store" className="h-8" />
                </a>
              </div>
            </div>
            <div className="w-32 h-32">
              <img 
                src="/qr-code.png" 
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
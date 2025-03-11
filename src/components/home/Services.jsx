export default function Services() {
  const services = [
    {
      title: "IPO Corner",
      icon: "📊",
      description: "Discover upcoming IPOs and investment opportunities instantly."
    },
    {
      title: "Shark Investor",
      icon: "🏛️",
      description: "Track top investors' portfolios and their latest moves."
    },
    {
      title: "Global Index",
      icon: "📈",
      description: "Access real-time global stock market indices easily."
    },
    {
      title: "Market Insights",
      icon: "📊",
      description: "Analyze foreign and domestic institutional investment trends."
    },
    {
      title: "Broker Compare",
      icon: "⚡",
      description: "Compare brokers to find the best trading platform."
    },
    {
      title: "Market Community",
      icon: "🔄",
      description: "Connect and engage with fintech enthusiasts globally"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            SERVICES
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Services Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile App Illustration */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/mobile-app-illustration.png" 
                alt="BlueStock Mobile App"
                className="w-full max-w-md mx-auto"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-100 rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-purple-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
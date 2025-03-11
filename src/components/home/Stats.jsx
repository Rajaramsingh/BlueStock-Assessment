export default function Stats() {
  const stats = [
    {
      number: "122360",
      label: "Active Users",
      icon: "😊"
    },
    {
      number: "1820",
      label: "Reviews",
      icon: "⭐"
    },
    {
      number: "48597",
      label: "App Downloads",
      icon: "⬇️"
    },
    {
      number: "10289020",
      label: "Impression",
      icon: "👥"
    }
  ];

  const features = [
    { name: "Shark Portfolio", icon: "✓" },
    { name: "Stock Charts", icon: "✓" },
    { name: "Broker Compare", icon: "✓" },
    { name: "Community", icon: "✓" },
    { name: "Global Index", icon: "✓" },
    { name: "IPO Analytics", icon: "✓" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl mb-3 block">{stat.icon}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-4">
              Built for a growing India.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <img 
                src="/chart-illustration.png" 
                alt="Chart Features" 
                className="w-full max-w-md mx-auto"
              />
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="text-blue-600 flex-shrink-0">{feature.icon}</span>
                    <span className="font-medium">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <img src="/playstore-icon.png" alt="Play Store" className="w-6 h-6" />
                <span>Play Store</span>
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <img src="/appstore-icon.png" alt="App Store" className="w-6 h-6" />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
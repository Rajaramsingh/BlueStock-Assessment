export default function Features() {
  const features = [
    {
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of trading experience",
      icon: "📚"
    },
    {
      title: "Real-Time Trading",
      description: "Practice trading with real market data in a risk-free environment",
      icon: "📈"
    },
    {
      title: "Market Analysis",
      description: "Access detailed market analysis and trading strategies",
      icon: "📊"
    },
    {
      title: "Community Support",
      description: "Join a community of traders and learn together",
      icon: "👥"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
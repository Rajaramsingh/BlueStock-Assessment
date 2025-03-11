import Breadcrumb from '../components/common/Breadcrumb';

export default function About() {
  const features = [
    {
      title: "Market Overview",
      description: "Get real-time updates on SENSEX, NIFTY 50, BANK NIFTY, and other major indices.",
      icon: "📈"
    },
    {
      title: "Technical Analysis",
      description: "Access powerful tools for technical analysis and chart patterns.",
      icon: "📊"
    },
    {
      title: "Stock School",
      description: "Learn trading with our comprehensive educational resources.",
      icon: "🎓"
    },
    {
      title: "Community",
      description: "Join our growing community of traders and investors.",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            BECOME A BETTER<br />
            INVESTOR & TRADER
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Bluestock, your comprehensive stock market app, is here to redefine your trading experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Why Choose BlueStock?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <p>Real-time market data and instant updates</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <p>User-friendly interface for seamless trading</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <p>Advanced technical analysis tools</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <p>Educational resources for all skill levels</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <p>24/7 customer support</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
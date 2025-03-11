export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Stock Trading
            </h1>
            <p className="text-xl mb-8">
              Master the art of trading with our expert-led courses and real-time market analysis
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            {/* Add your hero image here */}
            <img 
              src="/path-to-your-image.png" 
              alt="Trading Platform" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Stock Trader",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "BlueStock has transformed the way I trade. Their platform is intuitive and powerful."
    },
    {
      name: "Priya Patel",
      role: "Investment Analyst",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The educational resources and market insights provided by BlueStock are invaluable."
    },
    {
      name: "Amit Kumar",
      role: "New Investor",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      quote: "As a beginner, BlueStock made it easy for me to understand and start trading confidently."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
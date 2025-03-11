export default function CareerInfo() {
  const steps = [
    {
      title: "LinkedIn",
      badge: "1st",
      isActive: true
    },
    {
      title: "Technical Assessment",
      badge: "Live",
      isActive: true
    },
    {
      title: "Verify Documents",
      isActive: false
    },
    {
      title: "Apply for Jobs",
      badge: "1",
      isActive: false
    },
    {
      title: "Apply for Internship",
      badge: "1 APR 2025",
      isActive: false
    }
  ];

  const benefits = [
    "Innovative Projects: Work on cutting-edge fintech solutions.",
    "Career Growth: Access ongoing learning and clear career paths.",
    "Meaningful Impact: Contribute to projects that make a difference."
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Application Steps */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                Dashboard
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                Last Updated: 11/03/2025, 16:16:55
              </div>
              <div className="text-green-500 text-sm mb-6">
                Network: 0.75 Mbps
              </div>
              
              {/* Application Steps */}
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      step.isActive ? 'bg-blue-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        step.isActive ? 'bg-blue-500' : 'bg-gray-300'
                      }`}></div>
                      <span>{step.title}</span>
                    </div>
                    {step.badge && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        step.badge === 'Live' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {step.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads Section */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                  <span className="mr-2">📄</span>
                  Python Tech Round
                </a>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                  <span className="mr-2">📄</span>
                  Catalog DOC
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Job Info */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Join Our Team at Bluestock Fintech
              </h2>
              <p className="text-gray-600 mb-8">
                At Bluestock Fintech, we are at the forefront of revolutionizing the financial technology landscape. Our mission is to empower individuals and businesses with innovative, cutting-edge solutions that make financial management smarter and more accessible. As a rapidly growing company, we are constantly seeking talented, passionate, and driven professionals to join our dynamic team. We believe in fostering a culture of innovation, collaboration, and continuous learning, where every team member's contribution is valued and every idea has the potential to make a significant impact.
              </p>

              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Why Work at Bluestock Fintech?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
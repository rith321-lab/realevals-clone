export default function Home() {
  const websites = [
    {
      name: 'Staynb',
      description: 'Short-term rental platform',
      taskCount: 20,
      categories: ['Booking', 'Property Search', 'Reviews']
    },
    {
      name: 'Omnizon',
      description: 'E-commerce marketplace',
      taskCount: 20,
      categories: ['Shopping', 'Product Search', 'Reviews']
    },
    {
      name: 'DashDish',
      description: 'Food delivery service',
      taskCount: 20,
      categories: ['Food Ordering', 'Restaurant Search', 'Delivery Tracking']
    },
    {
      name: 'GoCalendar',
      description: 'Calendar and scheduling platform',
      taskCount: 20,
      categories: ['Event Planning', 'Meeting Scheduling', 'Reminders']
    },
    {
      name: 'GoMail',
      description: 'Email service platform',
      taskCount: 20,
      categories: ['Email Management', 'Contact Organization', 'Search']
    },
    {
      name: 'OpenDining',
      description: 'Restaurant reservation platform',
      taskCount: 20,
      categories: ['Reservations', 'Restaurant Discovery', 'Reviews']
    },
    {
      name: 'NetworkIn',
      description: 'Professional networking platform',
      taskCount: 20,
      categories: ['Networking', 'Job Search', 'Profile Management']
    },
    {
      name: 'UDriver',
      description: 'Ride-sharing service',
      taskCount: 20,
      categories: ['Ride Booking', 'Driver Rating', 'Trip History']
    },
    {
      name: 'Fly Unified',
      description: 'Flight booking platform',
      taskCount: 20,
      categories: ['Flight Search', 'Booking', 'Check-in']
    },
    {
      name: 'TopWork',
      description: 'Project management tool',
      taskCount: 20,
      categories: ['Task Management', 'Team Collaboration', 'Reporting']
    },
    {
      name: 'Zilloft',
      description: 'Real estate platform',
      taskCount: 20,
      categories: ['Property Search', 'Market Analysis', 'Appointments']
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2f2e47] mb-6">
            Vertia AI Evaluation Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation of AI models across real-world websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Realistic Testing</h2>
            <p className="text-gray-700">
              Test AI models on real-world websites and applications, with authentic user scenarios and complex interactions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Detailed Metrics</h2>
            <p className="text-gray-700">
              Get comprehensive performance analytics across different task types, difficulty levels, and success rates.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Model Comparison</h2>
            <p className="text-gray-700">
              Compare different AI models side by side with standardized metrics and detailed performance breakdowns.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">Evaluation Websites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site) => (
            <div key={site.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2f2e47] mb-3">{site.name}</h3>
              <p className="text-gray-600 mb-4">{site.description}</p>
              <div className="mb-4">
                <span className="text-sm font-medium text-[#7c4dff]">
                  {site.taskCount} Tasks
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {site.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">
            Why Choose Verita AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Evaluation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Test across multiple websites and applications</li>
                <li>• Evaluate different task types and complexity levels</li>
                <li>• Measure performance in realistic scenarios</li>
                <li>• Track progress over time</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Detailed Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Performance breakdowns by category</li>
                <li>• Success rate analysis</li>
                <li>• Task completion metrics</li>
                <li>• Comparative benchmarking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">
            Ready to evaluate your AI model?
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-[#7c4dff] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#6c3ce9]">
              Start Evaluation
            </button>
            <button className="border border-[#7c4dff] text-[#7c4dff] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#7c4dff] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

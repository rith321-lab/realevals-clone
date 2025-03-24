export default function Home() {
  // Define websites with additional details matching the screenshot
  const websites = [
    {
      name: 'Staynb',
      similarTo: 'Airbnb',
      url: 'https://evals-staynb.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/staynb',
      description: 'A modern accommodation booking platform that simulates the core functionality of Airbnb.',
      metrics: { accuracy: 92, userSuccess: 88, complexity: 'Medium' },
      color: '#4caf50' // Green
    },
    {
      name: 'Omnizon',
      similarTo: 'Amazon',
      url: 'https://evals-omnizon.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/omnizon',
      description: 'An e-commerce platform that simulates the shopping experience of Amazon with detailed product listings.',
      metrics: { accuracy: 94, userSuccess: 91, complexity: 'High' },
      color: '#2196f3' // Blue
    },
    {
      name: 'DashDish',
      similarTo: 'Doordash',
      url: 'https://evals-dashdish.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/dashdish',
      description: 'A food delivery service platform that mimics the core functionality of Doordash.',
      metrics: { accuracy: 89, userSuccess: 86, complexity: 'Medium' },
      color: '#ff9800' // Orange
    },
    {
      name: 'GoCalendar',
      similarTo: 'Google Calendar',
      url: 'https://evals-gocalendar.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/gocalendar',
      description: 'A calendar application that simulates the scheduling functionality of Google Calendar.',
      metrics: { accuracy: 91, userSuccess: 89, complexity: 'Medium' },
      color: '#8bc34a' // Light Green
    },
    {
      name: 'GoMail',
      similarTo: 'GMail',
      url: 'https://evals-gomail.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/gomail',
      description: 'An email service interface that mimics the core functionality of Gmail.',
      metrics: { accuracy: 90, userSuccess: 87, complexity: 'High' },
      color: '#8bc34a' // Light Green
    },
    {
      name: 'OpenDining',
      similarTo: 'OpenTable',
      url: 'https://evals-opendining.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/opendining',
      description: 'A restaurant reservation platform that simulates the booking experience of OpenTable.',
      metrics: { accuracy: 88, userSuccess: 85, complexity: 'Medium' },
      color: '#8bc34a' // Light Green
    },
    {
      name: 'NetworkIn',
      similarTo: 'LinkedIn',
      url: 'https://evals-networkin.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/networkin',
      description: 'A professional networking platform that mimics the core functionality of LinkedIn.',
      metrics: { accuracy: 87, userSuccess: 84, complexity: 'High' },
      color: '#00bcd4' // Cyan
    },
    {
      name: 'Udriver',
      similarTo: 'Uber',
      url: 'https://evals-udriver.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/udriver',
      description: 'A ride-sharing service platform that simulates the booking experience of Uber.',
      metrics: { accuracy: 93, userSuccess: 90, complexity: 'Medium' },
      color: '#2196f3' // Blue
    },
    {
      name: 'Fly Unified',
      similarTo: 'United',
      url: 'https://evals-fly-unified.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/fly-unified',
      description: 'An airline booking platform that mimics the flight reservation system of United Airlines.',
      metrics: { accuracy: 86, userSuccess: 83, complexity: 'High' },
      color: '#3f51b5' // Indigo
    },
    {
      name: 'TopWork',
      similarTo: 'UpWork',
      url: 'https://evals-topwork.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/topwork',
      description: 'A freelance marketplace that simulates the job posting and application processes of UpWork.',
      metrics: { accuracy: 85, userSuccess: 82, complexity: 'Medium' },
      color: '#9c27b0' // Purple
    },
    {
      name: 'Zilloft',
      similarTo: 'Zillow',
      url: 'https://evals-zilloft.vercel.app/',
      aboutUrl: 'https://www.realevals.xyz/websites/zilloft',
      description: 'A real estate platform that mimics the property listing and search functionality of Zillow.',
      metrics: { accuracy: 89, userSuccess: 86, complexity: 'Medium' },
      color: '#673ab7' // Deep Purple
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2f2e47] mb-6">
            Realistic Evaluations for Agents Leaderboard (REAL)
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-3xl mx-auto">
            Modern, complex websites mirroring what we actually use the web for
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#2f2e47] mt-8 mb-6">
          High-fidelity, fully-deterministic websites for agents to explore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div style={{ borderTop: `3px solid ${site.color}` }} className="p-5">
                <h3 className="text-xl font-semibold text-[#2f2e47] mb-1">{site.name}</h3>
                <p className="text-sm text-gray-500 mb-3">Similar to <strong>{site.similarTo}</strong></p>

                <p className="text-gray-700 text-sm mb-4">{site.description}</p>

                <div className="mb-5">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-gray-500">Accuracy</p>
                      <p className="font-semibold text-indigo-600">{site.metrics.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Success Rate</p>
                      <p className="font-semibold text-indigo-600">{site.metrics.userSuccess}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Complexity</p>
                      <p className="font-semibold text-indigo-600">{site.metrics.complexity}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={site.aboutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors text-sm"
                  >
                    About
                  </a>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16 pt-8 border-t border-gray-200 text-gray-500 text-sm text-center">
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
          <span>REAL is currently in closed beta. We&apos;re excited to invite you to participate and provide feedback to improve the experience.</span>
        </div>
      </div>
    </main>
  );
}

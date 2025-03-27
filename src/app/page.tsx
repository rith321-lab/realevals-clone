import Image from "next/image";
import { BeakerIcon, ChartBarIcon, ScaleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const websites = [
    {
      name: "Staynb",
      description: "Short-term rental platform",
      similarTo: "Airbnb",
      categories: ["Booking", "Property Search", "Reviews"],
      taskCount: 20,
      image: "/images/staynb_preview.webp",
    },
    {
      name: "Omnizon",
      description: "E-commerce marketplace",
      similarTo: "Amazon",
      categories: ["Shopping", "Product Search", "Reviews"],
      taskCount: 20,
      image: "/images/omnizon_preview.webp",
    },
    {
      name: "DashDish",
      description: "Food delivery service",
      similarTo: "Doordash",
      categories: ["Food Ordering", "Restaurant Search", "Delivery Tracking"],
      taskCount: 20,
      image: "/images/dashdish_preview.webp",
    },
    {
      name: "GoCalendar",
      description: "Calendar and scheduling platform",
      taskCount: 20,
      categories: ["Event Planning", "Meeting Scheduling", "Reminders"],
      image: "/images/gocalendar_preview.webp",
    },
    {
      name: "GoMail",
      description: "Email service platform",
      taskCount: 20,
      categories: ["Email Management", "Contact Organization", "Search"],
      image: "/images/gomail_preview.webp",
    },
    {
      name: "OpenDining",
      description: "Restaurant reservation platform",
      taskCount: 20,
      categories: ["Reservations", "Restaurant Discovery", "Reviews"],
      image: "/images/opendining_preview.webp",
    },
    {
      name: "NetworkIn",
      description: "Professional networking platform",
      taskCount: 20,
      categories: ["Networking", "Job Search", "Profile Management"],
      image: "/images/networkin_preview.webp",
    },
    {
      name: "UDriver",
      description: "Ride-sharing service",
      taskCount: 20,
      categories: ["Ride Booking", "Driver Rating", "Trip History"],
      image: "/images/udriver_preview.webp",
    },
    {
      name: "Fly Unified",
      description: "Flight booking platform",
      taskCount: 20,
      categories: ["Flight Search", "Booking", "Check-in"],
      image: "/images/fly-unified_preview.webp",
    },
    {
      name: "TopWork",
      description: "Project management tool",
      taskCount: 20,
      categories: ["Task Management", "Team Collaboration", "Reporting"],
      image: "/images/topwork_preview.webp",
    },
    {
      name: "Zilloft",
      description: "Real estate platform",
      taskCount: 20,
      categories: ["Property Search", "Market Analysis", "Appointments"],
      image: "/images/zilloft_preview.webp",
    },
  ];

  const features = [
    {
      title: "Realistic Testing",
      description: "Test AI models on real-world websites and applications, with authentic user scenarios and complex interactions.",
      icon: BeakerIcon,
    },
    {
      title: "Detailed Metrics",
      description: "Get comprehensive performance analytics across different task types, difficulty levels, and success rates.",
      icon: ChartBarIcon,
    },
    {
      title: "Model Comparison",
      description: "Compare different AI models side by side with standardized metrics and detailed performance breakdowns.",
      icon: ScaleIcon,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2f2e47] mb-6">Verita AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive evaluation of AI models across real-world websites</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map(feature => (
            <div key={feature.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-[#7c4dff]" />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-[#2f2e47]">{feature.title}</h2>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">High-fidelity, fully-deterministic websites for agents to explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websites.map(site => (
            <div key={site.name} className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-[#2f2e47]">{site.name}</h3>
                  <span className="text-gray-600">
                    Similar to <span className="text-[#2f2e47]">{site.similarTo}</span>
                  </span>
                </div>
                <p className="text-gray-600">{site.description}</p>
              </div>

              <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
                <Image src={site.image} alt={`${site.name} preview`} fill className="object-cover" priority />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[#7c4dff] font-medium">{site.taskCount} Tasks</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {site.categories.map(category => (
                    <span key={category} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#7c4dff] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6c3ce9] transition-colors">About</button>
                  <button className="bg-[#7c4dff] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6c3ce9] transition-colors">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm mb-16 mt-16">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">Why Choose Verita AI?</h2>
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

          <div className="mt-10 text-center">
            <p className="text-[#7c4dff] font-medium text-lg">Used by leading AI labs and browser use agent companies</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-8">Ready to evaluate your AI model?</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-[#7c4dff] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#6c3ce9]">Start Evaluation</button>
            <button className="border border-[#7c4dff] text-[#7c4dff] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#7c4dff] hover:text-white">Learn More</button>
          </div>
        </div>
      </div>
    </main>
  );
}

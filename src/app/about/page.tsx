'use client';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-[#2f2e47] mb-8">About Verita AI</h1>
        
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Verita AI is dedicated to providing comprehensive and realistic evaluations of AI models across diverse real-world scenarios. Our platform measures AI performance on complex, modern websites and applications, offering detailed insights into model capabilities and limitations.
          </p>
          <p className="text-gray-700 mb-6">
            We believe in transparent, standardized testing that helps advance the field of artificial intelligence while ensuring practical applicability in real-world situations.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-[#2f2e47] mb-2">Comprehensive Evaluation</h3>
              <p className="text-gray-700">
                Our platform tests AI models across multiple dimensions, including task completion, accuracy, and efficiency on real-world websites and applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#2f2e47] mb-2">Standardized Metrics</h3>
              <p className="text-gray-700">
                We provide consistent, comparable metrics across different models and tasks, enabling meaningful benchmarking and progress tracking.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#2f2e47] mb-2">Detailed Analytics</h3>
              <p className="text-gray-700">
                Get in-depth insights into model performance with detailed breakdowns by task type, difficulty level, and specific capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Get Involved</h2>
          <p className="text-gray-700 mb-6">
            Whether you're developing AI models, researching AI capabilities, or interested in implementing AI solutions, Verita AI provides the tools and insights you need to make informed decisions.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7c4dff] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#6c3ce9]">
              Start Evaluation
            </button>
            <button className="border border-[#7c4dff] text-[#7c4dff] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#7c4dff] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 
'use client';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-[#2f2e47] mb-12 text-center">About Verita AI</h1>
        
        <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_12px_rgba(0,0,0,0.08)] mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-[#2f2e47]">Our Mission</h2>
          <div className="space-y-6 text-lg">
            <p className="text-gray-600 leading-relaxed">
              Verita AI is dedicated to providing comprehensive and realistic evaluations of AI models across diverse real-world scenarios. Our platform measures AI performance on complex, modern websites and applications, offering detailed insights into model capabilities and limitations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in transparent, standardized testing that helps advance the field of artificial intelligence while ensuring practical applicability in real-world situations.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_12px_rgba(0,0,0,0.08)] mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-[#2f2e47]">What We Do</h2>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-50 p-4 rounded-full shrink-0">
                <svg className="w-6 h-6 text-[#7c4dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#2f2e47] mb-3">Comprehensive Evaluation</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our platform tests AI models across multiple dimensions, including task completion, accuracy, and efficiency on real-world websites and applications.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-50 p-4 rounded-full shrink-0">
                <svg className="w-6 h-6 text-[#7c4dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#2f2e47] mb-3">Standardized Metrics</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We provide consistent, comparable metrics across different models and tasks, enabling meaningful benchmarking and progress tracking.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-50 p-4 rounded-full shrink-0">
                <svg className="w-6 h-6 text-[#7c4dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#2f2e47] mb-3">Detailed Analytics</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Get in-depth insights into model performance with detailed breakdowns by task type, difficulty level, and specific capabilities.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-[#7c4dff] font-medium text-lg italic">
                Used by leading AI labs and browser use agent companies
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-3xl font-semibold mb-8 text-[#2f2e47]">Get Involved</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Whether you're developing AI models, researching AI capabilities, or interested in implementing AI solutions, Verita AI provides the tools and insights you need to make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7c4dff] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#6c3ce9] transition-colors">
              Start Evaluation
            </button>
            <button className="border-2 border-[#7c4dff] text-[#7c4dff] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7c4dff] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 
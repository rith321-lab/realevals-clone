'use client';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2f2e47] mb-6">
            Building Real World AI Evaluation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            /rēl/ | verb
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            To rigorously test an LLM or agent with the purpose of discovering how it performs in real-world scenarios
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-6">
            Doing Our Life's Work
          </h2>
          
          <p className="text-gray-600 mb-6">
            We're not here to create simple API wrappers or chase the latest AI hype. We're here to solve one of the most fundamental challenges in AI development: creating reliable, real-world evaluation frameworks.
          </p>

          <p className="text-gray-600 mb-6">
            Our mission is to build evaluation systems that are:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="font-semibold text-[#2f2e47] mr-2">Realistic:</span>
              Testing environments that mirror actual user interactions and real-world complexity
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2f2e47] mr-2">Reliable:</span>
              Consistent, reproducible results that you can trust
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2f2e47] mr-2">Comprehensive:</span>
              Testing across a wide range of scenarios and edge cases
            </li>
          </ul>

          <p className="text-gray-600 mb-16">
            We are assembling a team of world-class talent dedicated to building the infrastructure needed to evaluate and improve AI systems in meaningful, practical ways.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#2f2e47] mb-12">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Real websites</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Modern web stack - React + Next.js</li>
                <li>Rich functionality for core flows</li>
                <li>Realistic mock data</li>
                <li className="pl-4">• Locked data</li>
                <li className="pl-4">• Fixed date ranges</li>
                <li className="pl-4">• Perfect replayability</li>
                <li>Already logged in and ready</li>
                <li>Agent-friendly security posture</li>
                <li>Cross-tab session persistence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Real goals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Practical goals written by humans</li>
                <li>Websites are fully configurable</li>
                <li className="pl-4">• Toggle accessibility features</li>
                <li className="pl-4">• Set unexpected behavior flags</li>
                <li className="pl-4">• Configure mock latency</li>
                <li>Action and retrieval-based goals</li>
                <li>Failure, "No action" cases included</li>
                <li>Easy, medium, hard categories</li>
                <li>Rubrics for LLM judging of retrieval tasks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Flexible evaluation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Bring your own system, "black box" systems are supported</li>
                <li>Framework agnostic</li>
                <li>Playwright SDK available</li>
                <li>Multiple ways to accomplish goals</li>
                <li>Easy to work with websites</li>
                <li className="pl-4">• /config to configure</li>
                <li className="pl-4">• /finish to get state changes</li>
                <li className="pl-4">• /submit to submit goal outcomes</li>
                <li>Local evaluation support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
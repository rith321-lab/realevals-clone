'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Metrics() {
  const [selectedWebsite, setSelectedWebsite] = useState('Staynb');
  const [selectedModel, setSelectedModel] = useState('Project Mariner');
  
  const models = [
    { 
      name: 'Project Mariner',
      score: 55,
      tasksCompleted: { total: 186, easy: 68, medium: 63, hard: 55 },
      maxTasks: { total: 220, easy: 78, medium: 74, hard: 68 },
      websiteScores: {
        'Staynb': 100,
        'Omnizon': 100,
        'DashDish': 45,
        'GoCalendar': 45,
        'GoMail': 45,
        'OpenDining': 45,
        'NetworkIn': 45,
        'UDriver': 45,
        'Fly Unified': 45,
        'TopWork': 45,
        'Zilloft': 45
      }
    },
    { 
      name: 'Computer Use',
      score: 45,
      tasksCompleted: { total: 99, easy: 28, medium: 38, hard: 33 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        'Staynb': 45,
        'Omnizon': 45,
        'DashDish': 45,
        'GoCalendar': 45,
        'GoMail': 45,
        'OpenDining': 45,
        'NetworkIn': 45,
        'UDriver': 45,
        'Fly Unified': 45,
        'TopWork': 45,
        'Zilloft': 45
      }
    },
    { 
      name: 'Operator',
      score: 43,
      tasksCompleted: { total: 95, easy: 35, medium: 36, hard: 24 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        'Staynb': 50,
        'Omnizon': 60,
        'DashDish': 35,
        'GoCalendar': 35,
        'GoMail': 60,
        'OpenDining': 35,
        'NetworkIn': 35,
        'UDriver': 60,
        'Fly Unified': 35,
        'TopWork': 35,
        'Zilloft': 35
      }
    },
    { 
      name: 'Convergence Proxy',
      score: 36,
      tasksCompleted: { total: 79, easy: 22, medium: 28, hard: 29 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        'Staynb': 45,
        'Omnizon': 35,
        'DashDish': 35,
        'GoCalendar': 35,
        'GoMail': 35,
        'OpenDining': 35,
        'NetworkIn': 35,
        'UDriver': 35,
        'Fly Unified': 35,
        'TopWork': 35,
        'Zilloft': 35
      }
    }
  ];

  const currentModel = models.find(m => m.name === selectedModel)!;

  const websites = [
    { name: 'Staynb', score: currentModel.websiteScores['Staynb'] },
    { name: 'Omnizon', score: currentModel.websiteScores['Omnizon'] },
    { name: 'DashDish', score: currentModel.websiteScores['DashDish'] },
    { name: 'GoCalendar', score: currentModel.websiteScores['GoCalendar'] },
    { name: 'GoMail', score: currentModel.websiteScores['GoMail'] },
    { name: 'OpenDining', score: currentModel.websiteScores['OpenDining'] },
    { name: 'NetworkIn', score: currentModel.websiteScores['NetworkIn'] },
    { name: 'UDriver', score: currentModel.websiteScores['UDriver'] },
    { name: 'Fly Unified', score: currentModel.websiteScores['Fly Unified'] },
    { name: 'TopWork', score: currentModel.websiteScores['TopWork'] },
    { name: 'Zilloft', score: currentModel.websiteScores['Zilloft'] }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#2f2e47]">
            Model performance, broken out by website and tasks
          </h1>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="bg-[#7c4dff] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#6c3ce9] transition-colors cursor-pointer"
          >
            {models.map((model) => (
              <option key={model.name} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        {/* Model Performance Chart */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-6">Model Performance</h2>
          <div className="space-y-6">
            {models.map((model) => (
              <div key={model.name} className={`relative ${model.name === selectedModel ? 'opacity-100' : 'opacity-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">{model.name}</span>
                  <span className="text-gray-600">{model.score}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div
                    className={`h-full rounded-full ${
                      model.name === 'Project Mariner' ? 'bg-red-500' :
                      model.name === 'Computer Use' ? 'bg-yellow-500' :
                      model.name === 'Operator' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}
                    style={{ width: `${model.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Model Details */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl font-bold text-[#2f2e47]">{selectedModel}</div>
            <div className="text-lg text-gray-500">AI Model</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Tasks Completed</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#7c4dff] w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Tasks</div>
                    <div className="text-2xl font-semibold">
                      {currentModel.tasksCompleted.total} / {currentModel.maxTasks.total}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#00C851] font-medium">Easy Tasks</span>
                      <span>{currentModel.tasksCompleted.easy} / {currentModel.maxTasks.easy}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#00C851] h-full rounded-full" 
                        style={{width: `${(currentModel.tasksCompleted.easy / currentModel.maxTasks.easy) * 100}%`}}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#ff9800] font-medium">Medium Tasks</span>
                      <span>{currentModel.tasksCompleted.medium} / {currentModel.maxTasks.medium}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#ff9800] h-full rounded-full" 
                        style={{width: `${(currentModel.tasksCompleted.medium / currentModel.maxTasks.medium) * 100}%`}}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#ff4444] font-medium">Hard Tasks</span>
                      <span>{currentModel.tasksCompleted.hard} / {currentModel.maxTasks.hard}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#ff4444] h-full rounded-full" 
                        style={{width: `${(currentModel.tasksCompleted.hard / currentModel.maxTasks.hard) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Website Performance</h3>
              <div className="space-y-4">
                {websites.map((site) => (
                  <div key={site.name} className="flex items-center justify-between">
                    <Link 
                      href={`/details/${selectedModel}/${site.name}`}
                      className="text-gray-700 font-medium hover:text-[#7c4dff]"
                    >
                      {site.name}
                    </Link>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#7c4dff] h-full rounded-full" 
                          style={{width: `${site.score}%`}}
                        ></div>
                      </div>
                      <span className="text-gray-600 w-12">{site.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
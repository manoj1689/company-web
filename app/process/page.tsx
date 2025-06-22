"use client"
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import * as echarts from 'echarts';
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('challenge');

  // ROI Chart
  React.useEffect(() => {
    const chartDom = document.getElementById('roi-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Investment', 'Return']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Q1', 'Q2', 'Q3', 'Q4']
        },
        yAxis: {
          type: 'value',
          name: 'Amount ($K)'
        },
        series: [
          {
            name: 'Investment',
            type: 'bar',
            stack: 'total',
            data: [50, 30, 20, 10],
            color: '#94a3b8'
          },
          {
            name: 'Return',
            type: 'bar',
            stack: 'total',
            data: [20, 60, 120, 180],
            color: '#3b82f6'
          }
        ]
      };
      myChart.setOption(option);
      
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      return () => {
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  // Efficiency Chart
  React.useEffect(() => {
    const chartDom = document.getElementById('efficiency-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Before', 'After']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
          type: 'value',
          name: 'Processing Time (hrs)'
        },
        series: [
          {
            name: 'Before',
            type: 'line',
            data: [24, 22, 25, 23, 26, 24],
            color: '#ef4444'
          },
          {
            name: 'After',
            type: 'line',
            data: [8, 6, 5, 4, 3, 2],
            color: '#22c55e'
          }
        ]
      };
      myChart.setOption(option);
      
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      return () => {
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
     <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20office%20environment%20with%20advanced%20technology%20systems%2C%20clean%20and%20minimalist%20design%2C%20blue%20tinted%20lighting%2C%20glass%20partitions%2C%20people%20working%20on%20computers%2C%20professional%20atmosphere%2C%20corporate%20setting%2C%20high-tech%20equipment%20visible&width=1440&height=500&seq=123&orientation=landscape" 
            alt="Case Study Hero Background" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <i className="fas fa-building mr-2"></i>
                Financial Services
              </div>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
                AI-Powered Workflow Automation for Global Financial Institution
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                How we helped a leading financial services company reduce processing time by 87% and save $2.4M annually
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-sm font-medium">Project Duration</p>
                  <p className="text-white text-lg font-semibold">6 Months</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-sm font-medium">ROI</p>
                  <p className="text-white text-lg font-semibold">342%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-sm font-medium">Time Saved</p>
                  <p className="text-white text-lg font-semibold">87%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-sm font-medium">Annual Savings</p>
                  <p className="text-white text-lg font-semibold">$2.4M</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* This div is intentionally empty as the background image serves as the visual element */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('challenge')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === 'challenge'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Challenge & Solution
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === 'results'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Results & Impact
            </button>
            <button
              onClick={() => setActiveTab('implementation')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === 'implementation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Implementation Details
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === 'process'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Process & Methodology
            </button>
          </nav>
        </div>

        {/* Challenge & Solution Tab */}
        {activeTab === 'challenge' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 mb-4">
                  Our client, a global financial institution managing over $500 billion in assets, was struggling with inefficient document processing workflows that were largely manual and time-consuming. Their challenges included:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Processing over 10,000 complex financial documents daily with a team of 50+ specialists</li>
                  <li>Average processing time of 24 hours per document batch, creating significant bottlenecks</li>
                  <li>Error rates of approximately 8.5%, requiring costly review processes</li>
                  <li>Compliance risks due to inconsistent application of regulatory requirements</li>
                  <li>Difficulty scaling operations during peak periods without substantial staffing increases</li>
                </ul>
                <p className="text-gray-700">
                  The manual nature of their workflow was not only expensive but also created significant operational risks and limited their ability to scale effectively in a competitive market.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <p className="text-gray-700 mb-4">
                  We developed a comprehensive AI-powered workflow automation solution tailored to the client's specific needs:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Custom machine learning models trained on the client's historical document data</li>
                  <li>Intelligent document processing system with advanced OCR and natural language understanding</li>
                  <li>Automated validation against regulatory requirements and internal policies</li>
                  <li>Real-time analytics dashboard for monitoring system performance and document flow</li>
                  <li>Integration with existing enterprise systems through secure APIs</li>
                  <li>Human-in-the-loop workflow for exception handling and continuous improvement</li>
                </ul>
                <p className="text-gray-700">
                  Our solution was designed to not only automate routine tasks but also to learn and improve over time, adapting to new document types and regulatory changes with minimal human intervention.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20AI%20document%20processing%20system%20interface%20with%20multiple%20screens%20showing%20document%20analysis%2C%20clean%20modern%20office%20setting%2C%20blue-themed%20UI%20dashboard%20with%20graphs%20and%20document%20thumbnails%2C%20professional%20financial%20environment&width=600&height=400&seq=124&orientation=landscape" 
                alt="AI-Powered Document Processing Solution" 
                className="w-full h-auto rounded-xl shadow-lg object-cover object-top"
              />
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution Architecture</h3>
                <img 
                  src="https://readdy.ai/api/search-image?query=Technical%20diagram%20showing%20AI%20workflow%20automation%20system%20architecture%2C%20clean%20lines%2C%20professional%20design%2C%20blue%20color%20scheme%2C%20showing%20data%20flow%20between%20components%2C%20document%20processing%20pipeline%2C%20integration%20points%2C%20and%20system%20modules&width=600&height=350&seq=125&orientation=landscape" 
                  alt="Solution Architecture Diagram" 
                  className="w-full h-auto mb-6 rounded-lg object-cover object-top"
                />
                <p className="text-gray-700 text-sm">
                  Our solution architecture integrates multiple AI components including document classification, data extraction, validation, and workflow orchestration, all secured within the client's existing infrastructure.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Discovery & Analysis</h4>
                      <p className="text-gray-600">Comprehensive workflow analysis and document categorization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Model Development</h4>
                      <p className="text-gray-600">Custom AI model training using client's historical data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">System Integration</h4>
                      <p className="text-gray-600">Seamless connection with existing enterprise systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Pilot & Refinement</h4>
                      <p className="text-gray-600">Controlled rollout with continuous improvement cycles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="font-bold">5</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Full Deployment</h4>
                      <p className="text-gray-600">Enterprise-wide implementation with comprehensive training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results & Impact Tab */}
        {activeTab === 'results' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-blue-600 text-4xl font-bold mb-2">87%</div>
                <div className="text-gray-700">Reduction in processing time</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-blue-600 text-4xl font-bold mb-2">$2.4M</div>
                <div className="text-gray-700">Annual cost savings</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-blue-600 text-4xl font-bold mb-2">99.2%</div>
                <div className="text-gray-700">Document processing accuracy</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-blue-600 text-4xl font-bold mb-2">342%</div>
                <div className="text-gray-700">Return on investment</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Efficiency Improvements</h3>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <div id="efficiency-chart" className="h-80 w-full"></div>
                </div>
                <p className="text-gray-700">
                  Our solution dramatically reduced document processing time from an average of 24 hours to just 3 hours, with further improvements over time as the system continued to learn and optimize.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Return on Investment</h3>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <div id="roi-chart" className="h-80 w-full"></div>
                </div>
                <p className="text-gray-700">
                  The client achieved full ROI within 4 months of deployment, with ongoing savings that continue to compound as the system handles increasing document volumes without additional resources.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before & After Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Before Implementation</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>24 hours average processing time</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>8.5% error rate requiring manual review</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>50+ specialists required for processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>Limited scalability during peak periods</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>Inconsistent application of compliance rules</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>No real-time visibility into process status</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">After Implementation</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>3 hours average processing time (87% reduction)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>99.2% accuracy with minimal human intervention</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Team reduced to 12 specialists focused on exceptions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Unlimited scalability with cloud-based processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Automated compliance verification with audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Real-time analytics dashboard for complete visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Client Testimonial */}
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20executive%20in%20business%20attire%2C%20neutral%20background%2C%20confident%20expression%2C%20well-groomed%2C%20corporate%20portrait%20style%2C%20high%20quality%20professional%20photograph&width=150&height=150&seq=126&orientation=squarish" 
                  alt="Client Portrait" 
                  className="w-24 h-24 rounded-full object-cover object-top"
                />
                <div>
                  <div className="text-blue-600 mb-2">
                    <i className="fas fa-quote-left text-xl opacity-50 mr-2"></i>
                  </div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    The AI-powered workflow automation solution has transformed how we process financial documents. Not only have we seen dramatic efficiency improvements, but the accuracy of our processing has reached levels we never thought possible. The system continues to learn and improve, allowing our team to focus on higher-value activities rather than manual document processing. The ROI has exceeded our expectations, and we're now exploring additional use cases across the organization.
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-gray-600">Chief Operations Officer, Global Financial Services Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Implementation Details Tab */}
        {activeTab === 'implementation' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Details</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-brain text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">Machine Learning</p>
                      <p className="text-sm text-gray-500">TensorFlow & PyTorch</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-eye text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">Computer Vision</p>
                      <p className="text-sm text-gray-500">OpenCV & Custom OCR</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-language text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">NLP</p>
                      <p className="text-sm text-gray-500">BERT & GPT Models</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-cloud text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">Cloud Infrastructure</p>
                      <p className="text-sm text-gray-500">AWS & Azure</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-database text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">Data Storage</p>
                      <p className="text-sm text-gray-500">MongoDB & PostgreSQL</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                    <i className="fas fa-lock text-blue-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium text-gray-900">Security</p>
                      <p className="text-sm text-gray-500">End-to-end encryption</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Structure</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Project Manager</p>
                        <p className="text-sm text-gray-500">Overall coordination</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-laptop-code"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">ML Engineers (3)</p>
                        <p className="text-sm text-gray-500">Model development</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-code"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Backend Developers (2)</p>
                        <p className="text-sm text-gray-500">System integration</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-desktop"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Frontend Developers (2)</p>
                        <p className="text-sm text-gray-500">Dashboard & UI</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Security Specialist</p>
                        <p className="text-sm text-gray-500">Compliance & security</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fas fa-clipboard-check"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">QA Engineers (2)</p>
                        <p className="text-sm text-gray-500">Testing & validation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 1</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">Discovery & Requirements</h4>
                      <p className="text-gray-700 mt-1">Comprehensive workflow analysis, document categorization, and requirements gathering</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 2</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">Model Development & Training</h4>
                      <p className="text-gray-700 mt-1">Development of custom ML models and initial training on historical data</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 3</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">System Integration & Testing</h4>
                      <p className="text-gray-700 mt-1">Integration with existing enterprise systems and comprehensive testing</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 4</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">Pilot Deployment</h4>
                      <p className="text-gray-700 mt-1">Controlled rollout to a subset of users and initial performance monitoring</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 5</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">Refinement & Optimization</h4>
                      <p className="text-gray-700 mt-1">System improvements based on pilot feedback and performance metrics</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="text-sm font-medium text-gray-500">Month 6</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm ml-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">Full Deployment & Training</h4>
                      <p className="text-gray-700 mt-1">Enterprise-wide rollout with comprehensive user training and support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Technical Challenges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Document Variety</h4>
                  <p className="text-gray-700">
                    The client processed over 200 different document types with varying formats, requiring sophisticated classification algorithms and adaptive extraction techniques.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Compliance</h4>
                  <p className="text-gray-700">
                    Financial documents required strict adherence to multiple regulatory frameworks, necessitating complex validation rules and audit trails.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Legacy System Integration</h4>
                  <p className="text-gray-700">
                    Seamless integration with the client's 15+ year-old core banking systems required custom API development and extensive testing.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h4>
                  <p className="text-gray-700">
                    Handling sensitive financial information demanded robust security measures including end-to-end encryption and comprehensive access controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process & Methodology Tab */}
        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Process & Methodology</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  We employed an agile methodology with two-week sprints, ensuring continuous delivery and frequent client feedback throughout the project. Our approach combined deep financial domain expertise with cutting-edge AI capabilities.
                </p>
                
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Methodologies</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Agile Development</p>
                        <p className="text-sm text-gray-600">Two-week sprints with regular demos and retrospectives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Human-Centered Design</p>
                        <p className="text-sm text-gray-600">User research and iterative UX improvements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">DevOps Practices</p>
                        <p className="text-sm text-gray-600">Continuous integration and deployment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Iterative Model Training</p>
                        <p className="text-sm text-gray-600">Continuous model improvement through feedback loops</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Governance</h4>
                  <p className="text-gray-700 mb-4">
                    We established a robust governance structure to ensure project success:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-blue-500 text-xs mt-1.5 mr-2"></i>
                      <span>Weekly steering committee meetings with key stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-blue-500 text-xs mt-1.5 mr-2"></i>
                      <span>Bi-weekly sprint reviews and planning sessions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-blue-500 text-xs mt-1.5 mr-2"></i>
                      <span>Monthly executive briefings on progress and ROI</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-blue-500 text-xs mt-1.5 mr-2"></i>
                      <span>Dedicated Slack channel for real-time communication</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20project%20timeline%20visualization%20with%20milestones%2C%20clean%20modern%20design%2C%20blue%20color%20scheme%2C%20showing%20project%20phases%20and%20key%20achievements%2C%20business%20context%2C%20financial%20services%20theme&width=600&height=350&seq=127&orientation=landscape" 
                  alt="Project Timeline" 
                  className="w-full h-auto rounded-xl shadow-md mb-8 object-cover object-top"
                />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lessons Learned</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Early Stakeholder Involvement</h4>
                      <p className="text-gray-700">
                        Involving end-users from day one was crucial for adoption. We established a "champion user" program that significantly improved system design and accelerated acceptance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Phased Implementation</h4>
                      <p className="text-gray-700">
                        Starting with less complex document types allowed for early wins and system refinement before tackling more challenging documents, building confidence in the solution.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Hybrid AI Approach</h4>
                      <p className="text-gray-700">
                        Combining rule-based systems with machine learning models provided better results than either approach alone, especially for regulatory compliance aspects.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                      <p className="text-gray-700">
                        Implementing a feedback loop where exceptions handled by humans were used to retrain models led to continuous improvement in system accuracy over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Case Studies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Healthcare%20facility%20with%20modern%20medical%20equipment%2C%20clean%20professional%20environment%2C%20medical%20staff%20using%20digital%20technology%2C%20blue%20accents%2C%20professional%20healthcare%20setting&width=400&height=200&seq=128&orientation=landscape" 
                    alt="Healthcare AI Case Study" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">Healthcare</span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 ml-2">AI Diagnostics</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Diagnostic Assistance for Regional Hospital Network</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      How we helped improve diagnostic accuracy by 32% while reducing patient wait times.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center cursor-pointer">
                      Read Case Study
                      <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Manufacturing%20facility%20with%20robotic%20automation%2C%20industrial%20setting%2C%20advanced%20machinery%2C%20blue%20lighting%20accents%2C%20professional%20factory%20environment%2C%20high-tech%20production%20line&width=400&height=200&seq=129&orientation=landscape" 
                    alt="Manufacturing Automation Case Study" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">Manufacturing</span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 ml-2">Automation</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Predictive Maintenance System for Global Manufacturer</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Reducing downtime by 78% and maintenance costs by $3.2M annually through AI-driven predictive analytics.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center cursor-pointer">
                      Read Case Study
                      <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Retail%20environment%20with%20digital%20displays%2C%20modern%20store%20layout%2C%20customers%20interacting%20with%20technology%2C%20blue-themed%20retail%20space%2C%20professional%20shopping%20environment&width=400&height=200&seq=130&orientation=landscape" 
                    alt="Retail Analytics Case Study" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">Retail</span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 ml-2">Analytics</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Behavior Analytics for Retail Chain</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Increasing conversion rates by 41% through AI-powered customer journey optimization and personalization.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center cursor-pointer">
                      Read Case Study
                      <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a consultation with our experts to discuss how our AI solutions can address your specific business challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg shadow-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                  Schedule Consultation
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-file-pdf mr-2"></i>
                  Download Case Study PDF
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default App;
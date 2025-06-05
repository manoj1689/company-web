"use client"
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const App: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('All');
  const [activeTechnology, setActiveTechnology] = useState<string>('All');
  const [activeResult, setActiveResult] = useState<string>('All');

  const industries = ['All', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education', 'Technology'];
  const technologies = ['All', 'AI', 'ML', 'Automation', 'Data Analytics', 'NLP', 'Computer Vision'];
  const resultTypes = ['All', 'ROI', 'Efficiency', 'Growth', 'Innovation', 'Cost Reduction'];

  const caseStudies = [
    {
      id: 1,
      client: 'MediHealth Systems',
      industry: 'Healthcare',
      technology: ['AI', 'ML'],
      resultType: ['Efficiency', 'Cost Reduction'],
      challenge: 'Struggling with patient diagnosis accuracy and lengthy wait times',
      solution: 'Implemented AI-powered diagnostic assistance tool and automated patient triage system',
      results: {
        metric1: '43% reduction in diagnosis time',
        metric2: '28% increase in diagnostic accuracy',
        metric3: '$2.4M annual cost savings'
      },
      testimonial: "EramLabs's solution transformed our diagnostic capabilities and significantly improved patient outcomes.",
      image: "https://readdy.ai/api/search-image?query=modern%2520hospital%2520environment%2520with%2520doctors%2520using%2520advanced%2520medical%2520technology%2520on%2520digital%2520screens%252C%2520clean%2520professional%2520medical%2520setting%2520with%2520blue%2520and%2520white%2520color%2520scheme%252C%2520high%2520tech%2520healthcare%2520facility&width=600&height=400&seq=case1&orientation=landscape"
    },
    {
      id: 2,
      client: 'GlobalFinance Corp',
      industry: 'Finance',
      technology: ['ML', 'Data Analytics'],
      resultType: ['ROI', 'Efficiency'],
      challenge: 'Detecting fraudulent transactions while minimizing false positives',
      solution: 'Deployed machine learning fraud detection system with real-time analysis capabilities',
      results: {
        metric1: '92% fraud detection rate',
        metric2: '67% reduction in false positives',
        metric3: '$5.8M prevented fraud losses'
      },
      testimonial: "The ML solution from EramLabs has revolutionized our fraud detection capabilities while improving customer experience.",
      image: "https://readdy.ai/api/search-image?query=modern%2520financial%2520trading%2520room%2520with%2520multiple%2520screens%2520displaying%2520financial%2520data%2520and%2520charts%252C%2520professional%2520business%2520environment%2520with%2520blue%2520accent%2520lighting%252C%2520high%2520tech%2520financial%2520analytics%2520center&width=600&height=400&seq=case2&orientation=landscape"
    },
    {
      id: 3,
      client: 'RetailPlus',
      industry: 'Retail',
      technology: ['AI', 'Computer Vision'],
      resultType: ['Growth', 'Innovation'],
      challenge: 'Personalizing customer shopping experiences across digital and physical stores',
      solution: 'Created integrated AI recommendation engine and in-store computer vision analytics',
      results: {
        metric1: '34% increase in average order value',
        metric2: '28% improvement in customer retention',
        metric3: '41% growth in cross-category purchases'
      },
      testimonial: "Our customers now enjoy a seamless, personalized shopping experience that has significantly boosted our sales metrics.",
      image: "https://readdy.ai/api/search-image?query=modern%2520retail%2520store%2520with%2520digital%2520displays%2520showing%2520personalized%2520recommendations%252C%2520clean%2520professional%2520shopping%2520environment%2520with%2520soft%2520lighting%2520and%2520high%2520tech%2520shopping%2520assistants&width=600&height=400&seq=case3&orientation=landscape"
    },
    {
      id: 4,
      client: 'IndustrialTech Manufacturing',
      industry: 'Manufacturing',
      technology: ['Automation', 'AI'],
      resultType: ['Efficiency', 'Cost Reduction'],
      challenge: 'Reducing production downtime and optimizing maintenance schedules',
      solution: 'Implemented predictive maintenance AI system with IoT sensor integration',
      results: {
        metric1: '76% reduction in unplanned downtime',
        metric2: '43% decrease in maintenance costs',
        metric3: '18% increase in production output'
      },
      testimonial: "The predictive maintenance solution has transformed our operations, virtually eliminating unexpected equipment failures.",
      image: "https://readdy.ai/api/search-image?query=modern%2520smart%2520factory%2520with%2520automated%2520production%2520lines%2520and%2520robotic%2520arms%252C%2520clean%2520high%2520tech%2520manufacturing%2520facility%2520with%2520blue%2520lighting%2520accents%252C%2520industrial%2520IoT%2520sensors%2520visible%2520on%2520machinery&width=600&height=400&seq=case4&orientation=landscape"
    },
    {
      id: 5,
      client: 'EduLearn Academy',
      industry: 'Education',
      technology: ['ML', 'NLP'],
      resultType: ['Innovation', 'Growth'],
      challenge: 'Delivering personalized learning experiences at scale',
      solution: 'Developed adaptive learning platform with natural language processing capabilities',
      results: {
        metric1: '32% improvement in student test scores',
        metric2: '47% increase in student engagement',
        metric3: '28% reduction in dropout rates'
      },
      testimonial: "EramLabs's adaptive learning platform has revolutionized how we deliver education, with remarkable improvements in student outcomes.",
      image: "https://readdy.ai/api/search-image?query=modern%2520digital%2520classroom%2520with%2520students%2520using%2520tablets%2520and%2520interactive%2520displays%252C%2520bright%2520professional%2520learning%2520environment%2520with%2520educational%2520technology%2520and%2520visualization%2520tools&width=600&height=400&seq=case5&orientation=landscape"
    },
    {
      id: 6,
      client: 'TechInnovate Solutions',
      industry: 'Technology',
      technology: ['AI', 'Data Analytics'],
      resultType: ['ROI', 'Innovation'],
      challenge: 'Scaling customer support while maintaining quality and personalization',
      solution: 'Deployed AI-powered customer service platform with sentiment analysis',
      results: {
        metric1: '67% faster resolution times',
        metric2: '42% improvement in customer satisfaction',
        metric3: '53% reduction in support costs'
      },
      testimonial: "Our support team is now empowered with AI insights that have dramatically improved our customer experience metrics.",
      image: "https://readdy.ai/api/search-image?query=modern%2520tech%2520company%2520customer%2520support%2520center%2520with%2520agents%2520using%2520advanced%2520AI%2520dashboards%252C%2520clean%2520professional%2520office%2520environment%2520with%2520purple%2520and%2520blue%2520accent%2520lighting&width=600&height=400&seq=case6&orientation=landscape"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = activeIndustry === 'All' || study.industry === activeIndustry;
    const technologyMatch = activeTechnology === 'All' || study.technology.includes(activeTechnology);
    const resultMatch = activeResult === 'All' || study.resultType.includes(activeResult);
    return industryMatch && technologyMatch && resultMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
<Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%2520modern%2520office%2520environment%2520with%2520data%2520visualization%2520and%2520success%2520metrics%2520displayed%2520on%2520large%2520screens%252C%2520clean%2520minimal%2520design%2520with%2520pink%2520and%2520purple%2520gradient%2520lighting%252C%2520high%2520tech%2520atmosphere%252C%2520perfect%2520for%2520case%2520studies%2520presentation&width=1440&height=500&seq=casehero1&orientation=landscape"
            alt="Case Studies Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Client <span className="text-pink-600">Success Stories</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore how our AI solutions have transformed businesses across industries, delivering measurable results and driving innovation. Each case study highlights our approach to solving complex challenges with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fa-solid fa-filter mr-2"></i>
                Filter Case Studies
              </button>
              <button className="border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fa-solid fa-download mr-2"></i>
                Download Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap ${
                      activeIndustry === industry
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setActiveTechnology(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap ${
                      activeTechnology === tech
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Results</h3>
              <div className="flex flex-wrap gap-2">
                {resultTypes.map((result) => (
                  <button
                    key={result}
                    onClick={() => setActiveResult(result)}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap ${
                      activeResult === result
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {result}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(activeIndustry !== 'All' || activeTechnology !== 'All' || activeResult !== 'All') && (
            <div className="mt-6 flex items-center">
              <span className="text-gray-600 mr-3">Active Filters:</span>
              <div className="flex flex-wrap gap-2">
                {activeIndustry !== 'All' && (
                  <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Industry: {activeIndustry}
                    <button 
                      onClick={() => setActiveIndustry('All')}
                      className="ml-2 text-pink-700 hover:text-pink-900 cursor-pointer"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                )}
                
                {activeTechnology !== 'All' && (
                  <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Technology: {activeTechnology}
                    <button 
                      onClick={() => setActiveTechnology('All')}
                      className="ml-2 text-pink-700 hover:text-pink-900 cursor-pointer"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                )}
                
                {activeResult !== 'All' && (
                  <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Result: {activeResult}
                    <button 
                      onClick={() => setActiveResult('All')}
                      className="ml-2 text-pink-700 hover:text-pink-900 cursor-pointer"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                )}
                
                <button 
                  onClick={() => {
                    setActiveIndustry('All');
                    setActiveTechnology('All');
                    setActiveResult('All');
                  }}
                  className="text-pink-600 hover:text-pink-800 text-sm font-medium cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {filteredCaseStudies.length > 0 
                ? `Showing ${filteredCaseStudies.length} Case ${filteredCaseStudies.length === 1 ? 'Study' : 'Studies'}`
                : 'No Case Studies Found'
              }
            </h2>
            <p className="text-gray-600">
              {filteredCaseStudies.length > 0 
                ? 'Explore how our solutions have helped these organizations achieve their business goals.'
                : 'Try adjusting your filters to see more results.'
              }
            </p>
          </div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img
                      src={study.image}
                      alt={`${study.client} Case Study`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{study.client}</h3>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Challenge:</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Solution:</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="bg-purple-50 p-2 rounded">
                          <p className="text-purple-700 text-sm">{study.results.metric1}</p>
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <p className="text-pink-700 text-sm">{study.results.metric2}</p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <p className="text-blue-700 text-sm">{study.results.metric3}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-pink-500 italic">
                      <p className="text-gray-700 text-sm">"{study.testimonial}"</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technology.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                      {study.resultType.map((result) => (
                        <span key={result} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                          {result}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap">
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-6xl text-gray-300 mb-4">
                <i className="fa-solid fa-file-circle-question"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No matching case studies found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filter criteria to see more results.</p>
              <button 
                onClick={() => {
                  setActiveIndustry('All');
                  setActiveTechnology('All');
                  setActiveResult('All');
                }}
                className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {filteredCaseStudies.length > 0 && (
            <div className="mt-12 text-center">
              <button className="bg-white border border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap">
                Load More Case Studies
                <i className="fa-solid fa-chevron-down ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-lg mb-8">
              Our team of AI experts is ready to help you transform your business challenges into opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap">
                Schedule a Consultation
              </button>
              <a 
                href="https://readdy.ai/home/30a7bcbf-cb21-4260-8eff-61e1471f2611/28911726-d1d3-4bb9-b807-f603e210f07d" 
                data-readdy="true"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-pink-600 transition-colors font-medium cursor-pointer !rounded-button whitespace-nowrap"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
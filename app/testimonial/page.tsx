"use client";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
const App: React.FC = () => {
const [activeFilter, setActiveFilter] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

// Case studies data
const caseStudies = [
{
id: 1,
title: "AI-Powered Healthcare Analytics Platform",
client: "MediCorp International",
industry: "Healthcare",
solution: "AI & Machine Learning",
description: "Developed a comprehensive analytics platform that helped reduce patient readmission rates by 35% and optimize resource allocation across 12 hospitals.",
image: "https://readdy.ai/api/search-image?query=Modern%20healthcare%20dashboard%20with%20data%20visualization%2C%20medical%20analytics%20interface%20with%20charts%20and%20graphs%2C%20clean%20professional%20design%20with%20blue%20and%20white%20color%20scheme%2C%20hospital%20management%20system%20on%20computer%20screen&width=600&height=400&seq=cs1&orientation=landscape",
results: ["35% reduction in readmissions", "42% faster diagnosis", "$2.4M annual savings"]
},
{
id: 2,
title: "Blockchain-Based Supply Chain Solution",
client: "GlobalTrade Logistics",
industry: "Logistics",
solution: "Blockchain",
description: "Implemented a blockchain solution that increased supply chain transparency by 87% and reduced verification times from days to minutes for international shipments.",
image: "https://readdy.ai/api/search-image?query=Digital%20supply%20chain%20management%20system%20with%20blockchain%20visualization%2C%20logistics%20tracking%20interface%20with%20connected%20nodes%2C%20modern%20technology%20concept%20with%20blue%20gradient%20background%2C%20shipping%20and%20inventory%20management&width=600&height=400&seq=cs2&orientation=landscape",
results: ["87% increased transparency", "94% faster verification", "28% cost reduction"]
},
{
id: 3,
title: "Mobile Banking Revolution",
client: "SecureBank Financial",
industry: "Finance",
solution: "Mobile App",
description: "Created an award-winning mobile banking application that increased digital transactions by 156% and improved customer satisfaction scores by 42 points.",
image: "https://readdy.ai/api/search-image?query=Modern%20mobile%20banking%20app%20interface%20on%20smartphone%2C%20financial%20dashboard%20with%20clean%20design%2C%20secure%20payment%20visualization%20with%20purple%20and%20white%20color%20scheme%2C%20digital%20wallet%20concept&width=600&height=400&seq=cs3&orientation=landscape",
results: ["156% transaction growth", "42-point NPS increase", "3.2M new users"]
},
{
id: 4,
title: "E-Commerce Platform Overhaul",
client: "RetailPlus Enterprises",
industry: "Retail",
solution: "Web Development",
description: "Redesigned and optimized a major e-commerce platform, resulting in 78% faster page loads, 43% higher conversion rates, and a 92% increase in mobile sales.",
image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20product%20grid%2C%20shopping%20cart%20functionality%2C%20clean%20minimal%20design%20with%20product%20photography%2C%20online%20retail%20platform%20with%20search%20and%20filter%20options&width=600&height=400&seq=cs4&orientation=landscape",
results: ["78% faster page loads", "43% higher conversions", "92% mobile sales growth"]
},
{
id: 5,
title: "Smart Manufacturing IoT Implementation",
client: "IndusTech Manufacturing",
industry: "Manufacturing",
solution: "IoT",
description: "Deployed an IoT sensor network and analytics platform that reduced equipment downtime by 64% and improved production efficiency across 8 manufacturing facilities.",
image: "https://readdy.ai/api/search-image?query=Industrial%20IoT%20dashboard%20with%20manufacturing%20floor%20data%2C%20smart%20factory%20monitoring%20system%20with%20sensor%20readings%2C%20production%20metrics%20visualization%20with%20machine%20status%20indicators%2C%20modern%20industrial%20technology&width=600&height=400&seq=cs5&orientation=landscape",
results: ["64% reduced downtime", "27% efficiency increase", "$3.8M maintenance savings"]
},
{
id: 6,
title: "EdTech Learning Management System",
client: "EduSphere Academy",
industry: "Education",
solution: "Web Application",
description: "Built a comprehensive learning management system that increased student engagement by 47% and improved course completion rates from 62% to 89%.",
image: "https://readdy.ai/api/search-image?query=Modern%20educational%20platform%20interface%20with%20online%20courses%2C%20learning%20management%20system%20dashboard%20with%20progress%20tracking%2C%20virtual%20classroom%20environment%20with%20clean%20design%2C%20educational%20technology%20with%20purple%20accents&width=600&height=400&seq=cs6&orientation=landscape",
results: ["47% higher engagement", "89% completion rate", "124% enrollment increase"]
},
{
id: 7,
title: "Sustainable Energy Management Platform",
client: "GreenPower Utilities",
industry: "Energy",
solution: "IoT & Analytics",
description: "Developed an energy management system that helped reduce carbon emissions by 42% and optimize resource utilization across renewable energy installations.",
image: "https://readdy.ai/api/search-image?query=Renewable%20energy%20management%20dashboard%20with%20solar%20and%20wind%20power%20data%20visualization%2C%20sustainability%20metrics%20interface%20with%20green%20energy%20statistics%2C%20modern%20clean%20design%20with%20environmental%20impact%20indicators&width=600&height=400&seq=cs7&orientation=landscape",
results: ["42% emissions reduction", "38% energy optimization", "$5.2M cost savings"]
},
{
id: 8,
title: "Immersive AR Retail Experience",
client: "FashionForward Brands",
industry: "Retail",
solution: "Augmented Reality",
description: "Created an augmented reality shopping experience that increased customer engagement by 215% and boosted conversion rates for premium products by 76%.",
image: "https://readdy.ai/api/search-image?query=Augmented%20reality%20shopping%20app%20on%20smartphone%2C%20virtual%20try-on%20technology%20for%20fashion%20retail%2C%20AR%20clothing%20visualization%20with%20modern%20interface%2C%20digital%20shopping%20experience%20with%20clean%20background&width=600&height=400&seq=cs8&orientation=landscape",
results: ["215% higher engagement", "76% conversion increase", "32% reduced returns"]
},
{
id: 9,
title: "Smart City Traffic Management",
client: "MetroTech Urban Solutions",
industry: "Government",
solution: "IoT & AI",
description: "Implemented an intelligent traffic management system that reduced congestion by 37% and decreased average commute times by 24 minutes across the metropolitan area.",
image: "https://readdy.ai/api/search-image?query=Smart%20city%20traffic%20management%20system%20dashboard%20with%20real-time%20road%20monitoring%2C%20urban%20mobility%20control%20center%20with%20traffic%20flow%20visualization%2C%20city%20infrastructure%20management%20interface%20with%20clean%20design&width=600&height=400&seq=cs9&orientation=landscape",
results: ["37% reduced congestion", "24-min shorter commutes", "28% fewer accidents"]
}
];
// Filter case studies based on active filter and search query
const filteredCaseStudies = caseStudies.filter(study => {
if (activeFilter !== 'all' && study.industry.toLowerCase() !== activeFilter.toLowerCase() &&
study.solution.toLowerCase() !== activeFilter.toLowerCase()) {
return false;
}
if (searchQuery) {
const query = searchQuery.toLowerCase();
return study.title.toLowerCase().includes(query) ||
study.client.toLowerCase().includes(query) ||
study.industry.toLowerCase().includes(query) ||
study.solution.toLowerCase().includes(query) ||
study.description.toLowerCase().includes(query);
}
return true;
});
// Pagination
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredCaseStudies.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
const handlePageChange = (pageNumber: number) => {
setCurrentPage(pageNumber);
window.scrollTo({ top: 0, behavior: 'smooth' });
};
return (
<div className="min-h-screen bg-white">
{/* Header */}
<Header />
{/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
<div className="absolute inset-0 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Abstract%20technology%20background%20with%20purple%20gradient%2C%20digital%20transformation%20concept%20with%20connected%20nodes%20and%20data%20visualization%20elements%2C%20modern%20tech%20pattern%20with%20soft%20focus%20and%20depth%2C%20professional%20business%20technology%20theme&width=1440&height=400&seq=hero&orientation=landscape"
alt="Case Studies Background"
className="w-full h-full object-cover object-top opacity-20"
/>
</div>
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
<p className="text-xl text-purple-100 mb-8">
Discover how TrendTech has helped organizations across industries transform their operations,
enhance customer experiences, and achieve remarkable business outcomes.
</p>
<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<button
onClick={() => setActiveFilter('all')}
className={`px-6 py-3 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap ${
activeFilter === 'all' ? 'bg-white text-purple-700' : 'bg-purple-800 bg-opacity-50 text-white hover:bg-purple-800'
}`}
>
All Industries
</button>
<button
onClick={() => setActiveFilter('Healthcare')}
className={`px-6 py-3 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap ${
activeFilter === 'Healthcare' ? 'bg-white text-purple-700' : 'bg-purple-800 bg-opacity-50 text-white hover:bg-purple-800'
}`}
>
Healthcare
</button>
<button
onClick={() => setActiveFilter('Finance')}
className={`px-6 py-3 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap ${
activeFilter === 'Finance' ? 'bg-white text-purple-700' : 'bg-purple-800 bg-opacity-50 text-white hover:bg-purple-800'
}`}
>
Finance
</button>
<button
onClick={() => setActiveFilter('Retail')}
className={`px-6 py-3 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap ${
activeFilter === 'Retail' ? 'bg-white text-purple-700' : 'bg-purple-800 bg-opacity-50 text-white hover:bg-purple-800'
}`}
>
Retail
</button>
</div>
</div>
</div>
</section>
{/* Filter and Search Section */}
<section className="py-8 bg-gray-50">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="flex items-center space-x-4">
<div className="relative">
<button className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 !rounded-button cursor-pointer whitespace-nowrap">
<span>Filter by Solution</span>
<i className="fas fa-chevron-down text-gray-500"></i>
</button>
{/* Dropdown would be implemented here */}
</div>
<div className="relative">
<button className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 !rounded-button cursor-pointer whitespace-nowrap">
<span>Sort By</span>
<i className="fas fa-chevron-down text-gray-500"></i>
</button>
{/* Dropdown would be implemented here */}
</div>
{activeFilter !== 'all' && (
<button
onClick={() => setActiveFilter('all')}
className="text-purple-600 hover:text-purple-800 flex items-center space-x-1 !rounded-button cursor-pointer whitespace-nowrap"
>
<i className="fas fa-times-circle"></i>
<span>Clear filters</span>
</button>
)}
</div>
<div className="relative w-full md:w-64">
<input
type="text"
placeholder="Search case studies..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
<i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
</div>
</div>
</div>
</section>
{/* Case Studies Grid */}
<section className="py-16">
<div className="container mx-auto px-4">
{filteredCaseStudies.length > 0 ? (
<>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{currentItems.map(study => (
<div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-xl">
<div className="h-56 overflow-hidden">
<img
src={study.image}
alt={study.title}
className="w-full h-full object-cover object-top transition-transform hover:transform hover:scale-110"
/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
{study.industry}
</span>
<span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
{study.solution}
</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
<p className="text-gray-600 mb-4 text-sm">Client: <span className="font-medium">{study.client}</span></p>
<p className="text-gray-700 mb-6">{study.description}</p>
<div className="mb-6">
<h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
<div className="flex flex-wrap gap-2">
{study.results.map((result, index) => (
<span key={index} className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
{result}
</span>
))}
</div>
</div>
<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center !rounded-button cursor-pointer whitespace-nowrap">
<span>Read Full Case Study</span>
<i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
))}
</div>
{/* Pagination */}
{totalPages > 1 && (
<div className="mt-12 flex justify-center">
<div className="flex items-center space-x-2">
<button
onClick={() => handlePageChange(currentPage - 1)}
disabled={currentPage === 1}
className={`px-3 py-1 rounded-md !rounded-button cursor-pointer whitespace-nowrap ${
currentPage === 1
? 'bg-gray-100 text-gray-400 cursor-not-allowed'
: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
}`}
>
<i className="fas fa-chevron-left"></i>
</button>
{Array.from({ length: totalPages }).map((_, index) => (
<button
key={index}
onClick={() => handlePageChange(index + 1)}
className={`w-8 h-8 rounded-md flex items-center justify-center !rounded-button cursor-pointer whitespace-nowrap ${
currentPage === index + 1
? 'bg-purple-600 text-white'
: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
}`}
>
{index + 1}
</button>
))}
<button
onClick={() => handlePageChange(currentPage + 1)}
disabled={currentPage === totalPages}
className={`px-3 py-1 rounded-md !rounded-button cursor-pointer whitespace-nowrap ${
currentPage === totalPages
? 'bg-gray-100 text-gray-400 cursor-not-allowed'
: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
}`}
>
<i className="fas fa-chevron-right"></i>
</button>
</div>
</div>
)}
</>
) : (
<div className="text-center py-16">
<div className="text-5xl text-gray-300 mb-4">
<i className="fas fa-search"></i>
</div>
<h3 className="text-xl font-semibold text-gray-700 mb-2">No case studies found</h3>
<p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
<button
onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap"
>
Clear All Filters
</button>
</div>
)}
</div>
</section>
{/* CTA Section */}
<section className="py-20 bg-purple-900 text-white">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
<p className="text-xl text-purple-100 mb-8">
Partner with TrendTech to transform your business challenges into opportunities for growth,
innovation, and competitive advantage.
</p>
<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<a
href="https://readdy.ai/home/30a7bcbf-cb21-4260-8eff-61e1471f2611/7c1b1c5b-68ad-4241-a035-78b897d53524"
data-readdy="true"
className="bg-white text-purple-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors !rounded-button cursor-pointer whitespace-nowrap"
>
Return to Services
</a>
<button className="bg-purple-600 text-white border border-purple-500 px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors !rounded-button cursor-pointer whitespace-nowrap">
Contact Us Today
</button>
</div>
</div>
</div>
</section>
{/* Footer */}
<Footer />
</div>
);
};
export default App
"use client";
import Footer from '@/components/footer/page';
import Navbar from "@/components/inner-navbar"
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const [selectedTime, setSelectedTime] = useState<string | null>(null);
const [meetingDuration, setMeetingDuration] = useState<string>("30min");
const [meetingType, setMeetingType] = useState<string>("One-on-one consultation");
const [roomType, setRoomType] = useState<string>("Virtual meeting room");
const [participants, setParticipants] = useState<string[]>([]);
const [participantInput, setParticipantInput] = useState<string>("");
const [meetingNotes, setMeetingNotes] = useState<string>("");
const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
const [showTimeZoneDropdown, setShowTimeZoneDropdown] = useState<boolean>(false);
const [selectedTimeZone, setSelectedTimeZone] = useState<string>("UTC (GMT+0)");
const [showMeetingTypeDropdown, setShowMeetingTypeDropdown] = useState<boolean>(false);
const [showDurationDropdown, setShowDurationDropdown] = useState<boolean>(false);
const [showRoomTypeDropdown, setShowRoomTypeDropdown] = useState<boolean>(false);
const [activeTab, setActiveTab] = useState<string>("schedule");
// Get days in month
const getDaysInMonth = (date: Date) => {
const year = date.getFullYear();
const month = date.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = new Date(year, month, 1).getDay();
const days = [];
// Add empty cells for days before the first day of the month
for (let i = 0; i < firstDayOfMonth; i++) {
days.push(null);
}
// Add days of the month
for (let i = 1; i <= daysInMonth; i++) {
days.push(new Date(year, month, i));
}
return days;
};
const days = getDaysInMonth(currentMonth);
// Navigate to previous month
const prevMonth = () => {
setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
};
// Navigate to next month
const nextMonth = () => {
setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
};
// Format date
const formatDate = (date: Date) => {
return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};
// Check if a date is today
const isToday = (date: Date) => {
const today = new Date();
return date.getDate() === today.getDate() &&
date.getMonth() === today.getMonth() &&
date.getFullYear() === today.getFullYear();
};
// Check if a date is selected
const isSelected = (date: Date) => {
if (!selectedDate) return false;
return date.getDate() === selectedDate.getDate() &&
date.getMonth() === selectedDate.getMonth() &&
date.getFullYear() === selectedDate.getFullYear();
};
// Generate time slots
const generateTimeSlots = () => {
const slots = [];
for (let hour = 9; hour < 18; hour++) {
for (let minute of [0, 30]) {
const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
slots.push(time);
}
}
return slots;
};
const timeSlots = generateTimeSlots();
// Add participant
const addParticipant = () => {
if (participantInput && !participants.includes(participantInput)) {
setParticipants([...participants, participantInput]);
setParticipantInput("");
}
};
// Remove participant
const removeParticipant = (participant: string) => {
setParticipants(participants.filter(p => p !== participant));
};
// Handle keypress for participant input
const handleKeyPress = (e: React.KeyboardEvent) => {
if (e.key === 'Enter') {
addParticipant();
}
};
// Time zones
const timeZones = [
"UTC (GMT+0)",
"EST (GMT-5)",
"CST (GMT-6)",
"PST (GMT-8)",
"IST (GMT+5:30)",
"JST (GMT+9)"
];
// Meeting types
const meetingTypes = [
"One-on-one consultation",
"Project discussion",
"Technical review",
"General inquiry"
];
// Meeting durations
const meetingDurations = [
"15min",
"30min",
"45min",
"1hr"
];
// Room types
const roomTypes = [
"Virtual meeting room",
"Physical meeting room"
];
// Upcoming meetings data
const upcomingMeetings = [
{
id: 1,
title: "Project Kickoff",
date: "May 28, 2025",
time: "10:00 - 11:00",
participants: ["john@example.com", "sarah@example.com"],
type: "Project discussion"
},
{
id: 2,
title: "Technical Review",
date: "May 30, 2025",
time: "14:30 - 15:30",
participants: ["tech@example.com", "dev@example.com", "qa@example.com"],
type: "Technical review"
},
{
id: 3,
title: "Client Consultation",
date: "June 2, 2025",
time: "09:00 - 09:30",
participants: ["client@example.com"],
type: "One-on-one consultation"
}
];
return (


<div className=''>
  <Navbar/>
<div className="min-h-screen bg-gray-50 font-sans">



{/* Main Content */}
<main className="max-w-7xl mx-auto px-4 py-8 mb">
<div className="bg-white rounded-xl shadow-lg overflow-hidden">
{/* Tabs */}
<div className="flex border-b border-gray-200">
<button
className={`px-6 py-4 text-sm font-medium ${activeTab === 'schedule' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-700'} !rounded-button whitespace-nowrap cursor-pointer`}
onClick={() => setActiveTab('schedule')}
>
<i className="far fa-calendar-plus mr-2"></i>
Schedule Meeting
</button>
<button
className={`px-6 py-4 text-sm font-medium ${activeTab === 'upcoming' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-700'} !rounded-button whitespace-nowrap cursor-pointer`}
onClick={() => setActiveTab('upcoming')}
>
<i className="far fa-calendar-alt mr-2"></i>
Upcoming Meetings
</button>
<button
className={`px-6 py-4 text-sm font-medium ${activeTab === 'history' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-700'} !rounded-button whitespace-nowrap cursor-pointer`}
onClick={() => setActiveTab('history')}
>
<i className="fas fa-history mr-2"></i>
Meeting History
</button>
</div>
{activeTab === 'schedule' && (
<div className="flex flex-col md:flex-row">
{/* Left Column - Calendar */}
<div className="w-full md:w-1/2 p-6 border-r border-gray-200">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Book a Meeting</h2>
{/* Calendar Navigation */}
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-gray-700">{formatDate(currentMonth)}</h3>
<div className="flex space-x-2">
<button
onClick={prevMonth}
className="p-2 rounded-full hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-chevron-left text-gray-600"></i>
</button>
<button
onClick={nextMonth}
className="p-2 rounded-full hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-chevron-right text-gray-600"></i>
</button>
</div>
</div>
{/* Calendar Grid */}
<div className="mb-6">
<div className="grid grid-cols-7 gap-1 mb-2">
{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
<div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
{day}
</div>
))}
</div>
<div className="grid grid-cols-7 gap-1">
{days.map((day, index) => (
<div
key={index}
className={`
h-12 flex items-center justify-center rounded-lg
${!day ? 'text-gray-300' : 'cursor-pointer hover:bg-gray-100'}
${day && isToday(day as Date) ? 'border border-pink-300' : ''}
${day && isSelected(day as Date) ? 'bg-pink-500 text-white hover:bg-pink-600' : ''}
`}
onClick={() => day && setSelectedDate(day)}
>
{day ? day.getDate() : ''}
</div>
))}
</div>
</div>
{/* Time Zone Selector */}
<div className="mb-6 relative">
<label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
<div
className="border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer"
onClick={() => setShowTimeZoneDropdown(!showTimeZoneDropdown)}
>
<span>{selectedTimeZone}</span>
<i className={`fas fa-chevron-${showTimeZoneDropdown ? 'up' : 'down'} text-gray-500`}></i>
</div>
{showTimeZoneDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
{timeZones.map((zone, index) => (
<div
key={index}
className="p-3 hover:bg-gray-100 cursor-pointer"
onClick={() => {
setSelectedTimeZone(zone);
setShowTimeZoneDropdown(false);
}}
>
{zone}
</div>
))}
</div>
)}
</div>
{/* Time Slots */}
{selectedDate && (
<div>
<h3 className="text-lg font-medium text-gray-700 mb-3">Available Times</h3>
<div className="grid grid-cols-3 gap-2">
{timeSlots.map((time, index) => (
<div
key={index}
className={`
p-2 text-center rounded-lg border cursor-pointer
${selectedTime === time ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-300 hover:border-pink-300'}
`}
onClick={() => setSelectedTime(time)}
>
{time}
</div>
))}
</div>
</div>
)}
</div>
{/* Right Column - Meeting Details */}
<div className="w-full md:w-1/2 p-6">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Meeting Details</h2>
{/* Meeting Configuration */}
<div className="space-y-6">
{/* Meeting Duration */}
<div className="relative">
<label className="block text-sm font-medium text-gray-700 mb-2">Meeting Duration</label>
<div
className="border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer"
onClick={() => setShowDurationDropdown(!showDurationDropdown)}
>
<span>{meetingDuration}</span>
<i className={`fas fa-chevron-${showDurationDropdown ? 'up' : 'down'} text-gray-500`}></i>
</div>
{showDurationDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
{meetingDurations.map((duration, index) => (
<div
key={index}
className="p-3 hover:bg-gray-100 cursor-pointer"
onClick={() => {
setMeetingDuration(duration);
setShowDurationDropdown(false);
}}
>
{duration}
</div>
))}
</div>
)}
</div>
{/* Meeting Type */}
<div className="relative">
<label className="block text-sm font-medium text-gray-700 mb-2">Meeting Type</label>
<div
className="border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer"
onClick={() => setShowMeetingTypeDropdown(!showMeetingTypeDropdown)}
>
<span>{meetingType}</span>
<i className={`fas fa-chevron-${showMeetingTypeDropdown ? 'up' : 'down'} text-gray-500`}></i>
</div>
{showMeetingTypeDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
{meetingTypes.map((type, index) => (
<div
key={index}
className="p-3 hover:bg-gray-100 cursor-pointer"
onClick={() => {
setMeetingType(type);
setShowMeetingTypeDropdown(false);
}}
>
{type}
</div>
))}
</div>
)}
</div>
{/* Room Type */}
<div className="relative">
<label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
<div
className="border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer"
onClick={() => setShowRoomTypeDropdown(!showRoomTypeDropdown)}
>
<span>{roomType}</span>
<i className={`fas fa-chevron-${showRoomTypeDropdown ? 'up' : 'down'} text-gray-500`}></i>
</div>
{showRoomTypeDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
{roomTypes.map((type, index) => (
<div
key={index}
className="p-3 hover:bg-gray-100 cursor-pointer"
onClick={() => {
setRoomType(type);
setShowRoomTypeDropdown(false);
}}
>
{type}
</div>
))}
</div>
)}
</div>
{/* Participants */}
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Participants <span className="text-gray-500 text-xs">({participants.length}/10 max)</span>
</label>
<div className="flex items-center mb-2">
<input
type="email"
placeholder="Add participant email"
className="border-none flex-grow p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
value={participantInput}
onChange={(e) => setParticipantInput(e.target.value)}
onKeyPress={handleKeyPress}
/>
<button
onClick={addParticipant}
className="ml-2 bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-plus"></i>
</button>
</div>
<div className="flex flex-wrap gap-2">
{participants.map((participant, index) => (
<div key={index} className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
<span className="text-sm">{participant}</span>
<button
onClick={() => removeParticipant(participant)}
className="ml-2 text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-times text-xs"></i>
</button>
</div>
))}
</div>
</div>
{/* Meeting Notes */}
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Meeting Agenda/Notes</label>
<textarea
className="w-full border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-gray-100 border-none"
placeholder="Add any additional information about the meeting..."
value={meetingNotes}
onChange={(e) => setMeetingNotes(e.target.value)}
></textarea>
</div>
</div>
{/* Meeting Summary and Confirmation */}
{selectedDate && selectedTime && (
<div className="mt-8 p-4 bg-gray-50 rounded-lg">
<h3 className="text-lg font-medium text-gray-800 mb-2">Meeting Summary</h3>
<div className="text-sm text-gray-600 space-y-1">
<p><span className="font-medium">Date:</span> {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
<p><span className="font-medium">Time:</span> {selectedTime} ({selectedTimeZone})</p>
<p><span className="font-medium">Duration:</span> {meetingDuration}</p>
<p><span className="font-medium">Type:</span> {meetingType}</p>
<p><span className="font-medium">Room:</span> {roomType}</p>
{participants.length > 0 && (
<p><span className="font-medium">Participants:</span> {participants.join(', ')}</p>
)}
</div>
<div className="mt-4 flex flex-col sm:flex-row gap-3">
<button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors flex-grow !rounded-button whitespace-nowrap cursor-pointer">
Book Meeting
</button>
<div className="flex gap-2">
<button className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="fab fa-google mr-2"></i> Google
</button>
<button className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="far fa-calendar-alt mr-2"></i> iCal
</button>
</div>
</div>
</div>
)}
</div>
</div>
)}
{activeTab === 'upcoming' && (
<div className="p-6">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Meetings</h2>
<div className="space-y-4">
{upcomingMeetings.map(meeting => (
<div key={meeting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-800">{meeting.title}</h3>
<div className="mt-2 space-y-1 text-sm text-gray-600">
<p className="flex items-center">
<i className="far fa-calendar-alt mr-2 text-pink-500"></i>
{meeting.date}
</p>
<p className="flex items-center">
<i className="far fa-clock mr-2 text-pink-500"></i>
{meeting.time}
</p>
<p className="flex items-center">
<i className="fas fa-tag mr-2 text-pink-500"></i>
{meeting.type}
</p>
</div>
</div>
<div className="flex space-x-2">
<button className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-edit"></i>
</button>
<button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-trash-alt"></i>
</button>
</div>
</div>
<div className="mt-3">
<p className="text-sm text-gray-600 font-medium">Participants:</p>
<div className="flex flex-wrap gap-2 mt-1">
{meeting.participants.map((participant, idx) => (
<div key={idx} className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
{participant}
</div>
))}
</div>
</div>
<div className="mt-4 flex space-x-2">
<button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-video mr-2"></i>
Join Meeting
</button>
<button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="far fa-calendar-alt mr-2"></i>
Add to Calendar
</button>
</div>
</div>
))}
</div>
</div>
)}
{activeTab === 'history' && (
<div className="p-6">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Meeting History</h2>
<div className="bg-gray-50 rounded-lg p-8 text-center">
<img
src="https://readdy.ai/api/search-image?query=A%20minimalist%20illustration%20of%20a%20calendar%20with%20past%20events%20or%20meetings%2C%20shown%20in%20a%20modern%20flat%20design%20style%20with%20soft%20colors.%20The%20image%20should%20convey%20the%20concept%20of%20meeting%20history%20or%20past%20appointments%20in%20a%20clean%2C%20professional%20manner&width=200&height=200&seq=2&orientation=squarish"
alt="Meeting History"
className="w-40 h-40 mx-auto mb-4 object-cover"
/>
<h3 className="text-lg font-medium text-gray-800 mb-2">No Past Meetings</h3>
<p className="text-gray-600 mb-6">Your meeting history will appear here once you've had meetings.</p>
<button
className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
onClick={() => setActiveTab('schedule')}
>
Schedule Your First Meeting
</button>
</div>
</div>
)}
</div>
</main>

{/* WhatsApp Button and Dialog */}
<div id="whatsapp-container" className="fixed bottom-6 right-6">
  <div 
    id="whatsapp-button"
    className="bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors z-10"
    onClick={() => {
      const dialog = document.getElementById('whatsapp-dialog');
      if (dialog) dialog.classList.remove('hidden');
    }}
  >
    <i className="fab fa-whatsapp text-2xl"></i>
  </div>
  
  <div 
    id="whatsapp-dialog" 
    className="hidden absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl p-4 mb-4"
  >
    <button 
      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      onClick={() => {
        const dialog = document.getElementById('whatsapp-dialog');
        if (dialog) dialog.classList.add('hidden');
      }}
    >
      <i className="fas fa-times"></i>
    </button>
    
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
        <i className="fab fa-whatsapp text-white text-xl"></i>
      </div>
      <div>
        <h3 className="font-medium text-gray-800">Hi there! 👋</h3>
        <p className="text-sm text-gray-600">How can we help you today?</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <a 
        href="https://wa.me/1234567890?text=Hi,%20I%20would%20like%20to%20chat%20with%20you" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-between w-full bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg transition-colors"
      >
        <span className="flex items-center">
          <i className="far fa-comment-dots mr-2"></i>
          Start Chat
        </span>
        <i className="fas fa-chevron-right text-sm"></i>
      </a>
      
      <a 
        href="tel:+1234567890" 
        className="flex items-center justify-between w-full bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg transition-colors"
      >
        <span className="flex items-center">
          <i className="fas fa-phone-alt mr-2"></i>
          Call Us
        </span>
        <i className="fas fa-chevron-right text-sm"></i>
      </a>
    </div>
    
    <div className="mt-4 text-center">
      <p className="text-xs text-gray-500">Business hours: Mon-Fri, 9AM-6PM</p>
      <p className="text-xs text-gray-500">WhatsApp: +1 (234) 567-890</p>
    </div>
  </div>
</div>

{/* Click Outside Handler */}
<div 
  id="whatsapp-overlay"
  className="fixed inset-0 z-0 hidden"
  onClick={() => {
    const dialog = document.getElementById('whatsapp-dialog');
    if (dialog) dialog.classList.add('hidden');
    const overlay = document.getElementById('whatsapp-overlay');
    if (overlay) overlay.classList.add('hidden');
  }}
></div>
</div>
<Footer/>
</div>
);
};


// Add click event listener when component mounts
document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.getElementById('whatsapp-button');
  const whatsappDialog = document.getElementById('whatsapp-dialog');
  const whatsappOverlay = document.getElementById('whatsapp-overlay');

  whatsappButton?.addEventListener('click', () => {
    whatsappDialog?.classList.remove('hidden');
    whatsappOverlay?.classList.remove('hidden');
  });
});

export default App
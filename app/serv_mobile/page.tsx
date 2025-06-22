import React from "react";

function Servicemobile(){
  return(
    <div>
      <section className="min-h-screen flex items-center justify-center bg-white px-4 md:px-20 py-12">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl items-center">
        {/* Left Content */}
        <div>
          <p className="text-pink-600 font-medium mb-2 cursor-pointer hover:underline">
            ← Back to Home
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Effortless Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Automation with AI
            </span>
          </h1>
          <p className="text-gray-600 mb-8">
            Pioneering the future of AI-driven business solutions since 2018. We combine
            cutting-edge technology with deep industry expertise to transform how
            organizations operate in the digital age.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Project Duration", value: "6 Months" },
              { label: "ROI", value: "342%" },
              { label: "Time Saved", value: "87%" },
              { label: "Annual Savings", value: "$2.4M" },
            ].map((stat, index) => (
              <div
                key={index}
                className="border-2 border-purple-400 rounded-md px-4 py-3"
              >
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src="/sevice/serv4.png" alt="" />
        </div>
      </div>
    </section>
    </div>
  );
}
export default Servicemobile
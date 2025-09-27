import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, AlertTriangle, Car, Shield, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const rulesData = [
  {
    title: "Speed Limits",
    description: "Adhere to posted speed limits for different road types",
    points: -2,
    fine: "₹500-2000",
    guidelines: [
      "City roads: 40-50 km/h",
      "Highways: 60-80 km/h",
      "Expressways: 80-120 km/h",
      "School zones: 25 km/h"
    ]
  },
  {
    title: "Traffic Signals",
    description: "Follow traffic light signals and stop signs",
    points: -3,
    fine: "₹300-1000",
    guidelines: [
      "Red: Complete stop required",
      "Yellow: Prepare to stop",
      "Green: Proceed with caution",
      "No right turn on red unless indicated"
    ]
  },
  {
    title: "Lane Discipline",
    description: "Stay in designated lanes and signal before changing",
    points: -1,
    fine: "₹300-1000",
    guidelines: [
      "Use indicators before lane changes",
      "Check mirrors and blind spots",
      "Maintain safe following distance",
      "Keep left except when overtaking"
    ]
  },
  {
    title: "Mobile Phone Usage",
    description: "No handheld device usage while driving",
    points: -2,
    fine: "₹1000-5000",
    guidelines: [
      "Use hands-free devices only",
      "Pull over for important calls",
      "No texting while driving",
      "Focus on road, not phone"
    ]
  },
  {
    title: "Helmet & Seatbelt",
    description: "Mandatory safety equipment for all vehicles",
    points: -1,
    fine: "₹500-1000",
    guidelines: [
      "ISI marked helmets for two-wheelers",
      "Seatbelts for all car occupants",
      "Child restraints for minors",
      "Proper fastening required"
    ]
  },
  {
    title: "Parking Violations",
    description: "Park only in designated areas",
    points: -1,
    fine: "₹200-500",
    guidelines: [
      "No parking in no-parking zones",
      "Respect disabled parking spaces",
      "Pay meter fees where applicable",
      "Avoid blocking traffic flow"
    ]
  }
];

const LearnRules = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rulesPerPage = 3;
  const totalPages = Math.ceil(rulesData.length / rulesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const currentRules = rulesData.slice(
    (currentPage - 1) * rulesPerPage,
    currentPage * rulesPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Traffic Rules & Safety Education
            </h1>
            <p className="text-gray-600 text-lg">
              Learn about traffic rules, penalty system, and safe driving practices
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8 border border-blue-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-blue-800 font-semibold text-lg mb-2 flex items-center gap-2">
                  Important Notice
                </h2>
                <p className="text-blue-700 leading-relaxed">
                  All traffic rules are enforced uniformly across India. Violation of any rule will result in demerit points being added to your licence. Accumulating 20 points may result in licence suspension.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex items-center gap-3">
              <Car className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-sm text-gray-600">Total Rules</div>
                <div className="text-2xl font-bold text-gray-900">{rulesData.length}</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-500" />
              <div>
                <div className="text-sm text-gray-600">Max Points</div>
                <div className="text-2xl font-bold text-gray-900">-20</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex items-center gap-3">
              <Info className="w-8 h-8 text-amber-500" />
              <div>
                <div className="text-sm text-gray-600">Categories</div>
                <div className="text-2xl font-bold text-gray-900">6</div>
              </div>
            </div>
          </div>

          {/* Rules Sections */}
          <div className="grid gap-6">
            {currentRules.map((rule, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                      {rule.title}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                          {rule.points} points
                        </span>
                        <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                          {rule.fine}
                        </span>
                      </div>
                    </h2>
                    <p className="text-gray-600">{rule.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h3 className="text-gray-700 font-medium mb-3">Key Guidelines:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rule.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 bg-white p-2 rounded border border-gray-100">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-lg">
                {currentPage}
              </span>
              <span className="text-gray-500">of</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg">
                {totalPages}
              </span>
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
              )}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnRules;
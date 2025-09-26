import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    fine: "₹1000-5000",
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
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Traffic Rules & Safety Education</h1>
        <p className="text-gray-600 mb-6">
          Learn about traffic rules, penalty system, and safe driving practices
        </p>

        {/* Important Notice */}
        <div className="bg-blue-50 rounded-lg p-4 mb-8 border border-blue-200">
          <h2 className="text-blue-700 font-medium mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Important Notice
          </h2>
          <p className="text-blue-800">
            All traffic rules are enforced uniformly across India. Violation of any rule will result in demerit points being added to your licence. Accumulating 20 points may result in licence suspension.
          </p>
        </div>

        {/* Rules Sections */}
        <div className="space-y-6">
          {currentRules.map((rule, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-gray-900">{rule.title}</h2>
                  <p className="text-gray-500 text-sm">{rule.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-500">{rule.points} points</span>
                  <span className="text-amber-500">{rule.fine}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-700 mb-2">Key Guidelines:</h3>
                <ul className="space-y-2">
                  {rule.guidelines.map((guideline, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-blue-500 text-blue-500 hover:bg-blue-50"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-blue-500 text-blue-500 hover:bg-blue-50"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnRules;
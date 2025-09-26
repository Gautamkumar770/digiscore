import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow flex items-start justify-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            What Is DIGIScore?
          </h1>

          <div className="space-y-4 text-gray-600">
            <p>
              DigiScore is a nationwide Digital Demerit Points System (DDPS) designed to revolutionize road safety and traffic law enforcement in India. 
              Unlike traditional challan-based systems, DigiScore goes beyond fines and introduces a behavior-driven penalty model that monitors, records, and evaluates every driver’s compliance with traffic rules.
            </p>

            <p>
              It is an integrated, AI-powered eco-system that combines real-time data, surveillance inputs, and central RTO databases to create a unified digital profile for every licensed driver. 
              Each violation adds demerit points to a driver’s DigiScore, impacting their driving privileges, insurance eligibility, and long-term license validity.
            </p>

            <ul className="list-disc pl-8 space-y-1">
              <li>Enforcement officers</li>
              <li>Citizens (private or commercial vehicle owners/drivers)</li>
              <li>State transport office</li>
              <li>Regional transport/Traffic office</li>
              <li>Transport Department admin</li>
              <li>Ministry of Road and Transport</li>
            </ul>

            <p>
              DigiScore introduces a progressive penalty structure where repeated violations lead to higher consequences—warnings, temporary suspension, or permanent cancellation of driving licenses. 
              This not only improves compliance but also builds a culture of accountability on Indian roads.
            </p>

            <p>
                DigiScore is not just a system, it is a transformative step towards reducing accidents, saving lives, and making India’s roads safer, smarter, and more responsible.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
              onClick={() => navigate(-1)} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
            >
              OK
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
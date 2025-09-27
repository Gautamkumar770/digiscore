import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AboutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutDialog: React.FC<AboutDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            What Is DIGIScore?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            DigiScore is a nationwide Digital Demerit Points System (DDPS) designed to revolutionize road safety and traffic law enforcement in India. 
            Unlike traditional challan-based systems, DigiScore goes beyond fines and introduces a behavior-driven penalty model that monitors, records, and evaluates every driver's compliance with traffic rules.
          </p>

          <p>
            It is an integrated, AI-powered eco-system that combines real-time data, surveillance inputs, and central RTO databases to create a unified digital profile for every licensed driver. 
            Each violation adds demerit points to a driver's DigiScore, impacting their driving privileges, insurance eligibility, and long-term license validity.
          </p>

          <p>This is an end to end automated system with digital interface for all the stakeholders. The application offers customized interfaces for the following stakeholders:</p>

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
            DigiScore is not just a system, it is a transformative step towards reducing accidents, saving lives, and making India's roads safer, smarter, and more responsible.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button 
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-md font-medium"
          >
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
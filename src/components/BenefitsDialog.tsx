import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BenefitsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const BenefitsDialog: React.FC<BenefitsDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            DIGIScore Benefits
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            The DIGIScore – Digital Demerit Points System introduces a modern, transparent, and technology-driven approach to road safety and traffic law enforcement. By integrating driver records, traffic violations, and penalty points into a single digital framework, the system ensures uniformity, accountability, and efficiency across the nation. It minimizes human intervention, reduces corruption, and creates a reliable mechanism for monitoring driver behavior.
          </p>

          <p>
            One of the key advantages of DIGIScore is its ability to track driver behavior over time, identifying repeat offenders and rewarding law-abiding citizens. Through real-time synchronization with RTOs, traffic police, and national databases such as e-Challan, Vahan, and Sarathi, the system ensures interoperability and eliminates duplication or manipulation of records.
          </p>

          <p>
            The platform benefits both citizens and authorities by saving time, effort, and paperwork through end-to-end automation. It guarantees transparent penalty collection, reduces revenue leakages, and builds public trust in enforcement. Moreover, the availability of driver risk profiling and safety analytics supports policymakers in identifying high-risk zones and implementing preventive measures.
          </p>

          <p>
            In addition, DIGIScore is fully scalable and customizable, enabling state transport departments to adapt it according to local requirements. Its design ensures a fair, unbiased, and citizen-friendly system that not only strengthens road safety but also promotes a culture of responsible driving across India.
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

export default BenefitsDialog;
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckStatusButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/status-details");
  };
  return (
  <div className="flex justify-start w-full">
      <Button
        onClick={handleClick}
        className="w-[220px] flex items-center justify-center bg-[#1e88e5] hover:bg-[#1565c0] text-white font-bold text-base shadow-lg border-none py-4 px-8 gap-2 mr-0"
        size="lg"
      >
        <Search className="h-5 w-5" />
        Check Your Points
      </Button>
    </div>
  );
};

export default CheckStatusButton;
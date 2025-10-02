import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const TicketStatus = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState<"ticket" | "mobile">("ticket");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchValue.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid Ticket ID or Mobile Number",
        variant: "destructive",
      });
      return;
    }

    if (searchType === "ticket" && !searchValue.startsWith("GRV")) {
      toast({
        title: "Invalid Ticket ID",
        description: "Please enter a valid Ticket ID starting with 'GRV'",
        variant: "destructive",
      });
      return;
    }

    if (searchType === "mobile" && !/^[0-9]{10}$/.test(searchValue)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    // Add API call logic here
    toast({
      title: "Searching...",
      description: "Please wait while we fetch your ticket details",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-0 py-4 md:py-6 flex-grow">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-2xl font-bold text-primary mb-2">
              Track Your Grievance
            </h1>
            <p className="text-muted-foreground text-sm md:text-base px-4">
              Enter your Ticket ID or Mobile Number to check your grievance status.
            </p>
          </div>

          <Card className="bg-card shadow-sm mx-4 md:mx-0">
            <CardContent className="p-4 md:p-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="searchType" className="text-sm font-medium">
                    Search By
                  </Label>
                  <div className="flex gap-6 justify-center p-2 bg-muted/30 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="ticketId"
                        name="searchType"
                        className="h-3.5 w-3.5 text-primary border-gray-300 focus:ring-primary"
                        checked={searchType === "ticket"}
                        onChange={() => setSearchType("ticket")}
                      />
                      <label htmlFor="ticketId" className="ml-1.5 text-sm">
                        Ticket ID
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobileNumber"
                        name="searchType"
                        className="h-3.5 w-3.5 text-primary border-gray-300 focus:ring-primary"
                        checked={searchType === "mobile"}
                        onChange={() => setSearchType("mobile")}
                      />
                      <label htmlFor="mobileNumber" className="ml-1.5 text-sm">
                        Mobile
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="searchValue" className="text-sm font-medium">
                    {searchType === "ticket" ? "Enter Ticket ID" : "Enter Mobile Number"}
                  </Label>
                  <Input
                    id="searchValue"
                    type={searchType === "mobile" ? "tel" : "text"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={
                      searchType === "ticket"
                        ? "e.g., GRV2025001234"
                        : "10-digit mobile number"
                    }
                    className="h-10 text-sm"
                    pattern={searchType === "mobile" ? "[0-9]{10}" : undefined}
                    maxLength={searchType === "mobile" ? 10 : undefined}
                  />
                  <p className="text-xs text-muted-foreground pl-1">
                    {searchType === "ticket"
                      ? "Find your Ticket ID in the grievance submission confirmation"
                      : "Use the mobile number provided during submission"}
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-9 text-sm font-medium flex items-center justify-center gap-1.5 mt-2"
                >
                  <Search className="h-4 w-4" />
                  Track Status
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketStatus;
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const DLStatus = () => {
  const [dlNumber, setDlNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [state, setState] = useState("");
  const [captcha, setCaptcha] = useState("5A3B7");
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      alert("Invalid CAPTCHA. Please try again.");
      return;
    }
    // Add DL status check logic here
    alert("DL Status check not implemented.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex flex-col items-center py-8 flex-grow">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 border border-gray-200" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
          <h1 className="text-2xl font-bold text-center mb-2">Check Driving Licence Status</h1>
          <p className="text-sm text-gray-700 text-center mb-6">
            Verify your Driving Licence details including validity, endorsements, and disqualifications
          </p>
          <hr className="mb-6" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* DL Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dl-number">
                Driving Licence Number
              </label>
              <Input
                id="dl-number"
                type="text"
                value={dlNumber}
                onChange={(e) => setDlNumber(e.target.value)}
                placeholder="Enter your DL number"
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dob">
                Date of Birth
              </label>
              <Input
                id="dob"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent"
              />
            </div>

            {/* Issuing State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issuing State
              </label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0">
                  <SelectValue placeholder="Select the state that issued your DL" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* CAPTCHA */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2 justify-center">
                <div className="bg-black text-white font-mono text-sm font-bold tracking-widest px-2 py-1 rounded shadow-inner border border-gray-300 flex items-center" style={{letterSpacing: '1px', minWidth: '80px'}}>
                  {captcha}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={generateCaptcha}
                  className="text-teal-500 hover:bg-transparent"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
              </div>
              <label className="block text-xs font-medium text-gray-700 mt-1" htmlFor="captcha">
                Enter CAPTCHA
              </label>
              <Input
                id="captcha"
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                placeholder="Enter the code shown above"
                maxLength={5}
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent text-center"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-8 text-sm rounded shadow-md"
              >
                CHECK STATUS
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DLStatus;
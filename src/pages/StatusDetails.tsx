import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StatusDetails = () => {
  const [tab, setTab] = useState("dl");
  const [captcha, setCaptcha] = useState("5A3B7");
  const [input, setInput] = useState("");
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
    // Add status retrieval logic here
    alert("Status retrieval not implemented.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex flex-col items-center py-4 flex-grow">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 border border-gray-200" style={{boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)'}}>
          <h1 className="text-2xl font-bold text-center mb-2">Demerit/Penalty Details</h1>
          <p className="text-sm text-gray-700 text-center mb-4">After getting Demerit/Penalty details you can further go for complaint if you have any issue</p>
          <hr className="mb-4" />
          <div className="flex justify-center mb-4">
            <div className="flex gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" checked={tab === 'dl'} onChange={() => setTab('dl')} className="accent-teal-600 w-4 h-4" />
                <span className="text-sm font-medium">DL Number</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" checked={tab === 'vehicle'} onChange={() => setTab('vehicle')} className="accent-teal-600 w-4 h-4" />
                <span className="text-sm font-medium">Vehicle Number</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" checked={tab === 'challan'} onChange={() => setTab('challan')} className="accent-teal-600 w-4 h-4" />
                <span className="text-sm font-medium">Challan Number</span>
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="block text-xs font-medium mb-1 text-gray-700" htmlFor="identifier">
                {tab === "dl" ? "DL NUMBER" : tab === "vehicle" ? "VEHICLE NUMBER" : "CHALLAN NUMBER"}
              </label>
              <Input
                id="identifier"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={tab === "dl" ? "Enter DL Number" : tab === "vehicle" ? "Enter Vehicle Number" : "Enter Challan Number"}
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent"
              />
            </div>
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
              <label className="block text-xs font-medium mb-1 text-gray-700 mt-1" htmlFor="captcha">Captcha</label>
              <Input
                id="captcha"
                type="text"
                value={captchaInput}
                onChange={e => setCaptchaInput(e.target.value.toUpperCase())}
                placeholder="Captcha"
                maxLength={5}
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent text-center"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-1.5 px-8 text-sm rounded shadow-md mt-1"
              >
                GET DETAIL
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatusDetails;

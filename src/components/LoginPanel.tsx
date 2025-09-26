import { useState } from "react";
import { Eye, EyeOff, RefreshCw, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LoginPanel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("5A3B7");
  const [captchaInput, setCaptchaInput] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const { toast } = useToast();

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
    
    if (!username || !password || !userType) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (captchaInput !== captcha) {
      toast({
        title: "CAPTCHA Error",
        description: "Please enter the correct CAPTCHA code.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Successful",
      description: `Welcome ${userType}! You have been logged in successfully.`,
    });
  };

  return (
    <Card className="w-full max-w-sm bg-[#fafafa] shadow-2xl border border-gray-200 rounded-xl">
      <CardContent className="p-5">
  <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-1">
            <div className="rounded-full bg-gray-200 flex items-center justify-center w-20 h-20 mb-1">
              <User className="h-12 w-12 text-gray-400" />
            </div>
          </div>

          {/* Username */}
          <div className="w-full">
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
              className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-2 px-0 bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="w-full">
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-2 px-0 bg-transparent"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-2 py-1 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="w-full flex flex-col gap-2 items-center">
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-black text-white font-mono text-base font-bold tracking-widest px-2 py-1 rounded shadow-inner border border-gray-300 flex items-center" style={{letterSpacing: '1px'}}>
                {captcha}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={generateCaptcha}
                className="text-yellow-500 hover:bg-transparent"
              >
                <RefreshCw className="h-6 w-6" />
              </Button>
            </div>
            <Input
              id="captcha"
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
              placeholder="Captcha"
              maxLength={5}
              required
              className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-2 px-0 bg-transparent text-center"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#338af7] hover:bg-[#1976d2] text-white font-semibold py-1.5 text-sm rounded shadow-md mt-1"
          >
            SUBMIT
          </Button>
        </form>
  <div className="w-full flex justify-center mt-2">
          <Button
            type="button"
            variant="link"
            className="text-primary text-xs px-0"
            onClick={() => toast({
              title: "Forgot Password",
              description: "Password reset instructions will be sent to your registered email (feature coming soon)."
            })}
          >
            Forgot Password?
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPanel;
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
  const [role, setRole] = useState("");
  const { toast } = useToast();

  const roles = [
    { id: "rto-officer", label: "RTO Officer" },
    { id: "field-officer", label: "Field Officer" },
    { id: "system-auditor", label: "System Auditor" },
    { id: "super-admin", label: "Super Admin" }
  ];

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
    
    if (!username || !password || !role) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields including role selection.",
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
      description: `Welcome ${roles.find(r => r.id === role)?.label || role}! You have been logged in successfully.`,
    });
  };

  return (
    <Card className="w-full max-w-sm bg-[#fafafa] shadow-2xl border border-gray-200 rounded-xl">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-200 flex items-center justify-center w-16 h-16">
              <User className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          {/* Role Selection */}
          <div className="w-full">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-1.5 px-0 bg-transparent">
                <SelectValue placeholder="Please Select Your Role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((roleOption) => (
                  <SelectItem key={roleOption.id} value={roleOption.id}>
                    {roleOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-1.5 px-0 bg-transparent"
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
                className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-base py-1.5 px-0 bg-transparent"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-1 py-1 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="w-full flex flex-col gap-1.5 items-center">
            <div className="flex items-center gap-2 justify-center">
              <div className="bg-black text-white font-mono text-sm font-bold tracking-widest px-2 py-0.5 rounded shadow-inner border border-gray-300 flex items-center" style={{letterSpacing: '1px'}}>
                {captcha}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={generateCaptcha}
                className="text-yellow-500 hover:bg-transparent p-0"
              >
                <RefreshCw className="h-4 w-4" />
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
              className="border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-primary text-sm py-1.5 px-0 bg-transparent text-center"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#338af7] hover:bg-[#1976d2] text-white font-semibold py-1.5 text-sm rounded shadow-md"
          >
            SUBMIT
          </Button>
        </form>
        <div className="w-full flex justify-center mt-1">
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
import { useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="w-full max-w-md bg-card shadow-government">
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userType" className="text-sm font-medium">
              User Type *
            </Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger>
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rto">RTO</SelectItem>
                <SelectItem value="admin">System Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium">
              Username *
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password *
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
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
          <div className="space-y-2">
            <Label htmlFor="captcha" className="text-sm font-medium">
              CAPTCHA *
            </Label>
            <div className="flex items-center space-x-2">
              <div className="bg-muted p-3 rounded border border-dashed border-border font-mono text-lg font-bold tracking-wider">
                {captcha}
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={generateCaptcha}
                className="h-12 w-12"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <Input
              id="captcha"
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
              placeholder="Enter CAPTCHA"
              maxLength={5}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5"
          >
            🔵 SUBMIT
          </Button>

          <div className="text-center">
            <Button variant="link" className="text-primary text-sm">
              Forget Password?
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPanel;
import { useState } from "react";
import { RefreshCw, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const GrievanceSystem = () => {
  const [captcha, setCaptcha] = useState("8K2P9");
  const [captchaInput, setCaptchaInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    penaltyNumber: "",
    vehicleDlNumber: "",
    email: "",
    penaltyCity: "",
    penaltyLocation: "",
    penaltyState: "",
    penaltyIssue: "",
    description: "",
  });
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload JPG, JPEG, PNG, or PDF files only.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['name', 'penaltyNumber', 'vehicleDlNumber', 'email', 'penaltyCity', 'penaltyLocation', 'penaltyState', 'penaltyIssue', 'description'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
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
      title: "Grievance Submitted",
      description: "Your complaint has been submitted successfully. Ticket ID: GRV2025001234",
    });

    // Reset form
    setFormData({
      name: "",
      penaltyNumber: "",
      vehicleDlNumber: "",
      email: "",
      penaltyCity: "",
      penaltyLocation: "",
      penaltyState: "",
      penaltyIssue: "",
      description: "",
    });
    setCaptchaInput("");
    setFile(null);
  };

  const handleTicketStatus = () => {
    toast({
      title: "Ticket Status",
      description: "Please enter your ticket number to check the status.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Grievance System
            </h1>
            <p className="text-muted-foreground text-lg">
              Submit your complaint regarding Demerit points issued by Traffic Police or other state authorities.
            </p>
          </div>

          <Card className="bg-card shadow-government">
            <CardHeader className="bg-gradient-official">
              <CardTitle className="text-primary-foreground text-center">
                Submit New Grievance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Full name of complainant"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="penaltyNumber">Penalty Number *</Label>
                    <Input
                      id="penaltyNumber"
                      value={formData.penaltyNumber}
                      onChange={(e) => handleInputChange('penaltyNumber', e.target.value)}
                      placeholder="Official Penalty reference number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicleDlNumber">Vehicle / DL Number *</Label>
                    <Input
                      id="vehicleDlNumber"
                      value={formData.vehicleDlNumber}
                      onChange={(e) => handleInputChange('vehicleDlNumber', e.target.value)}
                      placeholder="Vehicle registration or driving license"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="For communication and ticket updates"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="penaltyCity">Penalty City *</Label>
                    <Input
                      id="penaltyCity"
                      value={formData.penaltyCity}
                      onChange={(e) => handleInputChange('penaltyCity', e.target.value)}
                      placeholder="City where Penalty was issued"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="penaltyLocation">Penalty Location *</Label>
                    <Input
                      id="penaltyLocation"
                      value={formData.penaltyLocation}
                      onChange={(e) => handleInputChange('penaltyLocation', e.target.value)}
                      placeholder="Specific location of incident"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="penaltyState">Penalty State *</Label>
                    <Select value={formData.penaltyState} onValueChange={(value) => handleInputChange('penaltyState', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Please Select Penalty State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bengaluru">Bengaluru</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="penaltyIssue">Penalty Issue *</Label>
                    <Select value={formData.penaltyIssue} onValueChange={(value) => handleInputChange('penaltyIssue', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Please Select Penalty Issue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overspeeding">Over Speeding</SelectItem>
                        <SelectItem value="signal">Traffic Signal Violation</SelectItem>
                        <SelectItem value="parking">Wrong Parking</SelectItem>
                        <SelectItem value="helmet">No Helmet</SelectItem>
                        <SelectItem value="seatbelt">No Seat Belt</SelectItem>
                        <SelectItem value="mobile">Mobile Phone Usage</SelectItem>
                        <SelectItem value="documents">Document Issues</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Issue *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Please describe your issue in detail (Max 500 characters)"
                    maxLength={500}
                    rows={4}
                    required
                  />
                  <div className="text-right text-sm text-muted-foreground">
                    {formData.description.length}/500 characters
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document">Upload Supporting Document</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="document"
                      type="file"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('document')?.click()}
                      className="flex items-center space-x-2"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Choose File</span>
                    </Button>
                    {file && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span>{file.name}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accept: JPG, JPEG, PNG, PDF (Max 5MB)
                  </p>
                </div>

                {/* CAPTCHA */}
                <div className="space-y-2">
                  <Label htmlFor="captcha">CAPTCHA *</Label>
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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5"
                  >
                    🔵 SUBMIT
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleTicketStatus}
                    className="flex-1 border-primary text-primary hover:bg-primary/10 font-semibold py-2.5"
                  >
                    🟦 TICKET STATUS
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GrievanceSystem;
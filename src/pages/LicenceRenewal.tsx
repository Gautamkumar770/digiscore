import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const LicenceRenewal = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    dlNumber: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    renewalReason: "",
  });
  const [idProof, setIdProof] = useState<File | null>(null);
  const [addressProof, setAddressProof] = useState<File | null>(null);

  const handleFileChange = (type: 'id' | 'address', e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a JPG, PNG, or PDF file.",
          variant: "destructive",
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "File size should not exceed 5MB.",
          variant: "destructive",
        });
        return;
      }

      if (type === 'id') {
        setIdProof(file);
      } else {
        setAddressProof(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add form submission logic here
    toast({
      title: "Request Submitted",
      description: "Your licence renewal request has been submitted successfully. Application ID: RNW2025001234",
    });
  };

  const handleStatusCheck = () => {
    toast({
      title: "Check Status",
      description: "Please enter your Application ID to check the status.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex flex-col items-center py-6 flex-grow">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-5 border border-gray-200" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
          <h1 className="text-xl font-bold text-center mb-1">Licence Renewal Request</h1>
          <p className="text-sm text-gray-700 text-center mb-4">
            Submit your driving licence renewal request online
          </p>
          <hr className="mb-4" />
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* DL Number and DOB */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dl-number" className="text-sm">DL Number</Label>
                <Input
                  id="dl-number"
                  type="text"
                  value={formData.dlNumber}
                  onChange={(e) => setFormData({ ...formData, dlNumber: e.target.value })}
                  placeholder="Enter DL number"
                  required
                  className="mt-1 h-9"
                />
              </div>
              <div>
                <Label htmlFor="dob" className="text-sm">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                  className="mt-1 h-9"
                />
              </div>
            </div>

            {/* Mobile and Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile" className="text-sm">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder="For OTP verification"
                  required
                  className="mt-1 h-9"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="For updates"
                  required
                  className="mt-1 h-9"
                />
              </div>
            </div>

            {/* Renewal Reason */}
            <div>
              <Label htmlFor="reason" className="text-sm">Renewal Reason</Label>
              <Select
                value={formData.renewalReason}
                onValueChange={(value) => setFormData({ ...formData, renewalReason: value })}
              >
                <SelectTrigger id="reason" className="mt-1 h-9">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="expiry">Expiry</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                  <SelectItem value="damaged">Damaged</SelectItem>
                  <SelectItem value="update">Update Info</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Uploads - Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="id-proof" className="text-sm">ID Proof</Label>
                <div className="mt-1">
                  <Input
                    id="id-proof"
                    type="file"
                    onChange={(e) => handleFileChange('id', e)}
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="id-proof"
                    className="flex items-center gap-2 text-xs text-gray-600 p-1.5 border border-dashed rounded-md hover:bg-gray-50 cursor-pointer h-9"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    {idProof ? idProof.name.slice(0, 20) + "..." : "Upload ID Proof"}
                  </label>
                </div>
              </div>
              <div>
                <Label htmlFor="address-proof" className="text-sm">Address Proof</Label>
                <div className="mt-1">
                  <Input
                    id="address-proof"
                    type="file"
                    onChange={(e) => handleFileChange('address', e)}
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="address-proof"
                    className="flex items-center gap-2 text-xs text-gray-600 p-1.5 border border-dashed rounded-md hover:bg-gray-50 cursor-pointer h-9"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    {addressProof ? addressProof.name.slice(0, 20) + "..." : "Upload Address Proof"}
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm h-9"
              >
                SUBMIT REQUEST
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleStatusCheck}
                className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50 text-sm h-9"
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

export default LicenceRenewal;
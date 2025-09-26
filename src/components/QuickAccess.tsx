import { Search, FileText, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const QuickAccess = () => {
  const { toast } = useToast();

  const quickServices = [
    {
      title: "Check Your Status",
      description: "Instantly check your DIGIScore and penalty history",
      icon: Search,
      color: "bg-gradient-saffron",
      action: () => toast({ title: "Status Check", description: "Redirecting to status check portal..." }),
    },
    {
      title: "View Reports",
      description: "Access detailed DIGIScore reports and analytics",
      icon: FileText,
      color: "bg-gradient-official",
      action: () => toast({ title: "Reports", description: "Loading your reports..." }),
    },
    {
      title: "Penalty History",
      description: "View complete penalty and violation history",
      icon: AlertTriangle,
      color: "bg-warning",
      action: () => toast({ title: "Penalty History", description: "Fetching penalty records..." }),
    },
    {
      title: "License Status",
      description: "Check driving license status and validity",
      icon: Shield,
      color: "bg-success",
      action: () => toast({ title: "License Status", description: "Verifying license details..." }),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">Quick Access Services</h2>
        <p className="text-muted-foreground">Fast access to essential DIGIScore services</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-government hover:-translate-y-1">
              <CardHeader className={`${service.color} text-white rounded-t-lg`}>
                <div className="flex items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <CardTitle className="text-sm font-semibold mb-2 text-card-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mb-3">
                  {service.description}
                </p>
                <Button
                  onClick={service.action}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/10 text-xs"
                >
                  Access Now
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAccess;
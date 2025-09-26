import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const NotificationBanner = () => {
  const notifications = [
    {
      type: "success" as const,
      icon: CheckCircle2,
      message: "DIGIScore system is now live across all states. Check your penalty status instantly.",
    },
    {
      type: "info" as const,
      icon: Clock,
      message: "Scheduled maintenance on Sunday 2:00 AM - 4:00 AM. Services may be temporarily unavailable.",
    },
    {
      type: "warning" as const,
      icon: AlertCircle,
      message: "New penalty points system effective from January 2025. Update your records accordingly.",
    },
  ];

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-success bg-success/10 text-success-foreground';
      case 'warning':
        return 'border-warning bg-warning/10 text-warning-foreground';
      case 'info':
        return 'border-primary bg-primary/10 text-primary';
      default:
        return 'border-border bg-muted';
    }
  };

  return (
    <div className="space-y-3">
      {notifications.map((notification, index) => {
        const Icon = notification.icon;
        return (
          <Alert key={index} className={`${getAlertClass(notification.type)} shadow-sm`}>
            <Icon className="h-4 w-4" />
            <AlertDescription className="font-medium">
              {notification.message}
            </AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
};

export default NotificationBanner;
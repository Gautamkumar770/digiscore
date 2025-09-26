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
        return 'border-success bg-success/10 text-primary';
      case 'warning':
        return 'border-warning bg-warning/10 text-primary';
      case 'info':
        return 'border-primary bg-primary/10 text-primary';
      default:
        return 'border-border bg-muted text-primary';
    }
  };

  return (
    <div className="space-y-2">
      {notifications.map((notification, index) => {
        const Icon = notification.icon;
        return (
          <Alert key={index} className={`${getAlertClass(notification.type)} shadow-sm py-2`}>
            <Icon className="h-3 w-3" />
            <AlertDescription className="text-sm">
              {notification.message}
            </AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
};

export default NotificationBanner;
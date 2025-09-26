import { Mail, Phone, Clock, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = [
    { title: "Terms of Use", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Copyright Policy", href: "/copyright" },
    { title: "Hyperlink Policy", href: "/hyperlink" },
    { title: "Contact Us", href: "/contact" },
  ];

  const supportInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "helpdesk-abc@gov.in",
      href: "mailto:helpdesk-abc@gov.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0000-12345678",
      href: "tel:0000-12345678",
    },
    {
      icon: Clock,
      label: "Timings",
      value: "6:00 AM – 10:00 PM",
    },
    {
      icon: ExternalLink,
      label: "Support Portal",
      value: "https://helpdesk.abc@gov.in",
      href: "https://helpdesk.abc@gov.in",
    },
  ];

  return (
    <footer className="bg-gradient-official text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="col-span-full lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-secondary">Support & Helpdesk</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-primary-foreground/80 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="col-span-full lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-secondary">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors block py-1"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-6" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              © National Informatics Centre, 2025
            </p>
            <p className="text-xs text-primary-foreground/70 mt-1">
              Government of India | भारत सरकार
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-primary-foreground/70">
              Powered by Digital India Initiative
            </p>
            <p className="text-xs text-primary-foreground/70 mt-1">
              Version 2.0 | Last Updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
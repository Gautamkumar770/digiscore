import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import indiaEmblem from "@/assets/india-emblem.png";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import AboutDialog from "./AboutDialog";
import BenefitsDialog from "./BenefitsDialog";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [showAboutDialog, setShowAboutDialog] = useState(false);
  const [showBenefitsDialog, setShowBenefitsDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Check Online Services",
      hasDropdown: true,
      subItems: [
        { title: "Check Penalty History", href: "/penalty-history" },
        { title: "Licence Renewal", href: "/licence-renewal" },
        { title: "Check DL Status", href: "/dl-status" },
      ]
    },
    { title: "DIGIScore Benefits", action: () => setShowBenefitsDialog(true) },
    { title: "What is DIGIScore?", action: () => setShowAboutDialog(true) },
    { title: "Complaint", href: "/grievance" },
    { title: "DIGIScore Report", href: "/report" },
    { title: "Learn Rules", href: "/learn-rules" },
  ];

  return (
    <header className="bg-gradient-official shadow-government border-b">
      {/* Top Banner */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-90">
              <img 
                src={indiaEmblem} 
                alt="Government of India Emblem" 
                className="h-14 w-14"
              />
              <div>
                <h1 className="text-3xl font-extrabold text-black leading-tight">
                  DIGIScore - Digital Demerit Points System
                </h1>
                <p className="text-lg text-black font-medium mt-1">
                  One Nation, One System
                </p>
              </div>
            </Link>
            <div className="text-right text-black text-base font-semibold">
              <p>भारत सरकार</p>
              <p>Government of India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary py-3 relative">
        <div className="container mx-auto px-4">
          {isMobile ? (
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary-foreground p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <span className="text-primary-foreground font-medium">Menu</span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center space-x-1 lg:space-x-6">
          
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded transition-colors">
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border">
                    {item.subItems?.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link 
                          to={subItem.href}
                          className="w-full text-card-foreground hover:bg-muted"
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                item.action ? (
                  <button
                    key={index}
                    onClick={item.action}
                    className="px-3 py-2 text-sm font-medium rounded transition-colors text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={item.href || "/"}
                    className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    {item.title}
                  </Link>
                )
              )
            ))}
          </div>
          )}
          
          {/* Mobile Menu */}
          {isMobile && isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-primary shadow-lg z-50 py-2">
              {navItems.map((item, index) => (
                <div key={index} className="px-4">
                  {item.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full py-3 text-primary-foreground">
                        <span>{item.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {item.subItems?.map((subItem, subIndex) => (
                          <DropdownMenuItem key={subIndex} asChild>
                            <Link 
                              to={subItem.href}
                              className="w-full"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.action ? (
                    <button
                      onClick={() => {
                        item.action();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-3 text-primary-foreground"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={item.href || "/"}
                      className={`block py-3 ${
                        location.pathname === item.href
                          ? "text-primary-foreground/90 font-medium"
                          : "text-primary-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Dialogs */}
      <AboutDialog 
        isOpen={showAboutDialog} 
        onClose={() => setShowAboutDialog(false)} 
      />
      <BenefitsDialog
        isOpen={showBenefitsDialog}
        onClose={() => setShowBenefitsDialog(false)}
      />
    </header>
  );
};

export default Header;
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import indiaEmblem from "@/assets/india-emblem.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Check Online Services",
      hasDropdown: true,
      subItems: [
        { title: "Check Penalty History", href: "/penalty-history" },
        { title: "Check DIGIScore Status", href: "/digiscore-status" },
        { title: "Check DL Status", href: "/dl-status" },
      ]
    },
    { title: "DIGIScore Core Benefits", href: "/benefits" },
    { title: "What is DIGIScore?", href: "/about" },
    { title: "Complaint", href: "/grievance" },
    { title: "DIGIScore Report", href: "/report" },
    { title: "Learn Rules", href: "/learn-rules" },
  ];

  return (
    <header className="bg-gradient-official shadow-government border-b">
      {/* Top Banner */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
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
                  Government of India
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
      <nav className="bg-primary py-3">
        <div className="container mx-auto px-4">
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
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
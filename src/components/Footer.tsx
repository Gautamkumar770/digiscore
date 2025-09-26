
const Footer = () => {
  const footerLinks = [
    { title: "Terms of Use", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Copyright Policy", href: "/copyright" },
    { title: "Hyperlink Policy", href: "/hyperlink" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#e6e6e6] py-2 mt-12 border-t border-gray-200 text-xs">
      <div className="max-w-full px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-1">
          {/* Left logo */}
          <div className="flex-1 flex justify-start items-center mb-2 md:mb-0">
            <img src="/placeholder.svg" alt="e-challan logo" className="h-7 w-auto" />
          </div>
          {/* Center content */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="flex flex-wrap justify-center items-center gap-1 mb-1">
              {footerLinks.map((link, index) => (
                <span key={index} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-[#3686c9] hover:underline font-medium"
                  >
                    {link.title}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span className="text-[#3686c9] mx-1">|</span>
                  )}
                </span>
              ))}
            </div>
            <div className="space-y-0 mb-1">
              <p className="text-[#444]">
                For Any Technical Problems Related To DIGIScore You May Contact
              </p>
              <p>
                <span className="text-[#3686c9] font-medium">Email : </span>
                <a
                  href="mailto:helpdesk-abc@gov.in"
                  className="text-[#3686c9] hover:underline"
                >
                  helpdesk-abc@gov.in
                </a>
              </p>
              <p className="text-[#444]">
                OR Phone : 0000-12345678 (Timings : 6:00 AM - 10:00 PM)
              </p>
            </div>
          </div>
          {/* Right logo */}
          <div className="flex-1 flex justify-end items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/NIC_Logo.png" alt="logo" className="h-6 w-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-1">
          <div className="flex-1 flex justify-start items-center text-gray-500">
            Copyright © 2025 National Informatics Centre
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
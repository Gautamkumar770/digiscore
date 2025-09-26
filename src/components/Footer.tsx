const Footer = () => {
  const footerLinks = [
    { title: "Terms of Use", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Copyright Policy", href: "/copyright" },
    { title: "Hyperlink Policy", href: "/hyperlink" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-muted py-8 mt-12">
      <div className="container mx-auto px-4 text-center space-y-4">
        {/* Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {footerLinks.map((link, index) => (
            <span key={index} className="flex items-center">
              <a
                href={link.href}
                className="text-primary hover:underline text-sm"
              >
                {link.title}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="text-primary mx-2">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Support Contact Info */}
        <div className="space-y-2">
          <p className="text-foreground text-sm">
            For Any Technical Problems Related To DIGIScore You May Contact
          </p>
          <p>
            <span className="text-primary text-sm">Email : </span>
            <a
              href="mailto:helpdesk-abc@gov.in"
              className="text-primary hover:underline text-sm"
            >
              helpdesk-abc@gov.in
            </a>
          </p>
          <p className="text-foreground text-sm">
            OR Phone : 0000-12345678 (Timings : 6:00 AM - 10:00 PM)
          </p>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          Copyright © 2025 National Informatics Centre
        </p>
      </div>
    </footer>
  );
};

export default Footer;
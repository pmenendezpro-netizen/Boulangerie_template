import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const navRef = useRef<HTMLElement>(null);

  const leftNavItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#histoire", label: "Notre histoire" },
    { href: "#savoirfaire", label: "Savoir-faire" },
    { href: "#produits", label: "Produits" },
  ];

  const rightNavItems = [
    { href: "#actualites", label: "Actualités" },
    { href: "#commandes", label: "Commandes" },
    { href: "#horaires", label: "Horaires" },
    { href: "#adresses", label: "Adresses et contact" },
  ];

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastScrollTime = 0;
    let scrollTimeout: NodeJS.Timeout;
    
    // Function to determine active section based on scroll position
    const getActiveSectionFromScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const center = scrollY + windowHeight / 2;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        const sectionCenter = sectionTop + rect.height / 2;
        
        // Calculate distance from viewport center to section center
        const distance = Math.abs(center - sectionCenter);
        
        if (distance < closestDistance && sectionTop <= scrollY + windowHeight && sectionBottom >= scrollY) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });
      
      return closestSection;
    };
    
    // Handle scroll events for fast scrolling
    const handleScroll = () => {
      lastScrollTime = Date.now();
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set a timeout to check active section after scrolling stops
      scrollTimeout = setTimeout(() => {
        const activeSectionFromScroll = getActiveSectionFromScroll();
        if (activeSectionFromScroll) {
          console.log("🔄 Fast scroll detected, updating to:", activeSectionFromScroll);
          setActiveSection(activeSectionFromScroll);
        }
      }, 100);
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeId = activeSection; // Keep current as fallback
        
        entries.forEach((entry) => {
          console.log("Entry:", entry.target.id, "intersecting:", entry.isIntersecting, "ratio:", entry.intersectionRatio);
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
            console.log("New active section:", activeId, "ratio:", maxRatio);
          }
        });
        
        // Special handling for savoirfaire section
        const savoirfaireEntry = entries.find(entry => entry.target.id === "savoirfaire");
        if (savoirfaireEntry && savoirfaireEntry.isIntersecting) {
          console.log("🎯 Savoir-faire section is intersecting with ratio:", savoirfaireEntry.intersectionRatio);
        }
        
        // Debounce the state update to prevent flickering
        timeoutId = setTimeout(() => {
          if (maxRatio > 0) {
            setActiveSection(activeId);
            console.log("Active section updated to:", activeId);
            // Debug spécifique pour savoirfaire
            if (activeId === "savoirfaire") {
              console.log("✅ Savoir-faire section is now active!");
            }
          }
        }, 30); // Reduced delay for faster response
      },
      { 
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8], 
        rootMargin: "-50px 0px -20% 0px" // Less conservative margins for better fast scroll detection
      }
    );

    // Add scroll event listener for fast scrolling detection
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Add a small delay to ensure all sections are rendered
    setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      console.log("Found sections:", sections.length);
      sections.forEach((section) => {
        console.log("Observing section:", section.id);
        if (section.id === "savoirfaire") {
          console.log("🎯 Savoir-faire section found and will be observed!");
        }
        observer.observe(section);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scroll
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHash = href.startsWith("#");
    if (!isHash) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-primary text-primary-foreground px-4 py-2 rounded-md"
        onClick={(e) => handleSmoothScroll(e, "#accueil")}
      >
        Aller au contenu
      </a>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            {/* Left Navigation - Desktop Only (lg+) */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {leftNavItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`font-medium transition-all duration-200 hover:text-primary relative text-sm xl:text-base ${
                      isScrolled ? "text-foreground" : "text-white"
                    } ${
                      activeSection === link.href.slice(1)
                        ? "text-primary border-b-2 border-primary pb-1"
                        : ""
                    }`}
                    data-debug={`activeSection: ${activeSection}, linkId: ${link.href.slice(1)}, isActive: ${activeSection === link.href.slice(1)}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Logo/Name - Absolutely centered */}
            <a
              href="#accueil"
              onClick={(e) => handleSmoothScroll(e, "#accueil")}
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-3xl font-bold transition-colors hover:text-primary text-center ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontStyle: "italic",
                letterSpacing: "0.05em"
              }}
            >
              Maison Dubois
            </a>

            {/* Right Navigation - Desktop Only (lg+) */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {rightNavItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`font-medium transition-all duration-200 hover:text-primary relative text-sm xl:text-base ${
                      isScrolled ? "text-foreground" : "text-white"
                    } ${
                      activeSection === link.href.slice(1)
                        ? "text-primary border-b-2 border-primary pb-1"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-nav"
              aria-label="Ouvrir le menu de navigation"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMobileMenuOpen && (
            <div
              id="primary-nav"
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-lg"
            >
              <div className="px-4 py-6">
                {/* All navigation items in one list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[...leftNavItems, ...rightNavItems].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`block px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors rounded-md text-center ${
                        activeSection === link.href.slice(1)
                          ? "bg-primary/10 text-primary font-medium"
                          : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
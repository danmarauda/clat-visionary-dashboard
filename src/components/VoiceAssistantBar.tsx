
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Mic, ChevronRight, FileText, TrendingUp, Layers,
  Building2, Users, Utensils, Calendar, Paintbrush, Brain,
  LineChart, Workflow, Zap, CheckCircle2, BarChart3,
  MessageSquare, Megaphone, Briefcase, LayoutGrid, Clock,
  UserRound, MessageSquareQuote
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  // OS Modules
  { title: "Analytics OS", href: "/analytics-os", icon: <BarChart3 className="h-4 w-4" /> },
  { title: "Building OS", href: "/building-os", icon: <Building2 className="h-4 w-4" /> },
  { title: "Community OS", href: "/community-os", icon: <Users className="h-4 w-4" /> },
  { title: "Design OS", href: "/design-os", icon: <Paintbrush className="h-4 w-4" /> },
  { title: "Event OS", href: "/event-os", icon: <Calendar className="h-4 w-4" /> },
  { title: "Hospitality OS", href: "/hospitality-os", icon: <Utensils className="h-4 w-4" /> },
  { title: "Marketing OS", href: "/marketing-os", icon: <Megaphone className="h-4 w-4" /> },
  { title: "Workspace OS", href: "/workspace-os", icon: <Briefcase className="h-4 w-4" /> },
  
  // Project Sections
  { title: "Project Scope", href: "/project-scope", icon: <Layers className="h-4 w-4" /> },
  { title: "Budget", href: "/budget", icon: <LineChart className="h-4 w-4" /> },
  { title: "Delivery Timeline", href: "/timeline", icon: <Clock className="h-4 w-4" /> },
  { title: "Team", href: "/team", icon: <UserRound className="h-4 w-4" /> },
  { title: "Gallery", href: "/gallery", icon: <LayoutGrid className="h-4 w-4" /> },
  { title: "Module Gallery", href: "/module-gallery", icon: <LayoutGrid className="h-4 w-4" /> },
  { title: "Testimonials", href: "/testimonials", icon: <MessageSquareQuote className="h-4 w-4" /> }
];

interface VoiceAssistantBarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
}

const VoiceAssistantBar: React.FC<VoiceAssistantBarProps> = ({ 
  isListening, 
  toggleVoiceAssistant 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsVisible(position > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="relative w-full max-w-6xl">
            <motion.nav
              className="flex items-center justify-between px-4 py-2 rounded-full bg-background/90 backdrop-blur-lg border border-border/40 shadow-lg"
              layout
            >
              {/* Logo/Brand + Voice Assistant */}
              <motion.div className="flex items-center gap-2" layout>
                <button
                  onClick={toggleVoiceAssistant}
                  className={cn(
                    "relative flex items-center justify-center rounded-full p-2 transition-all",
                    isListening 
                      ? "bg-primary/20 text-primary animate-pulse" 
                      : "hover:bg-accent/10 text-foreground"
                  )}
                  aria-label={isListening ? "Stop listening" : "Start voice assistant"}
                >
                  <Mic className="h-5 w-5" />
                  {isListening && (
                    <span className="absolute -top-8 whitespace-nowrap text-xs font-medium text-primary bg-background/80 px-2 py-1 rounded-md">
                      Listening...
                    </span>
                  )}
                </button>
                <span className="font-medium text-foreground hidden sm:inline">
                  {isListening ? "Listening..." : "Voice Assistant"}
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 overflow-x-auto max-w-3xl scrollbar-hide">
                <div className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap",
                        location.pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.icon}
                      <span className="hidden lg:inline">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </motion.nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 right-0 mb-2 p-2 rounded-xl bg-background/95 backdrop-blur-lg border border-border/40 shadow-lg md:hidden"
                >
                  <div className="flex flex-col space-y-1 max-h-[70vh] overflow-y-auto">
                    {navItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                          location.pathname === item.href
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        <div className="flex items-center justify-center w-6 h-6">
                          {item.icon}
                        </div>
                        <span>{item.title}</span>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VoiceAssistantBar;

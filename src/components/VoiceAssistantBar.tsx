import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Mic, ChevronRight, FileText, TrendingUp, Layers,
  Building2, Users, Utensils, Calendar, Paintbrush, Brain,
  LineChart, Workflow, Zap, CheckCircle2, BarChart3,
  MessageSquare, Megaphone, Briefcase, LayoutGrid, Clock,
  UserRound, MessageSquareQuote, Bot
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

const navItems: NavItem[] = [
  // OS Modules
  { title: "analyticsOS", href: "/analytics-os", icon: <BarChart3 className="h-4 w-4" />, color: "text-module-analytics bg-module-analytics/10" },
  { title: "buildingOS", href: "/building-os", icon: <Building2 className="h-4 w-4" />, color: "text-module-building bg-module-building/10" },
  { title: "communityOS", href: "/community-os", icon: <Users className="h-4 w-4" />, color: "text-module-community bg-module-community/10" },
  { title: "designOS", href: "/design-os", icon: <Paintbrush className="h-4 w-4" />, color: "text-module-design bg-module-design/10" },
  { title: "eventOS", href: "/event-os", icon: <Calendar className="h-4 w-4" />, color: "text-module-event bg-module-event/10" },
  { title: "hospitalityOS", href: "/hospitality-os", icon: <Utensils className="h-4 w-4" />, color: "text-module-hospitality bg-module-hospitality/10" },
  { title: "marketingOS", href: "/marketing-os", icon: <Megaphone className="h-4 w-4" />, color: "text-module-marketing bg-module-marketing/10" },
  { title: "workspaceOS", href: "/workspace-os", icon: <Briefcase className="h-4 w-4" />, color: "text-module-workspace bg-module-workspace/10" },
  
  // Project Sections
  { title: "Project Scope", href: "/project-scope", icon: <Layers className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Budget", href: "/budget", icon: <LineChart className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Delivery Timeline", href: "/timeline", icon: <Clock className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Team", href: "/team", icon: <UserRound className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Gallery", href: "/gallery", icon: <LayoutGrid className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Module Gallery", href: "/module-gallery", icon: <LayoutGrid className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" },
  { title: "Testimonials", href: "/testimonials", icon: <MessageSquareQuote className="h-4 w-4" />, color: "text-gray-300 bg-gray-700/30" }
];

interface VoiceAssistantBarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
  openCopilot: () => void;
}

const VoiceAssistantBar: React.FC<VoiceAssistantBarProps> = ({ 
  isListening, 
  toggleVoiceAssistant,
  openCopilot
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const getModuleColor = (path: string) => {
    const navItem = navItems.find(item => item.href === path);
    return navItem?.color || "text-white bg-gray-800/40";
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-6xl">
        <motion.nav
          className="flex items-center justify-between px-4 py-2 rounded-full glass shadow-lg"
          layout
        >
          {/* Voice Assistant */}
          <motion.div className="flex items-center gap-2" layout>
            <button
              onClick={toggleVoiceAssistant}
              className={cn(
                "relative flex items-center justify-center rounded-full p-2 transition-all",
                isListening 
                  ? "bg-white/20 text-white animate-pulse" 
                  : "hover:bg-accent/10 text-foreground"
              )}
              aria-label={isListening ? "Stop listening" : "Start voice assistant"}
            >
              <Mic className="h-5 w-5" />
              {isListening && (
                <span className="absolute -top-8 whitespace-nowrap text-xs font-medium text-white bg-black/80 px-2 py-1 rounded-md">
                  Listening...
                </span>
              )}
            </button>
            <span className="font-medium text-foreground hidden sm:inline">
              {isListening ? "Listening..." : "Voice Assistant"}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 overflow-x-auto max-w-3xl scrollbar-none">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                const isHovered = hoveredItem === item.href;
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap",
                      isActive || isHovered
                        ? item.color
                        : "text-muted-foreground hover:text-foreground hover:bg-gray-800/40"
                    )}
                  >
                    {item.icon}
                    {(isActive || isHovered) && <span>{item.title}</span>}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions on the right */}
          <div className="flex items-center gap-2">
            {/* Copilot Button */}
            <button
              onClick={openCopilot}
              className="rounded-full p-2 text-foreground hover:bg-accent/10 transition-all hidden sm:flex items-center gap-1.5"
              aria-label="Open Copilot"
            >
              <Bot className="h-5 w-5" />
              <span className="text-sm font-medium">Copilot</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 right-0 mb-2 p-2 rounded-xl neo-blur shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-1 max-h-[70vh] overflow-y-auto">
                {/* Copilot Button for Mobile */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCopilot();
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all text-muted-foreground hover:text-foreground hover:bg-gray-800/40"
                >
                  <div className="flex items-center justify-center w-6 h-6">
                    <Bot className="h-4 w-4" />
                  </div>
                  <span>Open Copilot</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </button>

                {/* Navigation Items */}
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                        isActive
                          ? item.color
                          : "text-muted-foreground hover:text-foreground hover:bg-gray-800/40"
                      )}
                    >
                      <div className="flex items-center justify-center w-6 h-6">
                        {item.icon}
                      </div>
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VoiceAssistantBar;

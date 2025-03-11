
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Coffee, 
  ShoppingCart, 
  Users, 
  Clock, 
  BarChart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import ContentPage from '@/components/ContentPage';

const HospitalityOSPage: React.FC = () => {
  const icon = Utensils;
  const title = "Hospitality OS";
  const description = "Sophisticated food & beverage management platform that elevates the dining and service experience across all Éclat properties.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Table Management: Interactive floor plans, reservation management, and real-time table status tracking with wait time predictions.",
    "Menu Management: Digital menu creation, seasonal updates, pricing optimization, and dietary preference tracking.",
    "Inventory Control: Real-time inventory tracking, automated ordering, supplier management, and waste reduction analytics.",
    "Staff Scheduling: AI-optimized staff scheduling based on forecasted demand, skill requirements, and staff preferences.",
    "Order Management: Seamless order taking, kitchen communication, and service timing with mobile device integration.",
    "Performance Analytics: Comprehensive F&B performance metrics, sales analysis, and profitability tracking by item and service period."
  ];
  
  const designApproach = [
    "Streamlines all aspects of food and beverage operations, ensuring exceptional dining experiences.",
    "15-20% increase in F&B revenue through optimized menu engineering and service efficiency.",
    "25% reduction in food waste and 15% reduction in inventory costs through intelligent management.",
    "30% improvement in staff productivity through optimized scheduling and streamlined workflows.",
    "Consistently exceptional dining experiences with personalized service and reduced wait times.",
    "Data-driven decision making for menu development, pricing, and service optimization."
  ];
  
  const personas = [
    {
      name: "David Chen",
      role: "F&B Director",
      description: "Oversees all food and beverage operations across Éclat properties."
    },
    {
      name: "Sophia Rodriguez",
      role: "Chef de Cuisine",
      description: "Manages kitchen operations, menu planning, and food preparation."
    },
    {
      name: "Marcus Johnson",
      role: "Service Manager",
      description: "Coordinates front-of-house staff and ensures exceptional guest experiences."
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <ContentPage
        title={title}
        icon={icon}
        description={description}
        imageUrl={imageUrl}
        keyComponents={keyComponents}
        designApproach={designApproach}
        personas={personas}
      />
      
      {/* Additional Content Section */}
      <motion.div 
        className="mt-12 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            Hospitality OS seamlessly connects with other Eclat OS modules to create a cohesive dining experience:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Coordinates F&B service for events with specialized menus and staffing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-community/20 text-xs font-medium text-module-community mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Community OS:</span> Tracks member dining preferences and facilitates community dining experiences</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <Coffee className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Enables desk/office ordering and coordinates meeting room catering</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-marketing/20 text-xs font-medium text-module-marketing mt-0.5">
                <ShoppingCart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Marketing OS:</span> Supports F&B promotions, special events, and loyalty programs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <BarChart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides comprehensive F&B performance metrics and member insights</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                15-20% increase in F&B revenue through optimized menu engineering and service efficiency.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                25% reduction in food waste and 15% reduction in inventory costs through intelligent management.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Service Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Consistently exceptional dining experiences with personalized service and reduced wait times.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Staff Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                30% improvement in staff productivity through optimized scheduling and streamlined workflows.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Member Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Significantly improved dining satisfaction through personalized experiences and preference tracking.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Operational Insight</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven decision making for menu development, pricing, and service optimization.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <a 
            href="/event-os" 
            className="group inline-flex items-center gap-2 text-module-hospitality font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Event OS
          </a>
          <a 
            href="/marketing-os" 
            className="group inline-flex items-center gap-2 text-module-hospitality font-medium hover:underline"
          >
            Next: Marketing OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HospitalityOSPage;

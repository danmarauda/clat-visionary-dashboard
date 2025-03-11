
import React from 'react';
import { 
  Utensils, 
  Coffee, 
  ShoppingCart, 
  Users, 
  Clock, 
  BarChart
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const HospitalityOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="hospitalityOS"
      moduleColor="hospitality"
      tagline="Exceptional Service. Memorable Experiences."
      description="Sophisticated food & beverage management platform that elevates the dining and service experience across all Éclat properties."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Table Management: Interactive floor plans, reservation management, and real-time table status tracking with wait time predictions.",
        "Menu Management: Digital menu creation, seasonal updates, pricing optimization, and dietary preference tracking.",
        "Inventory Control: Real-time inventory tracking, automated ordering, supplier management, and waste reduction analytics.",
        "Staff Scheduling: AI-optimized staff scheduling based on forecasted demand, skill requirements, and staff preferences.",
        "Order Management: Seamless order taking, kitchen communication, and service timing with mobile device integration.",
        "Performance Analytics: Comprehensive F&B performance metrics, sales analysis, and profitability tracking by item and service period."
      ]}
      businessImpact={[
        {
          title: "Revenue Growth",
          description: "Increase in F&B revenue through optimized menu engineering and service efficiency."
        },
        {
          title: "Cost Reduction",
          description: "Reduction in food waste and inventory costs through intelligent management."
        },
        {
          title: "Service Excellence",
          description: "Consistently exceptional dining experiences with personalized service and reduced wait times."
        },
        {
          title: "Staff Efficiency",
          description: "Improvement in staff productivity through optimized scheduling and streamlined workflows."
        },
        {
          title: "Member Satisfaction",
          description: "Significantly improved dining satisfaction through personalized experiences and preference tracking."
        },
        {
          title: "Operational Insight",
          description: "Data-driven decision making for menu development, pricing, and service optimization."
        }
      ]}
      integrationPoints={[
        {
          icon: Clock,
          module: "event",
          description: "Coordinates F&B service for events with specialized menus and staffing"
        },
        {
          icon: Users,
          module: "community",
          description: "Tracks member dining preferences and facilitates community dining experiences"
        },
        {
          icon: Coffee,
          module: "workspace",
          description: "Enables desk/office ordering and coordinates meeting room catering"
        },
        {
          icon: ShoppingCart,
          module: "marketing",
          description: "Supports F&B promotions, special events, and loyalty programs"
        },
        {
          icon: BarChart,
          module: "analytics",
          description: "Provides comprehensive F&B performance metrics and member insights"
        }
      ]}
      designApproach={[
        "Streamlines all aspects of food and beverage operations, ensuring exceptional dining experiences.",
        "Increase in F&B revenue through optimized menu engineering and service efficiency.",
        "Reduction in food waste and reduction in inventory costs through intelligent management.",
        "Improvement in staff productivity through optimized scheduling and streamlined workflows.",
        "Consistently exceptional dining experiences with personalized service and reduced wait times.",
        "Data-driven decision making for menu development, pricing, and service optimization."
      ]}
      personas={[
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        }
      ]}
      prevModule={{ name: "Event OS", path: "/event-os" }}
      nextModule={{ name: "Marketing OS", path: "/marketing-os" }}
    />
  );
};

export default HospitalityOSPage;

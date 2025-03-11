
import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Network, 
  Award, 
  Heart
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const CommunityOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="communityOS"
      moduleColor="community"
      tagline="Meaningful Connections. Vibrant Community."
      description="Sophisticated member engagement platform that fosters meaningful connections and enhances the Éclat community experience."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Member Profiles: Rich member profiles with interests, skills, and networking preferences for meaningful connections.",
        "Intelligent Networking: AI-powered member matching based on professional goals, interests, and potential synergies.",
        "Community Calendar: Curated events, workshops, and networking opportunities with personalized recommendations.",
        "Discussion Forums: Topic-based discussion spaces for knowledge sharing, collaboration, and community building.",
        "Recognition System: Member achievements, contributions, and milestones celebrated through digital recognition.",
        "Wellness Programs: Community-driven wellness initiatives, challenges, and support groups for holistic wellbeing."
      ]}
      businessImpact={[
        {
          title: "Member Retention",
          description: "Increase in member retention through stronger community bonds and engagement."
        },
        {
          title: "Referral Growth",
          description: "Increase in member referrals driven by positive community experiences."
        },
        {
          title: "Brand Loyalty",
          description: "Strengthened emotional connection to the Éclat brand through community identity."
        },
        {
          title: "Value Perception",
          description: "Enhanced perceived value of membership beyond physical space and amenities."
        },
        {
          title: "Business Opportunities",
          description: "Increased business transactions and collaborations between members."
        },
        {
          title: "Feedback Loop",
          description: "Direct channel for member feedback and continuous service improvement."
        }
      ]}
      integrationPoints={[
        {
          icon: Calendar,
          module: "event",
          description: "Synchronizes community events with venue availability and resources"
        },
        {
          icon: Users,
          module: "workspace",
          description: "Facilitates collaboration spaces based on community interests and activities"
        },
        {
          icon: Heart,
          module: "hospitality",
          description: "Coordinates community dining experiences and special F&B offerings"
        },
        {
          icon: MessageSquare,
          module: "marketing",
          description: "Leverages community engagement for targeted communications and campaigns"
        },
        {
          icon: Award,
          module: "analytics",
          description: "Provides engagement metrics and community health indicators"
        }
      ]}
      designApproach={[
        "Increase in member retention through stronger community bonds and engagement.",
        "Increase in member referrals driven by positive community experiences.",
        "Strengthened emotional connection to the Éclat brand through community identity.",
        "Enhanced perceived value of membership beyond physical space and amenities.",
        "Increased business transactions and collaborations between members.",
        "Direct channel for member feedback and continuous service improvement."
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
      prevModule={{ name: "Building OS", path: "/building-os" }}
      nextModule={{ name: "Design OS", path: "/design-os" }}
    />
  );
};

export default CommunityOSPage;

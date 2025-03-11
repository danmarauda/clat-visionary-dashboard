
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { Coffee, Users, Building, Calendar, Bookmark } from 'lucide-react';

const ParlorPorticoPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="space-y-6">
        <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-lg">
          <img 
            src="/lovable-uploads/875ae15b-f940-40e5-a0c2-34bba9321221.png" 
            alt="Parlor & Portico" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Parlor & Portico</h1>
            <p className="text-white/80 mt-2">Business Club & Hospitality Services</p>
          </div>
        </div>
        
        <p className="text-muted-foreground text-lg">
          Parlor & Portico represents our premium business club and hospitality offerings, 
          combining exclusive membership experiences with world-class service in elegant settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass rounded-xl p-6 space-y-4">
          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Coffee className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Business Club</h2>
          <p className="text-muted-foreground">
            An exclusive membership-based workspace and networking environment designed for professionals
            seeking luxury amenities and high-end services in a sophisticated setting.
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Private meeting spaces and members-only lounges</span>
            </li>
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Concierge services and personalized assistance</span>
            </li>
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Curated networking events and speaker series</span>
            </li>
          </ul>
        </div>

        <div className="glass rounded-xl p-6 space-y-4">
          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Building className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Portico Experience</h2>
          <p className="text-muted-foreground">
            Our hospitality offering that extends beyond physical spaces, creating memorable experiences
            through exceptional service, elegant environments, and carefully curated programming.
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Premium food and beverage service</span>
            </li>
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Signature events and cultural programming</span>
            </li>
            <li className="flex items-start gap-3">
              <Bookmark className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Personalized hospitality experiences</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="glass rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold">éclatOS Integration</h2>
        <p className="text-muted-foreground">
          The Parlor & Portico experience will be enhanced through deep integration with the éclatOS platform, 
          providing both members and staff with powerful digital tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Member Experience</span>
            </h3>
            <ul className="space-y-2 pl-7">
              <li className="list-disc text-muted-foreground">Mobile access control and digital membership cards</li>
              <li className="list-disc text-muted-foreground">Seamless event booking and space reservations</li>
              <li className="list-disc text-muted-foreground">Personalized content and communication</li>
              <li className="list-disc text-muted-foreground">Community networking and collaboration tools</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Operations Management</span>
            </h3>
            <ul className="space-y-2 pl-7">
              <li className="list-disc text-muted-foreground">Integrated CRM and membership management</li>
              <li className="list-disc text-muted-foreground">Staff scheduling and service coordination</li>
              <li className="list-disc text-muted-foreground">Event planning and resource allocation</li>
              <li className="list-disc text-muted-foreground">Performance analytics and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParlorPorticoPage;

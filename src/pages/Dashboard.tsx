import React from 'react';
import { BarChart3, Users, Calendar, ArrowRight, Clock, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { GreenButton } from "@/components/ui/GreenButton";

const Dashboard: React.FC = () => {
  const metrics = [
    { value: "86%", label: "Space Utilization", change: "+4%", positive: true },
    { value: "3,254", label: "Monthly Visits", change: "+12%", positive: true },
    { value: "98.2%", label: "Member Satisfaction", change: "-0.5%", positive: false },
  ];

  const upcomingEvents = [
    { time: "9:00 AM", title: "Executive Briefing", location: "Conference Room A" },
    { time: "11:30 AM", title: "Design Review", location: "Studio 4" },
    { time: "2:00 PM", title: "Member Orientation", location: "Welcome Lounge" },
    { time: "4:30 PM", title: "Community Mixer", location: "Social Hub" },
  ];

  const insights = [
    { icon: <BarChart3 className="h-5 w-5" />, title: "Space Analytics", description: "Utilization is up 4% compared to last month" },
    { icon: <Users className="h-5 w-5" />, title: "Community Growth", description: "12 new members joined this week" },
    { icon: <Calendar className="h-5 w-5" />, title: "Event Performance", description: "Recent events are at 92% capacity" },
    { icon: <Clock className="h-5 w-5" />, title: "Resource Efficiency", description: "Meeting room availability improved by 8%" },
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center mt-4">
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          System Overview
        </span>
      </div>

      <div className="flex flex-col items-center text-center py-8 space-y-1 mt-16">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Real-time Insights.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Informed Decisions.</h2>
        
        <div className="my-24 py-8">
          <span className="text-8xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Dashboard
          </span>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mb-8">
          A comprehensive overview of your workspace ecosystem's performance and analytics.
        </p>

        <div className="w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white leading-[1.2] tracking-wide">
                Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">An overview of your workspace ecosystem</p>
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search dashboard..." 
                  className="pl-9 h-10 pr-4 bg-secondary/50 border border-border/40 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <GreenButton 
                label="Export" 
                className="h-10 w-auto" 
                icon={<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="glass rounded-lg p-6 transition-all hover:border-white/20">
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-white mb-1">{metric.value}</span>
                  <span className="text-sm text-muted-foreground mb-3">{metric.label}</span>
                  <span className={cn(
                    "text-xs font-light",
                    metric.positive ? "text-green-400" : "text-red-400"
                  )}>
                    {metric.change} from last month
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass rounded-lg p-6">
              <h2 className="text-xl font-light mb-6">Key Insights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {insight.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">{insight.title}</h3>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-light">Today's Schedule</h2>
                <GreenButton 
                  label="View Calendar" 
                  className="h-8 text-xs" 
                  icon={<ArrowRight className="ml-1 h-3 w-3" />}
                />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 p-3 border border-white/5 rounded-md hover:border-white/20 transition-colors"
                  >
                    <div className="text-center">
                      <span className="text-xs text-muted-foreground block">{event.time}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{event.title}</h3>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass rounded-lg p-6">
            <div className="grid grid-cols-3 divide-x divide-white/5">
              {[
                { value: "25", label: "Active Modules" },
                { value: "97%", label: "System Uptime" },
                { value: "142", label: "Active Members" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center"
                >
                  <span className="text-2xl font-light text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground font-light">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

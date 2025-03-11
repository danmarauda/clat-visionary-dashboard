
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Clock, Calendar, CheckCheck, Layers, Zap, Users } from "lucide-react";

const DeliveryTimelinePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const phases = [
    {
      title: "Phase 1: Discovery & Planning",
      description: "Comprehensive analysis of current systems, workflows, and requirements across all Éclat properties.",
      tasks: [
        "Stakeholder interviews and requirements gathering",
        "Current system audit and data mapping",
        "Technical architecture planning",
        "UX research and user journey mapping",
        "Project plan finalization"
      ],
      icon: <Clock className="h-5 w-5 text-primary" />,
      color: "border-blue-500"
    },
    {
      title: "Phase 2: Core Platform Development",
      description: "Development of the foundational éclatOS platform architecture and essential modules.",
      tasks: [
        "Data model and API development",
        "Authentication and security implementation",
        "analyticsOS and buildingOS module development",
        "Core UI components and design system creation",
        "Initial integration with existing systems"
      ],
      icon: <Layers className="h-5 w-5 text-primary" />,
      color: "border-purple-500"
    },
    {
      title: "Phase 3: Module Expansion",
      description: "Development and integration of remaining specialized modules with the core platform.",
      tasks: [
        "workspaceOS and communityOS module development",
        "eventOS and hospitalityOS module development",
        "marketingOS and designOS module development",
        "Cross-module integration and data flow optimization",
        "Advanced analytics and reporting implementation"
      ],
      icon: <Zap className="h-5 w-5 text-primary" />,
      color: "border-green-500"
    },
    {
      title: "Phase 4: Testing & Refinement",
      description: "Comprehensive testing and optimization of the entire éclatOS platform.",
      tasks: [
        "User acceptance testing with key stakeholders",
        "Performance optimization and load testing",
        "Security auditing and vulnerability assessment",
        "Data migration and integrity validation",
        "UI/UX refinement based on user feedback"
      ],
      icon: <CheckCheck className="h-5 w-5 text-primary" />,
      color: "border-orange-500"
    },
    {
      title: "Phase 5: Pilot Deployment",
      description: "Controlled rollout to a single Éclat property with comprehensive support and monitoring.",
      tasks: [
        "Staff training and documentation delivery",
        "Phased module deployment at pilot location",
        "Real-time monitoring and issue resolution",
        "User feedback collection and implementation",
        "Performance metrics tracking and analysis"
      ],
      icon: <Calendar className="h-5 w-5 text-primary" />,
      color: "border-red-500"
    },
    {
      title: "Phase 6: Full Deployment & Optimization",
      description: "Rollout across all Éclat properties with ongoing optimization and support.",
      tasks: [
        "Phased deployment across remaining properties",
        "Advanced feature implementation and customization",
        "Staff training and change management support",
        "System performance monitoring and optimization",
        "Continuous improvement and feature enhancement"
      ],
      icon: <Users className="h-5 w-5 text-primary" />,
      color: "border-indigo-500"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium w-fit">
              <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
              Implementation Plan
            </div>
            <h1 className="text-4xl font-bold">Delivery Timeline</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive implementation plan for the éclatOS, designed for minimal disruption and maximum value delivery.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="space-y-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Implementation Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our implementation approach for éclatOS is designed to deliver value incrementally while minimizing disruption to ongoing operations. The plan follows these key principles:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Phased Deployment:</span> Modules will be deployed incrementally, allowing for adaptation and learning throughout the process</li>
                <li><span className="font-medium">Pilot-First Strategy:</span> Initial deployment at a single property enables refinement before full rollout</li>
                <li><span className="font-medium">Parallel Development:</span> Multiple modules will be developed simultaneously by specialized teams</li>
                <li><span className="font-medium">Continuous Integration:</span> Regular integration ensures all modules work together seamlessly</li>
                <li><span className="font-medium">Stakeholder Involvement:</span> Key stakeholders will be involved throughout to ensure alignment with business needs</li>
              </ul>
            </CardContent>
          </Card>

          <div className="relative">
            <div className="absolute left-[27px] top-10 bottom-10 w-px bg-border" />
            
            {phases.map((phase, index) => (
              <motion.div 
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className={`absolute left-0 top-10 h-5 w-5 rounded-full bg-background border-2 ${phase.color} z-10`} />
                <div className="ml-12">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{phase.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Deliverables:</h4>
                        <ul className="space-y-1">
                          {phase.tasks.map((task) => (
                            <li key={`${phase.title}-${task}`} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Post-Implementation Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Following the full deployment, our team will provide comprehensive support to ensure the long-term success of éclatOS:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Dedicated Support Team:</span> 24/7 technical support for the first 3 months post-deployment</li>
                <li><span className="font-medium">Regular Updates:</span> Scheduled maintenance and feature updates on a quarterly basis</li>
                <li><span className="font-medium">Performance Reviews:</span> Monthly performance reviews and optimization recommendations</li>
                <li><span className="font-medium">Training Resources:</span> Ongoing training for new staff and advanced feature adoption</li>
                <li><span className="font-medium">Strategic Consulting:</span> Quarterly strategic sessions to align platform evolution with business goals</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a 
            href="/budget" 
            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Budget
          </a>
          <a 
            href="/team" 
            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Next: Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryTimelinePage;

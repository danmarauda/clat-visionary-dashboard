import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { GanttChart } from "@/components/GanttChart";

const GanttChartPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Using the same phase data as in DeliveryTimeline
  const phases = [
    {
      id: "phase-1",
      title: "Phase 1: Discovery & Planning",
      start: new Date(2024, 5, 1), // June 1, 2024
      end: new Date(2024, 6, 15),  // July 15, 2024
      tasks: [
        { 
          id: "p1-t1", 
          title: "Stakeholder interviews and requirements gathering",
          start: new Date(2024, 5, 1),
          end: new Date(2024, 5, 15),
        },
        { 
          id: "p1-t2", 
          title: "Current system audit and data mapping",
          start: new Date(2024, 5, 10),
          end: new Date(2024, 5, 25),
        },
        { 
          id: "p1-t3", 
          title: "Technical architecture planning",
          start: new Date(2024, 5, 20),
          end: new Date(2024, 6, 5),
        },
        { 
          id: "p1-t4", 
          title: "UX research and user journey mapping",
          start: new Date(2024, 5, 25),
          end: new Date(2024, 6, 10),
        },
        { 
          id: "p1-t5", 
          title: "Project plan finalization",
          start: new Date(2024, 6, 5),
          end: new Date(2024, 6, 15),
        }
      ],
      color: "blue"
    },
    {
      id: "phase-2",
      title: "Phase 2: Core Platform Development",
      start: new Date(2024, 6, 16), // July 16, 2024
      end: new Date(2024, 8, 30),   // September 30, 2024
      tasks: [
        { 
          id: "p2-t1", 
          title: "Data model and API development",
          start: new Date(2024, 6, 16),
          end: new Date(2024, 7, 15),
        },
        { 
          id: "p2-t2", 
          title: "Authentication and security implementation",
          start: new Date(2024, 7, 1),
          end: new Date(2024, 7, 20),
        },
        { 
          id: "p2-t3", 
          title: "analyticsOS and buildingOS module development",
          start: new Date(2024, 7, 10),
          end: new Date(2024, 8, 10),
        },
        { 
          id: "p2-t4", 
          title: "Core UI components and design system creation",
          start: new Date(2024, 7, 15),
          end: new Date(2024, 8, 15),
        },
        { 
          id: "p2-t5", 
          title: "Initial integration with existing systems",
          start: new Date(2024, 8, 1),
          end: new Date(2024, 8, 30),
        }
      ],
      color: "purple"
    },
    {
      id: "phase-3",
      title: "Phase 3: Module Expansion",
      start: new Date(2024, 9, 1),  // October 1, 2024
      end: new Date(2024, 11, 15),  // December 15, 2024
      tasks: [
        { 
          id: "p3-t1", 
          title: "workspaceOS and communityOS module development",
          start: new Date(2024, 9, 1),
          end: new Date(2024, 10, 15),
        },
        { 
          id: "p3-t2", 
          title: "eventOS and hospitalityOS module development",
          start: new Date(2024, 9, 15),
          end: new Date(2024, 10, 30),
        },
        { 
          id: "p3-t3", 
          title: "marketingOS and designOS module development",
          start: new Date(2024, 10, 1),
          end: new Date(2024, 11, 15),
        },
        { 
          id: "p3-t4", 
          title: "Cross-module integration and data flow optimization",
          start: new Date(2024, 10, 15),
          end: new Date(2024, 11, 10),
        },
        { 
          id: "p3-t5", 
          title: "Advanced analytics and reporting implementation",
          start: new Date(2024, 10, 25),
          end: new Date(2024, 11, 15),
        }
      ],
      color: "green"
    },
    {
      id: "phase-4",
      title: "Phase 4: Testing & Refinement",
      start: new Date(2024, 11, 16), // December 16, 2024
      end: new Date(2025, 1, 15),    // February 15, 2025
      tasks: [
        { 
          id: "p4-t1", 
          title: "User acceptance testing with key stakeholders",
          start: new Date(2024, 11, 16),
          end: new Date(2025, 0, 15),
        },
        { 
          id: "p4-t2", 
          title: "Performance optimization and load testing",
          start: new Date(2024, 11, 20),
          end: new Date(2025, 0, 20),
        },
        { 
          id: "p4-t3", 
          title: "Security auditing and vulnerability assessment",
          start: new Date(2025, 0, 1),
          end: new Date(2025, 0, 25),
        },
        { 
          id: "p4-t4", 
          title: "Data migration and integrity validation",
          start: new Date(2025, 0, 15),
          end: new Date(2025, 1, 5),
        },
        { 
          id: "p4-t5", 
          title: "UI/UX refinement based on user feedback",
          start: new Date(2025, 0, 25),
          end: new Date(2025, 1, 15),
        }
      ],
      color: "orange"
    },
    {
      id: "phase-5",
      title: "Phase 5: Pilot Deployment",
      start: new Date(2025, 1, 16),  // February 16, 2025
      end: new Date(2025, 3, 15),    // April 15, 2025
      tasks: [
        { 
          id: "p5-t1", 
          title: "Staff training and documentation delivery",
          start: new Date(2025, 1, 16),
          end: new Date(2025, 2, 5),
        },
        { 
          id: "p5-t2", 
          title: "Phased module deployment at pilot location",
          start: new Date(2025, 2, 1),
          end: new Date(2025, 2, 25),
        },
        { 
          id: "p5-t3", 
          title: "Real-time monitoring and issue resolution",
          start: new Date(2025, 2, 10),
          end: new Date(2025, 3, 5),
        },
        { 
          id: "p5-t4", 
          title: "User feedback collection and implementation",
          start: new Date(2025, 2, 15),
          end: new Date(2025, 3, 10),
        },
        { 
          id: "p5-t5", 
          title: "Performance metrics tracking and analysis",
          start: new Date(2025, 2, 25),
          end: new Date(2025, 3, 15),
        }
      ],
      color: "red"
    },
    {
      id: "phase-6",
      title: "Phase 6: Full Deployment & Optimization",
      start: new Date(2025, 3, 16),  // April 16, 2025
      end: new Date(2025, 5, 30),    // June 30, 2025
      tasks: [
        { 
          id: "p6-t1", 
          title: "Phased deployment across remaining properties",
          start: new Date(2025, 3, 16),
          end: new Date(2025, 4, 15),
        },
        { 
          id: "p6-t2", 
          title: "Advanced feature implementation and customization",
          start: new Date(2025, 4, 1),
          end: new Date(2025, 4, 30),
        },
        { 
          id: "p6-t3", 
          title: "Staff training and change management support",
          start: new Date(2025, 4, 15),
          end: new Date(2025, 5, 10),
        },
        { 
          id: "p6-t4", 
          title: "System performance monitoring and optimization",
          start: new Date(2025, 4, 20),
          end: new Date(2025, 5, 20),
        },
        { 
          id: "p6-t5", 
          title: "Continuous improvement and feature enhancement",
          start: new Date(2025, 5, 1),
          end: new Date(2025, 5, 30),
        }
      ],
      color: "indigo"
    }
  ];
  
  return (
    <div className="w-full px-4 py-8 pb-24">
      <div className="w-full mx-auto">
        <div className="mb-8">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium w-fit">
              <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
              Gantt Chart View
            </div>
            <h1 className="text-4xl font-bold">Delivery Timeline</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive implementation plan visualized as a Gantt chart to track project phases and milestones.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="space-y-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>éclatOS Implementation Gantt Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[700px] w-full">
                <GanttChart phases={phases} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-between w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a 
            href="/timeline" 
            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Timeline View
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

export default GanttChartPage;


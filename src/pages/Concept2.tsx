import { Button } from "@/components/ui/button";
import { Circle, Fingerprint, Users, Building, BarChart, 
         Calendar, Pen, Coffee, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface OSModule {
    id: string;
    gradientColors: string[];
    title: string;
    description: string;
    icon: React.ElementType;
    benefits?: string[];
    status?: string;
    tags?: string[];
}

const OS_MODULES: OSModule[] = [
    {
        id: "community",
        gradientColors: [
            "from-violet-500/20",
            "via-fuchsia-500/20",
            "to-cyan-500/20",
        ],
        icon: Users,
        title: "communityOS",
        description:
            "Create vibrant, connected member communities with sophisticated engagement tools",
        benefits: [
            "AI-powered member matching for meaningful connections",
            "Rich member profiles and interest-based networking",
            "Community calendar and discussion forums",
        ],
        status: "Core",
        tags: ["Community", "Engagement", "Networking"],
    },
    {
        id: "building",
        gradientColors: [
            "from-amber-500/20",
            "via-orange-500/20",
            "to-red-500/20",
        ],
        icon: Building,
        title: "buildingOS",
        description:
            "Intelligent building management with seamless facility control",
        status: "Core",
        tags: ["Facilities", "Automation"],
    },
    {
        id: "analytics",
        gradientColors: [
            "from-emerald-500/20",
            "via-teal-500/20",
            "to-cyan-500/20",
        ],
        icon: BarChart,
        title: "analyticsOS",
        description:
            "Real-time insights and data visualization for operational excellence",
        status: "Enhanced",
        tags: ["Data", "Insights"],
    },
    {
        id: "event",
        gradientColors: [
            "from-blue-500/20",
            "via-indigo-500/20", 
            "to-purple-500/20",
        ],
        icon: Calendar,
        title: "eventOS",
        description:
            "Comprehensive event management tools for impactful experiences",
        status: "Core",
        tags: ["Events", "Planning"],
    },
    {
        id: "design",
        gradientColors: [
            "from-pink-500/20",
            "via-rose-500/20",
            "to-red-500/20",
        ],
        icon: Pen,
        title: "designOS",
        description:
            "Advanced space design tools and environmental customization",
        status: "Enhanced",
        tags: ["Design", "Spaces"],
    },
    {
        id: "hospitality",
        gradientColors: [
            "from-amber-500/20",
            "via-yellow-500/20",
            "to-orange-500/20",
        ],
        icon: Coffee,
        title: "hospitalityOS",
        description:
            "Premium hospitality management for exceptional member experiences",
        status: "Core",
        tags: ["Service", "F&B"],
    },
];

const BusinessImpact = () => {
    const impacts = [
        {
            title: "Enhanced Member Experience",
            description: "Deliver seamless, integrated experiences across all touchpoints",
            icon: CheckCircle2,
        },
        {
            title: "Operational Efficiency",
            description: "Streamline processes and reduce manual workflows by up to 40%",
            icon: CheckCircle2,
        },
        {
            title: "Data-Driven Insights",
            description: "Make informed decisions based on comprehensive analytics",
            icon: CheckCircle2,
        },
        {
            title: "Scalable Growth",
            description: "Support business expansion with flexible, modular architecture",
            icon: CheckCircle2,
        }
    ];
    
    return (
        <div className="py-16">
            <h2 className="text-3xl font-bold text-white/90 text-center mb-12">
                Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impacts.map((impact, index) => (
                    <motion.div
                        key={impact.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="group relative p-6 rounded-xl overflow-hidden
                            bg-white/5 backdrop-blur-sm
                            border border-white/10
                            hover:border-white/20
                            transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-full bg-primary/20 text-primary">
                                <impact.icon size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white/90 mb-2">
                                    {impact.title}
                                </h3>
                                <p className="text-sm text-white/60">
                                    {impact.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Concept2 = () => {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden -mt-20 -mx-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div
                    className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
                    tracking-tighter [writing-mode:vertical-rl] blur-[1px]"
                >
                    ÉCLAT
                </div>
                <div
                    className="absolute -right-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
                    tracking-tighter [writing-mode:vertical-rl] blur-[1px]"
                >
                    SYSTEM
                </div>
            </div>

            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-4xl font-light leading-tight tracking-wide">A unified system for</h1>
                            <h1 className="text-4xl font-light leading-tight tracking-wide">exceptional spaces.</h1>
                            
                            <div className="my-4">
                                <h2 className="text-4xl font-light leading-tight tracking-wide text-primary">éclatOS</h2>
                            </div>
                            
                            <p className="max-w-2xl text-sm text-muted-foreground mt-8">
                                éclatOS combines powerful modules for building management, 
                                hospitality, events, community, and analytics into one seamless 
                                platform designed for premium spaces.
                            </p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <button
                                    type="button"
                                    className="relative h-12 px-10 group overflow-hidden
                                        bg-linear-to-br/oklch from-primary via-primary/95 to-primary/90
                                        hover:from-primary/95 hover:via-primary/90 hover:to-primary/85
                                        text-white
                                        rounded-xl
                                        border border-primary/20
                                        dark:border-white
                                        inset-shadow-xs shadow-primary/10
                                        hover:inset-shadow-sm hover:shadow-primary/20
                                        transition-all duration-500 ease-fluid"
                                >
                                    <div className="absolute inset-0 bg-radial-[at_50%_50%] from-white/[0.08] to-transparent" />
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                        opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                                    />
                                    <div className="relative flex items-center gap-3">
                                        <span className="text-base font-medium">
                                            Explore Modules
                                        </span>
                                        <Fingerprint className="w-3.5 h-3.5 text-white" />
                                    </div>
                                </button>
                                <Button
                                    variant="outline"
                                    className="relative h-12 px-10 group overflow-hidden
                                        bg-linear-110/oklch from-white/[0.03] via-white/[0.05] to-white/[0.03]
                                        backdrop-blur-md
                                        border border-white/10
                                        rounded-xl
                                        text-white/90
                                        hover:text-white
                                        hover:bg-white/10
                                        hover:border-white/20
                                        inset-shadow-xs shadow-white/5
                                        hover:inset-shadow-sm hover:shadow-white/10
                                        transition-all duration-500 ease-fluid"
                                    aria-label="View Documentation"
                                >
                                    <div className="absolute inset-0 bg-radial-[at_50%_50%] from-white/[0.08] to-transparent" />
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                        opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                                    />
                                    <span className="relative text-base font-medium">
                                        View Proposal
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div id="modules" className="mb-20">
                        <h2 className="text-3xl font-bold text-white/90 text-center mb-12">
                            OS Modules
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {OS_MODULES.map((module, index) => (
                                <motion.div
                                    key={module.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className="group relative p-6 rounded-xl overflow-hidden
                                        bg-white/5 backdrop-blur-sm
                                        border border-white/10
                                        hover:border-white/20
                                        transition-all duration-300"
                                >
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-br opacity-20",
                                            ...module.gradientColors
                                        )}
                                    />
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                        opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                                    />

                                    <div className="relative space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-lg bg-white/10">
                                                    <module.icon className="h-5 w-5 text-white" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white tracking-tight">
                                                    {module.title}
                                                </h3>
                                            </div>
                                            {module.status && (
                                                <span
                                                    className="text-xs font-medium px-2.5 py-1 rounded-full
                                                    bg-primary/10 text-primary border border-primary/20
                                                    group-hover:bg-primary/15 transition-colors duration-300 shrink-0"
                                                >
                                                    {module.status}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm text-white/70">
                                            {module.description}
                                        </p>

                                        {module.benefits && (
                                            <ul className="space-y-2">
                                                {module.benefits.map((benefit) => (
                                                    <li
                                                        key={benefit}
                                                        className="flex items-center gap-2 text-xs text-white/70"
                                                    >
                                                        <div className="h-1 w-1 rounded-full bg-primary/50" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {module.tags && (
                                            <div className="flex flex-wrap gap-1.5 pt-2">
                                                {module.tags.map((tag) => (
                                                    <span
                                                        key={`${module.id}-${tag}`}
                                                        className="text-xs px-2 py-0.5 rounded-md
                                                            bg-white/5 text-white/70
                                                            border border-white/10
                                                            group-hover:bg-white/10 
                                                            transition-colors duration-300"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <div className="pt-2">
                                            <a 
                                                href={`/${module.id}-os`} 
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                            >
                                                Learn more <ArrowRight className="h-3.5 w-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <div id="integration" className="mb-20 glass rounded-2xl p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                        <h2 className="text-3xl font-bold text-white/90 text-center mb-8">
                            Seamless Integration
                        </h2>
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <p className="text-lg text-white/70">
                                éclatOS modules work together to create a unified experience while also connecting with your existing systems
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all duration-300">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/20 mb-2">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium">Unified Member Experience</h3>
                                    <p className="text-sm text-white/60">
                                        Consistent, cohesive experience across all modules and touchpoints
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all duration-300">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/20 mb-2">
                                        <Building className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium">Centralized Management</h3>
                                    <p className="text-sm text-white/60">
                                        Single dashboard to monitor and control all aspects of operations
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all duration-300">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/20 mb-2">
                                        <MessageSquare className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium">API-First Architecture</h3>
                                    <p className="text-sm text-white/60">
                                        Easily connect with third-party systems and extend functionality
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <BusinessImpact />
                    
                    <div className="mt-16 text-center">
                        <a 
                            href="/concept-1" 
                            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline mr-8"
                        >
                            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                            Previous: Concept 1
                        </a>
                        <a 
                            href="/executive-summary" 
                            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                            View Executive Summary
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concept2;

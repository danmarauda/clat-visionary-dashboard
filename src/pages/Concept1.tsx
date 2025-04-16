import { Button } from "@/components/ui/button";
import { Menu, X, Circle, Fingerprint } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavItem {
    label: string;
    href: string;
}

interface FeatureHighlight {
    id: string;
    gradientColors: string[];
    title: string;
    description: string;
    benefits?: string[];
    status?: string;
    tags?: string[];
}

const NAV_ITEMS: NavItem[] = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
];

const FEATURES: FeatureHighlight[] = [
    {
        id: "ai",
        gradientColors: [
            "from-violet-500/20",
            "via-fuchsia-500/20",
            "to-cyan-500/20",
        ],
        title: "Next-Gen AI Development",
        description:
            "Experience the future of coding with our advanced AI pair-programming system",
        benefits: [
            "Real-time code suggestions and auto-completion",
            "Intelligent bug detection and fixes",
            "Automated code reviews and optimization",
        ],
        status: "New",
        tags: ["GPT-4", "AutoDev", "Smart", "AI-Powered"],
    },
    {
        id: "performance",
        gradientColors: [
            "from-amber-500/20",
            "via-orange-500/20",
            "to-red-500/20",
        ],
        title: "Instant Hot Reload",
        description:
            "Sub-50ms hot reload with intelligent caching and predictive compilation",
        status: "Optimized",
        tags: ["Fast", "HMR"],
    },
    {
        id: "developer",
        gradientColors: [
            "from-emerald-500/20",
            "via-teal-500/20",
            "to-cyan-500/20",
        ],
        title: "Type-Safe by Default",
        description:
            "End-to-end type safety with zero config, powered by TypeScript 5.4",
        status: "Stable",
        tags: ["TypeScript", "Safe"],
    },
];

function NavigationMenu({
    isMenuOpen,
    setIsMenuOpen,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}) {
    return (
        <motion.div
            className={cn("md:hidden fixed inset-x-0 top-[4rem]")}
            initial={{ opacity: 0, y: -10 }}
            animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : -10,
            }}
            transition={{ duration: 0.2 }}
        >
            <div className="mx-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="p-4 space-y-3">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-white/70 hover:text-white rounded-lg
                                hover:bg-white/5 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                        <Button
                            variant="ghost"
                            className="w-full text-white/70 hover:text-white hover:bg-white/5"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign in
                        </Button>
                        <Button
                            className="w-full bg-accent text-white hover:bg-accent/90"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Start Free
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const Concept1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden -mt-20 -mx-6">
            {/* Removed the fixed/floating navbar */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                bg-accent/10 border border-accent/20 mb-8 backdrop-blur-sm"
                            >
                                <span className="text-sm font-medium text-accent flex items-center gap-2">
                                    Now in Public Beta!
                                </span>
                            </div>

                            <div className="space-y-8">
                                <motion.h1
                                    className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="inline-block"
                                    >
                                        Build faster with
                                    </motion.span>
                                    <motion.span
                                        className="block mt-4 text-accent relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4,
                                        }}
                                    >
                                        <span className="relative z-10">
                                            Acme
                                        </span>
                                        <div className="absolute inset-0 bg-accent/10 blur-3xl -z-10 animate-pulse" />
                                    </motion.span>
                                </motion.h1>

                                <motion.p
                                    className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Experience the next generation of
                                    development tools. Automate your workflow,
                                    collaborate seamlessly, and ship products
                                    faster than ever before.
                                </motion.p>

                                <motion.div
                                    className="flex flex-col sm:flex-row gap-6 justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <button
                                        type="button"
                                        className="relative h-12 px-10 group overflow-hidden
                                            bg-linear-to-br/oklch from-accent via-accent/95 to-accent/90
                                            hover:from-accent/95 hover:via-accent/90 hover:to-accent/85
                                            text-white
                                            rounded-xl
                                            border border-accent/20
                                            dark:border-white
                                            inset-shadow-xs shadow-accent/10
                                            hover:inset-shadow-sm hover:shadow-accent/20
                                            transition-all duration-500 ease-fluid"
                                    >
                                        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-white/[0.08] to-transparent" />
                                        <div
                                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                            opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                                        />
                                        <div className="relative flex items-center gap-3">
                                            <span className="text-base font-medium">
                                                Get Started Free
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
                                            View Documentation
                                        </span>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4">
                        <motion.div
                            key={FEATURES[0].id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="group relative flex-1 p-6 rounded-xl overflow-hidden
                                bg-linear-110/oklch from-white/[0.03] via-white/[0.05] to-white/[0.03]
                                backdrop-blur-md
                                border border-white/10
                                hover:border-white/20
                                inset-shadow-xs shadow-white/5
                                hover:inset-shadow-sm hover:shadow-white/10
                                transition-all duration-500 ease-fluid"
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-20",
                                    ...FEATURES[0].gradientColors
                                )}
                            />
                            <div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                            />

                            <div className="relative space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white tracking-tight">
                                        {FEATURES[0].title}
                                    </h3>
                                    {FEATURES[0].status && (
                                        <span
                                            className="text-xs font-medium px-2.5 py-1 rounded-full
                                            bg-accent/10 text-accent border border-accent/20
                                            group-hover:bg-accent/15 transition-colors duration-300 shrink-0"
                                        >
                                            {FEATURES[0].status}
                                        </span>
                                    )}
                                </div>

                                <p className="text-base text-white/70">
                                    {FEATURES[0].description}
                                </p>

                                {FEATURES[0].benefits && (
                                    <ul className="space-y-2">
                                        {FEATURES[0].benefits.map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="flex items-center gap-2 text-sm text-white/70"
                                            >
                                                <div className="h-1 w-1 rounded-full bg-accent/50" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {FEATURES[0].tags && (
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {FEATURES[0].tags.map((tag) => (
                                            <span
                                                key={`${FEATURES[0].id}-${tag}`}
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
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            {FEATURES.slice(1).map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: (index + 1) * 0.1,
                                    }}
                                    className="group relative flex-1 p-4 rounded-xl overflow-hidden
                                        bg-linear-110/oklch from-white/[0.03] via-white/[0.05] to-white/[0.03]
                                        backdrop-blur-md
                                        border border-white/10
                                        hover:border-white/20
                                        inset-shadow-xs shadow-white/5
                                        hover:inset-shadow-sm hover:shadow-white/10
                                        transition-all duration-500 ease-fluid"
                                >
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-br opacity-20",
                                            ...feature.gradientColors
                                        )}
                                    />
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
                                        opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                                    />

                                    <div className="relative space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="text-base font-semibold text-white tracking-tight truncate">
                                                {feature.title}
                                            </h3>
                                            {feature.status && (
                                                <span
                                                    className="text-xs font-medium px-2 py-0.5 rounded-full
                                                    bg-accent/10 text-accent border border-accent/20
                                                    group-hover:bg-accent/15 transition-colors duration-300 shrink-0"
                                                >
                                                    {feature.status}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-white/70">
                                            {feature.description}
                                        </p>

                                        {feature.tags && (
                                            <div className="flex flex-wrap gap-1.5 pt-1.5">
                                                {feature.tags.map((tag) => (
                                                    <span
                                                        key={`${feature.id}-${tag}`}
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
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concept1;

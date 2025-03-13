
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import EclatLogo from '@/components/EclatLogo';

const menuItems = [
    { name: 'OS Modules', href: '/dashboard' },
    { name: 'Business Units', href: '/business-units' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'About', href: '/executive-summary' },
]

const Concept4: React.FC = () => {
    const [menuState, setMenuState] = useState(false);
    
    return (
        <>
            <header>
                <nav data-state={menuState ? 'active' : undefined} className="fixed z-20 w-full border-b border-dashed bg-background/80 backdrop-blur md:relative">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link to="/" aria-label="home" className="flex items-center space-x-2">
                                    <div className="flex items-center gap-2">
                                        <EclatLogo size="small" variant="light" />
                                        <span className="text-lg font-semibold text-foreground">éclatOS</span>
                                    </div>
                                </Link>

                                <button 
                                    onClick={() => setMenuState(!menuState)} 
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'} 
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                                >
                                    <Menu className={`m-auto size-6 duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : ''}`} />
                                    <X className={`absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : ''}`} />
                                </button>
                            </div>

                            <div className={`bg-background mb-6 ${menuState ? 'block' : 'hidden'} w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none`}>
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link to={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button asChild variant="outline" size="sm">
                                        <Link to="/support">
                                            <span>Support</span>
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm">
                                        <Link to="/dashboard">
                                            <span>Dashboard</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div aria-hidden className="z-2 absolute inset-0 isolate hidden opacity-50 lg:block">
                    <div className="absolute left-0 top-0 w-[140%] h-[320%] -translate-y-[87.5%] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="absolute left-0 top-0 w-60 h-[320%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] translate-y-[-50%]" />
                    <div className="absolute left-0 top-0 w-60 h-[320%] -translate-y-[87.5%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-background">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Modern Luxury Experience Platform
                            </h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl text-muted-foreground">
                                éclatOS reimagines luxury experiences through seamless integration of hospitality, design, analytics, and community management in one comprehensive platform.
                            </p>

                            <Button asChild size="lg" className="bg-gradient-to-r from-module-analytics to-module-hospitality hover:from-module-analytics/90 hover:to-module-hospitality/90">
                                <Link to="/dashboard">
                                    <span className="btn-label">Explore Platform</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl">
                        <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-module-analytics/20 via-module-event/10 to-module-design/20 opacity-50"></div>
                            <div className="relative p-8 md:p-12">
                                <div className="text-8xl font-bold text-center bg-gradient-to-r from-module-analytics via-module-hospitality to-module-event bg-clip-text text-transparent mb-12">
                                    éclatOS
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { name: "Analytics OS", color: "text-module-analytics" },
                                        { name: "Building OS", color: "text-module-building" },
                                        { name: "Hospitality OS", color: "text-module-hospitality" },
                                        { name: "Design OS", color: "text-module-design" },
                                        { name: "Event OS", color: "text-module-event" },
                                        { name: "Marketing OS", color: "text-module-marketing" },
                                        { name: "Community OS", color: "text-module-community" },
                                        { name: "Workspace OS", color: "text-module-workspace" }
                                    ].map((module, index) => (
                                        <div key={index} className="flex items-center justify-center p-4 rounded-lg border border-white/5 backdrop-blur-sm">
                                            <span className={`font-semibold ${module.color}`}>{module.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="bg-background relative z-10 py-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Trusted by top luxury enterprises around the world.</h2>
                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            {[
                                "Bureau", "Parlor & Portico", "Galerie", "Forme", "Noted"
                            ].map((brand, index) => (
                                <div key={index} className="px-6 py-3 rounded-full border border-border/40 bg-background/5 backdrop-blur-sm">
                                    <span className="font-medium text-foreground/80">{brand}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Concept4;

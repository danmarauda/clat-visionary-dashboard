
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom components needed for the UI experience
const InfiniteSlider = ({ children, speed = 40, speedOnHover = 20, gap = 112 }: {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
}) => {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="animate-infinite-slider flex">
        {React.Children.map(children, (child) => (
          <div className="mx-14 flex items-center justify-center">{child}</div>
        ))}
      </div>
      <div className="animate-infinite-slider flex" aria-hidden="true">
        {React.Children.map(children, (child) => (
          <div className="mx-14 flex items-center justify-center">{child}</div>
        ))}
      </div>
    </div>
  );
};

const ProgressiveBlur = ({ 
  className, 
  direction = "left", 
  blurIntensity = 1 
}: {
  className?: string;
  direction?: "left" | "right";
  blurIntensity?: number;
}) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-r",
        direction === "left" ? "from-background to-transparent" : "from-transparent to-background",
        className
      )}
      style={{ backdropFilter: `blur(${blurIntensity}px)` }}
    />
  );
};

const HeroHeader = () => {
  return (
    <header className="relative z-10 mt-6">
      <div className="container flex items-center justify-between">
        <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent text-2xl font-semibold">
          éclatOS
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li><Link to="/executive-summary" className="text-sm text-muted-foreground hover:text-foreground">Executive Summary</Link></li>
            <li><Link to="/os-modules" className="text-sm text-muted-foreground hover:text-foreground">OS Modules</Link></li>
            <li><Link to="/business-units" className="text-sm text-muted-foreground hover:text-foreground">Business Units</Link></li>
            <li><Link to="/timeline" className="text-sm text-muted-foreground hover:text-foreground">Timeline</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Concept3: React.FC = () => {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-40">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-3xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">Unify Your Luxury Experience</h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  A comprehensive operating system unifying all Éclat's luxury verticals through intelligent automation and seamless integration.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <Link to="/executive-summary">
                    <Button
                      size="lg"
                      className="h-12 rounded-full pl-5 pr-3 text-base bg-gradient-to-r from-module-analytics to-module-hospitality hover:from-module-analytics/90 hover:to-module-hospitality/90"
                    >
                      <span className="text-nowrap">Explore Platform</span>
                      <ChevronRight className="ml-1" />
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="h-12 rounded-full px-5 text-base hover:bg-white/5"
                    >
                      <span className="text-nowrap">View Dashboard</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-1 -z-10 mt-20 overflow-hidden rounded-3xl border border-white/10 lg:aspect-video lg:rounded-[3rem]">
              <div className="size-full object-cover opacity-50 dark:opacity-35 bg-gradient-to-br from-module-analytics/20 via-module-event/10 to-module-design/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-black/20 backdrop-blur-xl rounded-3xl border border-white/5 flex items-center justify-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-module-analytics via-module-hospitality to-module-event bg-clip-text text-transparent">
                      éclatOS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-white/10 md:pr-6">
                <p className="text-end text-sm text-muted-foreground">Powering luxury experiences</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-analytics font-semibold">AnalyticsOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-building font-semibold">BuildingOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-community font-semibold">CommunityOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-design font-semibold">DesignOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-event font-semibold">EventOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-hospitality font-semibold">HospitalityOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-marketing font-semibold">MarketingOS</div>
                  </div>
                  <div className="flex">
                    <div className="h-6 w-fit text-module-workspace font-semibold">WorkspaceOS</div>
                  </div>
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Concept3;

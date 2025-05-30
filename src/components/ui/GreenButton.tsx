
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label?: string;
    className?: string;
}

export const GreenButton = ({
    label = "Welcome",
    icon,
    className,
    ...props
}: GreenButtonProps) => {
    return (
        <Button
            className={cn(
                "group relative h-12 px-4 rounded-lg overflow-hidden transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Gradient border using pseudo-element */}
            <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#336C4F] via-[#0C1F21] to-[#0D6437]">
                <div className="absolute inset-0 bg-[#0C1F21] rounded-lg opacity-90" />
            </div>

            {/* Base dark background */}
            <div className="absolute inset-[2px] bg-[#0C1F21] rounded-lg opacity-95" />

            {/* Multiple gradient layers */}
            <div className="absolute inset-[2px] bg-gradient-to-r from-[#0C1F21] via-[#0C1F21] to-[#0C1F21] rounded-lg opacity-90" />
            <div className="absolute inset-[2px] bg-gradient-to-b from-[#347B52]/40 via-[#0C1F21] to-[#0D6437]/30 rounded-lg opacity-80" />
            <div className="absolute inset-[2px] bg-gradient-to-br from-[#87F6B7]/10 via-[#0C1F21] to-[#17362A]/50 rounded-lg" />

            {/* Subtle edge glow */}
            <div className="absolute inset-[2px] shadow-[inset_0_0_10px_rgba(135,246,183,0.1)] rounded-lg" />

            {/* Content wrapper */}
            <div className="relative flex items-center justify-center gap-2">
                {icon && <span className="text-[#8AEECA]">{icon}</span>}
                <span className="text-lg font-light bg-gradient-to-b from-[#8AEECA] to-[#73F8A8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(135,246,183,0.4)] tracking-tighter">
                    {label}
                </span>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#17362A]/20 via-[#87F6B7]/10 to-[#17362A]/20 group-hover:opacity-100 rounded-lg" />
        </Button>
    );
};

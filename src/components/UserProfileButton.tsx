
import React from 'react';
import { Button } from "@/components/ui/button";
import { UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserProfileButtonProps {
  userName?: string;
  userRole?: string;
  className?: string;
  onClick?: () => void;
}

const UserProfileButton: React.FC<UserProfileButtonProps> = ({
  userName = "Jesse Hayes",
  userRole = "Founder/Director",
  className,
  onClick
}) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn(
        "w-full justify-start gap-3 bg-background hover:bg-accent/10 border border-border/60 rounded-lg py-2 px-4 text-sm font-medium transition-colors h-auto",
        className
      )}
    >
      <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
        <UserRound className="h-4 w-4 text-primary" />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-medium text-foreground">{userName}</span>
        <span className="text-xs text-muted-foreground">{userRole}</span>
      </div>
    </Button>
  );
};

export default UserProfileButton;

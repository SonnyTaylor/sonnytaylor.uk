import {CalendarDays} from "lucide-react";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card";

export function HoverCardGithub() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="dark:text-white">
          @SonnyTaylor
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/135790742?v=4" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@SonnyTaylor</h4>
            <p className="text-sm">
              Frontend Developer, HTML, CSS and JavaScript enthusiast.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="w-4 h-4 mr-2 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined June 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

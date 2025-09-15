"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const MilestoneCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card 
      className=" py-2 cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-cover   "
            />
            <AvatarFallback className="text-sm font-medium">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <h3 className="font-semibold text-sm truncate">
                  {title}
                </h3>
                {badges && badges.length > 0 && (
                  <div className="flex gap-1 flex-wrap">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-300",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </div>
              <div className="text-sm text-gray-600 text-right whitespace-nowrap">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="text-sm text-black text-muted-foreground mt-1 truncate">
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <CardContent className="pt-0">
            <div className="text-sm leading-relaxed text-black ml-16">
              {description}
            </div>
          </CardContent>
        </motion.div>
      )}
    </Card>
  );
};

export default MilestoneCard;
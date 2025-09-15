"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/Components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const MilestoneCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
  achievements,
  location,
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
                {subtitle} {location && `• ${location}`}
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
            <div className="ml-16 space-y-4">
              {/* Description */}
              <div className="text-sm leading-relaxed text-black">
                {description}
              </div>
              
              {/* Achievements */}
              {achievements && achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Key Achievements</h4>
                  <ul className="space-y-[-2px]">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="text-sm leading-relaxed text-black">
                        <span className="text-green-500 text-xl mr-2 mt-1 font-bold">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </motion.div>
      )}
    </Card>
  );
};

export default MilestoneCard;
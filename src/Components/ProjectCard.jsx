import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import { LinkIcon } from "lucide-react";

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  screenshots = [],
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [screenshots]);

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block cursor-pointer relative h-40 w-full", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          />
        )}

        {/* Screenshots Crossfade */}
        {screenshots && screenshots.length > 0 ? (
          screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title}-screenshot-${index}`}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            />
          ))
        ) : (
          image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )
        )}
      </a>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {link && (
            <div className="hidden font-sans text-xs underline print:visible">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          )}
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert text-[14px]">
            {description}
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.filter(Boolean).map((tag) => (
              <Badge
                className="px-1 py-0 text-[11px] rounded-xs"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <a
                href={link?.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px] rounded-sm"> 
                  {link.icon || <LinkIcon size={12} />}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

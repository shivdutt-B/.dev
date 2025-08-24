/*
href={project.href}
key={project.title}
title={project.title}
description={project.description}
tags={project.technologies}
image={project.image}
video={project.video}
inks={project.links}
*/

// Gorr Screenshots
import ss1 from "../assets/project-demo/gorr/ss1.png";
import ss2 from "../assets/project-demo/gorr/ss2.png";
import ss3 from "../assets/project-demo/gorr/ss3.png";
import ss4 from "../assets/project-demo/gorr/ss4.png";
import arch from "../assets/project-demo/gorr/gorr-architecture.jpg";

// Heimdall Screenshots
import heimdallSS1 from "../assets/project-demo/heimdall/ss1.png";
import heimdallSS2 from "../assets/project-demo/heimdall/ss2.png";
import heimdallSS3 from "../assets/project-demo/heimdall/ss3.png";
import heimdallSS4 from "../assets/project-demo/heimdall/ss4.png";  
import heimdallSS5 from "../assets/project-demo/heimdall/ss5.png";
import heimdallArch from "../assets/project-demo/heimdall/heimdall-architecture.jpg";
import { Icons } from "../components/ui/icon";

// import { HomeIcon, NotebookIcon } from "lucide-react";

export const PROJECTS = [
  {
    id: "gorr",
    title: "Gorr",
    video: "https://www.youtube.com/watch?v=kSnP80ctjlw", // YouTube embed link
    screenshots: [
      ss1,
      ss2,
      ss3,
      ss4,
      arch,
    ],
    image: ss1,
    description: "Gorr is a sophisticated microservices-based deployment platform designed to streamline project deployments with real-time monitoring, efficient resource management, and seamless integration with cloud services. ",
    technologies: [
      // General technologies
      "html",
      "css",
      "ts",
      "nodejs",
      "express",
      "react",
      "tailwindcss",
      // State management and database
      "recoil",
      "postgresql",
      "prisma",
      "redis",
      // Deployment and cloud
      "aws",
      "docker",
      // Additional services
      "socketio",
    ],
    codeUrl: "https://github.com/shivdutt-B/gorr",
    liveUrl: "https://gorr-phi.vercel.app/",
    links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
         {
          type: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
  },
  {
    id: "heimdall",
    title: "Heimdall",
    video: "https://www.youtube.com/watch?v=-B-Hw2NKQGc", // YouTube embed link
    screenshots: [
      heimdallSS1,
      heimdallSS2,
      heimdallSS3,
      heimdallSS4,
      heimdallSS5,
      heimdallArch,
    ],
    image: "https://shivdutt.dev/assets/ss1-Wuk7AJcq.png", 
    description: "Heimdall is a comprehensive ping and uptime monitoring platform designed to eliminate cold starts on free hosting platforms like Render, Railway, Fly.io. By intelligently pinging your backend servers at customizable intervals, Also providing detailed analytics and instant alerts.",
    technologies: [
      // General technologies
      "html",
      "css",
      "ts",
      "nodejs",
      "express",
      "react",
      "tailwindcss",
      // State management and database
      "recoil",
      "postgresql",
      "prisma",
      "redis",
      // Deployment and cloud
      "docker",
      "aws",
      // Additional services
      "gmail",
    ],
    codeUrl: "https://github.com/shivdutt-B/heimdall",
    liveUrl: "https://heimdall-pings.vercel.app/",
    links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          type: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
  },
];
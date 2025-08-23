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

export const PROJECTS = [
  {
    id: "gorr",
    title: "Gorr",
    video: "https://www.youtube.com/watch?v=kSnP80ctjlw", // YouTube embed link
    // screenshots: [
    //   "https://www.youtube.com/embed/kSnP80ctjlw?si=A1sgTAKp-RstJBC2", // Use YouTube embed as first "screenshot"
    //   ss1,
    //   ss2,
    //   ss3,
    //   ss4,
    //   arch,
    // ],
    image: "https://shivdutt.dev/assets/ss2-Cakvpbow.png",
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
      "",
      // State management and database
      "recoil",
      "postgresql",
      "prisma",
      "redis",
      "",
      // Deployment and cloud
      "aws",
      "docker",
      "",
      // Additional services
      "socketio",
    ],
    codeUrl: "https://github.com/shivdutt-B/gorr",
    liveUrl: "https://gorr-phi.vercel.app/",
  },
  {
    id: "heimdall",
    title: "Heimdall",
    video: "https://www.youtube.com/watch?v=-B-Hw2NKQGc", // YouTube embed link
    // screenshots: [
    //   "https://www.youtube.com/embed/-B-Hw2NKQGc?si=ADp4LIFFJ-xvqmBE", // Use YouTube embed as first "screenshot"
    //   heimdallSS1,
    //   heimdallSS2,
    //   heimdallSS3,
    //   heimdallSS4,
    //   heimdallSS5,
    //   heimdallArch,
    // ],
    image: "https://shivdutt.dev/assets/ss1-Wuk7AJcq.png", 
    description: "Heimdall is a comprehensive ping and uptime monitoring platform designed to eliminate cold starts on free hosting platforms like Render, Railway, Fly.io. By intelligently pinging your backend servers at customizable intervals, Heimdall ensures optimal performance while providing detailed analytics and instant alerts.",
    technologies: [
      // General technologies
      "html",
      "css",
      "ts",
      "nodejs",
      "express",
      "react",
      "tailwindcss",
      "",
      // State management and database
      "recoil",
      "postgresql",
      "prisma",
      "redis",
      "",
      // Deployment and cloud
      "docker",
      "aws",
      "",
      // Additional services
      "gmail",
    ],
    codeUrl: "https://github.com/shivdutt-B/heimdall",
    liveUrl: "https://heimdall-pings.vercel.app/",
  },
];
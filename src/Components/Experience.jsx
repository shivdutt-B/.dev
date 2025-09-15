"use client";
import React from "react";
import EXPERIENCE from "../data/Experience";
import MilestoneCard from "./MilestoneCard";

export const Experience = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-xl font-bold mb-6'>Experience</h2>
      {EXPERIENCE.map((item, index) => (
        <div key={index} className='mb-4'>
          <MilestoneCard
            logoUrl={item.logoUrl}
            altText={item.company}
            title={item.title}
            subtitle={item.company}
            href={item.href}
            badges={item.badges}
            period={`${item.start} - ${item.end}`}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

// Export both components for flexibility
export const Milestone = MilestoneCard;

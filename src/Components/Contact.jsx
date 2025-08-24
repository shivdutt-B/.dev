"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Copy, Check } from "lucide-react";
import BlurFade from "./magicui/blur-fade";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "shivdutt059@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Show the "copied" status for 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <BlurFade>
    <div className="w-full max-w-2xl mx-auto space-y-4 p-3 border rounded-lg transition-shadow hover:shadow-md">
      {/* Header Section */}
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
        <div className="font-calistoga text-gray-900 text-lg">Contact Me</div>
        <div>

            <div className="flex items-end gap-1 text-blue-600 group cursor-pointer">
            <p className="text-gray-800">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-calistoga font-[100] text-sm underline transition-colors duration-300 group-hover:text-blue-700"
                href="mailto:shivdutt059@gmail.com"
              >
                Email
              </a>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right size-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>

        </div>
      </div>

      {/* Direct Contact Info */}
      <Card className="border">
        <CardContent className="p-4 sm:p-6">
          <div className="text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Direct email: </span>
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 hover:text-blue-700 underline truncate"
                >
                  {email}
                </a>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 flex-shrink-0"
                onClick={handleCopy}
              >
                <span className="sr-only">Copy email address</span>
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </BlurFade>
  );
}
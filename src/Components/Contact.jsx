"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear any previous error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email is required");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message is required");
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const sendEmail = async (formData) => {
    // Option 1: Using EmailJS (recommended for client-side)
    // Uncomment and configure if you want to use EmailJS
    /*
    const emailjs = (await import('emailjs-com')).default;
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'shivdutt059@gmail.com',
    };

    return emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    );
    */

    // Option 2: Using Formspree (simple form handling service)
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
    */

    // Option 3: Using Web3Forms (another form handling service)
    // Replace 'YOUR_ACCESS_KEY' with your actual Web3Forms access key
    /*
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
    */

    // Option 4: Using mailto (opens email client)
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:shivdutt059@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    return Promise.resolve({ success: true });

    // Option 5: Send to your own API endpoint
    /*
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
    */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(formData);
      
      // Success
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly at shivdutt059@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 p-4">
      {/* Header Section */}
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-calistoga text-gray-900 text-lg">Contact Me</div>
        <div>
          <div className="flex items-end gap-1 text-blue-600 group">
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

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Message sent successfully! I'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      {/* Contact Form */}
      <Card className="border transition-shadow hover:shadow-md p-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base mb-2">
            <Send className="w-4 h-4" />
            Send Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="transition-colors focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="transition-colors focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                className="transition-colors focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me more about your project or idea..."
                className="min-h-[6rem] transition-colors focus:border-blue-500"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full transition-all duration-200 hover:shadow-md" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Additional Contact Info */}
      <Card className="border p-3">
        <CardContent className="">
          <div className="text-sm text-gray-600 space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Direct email: </span>
              <a 
                href="mailto:shivdutt059@gmail.com" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                shivdutt059@gmail.com
              </a>
            </p>
            {/* <p className="text-xs text-gray-500 mt-3">
              I typically respond within 24-48 hours. For urgent matters, please mention it in your subject line.
            </p> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
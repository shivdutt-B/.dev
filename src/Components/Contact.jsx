"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h1 className="font-calistoga text-gray-900 text-2xl mb-2">Contact</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardContent className="flex items-center space-x-3 pt-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-muted-foreground">shivdutt059@gmail.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardContent className="flex items-center space-x-3 pt-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-xs text-muted-foreground">Remote</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardContent className="flex items-center space-x-3 pt-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Response</p>
              <p className="text-xs text-muted-foreground">Within 24h</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="border transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Send className="w-4 h-4" />
            Send Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me more about your project or idea..."
                className="min-h-[6rem]"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
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

      {/* Social Links */}
      <Card className="border transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Connect With Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => window.open("https://github.com/shivdutt-B", "_blank")}
            >
              <Github className="w-3 h-3 mr-1" />
              GitHub
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => window.open("https://linkedin.com/in/shivdutt-bhadakwad-07a462280", "_blank")}
            >
              <Linkedin className="w-3 h-3 mr-1" />
              LinkedIn
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => window.open("https://twitter.com/shivdutt-B", "_blank")}
            >
              <Twitter className="w-3 h-3 mr-1" />
              Twitter
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Available for freelance work and interesting projects
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

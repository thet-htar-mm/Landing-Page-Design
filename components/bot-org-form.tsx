"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BotOrgForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    botName: "",
    botType: "",
    description: "",
    contactEmail: "",
    phoneNumber: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Complete Your Setup</CardTitle>
            <CardDescription>
              We need some information about your organization and bot to get you started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    placeholder="Enter organization name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="botName">Bot Name</Label>
                  <Input
                    id="botName"
                    value={formData.botName}
                    onChange={(e) => setFormData({ ...formData, botName: e.target.value })}
                    placeholder="Enter bot name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="botType">Bot Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, botType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bot type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="sales">Sales Assistant</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="marketing">Marketing Bot</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your bot's purpose and functionality"
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="contact@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
              >
                Complete Setup
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

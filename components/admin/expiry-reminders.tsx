"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Settings, History, Send, Eye, Plus, Trash2 } from "lucide-react"

export function ExpiryReminders() {
  const [reminderSettings, setReminderSettings] = useState({
    enabled: true,
    autoSend: true,
  })

  const [reminderConfigs, setReminderConfigs] = useState([
    {
      id: 1,
      days: 7,
      enabled: true,
      emailTemplate:
        "Dear {customer_name},\n\nYour {plan_name} subscription will expire in {days_left} days on {expiry_date}. Please renew to continue enjoying our services.\n\nBest regards,\nS*G**Bot Team",
    },
    {
      id: 2,
      days: 3,
      enabled: true,
      emailTemplate:
        "Dear {customer_name},\n\nUrgent: Your {plan_name} subscription expires in just {days_left} days on {expiry_date}. Renew now to avoid service interruption.\n\nBest regards,\nS*G**Bot Team",
    },
  ])

  const [newConfigDays, setNewConfigDays] = useState("")
  const [previewEmail, setPreviewEmail] = useState("")

  const reminderLogs = [
    {
      id: "REM-001",
      customer: "John Doe",
      email: "john@example.com",
      sentDate: "2024-01-10",
      expiryDate: "2024-01-20",
      status: "sent",
      opened: true,
      openedDate: "2024-01-10 14:30",
      type: "7-day reminder",
      daysBeforeExpiry: 7,
    },
    {
      id: "REM-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      sentDate: "2024-01-11",
      expiryDate: "2024-01-18",
      status: "sent",
      opened: true,
      openedDate: "2024-01-11 09:15",
      type: "7-day reminder",
      daysBeforeExpiry: 7,
    },
    {
      id: "REM-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      sentDate: "2024-01-12",
      expiryDate: "2024-01-19",
      status: "failed",
      opened: false,
      openedDate: null,
      type: "7-day reminder",
      daysBeforeExpiry: 7,
    },
    {
      id: "REM-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      sentDate: "2024-01-13",
      expiryDate: "2024-01-16",
      status: "sent",
      opened: false,
      openedDate: null,
      type: "3-day reminder",
      daysBeforeExpiry: 3,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleSaveSettings = () => {
    console.log("Saving reminder settings:", reminderSettings)
    console.log("Saving reminder configs:", reminderConfigs)
  }

  const sendTestReminder = (configId: number) => {
    const config = reminderConfigs.find((c) => c.id === configId)
    console.log("Sending test reminder for config:", config)
  }

  const addReminderConfig = () => {
    if (newConfigDays && !reminderConfigs.find((c) => c.days === Number.parseInt(newConfigDays))) {
      const newConfig = {
        id: Date.now(),
        days: Number.parseInt(newConfigDays),
        enabled: true,
        emailTemplate: `Dear {customer_name},\n\nYour {plan_name} subscription will expire in {days_left} days on {expiry_date}. Please renew to continue enjoying our services.\n\nBest regards,\nS*G**Bot Team`,
      }
      setReminderConfigs([...reminderConfigs, newConfig])
      setNewConfigDays("")
    }
  }

  const removeReminderConfig = (configId: number) => {
    setReminderConfigs(reminderConfigs.filter((c) => c.id !== configId))
  }

  const updateReminderConfig = (configId: number, field: string, value: any) => {
    setReminderConfigs(reminderConfigs.map((c) => (c.id === configId ? { ...c, [field]: value } : c)))
  }

  const generatePreview = (template: string) => {
    return template
      .replace(/{customer_name}/g, "John Doe")
      .replace(/{plan_name}/g, "Professional")
      .replace(/{days_left}/g, "7")
      .replace(/{expiry_date}/g, "January 20, 2024")
      .replace(/{company_name}/g, "S*G**Bot")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Expiry Date Reminders</h1>
        <p className="text-gray-600">Configure automated email reminders and view reminder logs</p>
      </div>

      <Tabs defaultValue="settings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Email Automation</span>
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center space-x-2">
            <History className="h-4 w-4" />
            <span>Reminder Logs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-6">
          {/* Global Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>Global Reminder Settings</span>
              </CardTitle>
              <CardDescription>Configure global settings for email reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Enable Email Reminders</Label>
                  <p className="text-sm text-gray-600">
                    Automatically send email reminders to customers before their subscription expires
                  </p>
                </div>
                <Switch
                  checked={reminderSettings.enabled}
                  onCheckedChange={(checked) => setReminderSettings({ ...reminderSettings, enabled: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Auto-Send Reminders</Label>
                  <p className="text-sm text-gray-600">Automatically send reminders without manual approval</p>
                </div>
                <Switch
                  checked={reminderSettings.autoSend}
                  onCheckedChange={(checked) => setReminderSettings({ ...reminderSettings, autoSend: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Scheduled Email Configs */}
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Email Configurations</CardTitle>
              <CardDescription>Configure when to send reminder emails before expiry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Config */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="newConfigDays">Add New Reminder</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="newConfigDays"
                      type="number"
                      placeholder="Days before expiry"
                      value={newConfigDays}
                      onChange={(e) => setNewConfigDays(e.target.value)}
                      className="w-40"
                    />
                    <span className="text-sm text-gray-600">days before expiry</span>
                  </div>
                </div>
                <Button onClick={addReminderConfig} disabled={!newConfigDays}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Config
                </Button>
              </div>

              {/* Existing Configs */}
              <div className="space-y-4">
                {reminderConfigs.map((config) => (
                  <Card key={config.id} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {config.days} Day{config.days !== 1 ? "s" : ""} Before Expiry
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={config.enabled}
                            onCheckedChange={(checked) => updateReminderConfig(config.id, "enabled", checked)}
                          />
                          <Button size="sm" variant="outline" onClick={() => removeReminderConfig(config.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Email Template</Label>
                        <Textarea
                          value={config.emailTemplate}
                          onChange={(e) => updateReminderConfig(config.id, "emailTemplate", e.target.value)}
                          rows={6}
                          className="font-mono text-sm"
                        />
                        <p className="text-sm text-gray-600">
                          Available variables: {"{customer_name}"}, {"{plan_name}"}, {"{days_left}"}, {"{expiry_date}"},{" "}
                          {"{company_name}"}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Email Preview</DialogTitle>
                              <DialogDescription>Preview of the {config.days}-day reminder email</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="text-sm text-gray-600 mb-2">
                                  <strong>To:</strong> john@example.com
                                  <br />
                                  <strong>Subject:</strong> Subscription Expiry Reminder - {config.days} Days Left
                                </div>
                                <div className="whitespace-pre-wrap text-sm border-t pt-4">
                                  {generatePreview(config.emailTemplate)}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => sendTestReminder(config.id)}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Test
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                onClick={handleSaveSettings}
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
              >
                Save All Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reminder History</CardTitle>
              <CardDescription>Log of all sent reminder emails and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Sent Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Opened</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reminderLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.customer}</TableCell>
                        <TableCell>{log.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.type}</Badge>
                        </TableCell>
                        <TableCell>{log.sentDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(log.status)}>
                            {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {log.status === "sent" && (
                            <div className="flex flex-col">
                              <Badge
                                className={log.opened ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                              >
                                {log.opened ? "Opened" : "Not Opened"}
                              </Badge>
                              {log.opened && log.openedDate && (
                                <span className="text-xs text-gray-500 mt-1">{log.openedDate}</span>
                              )}
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, Calendar, Plus, RotateCcw, UserX } from "lucide-react"

export function CustomerExpiry() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [extendDays, setExtendDays] = useState("30")

  const customers = [
    {
      id: "CUST-001",
      name: "John Doe",
      email: "john@example.com",
      plan: "Professional",
      expiryDate: "2024-01-20",
      daysUntilExpiry: 5,
      status: "active",
      lastPayment: "2023-12-20",
      subscriptionId: "SUB-001",
    },
    {
      id: "CUST-002",
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "Starter",
      expiryDate: "2024-01-18",
      daysUntilExpiry: 3,
      status: "expiring",
      lastPayment: "2023-12-18",
      subscriptionId: "SUB-002",
    },
    {
      id: "CUST-003",
      name: "Bob Johnson",
      email: "bob@example.com",
      plan: "Enterprise",
      expiryDate: "2024-01-25",
      daysUntilExpiry: 10,
      status: "active",
      lastPayment: "2023-12-25",
      subscriptionId: "SUB-003",
    },
    {
      id: "CUST-004",
      name: "Alice Brown",
      email: "alice@example.com",
      plan: "Professional",
      expiryDate: "2024-01-14",
      daysUntilExpiry: -1,
      status: "expired",
      lastPayment: "2023-12-14",
      subscriptionId: "SUB-004",
    },
    {
      id: "CUST-005",
      name: "Charlie Wilson",
      email: "charlie@example.com",
      plan: "Starter",
      expiryDate: "2024-01-17",
      daysUntilExpiry: 2,
      status: "expiring",
      lastPayment: "2023-12-17",
      subscriptionId: "SUB-005",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "expiring":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getExpiryStatus = (daysUntilExpiry: number) => {
    if (daysUntilExpiry < 0) return "expired"
    if (daysUntilExpiry <= 7) return "expiring"
    return "active"
  }

  const handleExtend = (customerId: string, days: string) => {
    console.log(`Extending subscription for customer ${customerId} by ${days} days`)
    // Handle extend logic
  }

  const handleRenew = (customerId: string) => {
    console.log("Renewing subscription for customer:", customerId)
    // Handle renew logic
  }

  const handleDeactivate = (customerId: string) => {
    console.log("Deactivating subscription for customer:", customerId)
    // Handle deactivate logic
  }

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())

    let matchesStatus = true
    if (statusFilter === "expiring") {
      matchesStatus = customer.daysUntilExpiry <= 7 && customer.daysUntilExpiry >= 0
    } else if (statusFilter === "expired") {
      matchesStatus = customer.daysUntilExpiry < 0
    } else if (statusFilter === "active") {
      matchesStatus = customer.daysUntilExpiry > 7
    }

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Expiry Management</h1>
        <p className="text-gray-600">Monitor and manage customer subscription expiry dates</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">{customers.filter((c) => c.daysUntilExpiry > 7).length}</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">
                  {customers.filter((c) => c.daysUntilExpiry <= 7 && c.daysUntilExpiry >= 0).length}
                </p>
                <p className="text-sm text-gray-600">Expiring Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">{customers.filter((c) => c.daysUntilExpiry < 0).length}</p>
                <p className="text-sm text-gray-600">Expired</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">{customers.length}</p>
                <p className="text-sm text-gray-600">Total Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Filters</CardTitle>
          <CardDescription>Filter and search customers by expiry status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by customer name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by expiry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>Customers ({filteredCustomers.length})</CardTitle>
          <CardDescription>Manage customer subscription expiry dates and actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Current Plan</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.plan}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{customer.expiryDate}</span>
                        {customer.daysUntilExpiry >= 0 ? (
                          <span className="text-sm text-gray-500">{customer.daysUntilExpiry} days left</span>
                        ) : (
                          <span className="text-sm text-red-500">
                            Expired {Math.abs(customer.daysUntilExpiry)} days ago
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(getExpiryStatus(customer.daysUntilExpiry))}>
                        {getExpiryStatus(customer.daysUntilExpiry).charAt(0).toUpperCase() +
                          getExpiryStatus(customer.daysUntilExpiry).slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {/* Extend Subscription */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <Plus className="h-4 w-4 mr-1" />
                              Extend
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Extend Subscription</DialogTitle>
                              <DialogDescription>Extend subscription for {customer.name}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="extend-days">Extend by (days)</Label>
                                <Select value={extendDays} onValueChange={setExtendDays}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="7">7 days</SelectItem>
                                    <SelectItem value="14">14 days</SelectItem>
                                    <SelectItem value="30">30 days</SelectItem>
                                    <SelectItem value="60">60 days</SelectItem>
                                    <SelectItem value="90">90 days</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button
                                className="bg-blue-600 hover:bg-blue-700"
                                onClick={() => handleExtend(customer.id, extendDays)}
                              >
                                Extend Subscription
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        {/* Renew Subscription */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Renew
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Renew Subscription</DialogTitle>
                              <DialogDescription>
                                Renew subscription for {customer.name} with their current plan ({customer.plan})
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleRenew(customer.id)}
                              >
                                Renew Subscription
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        {/* Deactivate Subscription */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="destructive">
                              <UserX className="h-4 w-4 mr-1" />
                              Deactivate
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Deactivate Subscription</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to deactivate the subscription for {customer.name}? This action
                                cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button variant="destructive" onClick={() => handleDeactivate(customer.id)}>
                                Deactivate
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

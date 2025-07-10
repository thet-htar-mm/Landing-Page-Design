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
import { Search, Check, X, Eye } from "lucide-react"

export function PaymentTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null)

  const transactions = [
    {
      id: "TXN-001",
      customer: "John Doe",
      email: "john@example.com",
      amount: "$79.00",
      plan: "Professional",
      status: "pending",
      date: "2024-01-15",
      paymentMethod: "Credit Card",
      transactionId: "ch_3OqIC92eZvKYlo2C0b4wXYZ1",
    },
    {
      id: "TXN-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      amount: "$29.00",
      plan: "Starter",
      status: "approved",
      date: "2024-01-14",
      paymentMethod: "PayPal",
      transactionId: "PAYID-MXKQKHA123456789",
    },
    {
      id: "TXN-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      amount: "$199.00",
      plan: "Enterprise",
      status: "pending",
      date: "2024-01-13",
      paymentMethod: "Credit Card",
      transactionId: "ch_3OqIC92eZvKYlo2C0b4wXYZ2",
    },
    {
      id: "TXN-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      amount: "$79.00",
      plan: "Professional",
      status: "rejected",
      date: "2024-01-12",
      paymentMethod: "Credit Card",
      transactionId: "ch_3OqIC92eZvKYlo2C0b4wXYZ3",
    },
    {
      id: "TXN-005",
      customer: "Charlie Wilson",
      email: "charlie@example.com",
      amount: "$29.00",
      plan: "Starter",
      status: "approved",
      date: "2024-01-11",
      paymentMethod: "Bank Transfer",
      transactionId: "ACH_123456789",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleApprove = (transactionId: string) => {
    console.log("Approving transaction:", transactionId)
    // Handle approval logic
  }

  const handleReject = (transactionId: string) => {
    console.log("Rejecting transaction:", transactionId)
    // Handle rejection logic
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter

    let matchesDateRange = true
    if (dateFrom && dateTo) {
      const transactionDate = new Date(transaction.date)
      const fromDate = new Date(dateFrom)
      const toDate = new Date(dateTo)
      matchesDateRange = transactionDate >= fromDate && transactionDate <= toDate
    }

    return matchesSearch && matchesStatus && matchesDateRange
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Transactions</h1>
        <p className="text-gray-600">Manage and approve payment transactions</p>
      </div>

      {/* Enhanced Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Filters</CardTitle>
          <CardDescription>Filter and search transactions by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Customer email or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date From</label>
              <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date To</label>
              <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions ({filteredTransactions.length})</CardTitle>
          <CardDescription>Review and manage payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.customer}</TableCell>
                    <TableCell>{transaction.email}</TableCell>
                    <TableCell>{transaction.plan}</TableCell>
                    <TableCell className="font-semibold">{transaction.amount}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Transaction Details</DialogTitle>
                              <DialogDescription>
                                Complete information for transaction {transaction.id}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Customer Name</label>
                                  <p className="text-sm text-gray-600">{transaction.customer}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Email</label>
                                  <p className="text-sm text-gray-600">{transaction.email}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Plan</label>
                                  <p className="text-sm text-gray-600">{transaction.plan}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Amount</label>
                                  <p className="text-sm text-gray-600">{transaction.amount}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Payment Method</label>
                                  <p className="text-sm text-gray-600">{transaction.paymentMethod}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Transaction ID</label>
                                  <p className="text-sm text-gray-600 font-mono">{transaction.transactionId}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {transaction.status === "pending" && (
                          <>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <Check className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Approve Transaction</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to approve this transaction for {transaction.customer}?
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="outline">Cancel</Button>
                                  <Button
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => handleApprove(transaction.id)}
                                  >
                                    Approve
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="destructive">
                                  <X className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Reject Transaction</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to reject this transaction for {transaction.customer}?
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="outline">Cancel</Button>
                                  <Button variant="destructive" onClick={() => handleReject(transaction.id)}>
                                    Reject
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </>
                        )}
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CreditCard, AlertTriangle, TrendingUp } from "lucide-react"

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Customers",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Monthly Revenue",
      value: "$45,678",
      change: "+8%",
      icon: CreditCard,
      color: "text-green-600",
    },
    {
      title: "Pending Payments",
      value: "23",
      change: "-5%",
      icon: AlertTriangle,
      color: "text-yellow-600",
    },
    {
      title: "Growth Rate",
      value: "15.3%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentTransactions = [
    { id: "TXN-001", customer: "John Doe", amount: "$79.00", status: "completed", date: "2024-01-15" },
    { id: "TXN-002", customer: "Jane Smith", amount: "$29.00", status: "pending", date: "2024-01-14" },
    { id: "TXN-003", customer: "Bob Johnson", amount: "$199.00", status: "completed", date: "2024-01-13" },
    { id: "TXN-004", customer: "Alice Brown", amount: "$79.00", status: "failed", date: "2024-01-12" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of your platform performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">
                <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{transaction.customer}</p>
                    <p className="text-sm text-gray-600">{transaction.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{transaction.amount}</p>
                    <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-blue-900">Manage Customers</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-green-900">Process Payments</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="font-medium text-yellow-900">Review Alerts</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="font-medium text-purple-900">View Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

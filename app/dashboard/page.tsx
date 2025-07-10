import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Users, CreditCard, Calendar, Settings } from "lucide-react"

export default function DashboardPage() {
  const userStats = [
    {
      title: "Active Subscription",
      value: "Professional",
      description: "Expires on Jan 20, 2024",
      icon: CreditCard,
      color: "text-green-600",
    },
    {
      title: "Bot Instances",
      value: "3",
      description: "2 active, 1 pending",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Days Remaining",
      value: "5",
      description: "Until next billing",
      icon: Calendar,
      color: "text-orange-600",
    },
    {
      title: "Usage",
      value: "78%",
      description: "Of monthly quota",
      icon: Settings,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's an overview of your Sxgxx account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest account activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Payment Processed</p>
                    <p className="text-sm text-gray-600">Professional plan renewal</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Bot Created</p>
                    <p className="text-sm text-gray-600">Customer Service Bot</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Profile Updated</p>
                    <p className="text-sm text-gray-600">Contact information changed</p>
                  </div>
                  <Badge className="bg-gray-100 text-gray-800">Info</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="text-sm">Create Bot</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
                  <CreditCard className="h-6 w-6 mb-2" />
                  <span className="text-sm">Billing</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center bg-orange-600 hover:bg-orange-700">
                  <Settings className="h-6 w-6 mb-2" />
                  <span className="text-sm">Settings</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span className="text-sm">Schedule</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

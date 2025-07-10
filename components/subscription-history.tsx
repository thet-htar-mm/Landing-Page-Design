import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download } from "lucide-react"

export function SubscriptionHistory() {
  const subscriptions = [
    {
      id: "SUB-001",
      plan: "Professional",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      amount: "$79.00",
      status: "active",
      paymentMethod: "Credit Card",
    },
    {
      id: "SUB-002",
      plan: "Starter",
      startDate: "2023-12-15",
      endDate: "2024-01-15",
      amount: "$29.00",
      status: "completed",
      paymentMethod: "PayPal",
    },
    {
      id: "SUB-003",
      plan: "Professional",
      startDate: "2023-11-15",
      endDate: "2023-12-15",
      amount: "$79.00",
      status: "completed",
      paymentMethod: "Credit Card",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
              <Calendar className="mr-3 h-6 w-6 text-blue-600" />
              Subscription History
            </CardTitle>
            <CardDescription>View your past and current subscriptions</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{subscription.plan} Plan</h3>
                        <Badge className={getStatusColor(subscription.status)}>
                          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <p>
                            <span className="font-medium">Subscription ID:</span> {subscription.id}
                          </p>
                          <p>
                            <span className="font-medium">Payment Method:</span> {subscription.paymentMethod}
                          </p>
                        </div>
                        <div>
                          <p>
                            <span className="font-medium">Period:</span> {subscription.startDate} to{" "}
                            {subscription.endDate}
                          </p>
                          <p>
                            <span className="font-medium">Amount:</span> {subscription.amount}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

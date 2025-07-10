import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, AlertCircle, CheckCircle, Clock } from "lucide-react"

export function PaymentStatus() {
  const paymentInfo = {
    currentPlan: "Professional",
    nextBilling: "2024-02-15",
    amount: "$79.00",
    paymentMethod: "**** **** **** 4242",
    status: "approved", // approved, pending, failed
    lastPayment: "2024-01-15",
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "approved":
        return "Your payment has been processed successfully"
      case "pending":
        return "Your payment is being reviewed and will be processed soon"
      case "failed":
        return "Payment failed. Please update your payment method"
      default:
        return "Payment status unknown"
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
              <CreditCard className="mr-3 h-6 w-6 text-blue-600" />
              Payment Status
            </CardTitle>
            <CardDescription>Current payment information and billing status</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border">
                  {getStatusIcon(paymentInfo.status)}
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold">Payment Status</span>
                      <Badge className={getStatusColor(paymentInfo.status)}>
                        {paymentInfo.status.charAt(0).toUpperCase() + paymentInfo.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{getStatusMessage(paymentInfo.status)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Plan:</span>
                    <span className="font-semibold">{paymentInfo.currentPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Billing:</span>
                    <span className="font-semibold">{paymentInfo.nextBilling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold">{paymentInfo.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold">{paymentInfo.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Payment:</span>
                    <span className="font-semibold">{paymentInfo.lastPayment}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Billing Information</h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Your next payment of {paymentInfo.amount} will be automatically charged on {paymentInfo.nextBilling}
                    .
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Update Payment Method
                  </Button>
                </div>

                {paymentInfo.status === "failed" && (
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Action Required</h3>
                    <p className="text-sm text-red-700 mb-3">
                      Your payment failed. Please update your payment method to continue your subscription.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700">Update Payment Method</Button>
                  </div>
                )}

                {paymentInfo.status === "pending" && (
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-900 mb-2">Payment Under Review</h3>
                    <p className="text-sm text-yellow-700">
                      Your payment is being processed. This usually takes 1-2 business days.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

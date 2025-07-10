"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { useState } from "react"

export function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: ["Up to 5 team members", "Basic analytics", "Email support", "5GB storage", "Basic integrations"],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      popular: true,
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "All integrations",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "24/7 phone support",
        "500GB storage",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 mb-8">Select the perfect plan for your business needs</p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={billingCycle === "monthly" ? "text-blue-600 font-semibold" : "text-gray-600"}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={billingCycle === "yearly" ? "text-blue-600 font-semibold" : "text-gray-600"}>Yearly</span>
            {billingCycle === "yearly" && <Badge className="bg-orange-100 text-orange-600">Save 17%</Badge>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-blue-500 shadow-lg scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-500">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

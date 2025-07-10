"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: string
}

export function FAQBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Sxgxx Bot, your virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickQuestions = ["Pricing information", "Free trial", "Features", "Technical support"]

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(question),
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputMessage),
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputMessage("")
  }

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("pricing") || lowerQuestion.includes("price") || lowerQuestion.includes("cost")) {
      return "We offer three plans: Starter ($29/month), Professional ($79/month), and Enterprise ($199/month). Each plan includes different features and team sizes. Would you like more details about a specific plan?"
    }

    if (lowerQuestion.includes("free trial") || lowerQuestion.includes("trial")) {
      return "Yes! We offer a 14-day free trial for all our plans. You can start your trial by clicking 'Get Started' on our homepage. No credit card required!"
    }

    if (lowerQuestion.includes("features") || lowerQuestion.includes("feature")) {
      return "Our platform includes AI-powered automation, team collaboration tools, advanced analytics, custom integrations, and 24/7 support. Which specific features are you interested in learning about?"
    }

    if (lowerQuestion.includes("support") || lowerQuestion.includes("help") || lowerQuestion.includes("technical")) {
      return "Our technical support team is available 24/7 via email, chat, and phone. Premium customers also get priority support and a dedicated account manager. How can we assist you?"
    }

    return "Thank you for your question! For detailed information, please contact our support team at info@sxgxx.com or call +1 (555) 123-4567. Is there anything specific I can help you with?"
  }

  return (
    <>
      {/* Chat Bot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Bot Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Sxgxx Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm opacity-90">Online now</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import { BotLogo } from "@/components/bot-logo"

export function AdminHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 font-medium"
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BotLogo width={140} height={50} />
            <span className="text-sm text-gray-500 ml-4">Admin Portal</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/admin" className={isActive("/admin")}>
              Dashboard
            </Link>
            <Link href="/admin/transactions" className={isActive("/admin/transactions")}>
              Transactions
            </Link>
            <Link href="/admin/customers" className={isActive("/admin/customers")}>
              Customers
            </Link>
            <Link href="/admin/reminders" className={isActive("/admin/reminders")}>
              Reminders
            </Link>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Admin</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/admin/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

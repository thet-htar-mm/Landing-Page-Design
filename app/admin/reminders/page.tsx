import { AdminHeader } from "@/components/admin/admin-header"
import { ExpiryReminders } from "@/components/admin/expiry-reminders"

export default function RemindersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <ExpiryReminders />
      </main>
    </div>
  )
}

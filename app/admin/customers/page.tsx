import { AdminHeader } from "@/components/admin/admin-header"
import { CustomerExpiry } from "@/components/admin/customer-expiry"

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <CustomerExpiry />
      </main>
    </div>
  )
}

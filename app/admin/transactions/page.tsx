import { AdminHeader } from "@/components/admin/admin-header"
import { PaymentTransactions } from "@/components/admin/payment-transactions"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <PaymentTransactions />
      </main>
    </div>
  )
}

import { AdminHeader } from "@/components/admin/admin-header"
import { AdminProfile } from "@/components/admin/admin-profile"

export default function AdminProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <AdminProfile />
      </main>
    </div>
  )
}

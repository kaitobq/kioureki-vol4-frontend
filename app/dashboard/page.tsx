import Dashboard from "@/components/organism/dashboard/dashboard";
import { AuthProvider } from "@/lib/utils/auth/auth-provider";

export default function DashboardPage() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

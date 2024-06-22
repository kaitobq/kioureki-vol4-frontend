import { AuthHeader } from "@/components/organism/auth/auth-header";
import { AuthTab } from "@/components/organism/auth/auth-tab";
import { Toaster } from "react-hot-toast";

export default function AuthPage() {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={true} />
      <AuthHeader />
      <AuthTab />
    </div>
  );
}

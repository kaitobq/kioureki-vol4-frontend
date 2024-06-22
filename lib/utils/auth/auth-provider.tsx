"use client";

import { useUser } from "@/lib/hooks/auth/use-user";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { user, loading, error, refetch: fetchUser } = useUser();
  return <>{children}</>;
}

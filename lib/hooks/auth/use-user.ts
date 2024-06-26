"use client";

import { useState, useEffect } from "react";
import apiClient from "@/lib/utils/api/apiclient";
import { User } from "@/types/common/user";
import { getCookie } from "../cookie/use-cookie";
import { useRouter } from "next/navigation";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    setLoading(true);
    try {
      const token = await getCookie("token");
      if (!token) {
        setError("No token found");
        router.push("/auth");
        setLoading(false);
        return;
      }

      const response = await apiClient.get("/protected/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(response.data);
      console.log("[useUser] : success!!");
      setLoading(false);
    } catch (error: any) {
      setError(error.message || "Failed to fetch user data");
      console.error(error);
      console.log("[useUser] : failed!!");
      router.push("/auth");
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, loading, error, refetch: fetchUser };
}

"use client";

import { useState, useEffect } from "react";
import apiClient from "@/lib/utils/api/apiclient";
import { User } from "@/types/common/user";
import { getCookie } from "../cookie/use-cookie";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const token = await getCookie("token");
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }

      const response = await apiClient.get("/protected/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(response.data);
    } catch (error: any) {
      setError(error.message || "Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error, refetch: fetchUser };
}

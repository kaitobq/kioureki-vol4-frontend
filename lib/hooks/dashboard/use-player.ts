"use client";

import { currentOrganizationAtom, playerAtom } from "@/lib/atom/dashboard";
import apiClient from "@/lib/utils/api/apiclient";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCookie } from "../cookie/use-cookie";

export function usePlayer() {
  const [players, setPlayers] = useAtom(playerAtom);
  const [currentOrganization, setCurrentOrganization] = useAtom(
    currentOrganizationAtom
  );
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/player`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPlayers(response.data.players);
      console.log("[usePlayer] : success!!");
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log("[usePlayer] : failed!!");
    }
  };

  useEffect(() => {
    if (currentOrganization) {
      fetchData();
    } else {
      console.log("[usePlayer] : currentOrganization is null");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization]);

  return { players, loading };
}

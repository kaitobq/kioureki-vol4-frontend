import {
  currentOrganizationAtom,
  playerDetailAtom,
} from "@/lib/atom/dashboard";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCookie } from "../cookie/use-cookie";
import apiClient from "@/lib/utils/api/apiclient";

export function usePlayerDetail() {
  const [playerDetails, setPlayerDetails] = useAtom(playerDetailAtom);
  const [currentOrganization] = useAtom(currentOrganizationAtom);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/player/detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPlayerDetails(response.data.playerDetails);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!currentOrganization) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization]);

  return { playerDetails, loading };
}

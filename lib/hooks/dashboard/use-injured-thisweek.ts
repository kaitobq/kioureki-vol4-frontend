import apiClient from "@/lib/utils/api/apiclient";

export function useInjuredThisWeek() {
  const fetchData = async () => {
    try {
      const response = await apiClient.get("");
    } catch (error) {}
  };
}

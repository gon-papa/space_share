import { apod } from "../../query-key";
import { apodApi } from "../../../api/apod-api";
import { useQuery } from "@tanstack/react-query";

export function useGetApod() {
  const { isSuccess, error, isPending } = useQuery({
    queryKey: [apod],
    queryFn: apodApi,
  });
  return {
    isSuccess,
    error,
    isPending,
  };
}

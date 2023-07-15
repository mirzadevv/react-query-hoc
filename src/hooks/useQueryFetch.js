import { useQuery } from "@tanstack/react-query";

export default function useQueryFetch(queryKeyTitle, fetchData) {
  const queryKey = [queryKeyTitle];

  const { data, isError, isLoading } = useQuery(queryKey, fetchData);
  const loadingMessage = isLoading ? "Loading" : "";
  const errorMessage = isError ? `Error: ${isError.message}` : "";

  return { data, loadingMessage, errorMessage };
}

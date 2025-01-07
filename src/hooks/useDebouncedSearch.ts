import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { api } from "@/config/api";
import { ApiResponse, Movie } from "@/lib/types";

const useDebouncedSearch = (initialQuery: string = "", delay: number = 600) => {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string, pageNumber: number = 1) => {
      if (!searchQuery) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<ApiResponse>(
          `?${apiKey}&s=${searchQuery}&page=${pageNumber}`
        );

        if (response.data.Response === "True") {
          setResults(response.data.Search);
          setTotalResults(parseInt(response.data.totalResults));
        } else {
          setResults([]);
          setError("No Results Found");
        }
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, delay),
    [apiKey, delay]
  );

  useEffect(() => {
    debouncedSearch(initialQuery, page);

    return () => debouncedSearch.cancel();
  }, [debouncedSearch, initialQuery, page]);

  return {
    results,
    loading,
    error,
    page,
    setPage,
    totalResults,
  };
};

export default useDebouncedSearch;

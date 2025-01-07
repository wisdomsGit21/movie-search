import MovieCards from "@/components/movie-cards";
import SearchInput from "@/components/search-input";
import useDebouncedSearch from "@/hooks/useDebouncedSearch";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { results, loading, error, page, setPage, totalResults } =
    useDebouncedSearch(query);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <section className="container mx-auto px-8 py-6">
      <div className="">
        <SearchInput />
        <MovieCards
          results={results}
          loading={loading}
          error={error}
          page={page}
          setPage={setPage}
          totalResults={totalResults}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
}

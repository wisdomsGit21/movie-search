import { MovieCardsProps } from "@/lib/types";
import { AlertTriangle, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function MovieCards({
  error,
  loading,
  results,
  page,
  setPage,
  totalResults,
  totalPages,
}: MovieCardsProps) {
  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <Loader2 className="animate-spin w-8 h-8 text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <AlertTriangle className="text-red-500 w-8 h-8" />
          <p className="text-center text-red-500 text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results.map((result) => (
          <Card
            key={result.imdbID}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0">
              <img
                src={result.Poster}
                alt={result.Title}
                className="w-full h-64 object-cover object-center bg rounded-t-lg"
                loading="lazy"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold truncate">
                {result.Title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {result.Year}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalResults > 0 && (
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            variant="outline"
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </section>
  );
}

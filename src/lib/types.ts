export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface MovieCardsProps {
  results: Movie[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalResults: number;
  totalPages: number;
}

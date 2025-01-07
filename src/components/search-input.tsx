import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") as string;

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };
  return (
    <div className="space-y-2">
      <div className="relative border border-black rounded-md">
        <Input
          className="peer pe-9"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

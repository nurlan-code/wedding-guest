import { useMemo, useState } from "react";
import { guests, type Guest } from "./data/guests";
import { searchGuests } from "./utils/search";
import { weddingConfig } from "./config";
import { SearchBar } from "./components/SearchBar";
import { GuestListItem } from "./components/GuestListItem";
import { ResultCard } from "./components/ResultCard";
import { EmptyState } from "./components/EmptyState";
import { NotFoundState } from "./components/NotFoundState";

function App() {
  const [query, setQuery] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const results = useMemo(() => searchGuests(guests, query), [query]);

  const activeGuest =
    selectedGuest ?? (results.length === 1 ? results[0].guest : null);

  function handleChange(value: string) {
    setQuery(value);
    setSelectedGuest(null);
  }

  function handleReset() {
    setQuery("");
    setSelectedGuest(null);
  }

  return (
    <div className="paper-texture min-h-screen bg-linen">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-12 sm:py-16">
        <header className="mb-10 text-center">
          <svg
            viewBox="0 0 48 48"
            className="mx-auto h-9 w-9 text-gold-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.1}
            aria-hidden="true"
          >
            <path d="M24 6c-6 6-10 12-10 18a10 10 0 0 0 20 0c0-6-4-12-10-18Z" />
            <path d="M24 6v36" strokeWidth={0.75} opacity={0.5} />
            <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none" />
          </svg>

          <h1 className="mt-4 font-display text-[2.65rem] font-semibold italic leading-[1.05] tracking-tight text-plum-800 sm:text-5xl">
            {weddingConfig.title}
          </h1>

          <div className="mx-auto my-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gold-300" />
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            <span className="h-px w-10 bg-gold-300" />
          </div>

          <p className="font-body text-sm text-plum-400">
            {weddingConfig.subtitle}
          </p>
        </header>

        <main className="flex-1">
          <div className="rounded-[28px] border border-plum-100/70 bg-white/60 p-5 shadow-sm backdrop-blur-sm sm:p-6">
            <p className="mb-3 font-display text-xl font-semibold text-plum-800">
              Qonağın masasını tap
            </p>

            <SearchBar
              value={query}
              onChange={handleChange}
              onClear={handleReset}
            />

            <div className="mt-5">
              {query.trim() === "" && <EmptyState />}

              {query.trim() !== "" && activeGuest && (
                <ResultCard guest={activeGuest} onReset={handleReset} />
              )}

              {query.trim() !== "" && !activeGuest && results.length === 0 && (
                <NotFoundState onRetry={handleReset} />
              )}

              {query.trim() !== "" && !activeGuest && results.length > 1 && (
                <ul className="flex flex-col gap-2.5">
                  {results.map(({ guest }) => (
                    <li key={guest.id}>
                      <GuestListItem guest={guest} onSelect={setSelectedGuest} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>

        <footer className="mt-10 text-center">
          <p className="font-body text-xs tracking-wide text-plum-300">
            {weddingConfig.eventDate}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

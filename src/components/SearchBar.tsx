type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-plum-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="words"
        spellCheck={false}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ad və ya soyad daxil edin..."
        aria-label="Qonağın adını və ya soyadını axtarın"
        className="w-full rounded-2xl border border-plum-100 bg-white py-4 pl-12 pr-12 font-body text-base text-ink shadow-sm outline-none transition placeholder:text-plum-300 focus:border-gold-400 focus:ring-4 focus:ring-gold-200/60"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Axtarışı təmizlə"
          className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-plum-400 transition hover:bg-plum-50 hover:text-plum-600 active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

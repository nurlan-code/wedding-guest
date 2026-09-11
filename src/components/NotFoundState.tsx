type NotFoundStateProps = {
  onRetry: () => void;
};

export function NotFoundState({ onRetry }: NotFoundStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-plum-100 bg-white px-6 py-10 text-center shadow-sm">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-plum-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8.5" y1="8.5" x2="13.5" y2="13.5" />
        <line x1="13.5" y1="8.5" x2="8.5" y2="13.5" />
      </svg>
      <p className="font-display text-lg font-semibold text-plum-700">
        Qonaq tapılmadı
      </p>
      <p className="font-body text-sm text-plum-400">
        Ad və ya soyadı yoxlayın.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-2 rounded-full border border-plum-200 px-5 py-2.5 font-body text-sm font-semibold text-plum-700 transition hover:border-plum-400 hover:bg-plum-50 active:scale-95"
      >
        Yenidən cəhd et
      </button>
    </div>
  );
}

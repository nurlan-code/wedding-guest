export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-plum-200 px-6 py-10 text-center">
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
        <path d="M12 3c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9Z" />
      </svg>
      <p className="font-body text-sm text-plum-400">
        Qonağın adını və ya soyadını yazın
      </p>
    </div>
  );
}

import type { Guest } from "../data/guests";
import { weddingConfig } from "../config";

type ResultCardProps = {
  guest: Guest;
  onReset: () => void;
};

export function ResultCard({ guest, onReset }: ResultCardProps) {
  const message = weddingConfig.welcomeMessage.replace(
    "{table}",
    String(guest.tableNumber)
  );

  return (
    <div className="animate-reveal rounded-3xl border border-gold-200 bg-white p-8 text-center shadow-card">
      <p className="font-display text-2xl font-semibold text-plum-800">
        {guest.firstName} {guest.lastName}
      </p>

      <div className="my-6 flex flex-col items-center">
        <span className="h-px w-8 bg-gold-300" />
        <span className="mt-4 font-body text-sm tracking-wide text-plum-400">
          Sizin masanız
        </span>
        <span className="mt-1 font-display text-[6.5rem] font-bold italic leading-none tabular-nums text-plum-700">
          {guest.tableNumber}
        </span>
      </div>

      <p className="mx-auto max-w-xs font-body text-sm text-plum-500">
        {message}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-plum-200 px-6 py-3 font-body text-sm font-semibold text-plum-700 transition hover:border-plum-400 hover:bg-plum-50 active:scale-95"
      >
        Yeni axtarış
      </button>
    </div>
  );
}

import type { Guest } from "../data/guests";

type GuestListItemProps = {
  guest: Guest;
  onSelect: (guest: Guest) => void;
};

export function GuestListItem({ guest, onSelect }: GuestListItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(guest)}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-plum-100 bg-white px-5 py-4 text-left transition hover:border-gold-300 hover:bg-gold-100/30 active:scale-[0.99]"
    >
      <span className="font-display text-xl font-semibold text-plum-800">
        {guest.firstName} {guest.lastName}
      </span>
      <span className="flex shrink-0 items-baseline gap-1.5 rounded-full bg-plum-700 px-3.5 py-1.5 text-plum-50">
        <span className="font-body text-xs font-medium text-gold-200">
          Masa
        </span>
        <span className="font-display text-lg font-bold leading-none">
          {guest.tableNumber}
        </span>
      </span>
    </button>
  );
}

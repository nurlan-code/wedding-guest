import type { Guest } from "../data/guests";

const TRANSLITERATION_MAP: Record<string, string> = {
  ə: "e",
  ü: "u",
  ö: "o",
  ğ: "g",
  ş: "s",
  ç: "c",
  ı: "i",
  i̇: "i",
};

function normalize(value: string): string {
  const lower = value.toLocaleLowerCase("az-AZ").trim();
  let plain = "";
  for (const char of lower) {
    plain += TRANSLITERATION_MAP[char] ?? char;
  }
  return plain
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/\s+/g, " ");
}

export type MatchTier =
  | "exact-full"
  | "exact-first"
  | "exact-last"
  | "starts-with"
  | "contains";

export type SearchResult = {
  guest: Guest;
  tier: MatchTier;
};

const TIER_ORDER: MatchTier[] = [
  "exact-full",
  "exact-first",
  "exact-last",
  "starts-with",
  "contains",
];

function tierRank(tier: MatchTier): number {
  return TIER_ORDER.indexOf(tier);
}

export function searchGuests(guests: Guest[], rawQuery: string): SearchResult[] {
  const query = normalize(rawQuery);
  if (!query) return [];

  const results: SearchResult[] = [];

  for (const guest of guests) {
    const first = normalize(guest.firstName);
    const last = normalize(guest.lastName);
    const full = `${first} ${last}`;
    const fullReversed = `${last} ${first}`;

    let tier: MatchTier | null = null;

    if (full === query || fullReversed === query) {
      tier = "exact-full";
    } else if (first === query) {
      tier = "exact-first";
    } else if (last === query) {
      tier = "exact-last";
    } else if (
      first.startsWith(query) ||
      last.startsWith(query) ||
      full.startsWith(query)
    ) {
      tier = "starts-with";
    } else if (full.includes(query)) {
      tier = "contains";
    }

    if (tier) {
      results.push({ guest, tier });
    }
  }

  return results.sort((a, b) => {
    const rankDiff = tierRank(a.tier) - tierRank(b.tier);
    if (rankDiff !== 0) return rankDiff;
    return a.guest.firstName.localeCompare(b.guest.firstName, "az");
  });
}

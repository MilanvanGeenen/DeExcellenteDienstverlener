// Het enige adres dat aangepast hoeft te worden bij een eigen domein,
// bijvoorbeeld "https://deexcellentedienstverlener.nl". Het basispad volgt hier vanzelf uit.
export const SITE_URL = "https://milanvangeenen.github.io/DeExcellenteDienstverlener";

export const BASE_PATH = new URL(SITE_URL).pathname.replace(/\/$/, "");

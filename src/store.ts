import { atom } from "nanostores";

export const searchQuery = atom("");
export const isMainCursorVisible = atom(true);
export const isNavigationOngoing = atom(false);
export const lastNavigationPathname = atom("");

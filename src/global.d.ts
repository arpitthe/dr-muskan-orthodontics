import Lenis from "lenis";

declare global {
  interface Window {
    globalLenis?: Lenis | null;
  }
}

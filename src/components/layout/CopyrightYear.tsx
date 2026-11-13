import { cacheLife } from "next/cache";

/**
 * With cacheComponents on, `new Date()` must be cached or deferred.
 * Cached for days: the year is part of the static shell and refreshes after New Year.
 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

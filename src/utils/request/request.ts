/**
 * Simplified request utility for fetching JSON data
 *
 * This utility provides a clean abstraction over the native fetch API
 * with automatic JSON parsing and error handling.
 *
 * @example
 * ```typescript
 * import { request } from "~/utils/request";
 *
 * const products = await request<Product[]>("/api/products");
 * ```
 */
export async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `HTTP Error ${response.status}: ${response.statusText} (${url})`
    );
  }

  return response.json();
}

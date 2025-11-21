/**
 * Stock status enumeration
 *
 * Used to classify product availability based on how many stores have stock.
 */
export enum STOCK_STATUS {
  IN_STOCK = "inStock",
  LOW_STOCK = "lowStock",
  OUT_OF_STOCK = "outOfStock",
}

/**
 * Threshold values for determining stock status
 *
 * These constants define how to classify stock based on NUMBER OF STORES:
 * - 3 or more stores with quantity > 0 = IN_STOCK (green badge)
 * - 1-2 stores with quantity > 0 = LOW_STOCK (orange badge)
 * - 0 stores with quantity > 0 = OUT_OF_STOCK (red badge)
 *
 * YOUR TASK: Count how many stores have quantity > 0 and use these thresholds
 * to determine which status badge to display.
 */
export const STOCK_THRESHOLD = {
  /** Minimum number of stores required for "in stock" status */
  IN_STOCK_STORES: 3,
  /** Minimum number of stores required for "low stock" status */
  LOW_STOCK_STORES: 1,
} as const;

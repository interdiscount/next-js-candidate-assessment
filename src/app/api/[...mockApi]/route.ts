import { NextResponse } from "next/server";
import { products, stockByProduct, stores } from "../mock-data";

/**
 * Simulate network latency
 */
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(
  request: Request,
  { params }: { params: Promise<{ mockApi: Array<string> }> }
): Promise<NextResponse> {
  const resolvedParams = await params;
  const route = resolvedParams.mockApi.join("/");

  // Simulate network delay
  await sleep(500);

  switch (route) {
    case "products":
      return NextResponse.json(products);

    case "stores":
      return NextResponse.json(stores);

    case "stock": {
      const { searchParams } = new URL(request.url);
      const productId = searchParams.get("productId");

      if (!productId) {
        return NextResponse.json(
          { error: "productId is required" },
          { status: 400 }
        );
      }

      if (productId in stockByProduct) {
        return NextResponse.json(stockByProduct[productId]);
      } else {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
    }

    default:
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

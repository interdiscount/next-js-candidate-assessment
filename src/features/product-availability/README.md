# Product Availability Feature

Build your solution here. Required pieces:

- Fetch products from `/api/products`.
- For each product, fetch stock from `/api/stock?productId={id}`.
- Count stores with `quantity > 0` and show:
  - 3 or more stores -> green
  - 1 or 2 stores -> orange
  - 0 stores -> red
- Render a responsive grid (3/2/1) of product cards showing name, price, and "In stock at X stores".
- Handle loading and error states.
- Organize the feature as you see fit; we'll review your component/hook/util split and folder layout.
- Add at least one unit test for your stock calculation logic (Jest is ready to use).
- Submit by pushing to your personal GitHub repository and share the repo link with us.

Use `fetch` or `SWR` - either is fine.

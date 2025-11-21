# Product Availability Checker - Candidate Assessment

Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, SWR 2.3

---

## Removing Assessment Branding

You can make this look like a regular internal tool:

- Delete `src/features/welcome/`
- Update `src/app/page.tsx` to remove the AssessmentInstructions import and usage
- The rest of the layout is already generic

---

## Objective

Build a Product Availability Checker that shows product cards with stock counts.

We provide:

- Mock APIs for products, stores, and stock
- Utility functions and types

You build:

- Product list and card components
- Stock availability logic
- Stock counts and visual indicators

---

## Time and Process

- Typical effort: 2-4 hours
- Work at your own pace
- After submission: we will review your code and discuss it in a follow-up interview

---

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

3. Verify mock API

- GET /api/products
- GET /api/stores
- GET /api/stock?productId=prod-1

---

## Requirements

Build a responsive product grid showing stock availability across stores.

1. Product display

- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- Show product name
- Show product price (formatted as currency)
- Show stock availability status

2. Stock calculation

- Fetch stock per product: GET /api/stock?productId={id}
- Count stores with quantity > 0
- Display: In stock at X stores
- Badge status by store count:
  - Green: 3 or more stores
  - Orange: 1-2 stores
  - Red: 0 stores

3. User experience

- Loading states during data fetching
- Error handling for failed requests
- Responsive layout

---

## Technical Requirements

```bash
npm run lint       # should pass (warnings OK)
npm run typecheck  # should pass
npm run dev        # should work
npm test           # at least your stock logic test should pass
```

Implementation notes:

- Build in `src/features/product-availability/`
- Organize code as you see fit (components, hooks, utils, etc.)
- Include a brief design note explaining your architectural choices
- Data fetching: use fetch, SWR, or another approach
- Styling: Tailwind CSS
- Add at least one unit test for your stock calculation logic (Jest is set up)
- Submit by pushing to your personal GitHub repository and share the repo link with us

---

## Bonus (Optional)

If you finish early, consider adding:

- Product filtering by availability status
- Product sorting (by price or availability)
- Total stock count across all stores
- Accessibility improvements (ARIA, keyboard navigation)

---

## API Reference

GET /api/products

```typescript
Array<{
  id: string;
  name: string;
  description: string;
  price: number;
}>;
```

GET /api/stores

```typescript
Array<{
  id: string;
  name: string;
  city: string;
}>;
```

GET /api/stock?productId={id}

```typescript
Array<{
  storeId: string;
  quantity: number;
}>;
```

---

## Utilities Provided

- Request utility: `~/utils/request`
- Constants: `~/constants/stock`
- Types: `~/types/api`

---

## What We Are Looking For

- Functionality: meets requirements
- Code quality: clean, readable, organized
- TypeScript: proper types, no critical errors
- UX: sensible loading and error handling, responsive design
- Problem solving: clear approach to data fetching and stock calculation

---

## Not Required

- Pixel-perfect designs
- Complex animations
- Over-engineering
- Extensive test coverage beyond the required unit test

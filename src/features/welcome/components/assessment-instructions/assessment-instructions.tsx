/**
 * ASSESSMENT INSTRUCTIONS COMPONENT
 *
 * For candidates: You can safely delete this entire file and folder after reading the instructions.
 * This component is only for displaying the assessment requirements and can be removed once you start working.
 *
 * To remove:
 * 1. Delete the entire folder: src/features/welcome/
 * 2. Remove the import and <AssessmentInstructions /> from src/app/page.tsx
 * 3. Start building your feature in src/features/product-availability/
 */

export function AssessmentInstructions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        id="top"
        className="bg-linear-to-br from-[#E20615] to-[#C80000] text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">
                Technical Assessment - 3 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product Availability Checker
            </h1>
            <p className="text-lg text-red-50 leading-relaxed">
              Display product cards in a grid (3 per row) showing how many
              stores have each product in stock.
            </p>
            <div className="mt-6 bg-red-900/30 backdrop-blur-sm border border-red-300/30 rounded-lg p-4">
              <p className="text-sm text-red-100">
                <strong>Note:</strong> You can delete this entire instructions
                section (src/features/welcome/) after reading. See comments in
                the code for removal steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-[#E20615] font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900">Read README.md</h3>
              </div>
              <p className="text-sm text-gray-600">
                Complete instructions, API docs, and implementation tips
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-[#E20615] font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900">Test API</h3>
              </div>
              <p className="text-sm text-gray-600">
                Verify mock endpoints return data correctly
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-[#E20615] font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900">Start Building</h3>
              </div>
              <p className="text-sm text-gray-600">
                Create your feature in src/features/product-availability/
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="api-docs" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            API Endpoints
          </h2>
          <div className="space-y-4">
            {/* Products */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    GET
                  </span>
                  <code className="text-sm font-mono text-gray-900">
                    /api/products
                  </code>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-3">
                  Returns a list of all available products
                </p>
                <a
                  href="/api/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#E20615] hover:text-[#E20615] font-medium"
                >
                  Test endpoint
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stores */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    GET
                  </span>
                  <code className="text-sm font-mono text-gray-900">
                    /api/stores
                  </code>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-3">
                  Returns a list of all store locations
                </p>
                <a
                  href="/api/stores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#E20615] hover:text-[#E20615] font-medium"
                >
                  Test endpoint
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stock */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    GET
                  </span>
                  <code className="text-sm font-mono text-gray-900">
                    /api/stock?productId=prod-1
                  </code>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-3">
                  Returns stock levels for a specific product across all stores
                </p>
                <a
                  href="/api/stock?productId=prod-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#E20615] hover:text-[#E20615] font-medium"
                >
                  Test endpoint
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section
        id="requirements"
        className="py-12 bg-linear-to-br from-gray-50 to-gray-100 border-t border-gray-200"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What You Build
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            <strong>You build:</strong> Product list + product cards + stock
            logic
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#E20615]">1.</span>
                Product List &amp; Card
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Build a responsive grid (3/2/1 columns)</li>
                <li>Show product name and price</li>
                <li>Display "In stock at X stores" with a color badge</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#E20615]">2.</span>
                Stock Logic
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Fetch stock for each product</li>
                <li>Count stores with quantity &gt; 0</li>
                <li>
                  Determine status by stores in stock: 3+ (green), 1-2 (orange),
                  0 (red)
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#E20615]">3.</span>
                User Experience
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Loading state while fetching</li>
                <li>Error handling</li>
                <li>Responsive grid (3/2/1 columns)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#E20615]">4.</span>
                Code Quality
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>TypeScript (no critical errors)</li>
                <li>Clean, readable code</li>
                <li>Lint + typecheck pass</li>
                <li>At least one unit test for stock logic (Jest ready)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-[#C80000] mb-3">
              Bonus Features (Optional)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-sm text-[#C80000]">Store filtering by name/city</div>
              <div className="text-sm text-[#C80000]">Store grouping by city</div>
              <div className="text-sm text-[#C80000]">Total stock display</div>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities Provided */}
      <section id="utilities" className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Utilities Provided
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Request Utility
              </h3>
              <code className="text-xs text-gray-600">~/utils/request</code>
              <p className="text-sm text-gray-600 mt-2">
                HTTP client for fetching JSON data
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Constants</h3>
              <code className="text-xs text-gray-600">~/constants</code>
              <p className="text-sm text-gray-600 mt-2">
                STOCK_STATUS enum, STOCK_THRESHOLD values
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Types</h3>
              <code className="text-xs text-gray-600">~/types/api</code>
              <p className="text-sm text-gray-600 mt-2">
                Product, Store, StockInfo interfaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-linear-to-br from-[#E20615] to-[#C80000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start by reading the complete instructions in README.md, then build
            your solution in the src/features/ directory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-sm text-red-100">Time Allotment</div>
              <div className="text-2xl font-bold">3 Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-sm text-red-100">Before Submission</div>
              <div className="text-lg font-semibold">
                npm run lint && npm run typecheck && npm test
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-sm text-red-100">Submit</div>
              <div className="text-lg font-semibold">
                Push to your GitHub repo, share the link
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

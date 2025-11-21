import { AssessmentInstructions } from "~/features/welcome/components/assessment-instructions";

export default function Home() {
  return (
    <>
      {/* Assessment Instructions, delete after reading */}
      <AssessmentInstructions />
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-gray-700">
          <p className="font-semibold text-gray-900">
            Your implementation goes here
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Build the product list, cards, and stock logic inside
            <code className="mx-1 rounded bg-gray-100 px-2 py-1">
              src/features/product-availability/
            </code>
            using fetch or SWR.
          </p>
        </div>
      </div>
    </>
  );
}

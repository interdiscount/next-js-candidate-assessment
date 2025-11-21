export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#E20615] bg-gray-50 mt-auto">
      {/* Bottom section */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              (c) {currentYear} Product Availability System
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">Built with:</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-700">
                  Next.js 16
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-xs font-medium text-gray-700">
                  React 19
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-xs font-medium text-gray-700">SWR</span>
                <span className="text-gray-400">|</span>
                <span className="text-xs font-medium text-gray-700">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Header() {
  return (
    <>
      {/* Brand stripe */}
      <div className="sticky top-0 z-40 h-1 w-full bg-[#E20615]" />

      {/* Header */}
      <header className="sticky top-1 z-40 border-b border-gray-200 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E20615] text-white font-bold text-xl">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">
                Product Availability
              </span>
              <span className="text-xs text-gray-500">Store Inventory</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#top"
              className="text-sm font-medium text-gray-700 hover:text-[#E20615] transition-colors"
            >
              Home
            </a>
            <a
              href="#requirements"
              className="text-sm font-medium text-gray-700 hover:text-[#E20615] transition-colors"
            >
              Requirements
            </a>
            <a
              href="#api-docs"
              className="text-sm font-medium text-gray-700 hover:text-[#E20615] transition-colors"
            >
              API
            </a>
            <a
              href="#utilities"
              className="text-sm font-medium text-gray-700 hover:text-[#E20615] transition-colors"
            >
              Utilities
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

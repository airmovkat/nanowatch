export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center
                      pb-[env(safe-area-inset-bottom)]">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} NanoWatch. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          51088
        </p>
      </div>
    </footer>
  );
}



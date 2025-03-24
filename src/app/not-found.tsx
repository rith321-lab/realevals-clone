import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#f5f9fa]">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-[#2f2e47] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#2f2e47] mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#6366f1] text-white px-6 py-3 rounded-md hover:bg-[#4f46e5] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

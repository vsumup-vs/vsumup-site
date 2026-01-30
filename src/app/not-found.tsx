import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-24">
      <div className="text-center px-4">
        <h1 className="text-9xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-xl font-bold
                     hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

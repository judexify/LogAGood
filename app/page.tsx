import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white">
      <h1 className="text-2xl font-semibold">LogAGood</h1>

      <div className="flex gap-4">
        <Link
          href="/login?redirectTo=/admin"
          className="rounded border px-6 py-3"
        >
          Admin
        </Link>

        <Link
          href="/login?redirectTo=/rider"
          className="rounded border px-6 py-3"
        >
          Rider
        </Link>

        <Link
          href="/login?redirectTo=/customer"
          className="rounded border px-6 py-3"
        >
          Customer
        </Link>
      </div>
    </div>
  );
}

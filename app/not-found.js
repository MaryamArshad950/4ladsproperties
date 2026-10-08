import Link from "next/link";
export default function NotFound() {
  return <div className="container-x py-24 text-center"><h1 className="mb-6 text-3xl font-bold text-navy">Page not found</h1><Link href="/listings" className="btn">Browse listings</Link></div>;
}

import Link from "next/link";
import Image from "next/image";
import { fmt } from "../data/data";

export default function PropertyCard({ p }) {
  const sold = p.purpose === "sold";
  const badge = sold
    ? "bg-red-600"
    : p.purpose === "rent"
      ? "bg-emerald-600"
      : "bg-navy";
  return (
    <Link
      href={`/properties/${p.id}`}
      className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <div className="relative h-44 overflow-hidden">
        <div
          className="relative h-full w-full transition duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg,hsl(${p.hue} 55% 48%),hsl(${p.hue + 40} 55% 24%))`,
          }}
        >
          {p.images?.[0] && (
            <Image
              src={p.images[0]}
              alt={p.title}
              fill
              sizes="(max-width:768px) 100vw, 360px"
              className="object-cover"
            />
          )}
        </div>
        <span
          className={`absolute left-3 top-3 rounded px-2.5 py-1 text-[11px] font-bold tracking-wide text-white ${badge}`}
        >
          {sold ? "SOLD" : p.purpose === "rent" ? "FOR RENT" : "FOR SALE"}
        </span>
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-navy/40 py-2 text-center text-xs font-semibold text-white transition duration-300 group-hover:translate-y-0">
          View details →
        </span>
      </div>
      <div className="p-4">
        <p className="text-lg font-bold text-navy">{fmt(p.price, p.purpose)}</p>
        <h3 className="mt-1 font-semibold text-slate-800">{p.title}</h3>
        <p className="text-sm text-slate-500">
          {p.area}, {p.city}
        </p>
        <p className="mt-2 text-xs text-slate-500">
          {p.beds > 0 && `${p.beds} beds · ${p.baths} baths · `}
          {p.size}
          {sold && p.days ? ` · Sold in ${p.days} days` : ""}
        </p>
      </div>
    </Link>
  );
}

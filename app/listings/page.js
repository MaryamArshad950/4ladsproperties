import Reveal from "../../components/Reveal";
import PropertyCard from "../../components/PropertyCard";
import { prisma } from "../../lib/prisma";
import { areas, types } from "../../data/data";

export const metadata = { title: "Property Listings" };

export default async function Listings({ searchParams }) {
  const { purpose = "", type = "", area = "", maxPrice = "" } = searchParams;

  const list = await prisma.property.findMany({
    where: {
      purpose: ["sale", "rent", "sold"].includes(purpose) ? purpose : undefined,
      type: type || undefined,
      area: area ? { contains: area, mode: "insensitive" } : undefined,
      price: maxPrice ? { lte: Number(maxPrice) } : undefined,
    },
    orderBy: { id: "asc" },
  });

  return (
    <div className="container-x py-14">
      <Reveal>
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">
          Property Listings
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <form className="my-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1.2fr_auto]">
          <select name="purpose" defaultValue={purpose} className="field">
            <option value="">All</option>
            <option value="sale">For sale</option>
            <option value="rent">For rent</option>
            <option value="sold">Sold</option>
          </select>
          <select name="type" defaultValue={type} className="field">
            <option value="">Any type</option>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <select name="area" defaultValue={area} className="field">
            <option value="">Any area</option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <input
            name="maxPrice"
            type="number"
            defaultValue={maxPrice}
            placeholder="Max price (PKR)"
            className="field"
          />
          <button className="btn">Search</button>
        </form>
      </Reveal>
      <p className="mb-5 text-sm text-slate-500">
        {list.length} properties found
      </p>
      {list.length === 0 && (
        <p className="rounded-xl bg-slate-50 p-10 text-center text-slate-500">
          No properties match your filters.
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08}>
            <PropertyCard p={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

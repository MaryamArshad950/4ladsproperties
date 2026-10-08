import Reveal from "../../components/Reveal";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/data";

export const metadata = { title: "Property Listings" };

export default function Listings({ searchParams }) {
  const { purpose = "", type = "", area = "", maxPrice = "" } = searchParams;
  const list = properties.filter(
    (p) =>
      (!purpose || p.purpose === purpose) &&
      (!type || p.type === type) &&
      (!area || p.area.toLowerCase().includes(area.toLowerCase())) &&
      (!maxPrice || p.price <= Number(maxPrice)),
  );
  return (
    <div className="container-x py-14">
      <Reveal>
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">
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
            {["House", "Apartment", "Plot", "Commercial"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {/* <input
            name="area"
            defaultValue={area}
            placeholder="Area"
            className="field"
          /> */}
          <select name="area" defaultValue={area} className="field">
            <option value="">Any Area</option>
            {[
              "Falcon Complex Malir",
              "Malir Cantt",
              "Askari V & VI",
              "Bahria Town",
              "Scheme 33",
              "DHA City",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <input
            name="maxPrice"
            type="number"
            defaultValue={maxPrice}
            placeholder="Max price (PKR)"
            className="field"
          />
          <button className="btn">Filter</button>
        </form>
      </Reveal>
      <p className="mb-5 text-sm text-slate-500">
        {list.length} {list.length == 1 ? "property" : "properties"} found
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

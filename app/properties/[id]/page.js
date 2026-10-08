import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "../../../components/Gallery";
import Reveal from "../../../components/Reveal";
import { properties, agency, fmt } from "../../../data/data";

export function generateStaticParams() {
  return properties.map((p) => ({ id: String(p.id) }));
}
export function generateMetadata({ params }) {
  const p = properties.find((x) => String(x.id) === params.id);
  return { title: p ? `${p.title} – ${p.area}` : "Property" };
}

export default function Property({ params }) {
  const p = properties.find((x) => String(x.id) === params.id);
  if (!p) notFound();
  return (
    <div className="container-x py-10">
      <Link href="/listings" className="text-sm text-slate-500 hover:text-navy">
        ← Back to listings
      </Link>
      <Reveal>
        <Gallery hue={p.hue} images={p.images} video={p.video} />
      </Reveal>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal>
          <h1 className="text-3xl font-bold text-navy">{p.title}</h1>
          <p className="mt-1 text-slate-500">
            {p.area}, {p.city}
          </p>
          <p className="mt-5 leading-relaxed text-slate-700">{p.description}</p>
          <h3 className="mb-3 mt-8 text-lg font-bold text-navy">Details</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Type", p.type],
              ["Size", p.size],
              p.beds > 0 && ["Beds", p.beds],
              p.baths > 0 && ["Baths", p.baths],
            ]
              .filter(Boolean)
              .map(([k, v]) => (
                <div key={k} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{k}</p>
                  <p className="font-semibold text-navy">{v}</p>
                </div>
              ))}
          </div>
          <h3 className="mb-3 mt-8 text-lg font-bold text-navy">Features</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-700">
                <span className="text-gold">✔</span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="lg:sticky lg:top-24">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <p className="text-2xl font-extrabold text-navy">
              {fmt(p.price, p.purpose)}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {p.purpose === "sold"
                ? "This property has been sold."
                : "Interested? Get in touch."}
            </p>
            <a
              className="btn mt-5 w-full"
              href={`https://wa.me/${agency.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in: " + p.title)}`}
            >
              WhatsApp us
            </a>
            <a className="btn-o mt-3 w-full" href={`tel:${agency.phone}`}>
              Call {agency.phone}
            </a>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}

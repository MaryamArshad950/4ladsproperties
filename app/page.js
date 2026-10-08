import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import PropertyCard from "../components/PropertyCard";
import {
  agency,
  stats,
  properties,
  services,
  testimonials,
  team,
} from "../data/data";

const types = ["House", "Apartment", "Plot", "Commercial"];

export default function Home() {
  const featured = properties.filter((p) => p.purpose !== "sold").slice(0, 3);
  const sold = properties.filter((p) => p.purpose === "sold");
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pb-32 pt-24 text-center text-white">
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark gradient overlay (keeps text readable) */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-[#1f3a6b]/75 to-navy-900/90" />

        {/* Floating glows */}
        <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 animate-float-slow rounded-full bg-sky-400/20 blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-gold">
              TRUSTED SINCE 2010
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
              {agency.tagline.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="animate-shimmer bg-gradient-to-r from-gold via-yellow-200 to-gold bg-[length:200%_auto] bg-clip-text text-transparent">
                {agency.tagline.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Hundreds of homes sold. Thousands of satisfied clients.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <form
              action="/listings"
              className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr_1fr_auto]"
            >
              <select name="purpose" className="field">
                <option value="sale">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <select name="area" className="field">
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
              <select name="type" className="field">
                <option value="">Any type</option>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select name="maxPrice" className="field">
                <option value="">Any price</option>
                <option value="30000000">Up to 3 Cr</option>
                <option value="60000000">Up to 6 Cr</option>
                <option value="100000000">Up to 10 Cr</option>
              </select>
              <button className="btn">Search</button>
            </form>
          </Reveal>
        </div>
      </section>
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#1f3a6b] to-navy-900 pb-32 pt-24 text-center text-white">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 animate-float-slow rounded-full bg-sky-400/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-gold">
              TRUSTED SINCE 2010
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
              {agency.tagline.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="animate-shimmer bg-gradient-to-r from-gold via-yellow-200 to-gold bg-[length:200%_auto] bg-clip-text text-transparent">
                {agency.tagline.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Hundreds of homes sold. Thousands of satisfied clients.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <form
              action="/listings"
              className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr_1fr_auto]"
            >
              <select name="purpose" className="field">
                <option value="sale">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <select name="area" className="field">
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
              <select name="type" className="field">
                <option value="">Any type</option>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select name="maxPrice" className="field">
                <option value="">Any price</option>
                <option value="30000000">Up to 3 Cr</option>
                <option value="60000000">Up to 6 Cr</option>
                <option value="100000000">Up to 10 Cr</option>
              </select>
              <button className="btn">Search</button>
            </form>
          </Reveal>
        </div>
      </section> */}

      {/* STATS */}
      <section className="container-x relative -mt-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 text-center shadow-2xl lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="h2">Featured Properties</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <PropertyCard p={p} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center">
            <Link href="/listings" className="btn-o">
              View all listings →
            </Link>
          </p>
        </Reveal>
      </section>

      {/* SOLD */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="h2">Recently Sold</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sold.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="h2">How We Help</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="box h-full">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-3xl">
                  {s.icon}
                </div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="h2">What Our Clients Say</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="box h-full">
                  <p className="text-gold">★★★★★</p>
                  <p className="mt-3 text-slate-700">“{t.quote}”</p>
                  <p className="mt-4 font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container-x scroll-mt-20 py-20">
        <Reveal>
          <h2 className="h2">Meet Our Agents</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="box group text-center">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy to-[#2a4d8f] text-3xl font-bold text-white transition duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-gold/40">
                  {m.name[0]}
                </div>
                <p className="font-bold text-navy">{m.name}</p>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative scroll-mt-16 overflow-hidden bg-navy py-20 object-center text-center text-white"
      >
        {/* Image pinned to the bottom of the section */}
        <div className="absolute inset-0 bottom-0 h-72">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        {/* Fade: solid navy at the top, image visible at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/20" />

        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-gold/20 blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
              Want to buy or sell? Let’s talk.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              action={`mailto:${agency.email}`}
              method="post"
              encType="text/plain"
              className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <input
                name="name"
                placeholder="Your name"
                required
                className="field"
              />
              <input
                name="phone"
                placeholder="Phone"
                required
                className="field"
              />
              <select name="interest" className="field">
                <option>I want to buy</option>
                <option>I want to sell</option>
                <option>I want to rent</option>
              </select>
              <button className="btn">Request Call Back</button>
            </form>
          </Reveal>
        </div>
      </section>
      {/* <section
        id="contact"
        className="relative scroll-mt-16 overflow-hidden bg-navy py-20 text-center text-white"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-gold/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
              Want to buy or sell? Let’s talk.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              action={`mailto:${agency.email}`}
              method="post"
              encType="text/plain"
              className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <input
                name="name"
                placeholder="Your name"
                required
                className="field"
              />
              <input
                name="phone"
                placeholder="Phone"
                required
                className="field"
              />
              <select name="interest" className="field">
                <option>I want to buy</option>
                <option>I want to sell</option>
                <option>I want to rent</option>
              </select>
              <button className="btn">Request Call Back</button>
            </form>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}

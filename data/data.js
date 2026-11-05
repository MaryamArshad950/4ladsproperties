// Static content. Listings, team and testimonials now come from the database.
export const agency = {
  name: "4lads Properties",
  tagline: "Your Trusted Partner in Real Estate",
  phone: "+92 300 0883184",
  whatsapp: "923000883184",
  email: "arsalanbaryar5@gmail.com",
  address:
    "Shop no 22, off jinnah avenue, phase 1 scheme 33 Sohni Resorts, Karachi, 75700",
};

export const areas = [
  "Falcon Complex Malir",
  "Malir Cantt",
  "Askari V & VI",
  "Bahria Town",
  "Scheme 33",
  "DHA City",
];
export const types = ["House", "Apartment", "Plot", "Commercial"];

export const stats = [
  { value: 850, suffix: "+", label: "Properties sold" },
  { value: 42, prefix: "PKR ", suffix: "B", label: "Total sales value" },
  { value: 15, suffix: "+", label: "Years experience" },
  { value: 1200, suffix: "+", label: "Happy clients" },
];

export const services = [
  { icon: "🏡", title: "Buy", text: "Verified listings and honest guidance." },
  { icon: "💼", title: "Sell", text: "Smart pricing and wide exposure." },
  { icon: "🔑", title: "Rent & Manage", text: "Tenant sourcing and upkeep." },
  {
    icon: "⚖️",
    title: "Valuation & Legal",
    text: "Clear paperwork, fair valuation.",
  },
];

export const fmt = (n, purpose) =>
  "PKR " + n.toLocaleString("en-PK") + (purpose === "rent" ? " / mo" : "");

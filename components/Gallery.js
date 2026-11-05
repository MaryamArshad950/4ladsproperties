"use client";
import Image from "next/image";
import { useState, startTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ hue, images = [], video }) {
  const tabs = [["photos", "Photos"], video && ["video", "Video"]].filter(Boolean);
  const [tab, setTab] = useState("photos");
  const [idx, setIdx] = useState(0);
  const fallback = `linear-gradient(135deg,hsl(${hue} 55% 48%),hsl(${hue + 40} 55% 24%))`;

  return (
    <div className="mt-5">
      {tabs.length > 1 && (
        <div className="mb-4 flex gap-2">
          {tabs.map(([id, label]) => (
            <button key={id} onClick={() => startTransition(() => setTab(id))}
              className={`relative rounded-full px-4 py-1.5 text-sm font-semibold transition ${tab === id ? "text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {tab === id && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-navy" />}
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
          {tab === "photos" && (
            <>
              <div className="relative h-[280px] overflow-hidden rounded-xl sm:h-[420px]" style={{ background: fallback }}>
                <AnimatePresence mode="wait">
                  {images[idx] && (
                    <motion.div key={idx} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Image src={images[idx]} alt="" fill priority sizes="(max-width:1024px) 100vw, 1000px" className="object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {images.map((src, i) => (
                    <button key={src} onClick={() => setIdx(i)}
                      className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg transition ${i === idx ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100"}`}>
                      <Image src={src} alt="" fill sizes="112px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
          {tab === "video" && <video src={video} controls playsInline preload="metadata" className="aspect-video w-full rounded-xl bg-black" />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

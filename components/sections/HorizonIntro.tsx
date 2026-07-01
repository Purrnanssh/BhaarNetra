"use client";
import GlowHorizonFM from "@/components/ui/glow-horizon";

export default function HorizonIntro() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#050507]"
    >
      <GlowHorizonFM variant="top" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-white/60">
            NATIONAL HIGHWAY INTELLIGENCE PLATFORM
          </p>
          <h1
            className="text-white font-semibold tracking-tight"
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              lineHeight: 0.95,
              fontFamily:
                "SF Pro Display, SF Pro Text, Inter, system-ui, sans-serif",
            }}
          >
            BhaarNetra
          </h1>
          <p
            className="mt-8 text-white/80 mx-auto max-w-3xl"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              lineHeight: 1.7,
              fontFamily:
                "SF Pro Text, Inter, system-ui, sans-serif",
            }}
          >
            Screen every truck.
            <br />
            Prove every overload.
            <br />
            Enforce automatically.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/50 text-xs tracking-[0.25em] uppercase">
            Scroll
          </span>
          <div className="h-12 w-[1px] bg-white/30" />
        </div>
      </div>
    </section>
  );
}

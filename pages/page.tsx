"use client";
// PolyXBets – full landing page (June 2025)
// • Faster intro animation with fading logos
// • Dynamic Recharts mini‑graphs for live markets
// • All CTA buttons trigger "Coming soon!" alerts

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Percent,
  Twitter,
  Activity,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* -------------------------------------------------------------------------- */
// Logo assets
const XLogo =
  "https://polyxnews.com/_assets/media/d1a33af179ca18d1582204e4211a4732.png";
const PolyLogo =
  "https://polyxnews.com/_assets/media/10537a121f00f260488b7350434ff984.png";
const CombinedLogo =
  "https://i.postimg.cc/mt2CSs3N/a9ce3ae9-5d24-4460-8508-67e0f709e0b7.png";

const heroBg =
  "https://images.unsplash.com/photo-1556742021-2449cb2367c4?auto=format&fit=crop&w=1200&q=80";

/* ============================== ROOT ============================== */
export default function PolyXBetsSite() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden scroll-smooth">
      <AnimatePresence mode="wait">
        {!loaded ? <Intro /> : <MainSite />}
      </AnimatePresence>
    </div>
  );
}

/* ============================== INTRO ============================= */
function Intro() {
  const [showCombined, setShowCombined] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowCombined(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const logoVariant = {
    initial: (dir) => ({ x: dir * -160, opacity: 0, scale: 0.5 }),
    animate: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 18 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sliding & fading logos */}
      <div className="relative flex items-center justify-center gap-24">
        <AnimatePresence>
          {!showCombined && (
            <motion.img
              key="xlogo"
              src={XLogo}
              alt="X"
              className="w-24 h-24 object-contain"
              custom={-1}
              variants={logoVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!showCombined && (
            <motion.img
              key="polylogo"
              src={PolyLogo}
              alt="Polymarket"
              className="w-24 h-24 object-contain"
              custom={1}
              variants={logoVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Combined logo */}
      <AnimatePresence>
        {showCombined && (
          <motion.img
            key="combined"
            src={CombinedLogo}
            alt="PolyXBets logo"
            className="w-36 h-36 object-contain"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        )}
      </AnimatePresence>

      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCombined ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        PolyXBets
      </motion.h1>
    </motion.div>
  );
}

/* ============================ MAIN SITE ========================== */
function MainSite() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <NavBar />
      <Hero />
      <LiveMarkets />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </motion.main>
  );
}

/* ============================== NAVBAR =========================== */
function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full py-4 px-6 bg-neutral-950/70 backdrop-blur-md flex items-center justify-between">
      <a href="#hero" className="flex items-center gap-2">
        <img src={CombinedLogo} alt="PolyXBets" className="w-6 h-6" />
        <span className="font-semibold text-base">PolyXBets</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
        {[
          { href: "#markets", label: "Markets" },
          { href: "#features", label: "Features" },
          { href: "#pricing", label: "Pricing" },
        ].map((l) => (
          <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
            {l.label}
          </a>
        ))}
        <Button size="sm" onClick={() => alert("Coming soon!")}>Sign In</Button>
      </nav>
    </header>
  );
}

/* =============================== HERO ============================ */
function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center text-center pt-32 pb-24 px-4 min-h-[80vh]">
      <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
      <h2 className="text-5xl md:text-6xl font-extrabold max-w-4xl leading-tight bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent drop-shadow-xl">
        Trade on the future, directly inside X.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-gray-300">
        PolyXBets brings Polymarket’s truth‑seeking prediction markets to the global conversation on X.
      </p>
      <div className="mt-8 flex gap-4">
        <Button size="lg" onClick={() => alert("Coming soon!")}>Get Early Access</Button>
        <Button variant="secondary" size="lg" onClick={() => alert("Coming soon!")}>Learn More</Button>
      </div>
    </section>
  );
}

/* ========================== CHART HELPERS ======================== */
function generateRandomSeries(base) {
  const out = [];
  for (let i = 0; i < 15; i++) {
    base += Math.round((Math.random() - 0.5) * 4);
    base = Math.max(5, Math.min(base, 95));
    out.push({ t: i, p: base });
  }
  return out;
}

const chartDataSamples = [generateRandomSeries(30), generateRandomSeries(60), generateRandomSeries(25)];

function MiniChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
        <Tooltip formatter={(v) => `${v}%`} labelFormatter={() => ""} cursor={{ stroke: "transparent" }} />
        <Area type="monotone" dataKey="p" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.15} />
        <XAxis dataKey="t" hide />
        <YAxis domain={[0, 100]} hide />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/* ============================ LIVE MARKETS ======================= */
function LiveMarkets() {
  const sampleMarkets = [
    { title: "Trump conviction overturned by SCOTUS?", prob: 0.32, data: chartDataSamples[0] },
    { title: "ETH ETF approved by Oct 1?", prob: 0.58, data: chartDataSamples[1] },
    { title: "Apple Vision Pro >5 M units 2025?", prob: 0.21, data: chartDataSamples[2] },
  ];
  return (
    <section id="markets" className="py-24 px-6 bg-neutral-950">
      <h3 className="text-4xl font-bold text-center text-gray-100 mb-12">Live Markets</h3>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {sampleMarkets.map((m, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-800 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-gray-100 text-lg font-semibold line-clamp-2">
                {m.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-4">
              <MiniChart data={m.data} />
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Probability</span>
                <span className="text-gray-100 font-medium">{(m.prob * 100).toFixed(0)}%</span>
              </div>
              <Button className="w-full" onClick={() => alert("Coming soon!")}>Trade</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ============================= FEATURES ========================= */
function Features() {
  const features = [
    { title: "On‑chain, trustless", desc: "Ethereum L2 settlement for transparent, instant redemption.", icon: ShieldCheck },
    { title: "Lowest fees", desc: "2% trading fee, zero settlement fee—best in class.", icon: Percent },
    { title: "Embedded in X", desc: "Vote with your wallet directly from your timeline.", icon: Twitter },
    { title: "Real‑time truth signal", desc: "Prices update every second for a live probability snapshot.", icon: Activity },
  ];
  return (
    <section id="features" className="py-24 bg-neutral-950">
      <h3 className="text-4xl font-bold text-center text-gray-100 mb-12">Core Features</h3>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8 px-6">
        {features.map((f, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-800 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                {React.createElement(f.icon, { size: 28 })}
                {f.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ============================== PRICING ========================== */
function Pricing() {
  const tiers = [
    { name: "Starter", price: "$0", features: ["Watch markets", "Follow traders", "Share insights"], icon: Users },
    { name: "Pro", price: "$9/mo", features: ["Place trades", "Advanced alerts", "Priority support"], icon: TrendingUp },
    { name: "Institutional", price: "Contact", features: ["High limits", "API access", "Dedicated desk"], icon: DollarSign },
  ];
  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <h3 className="text-4xl font-bold text-center text-gray-100 mb-12">Choose your plan</h3>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {tiers.map((t, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-800 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center gap-2">
              {React.createElement(t.icon, { size: 28, color: "#f3f4f6" })}
              <CardTitle className="text-gray-100">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-gray-100">{t.price}</p>
              <ul className="space-y-2 text-gray-300">
                {t.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <Button className="w-full mt-6" onClick={() => alert("Coming soon!")}>Select</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );


/* =============================== CTA ============================ */
function CTA() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-tr from-neutral-900 to-neutral-800">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-100">Ready to place your first bet?</h3>
      <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300">Join the waitlist and secure your handle before launch.</p>
      <Button className="mt-8" size="lg" onClick={() => alert("Coming soon!")}>Join Waitlist <ArrowRight className="ml-2" /></Button>
    </section>
  );
}

/* ============================== FOOTER =========================== */
function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-sm text-gray-500 bg-neutral-950">
      © {new Date().getFullYear()} PolyXBets. All rights reserved.
    </footer>
  );
}

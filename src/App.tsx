import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, ChevronRight } from "lucide-react";

// ============================================
// CONFIG
// ============================================
const CONFIG = {
  name: "Captain Brew",
  ticker: "$BREW",
  tagline: "復甦，永不止步",
  subTagline:
    "Captain Brew 不僅僅是一個可愛的吉祥物。他是 $BREW 復甦願景的象徵：代表著一個在崩盤中倖存下來的協議、一個團結一致的社區，以及一個肩負單一使命的機器人——那就是讓 Brew 重回巔峰價格，並在此基礎上再創新高。",
  contract: "0x73cd9a6b64ac91bd3adbacefadaa18145c62d0d8",
  chain: "BSC",
  links: {
    twitter: "",
    telegram: "",
    buy: "https://dexscreener.com/bsc/0x73cd9a6b64ac91bd3adbacefadaa18145c62d0d8",
  },
  specs: [
    { label: "總供應量", value: "1,000,000,000" },
    { label: "稅率", value: "0 / 0" },
    { label: "流動性", value: "已銷毀" },
    { label: "鏈", value: "BSC" },
  ],
};

function CopyContract() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(CONFIG.contract);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-2 px-4 py-2.5 bg-[#161310] border border-[#d4af37]/45 font-mono text-xs sm:text-sm text-[#f2ead6] hover:border-[#d4af37] transition-colors"
      style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
    >
      <span className="truncate max-w-[160px] sm:max-w-none">{CONFIG.contract}</span>
      {copied ? <Check size={14} className="text-[#d4af37] shrink-0" /> : <Copy size={14} className="shrink-0 opacity-60" />}
    </button>
  );
}

function ScatteredBolts() {
  const positions = [
    { top: "2%", left: "89%", rotate: 20, delay: 0.4 },
    { top: "84%", left: "91%", rotate: -18, delay: 1.2 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <motion.div
          key={i}
          className="hidden md:block spec-plate px-3 py-1.5 font-mono text-[10px] tracking-widest text-[#d4af37] whitespace-nowrap w-max"
          style={{ position: "absolute", top: p.top, left: p.left }}
          animate={{ y: [0, -10, 0], rotate: [p.rotate, p.rotate + 4, p.rotate] }}
          transition={{ duration: 5, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        >
          UNIT.{CONFIG.ticker.replace("$", "")}
        </motion.div>
      ))}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen blueprint-bg font-sans text-[#f2ead6] overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0a08]/90 border-b border-[#d4af37]/25">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-9 h-9 rounded-sm object-cover" />
          <span className="chrome-text font-display font-black text-lg">CAPTAINBREW</span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <ScatteredBolts />
        <div className="max-w-2xl">
          <div>
            <h1 className="font-display font-black text-4xl sm:text-6xl leading-[1.15] mb-5">
              <span className="chrome-text">{CONFIG.name}</span>
              <br />
              <span className="text-[#f2ead6]">{CONFIG.tagline}</span>
            </h1>
            <p className="text-[#b8ac8a] text-base sm:text-lg mb-7 max-w-md leading-relaxed">{CONFIG.subTagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              {CONFIG.contract ? (
                <CopyContract />
              ) : (
                <span
                  className="px-4 py-2.5 bg-[#161310] border border-[#d4af37]/45 font-mono text-xs sm:text-sm text-[#b8ac8a]"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
                >
                  合約地址 · 即將公布
                </span>
              )}
              {CONFIG.links.buy ? (
                <a
                  href={CONFIG.links.buy}
                  className="px-6 py-2.5 bg-[#d4af37] text-[#0b0a08] font-mono text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#f0cf6c] transition-colors font-bold"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
                >
                  立即進場 <ChevronRight size={16} />
                </a>
              ) : (
                <span
                  className="px-6 py-2.5 border border-[#d4af37]/20 text-[#6b6252] font-mono text-sm uppercase tracking-wider cursor-not-allowed"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
                >
                  立即進場 · 即將開放
                </span>
              )}
              {CONFIG.links.twitter ? (
                <a
                  href={CONFIG.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 border border-[#d4af37]/50 text-[#f2ead6] font-mono text-sm uppercase tracking-wider flex items-center gap-2 hover:border-[#d4af37] transition-colors"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
                >
                  關注 X
                </a>
              ) : (
                <span
                  className="px-5 py-2.5 border border-[#d4af37]/20 text-[#6b6252] font-mono text-sm uppercase tracking-wider cursor-not-allowed"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
                >
                  關注 X · 即將開放
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="px-5 sm:px-8 max-w-6xl mx-auto pb-20">
        <div className="rivet-line mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d4af37]/25 border border-[#d4af37]/25">
          {CONFIG.specs.map((s) => (
            <div key={s.label} className="bg-[#141110] px-3 py-6 text-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">{s.label}</div>
              <div className="font-display font-bold text-sm sm:text-lg whitespace-nowrap overflow-hidden text-[#f2ead6]">{s.value}</div>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#d4af37]/25 px-5 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-black text-sm">
            <img src="/logo.png" alt="" className="w-7 h-7 rounded-sm object-cover" />
            <span className="chrome-text">CAPTAINBREW</span>
          </div>
          <p className="font-mono text-[11px] text-[#b8ac8a] text-center">
            {CONFIG.name} 是社區自發資產，不構成任何投資建議。請自行研究（DYOR）。
          </p>
          <a href={CONFIG.links.telegram || "#"} className="text-[#b8ac8a] hover:text-[#d4af37]">
            <Send size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

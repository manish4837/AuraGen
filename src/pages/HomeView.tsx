import React from "react";
import FeatureCard from "../components/FeatureCard";
import ChatBubble from "../components/ChatBubble";

interface HomeViewProps {
  onOpenChat: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onOpenChat }) => {
  return (
    <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-10 xl:gap-14 items-start">
      {/* Left: hero + 3 sections */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.9)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            AuraGen focuses on speed, clarity & UI-first workflows.
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            AuraGen{" "}
            <span className="block text-slate-300">
              your mini AI copilot <span className="sm:block">for everything.</span>
            </span>
          </h1>

          <p className="text-sm sm:text-[15px] text-slate-400 max-w-xl">
            Ask, explore, and prototype interfaces with an assistant that understands layout,
            hierarchy, and visual polish — so you move from idea to execution without fighting
            your tools.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(129,140,248,0.9)] hover:scale-[1.03] active:scale-[0.99] transition-transform"
            >
              Open AuraGen Chat
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-[13px] font-medium text-slate-200 hover:bg-slate-800/90 transition-colors">
              Dedicated mini AI assistant
            </button>
          </div>

          {/* Meta row */}
          <dl className="mt-4 grid grid-cols-3 gap-4 max-w-xs text-[11px] text-slate-400">
            <div>
              <dt className="text-slate-500">Latency</dt>
              <dd className="text-emerald-300 font-medium">Sub-second</dd>
            </div>
            <div>
              <dt className="text-slate-500">Mode</dt>
              <dd>Chat + Commands</dd>
            </div>
            <div>
              <dt className="text-slate-500">Focus</dt>
              <dd>UI • Code • Ideas</dd>
            </div>
          </dl>
        </div>

        {/* Three sections (info only) */}
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <FeatureCard
            label="Mode 1"
            title="Simple Search"
            description="Fast, lightweight lookups for UI tokens, components, and quick answers — no overthinking, just instant clarity."
            pill="For quick answers"
          />
          <FeatureCard
            label="Mode 2"
            title="AI Search"
            description="Deeper reasoning with multi-step prompts. Ask AuraGen to refactor flows, compare layouts, or draft full UI states."
            pill="For deep prompts"
          />
          <FeatureCard
            label="Core"
            title="About AuraGen"
            description="AuraGen is a focused mini AI designed for builders who care about how things look and feel, not just that they work."
            pill="Product identity"
          />
        </div>
      </section>

      {/* Right: preview */}
      <section className="relative">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/40 blur-3xl opacity-60" />
        <div className="absolute -left-6 bottom-6 h-40 w-40 rounded-full bg-sky-500/40 blur-3xl opacity-60" />

        <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 shadow-[0_18px_70px_rgba(15,23,42,0.9)] backdrop-blur overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 text-xs text-slate-300">
            <span className="font-medium">Live AuraGen preview</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Sample conversation
            </span>
          </div>

          <div className="px-4 pt-4 pb-5 space-y-3 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950">
            <ChatBubble role="user" align="right">
              Design a clean home screen for my AI.
            </ChatBubble>
            <ChatBubble role="assistant">
              I’ll create a split layout: hero copy on the left, live chat preview on the right,
              with a subtle hex pattern behind.
            </ChatBubble>
            <ChatBubble role="user" align="right">
              Add glowing hexagons in the background.
            </ChatBubble>
            <ChatBubble role="assistant">
              Auto-drafting Aura layout…
            </ChatBubble>

            <div className="mt-4 text-[11px] text-slate-500">
              AuraGen is a mini AI assistant. Don’t use it aggressively.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;

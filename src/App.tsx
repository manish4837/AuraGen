import React, { useState } from "react";
import HomeView from "./pages/HomeView";
import ChatView, { ChatMode } from "./pages/ChatView";

type Tab = "home" | "chat";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [chatMode, setChatMode] = useState<ChatMode>("none");

  const goToChatHome = () => {
    setActiveTab("chat");
    setChatMode("none");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
      {/* Glow / hex background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] bg-[length:26px_26px]" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 sm:px-6 lg:px-10 xl:px-14 py-4 sm:py-6 pb-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-500 via-sky-500 to-indigo-500 shadow-[0_0_28px_rgba(129,140,248,0.9)] flex items-center justify-center text-xs font-semibold tracking-[0.18em]">
              AG
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">AuraGen</div>
              <div className="text-[11px] text-slate-400">
                Mini AI assistant • UI-first
              </div>
            </div>
          </div>

          {/* Center nav */}
          <nav className="relative flex items-center">
            <div className="flex items-center gap-0 rounded-full bg-slate-900/80 border border-slate-700/70 px-1 py-1 text-xs backdrop-blur shadow-[0_12px_40px_rgba(15,23,42,0.9)]">
              {(["home", "chat"] as Tab[]).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={[
                      "relative px-4 py-1.5 rounded-full transition-all duration-200",
                      "capitalize font-medium",
                      isActive
                        ? "bg-slate-100 text-slate-900 shadow-[0_0_0_1px_rgba(148,163,184,0.2),0_0_40px_rgba(129,140,248,0.65)]"
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/70",
                    ].join(" ")}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Status + tag */}
          <div className="flex items-center gap-3 text-[11px]">
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 shadow-[0_0_25px_rgba(16,185,129,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="font-medium text-emerald-200">
                {activeTab === "chat"
                  ? chatMode === "simple"
                    ? "Simple Search mode"
                    : chatMode === "ai"
                    ? "AI Search mode"
                    : "Select a mode to start"
                  : "AuraGen is online — ready to assist"}
              </span>
            </div>
            <span className="hidden sm:inline-flex rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-slate-400">
              AuraGen v1 • Frontend-only demo
            </span>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-6 sm:mt-8 flex-1 flex flex-col">
          {activeTab === "home" ? (
            <HomeView onOpenChat={goToChatHome} />
          ) : (
            <ChatView mode={chatMode} setMode={setChatMode} />
          )}
        </main>

        {/* Footer */}
        <footer className="mt-6 sm:mt-8 text-[11px] text-slate-500 flex items-center justify-between gap-3 flex-wrap">
          <span>
            AuraGen is a mini AI assistant. Use it thoughtfully, not aggressively.
          </span>
          <div className="flex gap-2">
            <span className="rounded-full border border-slate-700/70 px-2 py-0.5">
              UI Prototype
            </span>
            <span className="rounded-full border border-slate-700/70 px-2 py-0.5">
              React + Tailwind + Vite
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

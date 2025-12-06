import React from "react";
import ChatBubble from "../components/ChatBubble";
import SuggestionPill from "../components/SuggestionPill";
import ChatHomeScreen from "./ChatHomeScreen";

export type ChatMode = "none" | "simple" | "ai";

interface ChatViewProps {
  mode: ChatMode;
  setMode: (m: ChatMode) => void;
}

const ChatView: React.FC<ChatViewProps> = ({ mode, setMode }) => {
  const showInput = mode !== "none";
  const placeholder =
    mode === "simple"
      ? "Search anything..."
      : mode === "ai"
      ? "Ask anything..."
      : "";

  return (
    <div className="flex flex-col h-full">
      <div className="mt-0 flex-1 rounded-3xl border border-slate-800/80 bg-slate-950/70 shadow-[0_18px_70px_rgba(15,23,42,0.95)] backdrop-blur flex flex-col overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/90 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-violet-500 via-sky-500 to-indigo-500 flex items-center justify-center text-[10px] font-semibold tracking-[0.18em] shadow-[0_0_22px_rgba(129,140,248,0.95)] animate-pulse">
              AG
            </div>
            <div>
              <div className="font-medium text-slate-100">AuraGen — Mini AI</div>
              <div className="text-[11px] text-slate-500">
                Focused on UI, frontend & ideas
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Live
            </span>
            <span className="hidden sm:inline">UI • Code • Ideas</span>
          </div>
        </div>

        {/* mode pills with capsule */}
        <div className="px-5 pt-3 pb-1 text-[11px]">
          <div className="inline-flex rounded-full bg-slate-900/80 border border-slate-700/80 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.8)]">
            <button
              onClick={() => setMode("simple")}
              className={[
                "px-3 py-1.5 rounded-full transition-all",
                mode === "simple"
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_0_22px_rgba(129,140,248,0.9)]"
                  : "text-slate-300 hover:text-slate-50",
              ].join(" ")}
            >
              Simple Search
            </button>
            <button
              onClick={() => setMode("ai")}
              className={[
                "px-3 py-1.5 rounded-full transition-all",
                mode === "ai"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_22px_rgba(56,189,248,0.9)]"
                  : "text-slate-300 hover:text-slate-50",
              ].join(" ")}
            >
              AI Search
            </button>
          </div>
        </div>

        {/* content */}
        <div className="flex-1 px-5 pb-4 pt-1 overflow-y-auto">
          {mode === "none" && <ChatHomeScreen setMode={setMode} />}

          {mode === "simple" && (
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              <h2 className="text-base font-semibold text-slate-100">
                Simple Search
              </h2>
              <p className="text-[13px] text-slate-400 max-w-xl">
                Use Simple Search for fast, lightweight lookups. Perfect for finding components,
                tokens, small code snippets, or quick UI answers without a long conversation.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] mt-2">
                <SuggestionPill>Search: neumorphic button styles</SuggestionPill>
                <SuggestionPill>Find hex codes for deep slate UI</SuggestionPill>
                <SuggestionPill>Lookup Tailwind class for blur background</SuggestionPill>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-[12px] text-slate-500">
                Your search results will appear here. AuraGen will respond with focused, concise
                answers without extra conversation.
              </div>
            </div>
          )}

          {mode === "ai" && (
            <div className="mt-3 space-y-3">
              <ChatBubble role="assistant">
                Hey, I’m AuraGen. I can help you design UIs, debug frontend issues, or rethink your
                layouts. Ask me anything.
              </ChatBubble>
              <ChatBubble role="user" align="right">
                Help me design a darker, more focused dashboard.
              </ChatBubble>
              <ChatBubble role="assistant">
                Got it. I’ll use a deep slate base, glowing accents, and clear hierarchy so important
                info pops instantly.
              </ChatBubble>
              <div className="flex flex-wrap gap-2 text-[11px] mt-2">
                <SuggestionPill>Draft a landing page hero for AuraGen</SuggestionPill>
                <SuggestionPill>Redesign my dashboard with better hierarchy</SuggestionPill>
                <SuggestionPill>Explain this React error simply</SuggestionPill>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                AuraGen is ready — start typing to continue the conversation.
              </div>
            </div>
          )}
        </div>

        {/* input */}
        {showInput && (
          <div className="border-t border-slate-800/90 bg-slate-950/90 px-4 py-3.5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2.5 shadow-[0_0_24px_rgba(15,23,42,0.85)] focus-within:border-violet-400/70 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.6),0_0_30px_rgba(129,140,248,0.55)] transition-all">
                <input
                  className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                  placeholder={placeholder}
                />
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 text-xs font-semibold shadow-[0_0_18px_rgba(129,140,248,0.95)] hover:translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[0_0_30px_rgba(129,140,248,1)] active:scale-95 transition-transform">
                  ➤
                </button>
              </div>

              <div className="text-[11px] text-slate-500">
                AuraGen is a mini AI assistant. Don’t use it aggressively.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatView;

import React from "react";
import { ChatMode } from "./ChatView";

interface ChatHomeScreenProps {
  setMode: (m: ChatMode) => void;
}

const ChatHomeScreen: React.FC<ChatHomeScreenProps> = ({ setMode }) => {
  return (
    <div className="min-h-[380px] flex flex-col items-center justify-center text-center">
      <div className="mb-4">
        <div className="mx-auto mb-3 h-12 w-12 rounded-3xl bg-gradient-to-br from-violet-500 via-sky-500 to-indigo-500 shadow-[0_0_45px_rgba(129,140,248,1)] flex items-center justify-center text-sm font-semibold tracking-[0.2em]">
          AG
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Welcome to AuraGen Chat
        </h2>
        <p className="mt-2 text-[13px] text-slate-400 max-w-md">
          Choose how you want to use AuraGen today. Use{" "}
          <span className="text-slate-200 font-medium">Simple Search</span> for quick lookups, or{" "}
          <span className="text-slate-200 font-medium">AI Search</span> for deeper conversations and
          multi-step reasoning.
        </p>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-4 max-w-xl w-full">
        <button
          onClick={() => setMode("simple")}
          className="group rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 text-left text-sm shadow-[0_18px_40px_rgba(15,23,42,0.75)] hover:border-violet-400/80 hover:bg-slate-900 transition-all"
        >
          <div className="text-[11px] text-slate-400 mb-1">Mode 1</div>
          <div className="font-semibold text-slate-50 mb-1">Simple Search</div>
          <p className="text-[12px] text-slate-400">
            Fast, lightweight lookups with a search-style interface. Perfect when you just need an
            answer.
          </p>
        </button>

        <button
          onClick={() => setMode("ai")}
          className="group rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 text-left text-sm shadow-[0_18px_40px_rgba(15,23,42,0.75)] hover:border-sky-400/80 hover:bg-slate-900 transition-all"
        >
          <div className="text-[11px] text-slate-400 mb-1">Mode 2</div>
          <div className="font-semibold text-slate-50 mb-1">AI Search</div>
          <p className="text-[12px] text-slate-400">
            Chat-style experience for brainstorming, refactors, multi-step reasoning, and more open
            questions.
          </p>
        </button>
      </div>
    </div>
  );
};

export default ChatHomeScreen;

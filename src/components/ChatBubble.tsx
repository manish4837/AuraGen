import React from "react";

export interface ChatBubbleProps {
  role: "user" | "assistant";
  align?: "left" | "right";
  children: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ role, align, children }) => {
  const isUser = role === "user";
  const side = align ?? (isUser ? "right" : "left");

  return (
    <div
      className={[
        "flex mb-1",
        side === "right" ? "justify-end" : "justify-start",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-[72%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug",
          "transition-transform duration-150",
          isUser
            ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-[0_0_26px_rgba(129,140,248,0.85)]"
            : "bg-slate-900/90 border border-slate-700/80 text-slate-100",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export default ChatBubble;

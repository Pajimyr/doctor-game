"use client";

import { useBook } from "@/Context/BookContext";
import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

export default function HighlightedIdea({ id, children }: Props) {
  const { addIdea, collected } = useBook();
  const alreadyCollected = collected.some((i) => i.id === id);

  return (
    <span
      onClick={() => addIdea(id)}
      title={alreadyCollected ? "Již v knize" : "Přidat do knihy pojmů"}
      style={alreadyCollected ? {
        color: "#fdd835",
        textDecoration: "underline dotted",
        textDecorationColor: "#fdd835",
        cursor: "default",
        fontWeight: 500,
      } : {
        color: "#1a1a1a",
        backgroundColor: "#fdd835",
        padding: "1px 3px",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

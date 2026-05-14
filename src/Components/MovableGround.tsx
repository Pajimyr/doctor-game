"use client";

import Draggable from "react-draggable";
import { useRef, useState, useEffect, Children } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width?: string;
  height?: string;
};

const ITEM_WIDTH = 160;
const ITEM_GAP = 50;

let zCounter = 1;

function calcDefaultPosition(index: number, total: number): { x: number; y: number } {
  if (typeof window === "undefined") return { x: 0, y: 0 };
  const totalWidth = total * ITEM_WIDTH + (total - 1) * ITEM_GAP;
  const x = window.innerWidth / 2 - totalWidth / 2 + index * (ITEM_WIDTH + ITEM_GAP);
  const y = window.innerHeight / 2 - 18;
  return { x, y };
}

export default function MovableGround({ children, width = "100vw", height = "100vh" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const childArray = Children.toArray(children);

  if (!mounted) return <div style={{ position: "relative", width, height, overflow: "hidden" }} />;

  return (
    <div style={{ position: "relative", width, height, overflow: "hidden" }}>
      {childArray.map((child, i) => (
        <DraggableItem key={i} defaultPosition={calcDefaultPosition(i, childArray.length)}>
          {child}
        </DraggableItem>
      ))}
    </div>
  );
}

function DraggableItem({ children, defaultPosition }: { children: ReactNode; defaultPosition: { x: number; y: number } }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState(1);

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-handle"
      defaultPosition={defaultPosition}
      onStart={() => setZIndex(++zCounter)}
    >
      <div ref={nodeRef} style={{ position: "absolute", top: 0, left: 0, zIndex }}>
        {children}
      </div>
    </Draggable>
  );
}

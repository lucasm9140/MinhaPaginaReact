"use client";
import { useState } from "react";

export default function ReactionButtons({ itemId }) {
  const [reaction, setReaction] = useState(null);

  async function send(r) {
    await fetch("/api/reactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, reaction: r })
    });
    setReaction(r);
  }

  return (
    <div>
      {["👍","❤️","😮"].map(r => (
        <button key={r} onClick={()=>send(r)} style={{ fontSize: "1.5rem", margin: "0 .5rem" }}>
          {r} {reaction === r ? "(você)" : ""}
        </button>
      ))}
    </div>
  );
}

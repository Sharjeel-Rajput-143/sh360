"use client";
import { useState } from "react";
export default function PrivacyControls() {
  const [message, setMessage] = useState("");
  return (
    <div className="px-privacy-controls">
      <button
        className="px-button"
        onClick={() => {
          try {
            sessionStorage.removeItem("sh360-inquiry-source");
            setMessage("Campaign details cleared for this browser tab.");
          } catch {
            setMessage("Browser storage is unavailable.");
          }
        }}
      >
        Clear campaign details
      </button>
      <p role="status">{message}</p>
    </div>
  );
}

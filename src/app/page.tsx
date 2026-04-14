"use client";

import { Outfit } from "next/font/google";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return (
    <div className="page-container">
      <h1 style={{ fontFamily: outfitFont.style.fontFamily }}>Hyrox Workout Generator</h1>
      <button type="button" className="login" onClick={() => window.location.href = '/login'}>Login</button>
    </div>
  );
}
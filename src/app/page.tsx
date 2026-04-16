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
      <h2 style={{ fontFamily: outfitFont.style.fontFamily }} className="subtitle">Your Personal Hyrox Training Companion</h2>
      <p className="tagline">Built for athletes who train with purpose. Whether you&apos;re chasing a<br /> personal best or stepping onto the competition floor for the first time,<br />get Hyrox-specific sessions built for you every single time.</p>
      {/* <hr className ="divider" /> */}
      <button type="button" className="login" onClick={() => window.location.href = '/login'}>Generate My Workout</button>
    </div>
  );
}
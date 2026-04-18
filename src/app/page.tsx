"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="page-container">
      <div className="badge">Hyrox Training Tool</div>
      <h1>Hyrox Workout Generator</h1>
      <h2>Your Personal Hyrox Training Companion</h2>
      <p className="tagline">Built for athletes who train with purpose. Whether you&apos;re chasing a<br /> personal best or stepping onto the competition floor for the first time,<br />get Hyrox-specific sessions built for you every single time.</p>
      <button onClick={() => router.push('/login')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Login</button>
    </div>
  );
}

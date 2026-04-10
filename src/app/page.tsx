"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Workout = {
  workout_type: string
  workout_duration: string
  description: string
}

export default function Page() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(false);
  
    async function handleWorkout() {
      setLoading(true);
      try {
        const res = await fetch("/api/workout");
        const data = await res.json();
        setWorkout(data[0] ?? null);
      } finally {
        setLoading(false);
      }
    }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh", padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", marginBottom: "20px", fontFamily: outfitFont.style.fontFamily }}>Hyrox Workout Generator</h1>
      <div style={{ maxWidth: "400px", width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>

        {/* Workout Types */}
        <button type="button" className="engine" style={{ width: "120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: outfitFont.style.fontFamily }}>Engine</button>
        <button type="button" className="strength" style={{ width: "120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: outfitFont.style.fontFamily }}>Strength</button>
        <button type="button" className="workout" onClick={handleWorkout} style={{ width: "120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: outfitFont.style.fontFamily }}>
          {loading ? "Loading..." : "Workout"}
        </button>

      </div>
      {workout && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <pre
            style={{ fontFamily: outfitFont.style.fontFamily, textAlign: 'center' }}
          >
            {workout.workout_type.replace(/\\n/g, '\n')}
            {'\n'}
            {workout.workout_duration.replace(/\\n/g, '\n')}
            {'\n'}
            {'\n'}
            {workout.description.replace(/\\n/g, '\n')}
          </pre>
        </div>
      )}
    </div>
  );
}
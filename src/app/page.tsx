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
    <div className="page-container">
      <h1 style={{ fontFamily: outfitFont.style.fontFamily }}>Hyrox Workout Generator</h1>
      <div className="button-row">
        <button type="button" className="engine" style={{ fontFamily: outfitFont.style.fontFamily }}>Engine</button>
        <button type="button" className="strength" style={{ fontFamily: outfitFont.style.fontFamily }}>Strength</button>
        <button type="button" className="workout" onClick={handleWorkout} style={{ fontFamily: outfitFont.style.fontFamily }}>
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
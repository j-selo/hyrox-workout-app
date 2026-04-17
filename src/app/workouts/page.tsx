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
      
      <div className="category-cards flex flex-col md:flex-row gap-4">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-bold">Engine</h2>
            <p>Cardio-focused sessions to build the aerobic base and race-pace endurance that Hyrox demands..</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-bold">Strength</h2>
            <p>Functional lifting and accessory work to power through sleds, lunges, and wall balls with confidence.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-bold">Workout</h2>
            <p>Race-simulation sessions combining running, stations, and transitions — the complete Hyrox experience.</p>
          </div>
        </div>
      <br></br>

      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div> */}

      <div className="button-row">
        <button type="button" className="engine">Engine</button>
        <button type="button" className="strength">Strength</button>
        <button type="button" className="workout" onClick={handleWorkout}>
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
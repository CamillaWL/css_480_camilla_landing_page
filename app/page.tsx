'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [interests, setInterests] = useState([
    'Biology 🧬',
    'Plants 🪴',
    'Cooking 🥘',
    'Working Out 💪',
    'Reading 📚',
  ]);

  const shuffleInterests = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-white text-slate-800 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-teal-800 mb-4">
          🌿 Welcome to My Space
        </h1>

        <p className="text-lg text-center text-slate-800 mb-8">
          Hi! I’m Camilla — an Applied Computing student who’s into biology, brain stuff, and plant life. 
          This is my happy little space to share my passions 🌱
        </p>

        {/* Profile Picture */}
        <div className="flex justify-center mb-10">
          <Image
            src="/Profile Picture.png"
            alt="Camilla's profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-sky-300 shadow-lg"
          />
        </div>

        {/* Interests */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Things I Love 🌼</h2>

          <ul className="list-disc list-inside text-left mx-auto max-w-xs space-y-1 text-slate-800">
            {interests.map((item, idx) => (
              <li
                key={idx}
                tabIndex={0}
                className="focus:outline focus:outline-2 focus:outline-sky-400 rounded"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={shuffleInterests}
            className="mt-6 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-lg focus:outline focus:outline-2 focus:outline-yellow-300 transition"
          >
            🔀 Shuffle My Interests
          </button>
        </div>

        {/* Keyboard Access Instructions */}
        <div className="mt-12 bg-sky-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-teal-800 mb-2">🎹 Keyboard Navigation Help</h2>
          <p className="text-slate-800 mb-2">
            This website is fully keyboard accessible. You can navigate and interact with everything using only your keyboard:
          </p>
          <ul className="list-disc list-inside text-slate-800 space-y-1">
            <li>Use <strong>Tab</strong> to move forward through buttons and links</li>
            <li>Use <strong>Shift + Tab</strong> to move backward</li>
            <li>Press <strong>Enter</strong> to activate any button or link</li>
          </ul>
          <p className="mt-3 text-slate-800">
            <strong>Keyboard usability features I focused on:</strong>  
            Making sure everything is reachable using Tab, interactive elements have visible focus outlines, and the order of navigation is logical and friendly.
          </p>
        </div>
      </div>
    </main>
  );
}

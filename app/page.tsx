'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [interests, setInterests] = useState([
    'Biology 🌿',
    'Plants 🪴',
    'Cooking 🍳',
    'Working Out 🏋️‍♀️',
    'Reading 📚',
  ]);

  const shuffleInterests = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);
  };

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-4">
          🎀 Welcome to My Little Space
        </h1>

        <p className="text-lg text-center text-pink-900 mb-8">
          Hi! I’m Camilla — an Applied Computing student with a soft spot for science, plants, and meaningful projects. 
          This site is a cozy corner where I share what I love 🌸
        </p>

        {/* Profile Picture */}
        <div className="flex justify-center mb-10">
          <Image
            src="/profile.jpg"
            alt="Camilla's profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-pink-300 shadow-lg"
          />
        </div>

        {/* Interests Section */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Here’s What Makes Me Smile 😊</h2>

          <ul className="list-disc list-inside text-left mx-auto max-w-xs space-y-1 text-pink-900">
            {interests.map((item, idx) => (
              <li
                key={idx}
                tabIndex={0}
                className="focus:outline focus:outline-2 focus:outline-pink-400 rounded"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={shuffleInterests}
            className="mt-6 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-lg focus:outline focus:outline-2 focus:outline-yellow-300 transition"
          >
            🔀 Shuffle My Interests
          </button>
        </div>
      </div>
    </main>
  );
}

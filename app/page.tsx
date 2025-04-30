'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [interests, setInterests] = useState([
    'Biology',
    'Plants',
    'Cooking',
    'Working Out',
    'Reading',
  ]);

  const shuffleInterests = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-4">
          👋 Welcome to My Site
        </h1>

        <p className="text-lg text-center mb-8 text-gray-700">
          Hi, I'm Camilla — an Applied Computing student passionate about biology, tech, and everything cozy and curious.
        </p>

        {/* Profile Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/profile.jpg"
            alt="Camilla's profile photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-300 shadow-lg"
          />
        </div>

        {/* Interests List */}
        <div className="text-center bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Things I Love</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-xs space-y-1 text-gray-800">
            {interests.map((item, index) => (
              <li
                key={index}
                tabIndex={0}
                className="focus:outline focus:outline-2 focus:outline-blue-500 rounded"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={shuffleInterests}
            className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg focus:outline focus:outline-2 focus:outline-yellow-300 transition"
          >
            🔀 Shuffle Interests
          </button>
        </div>
      </div>
    </main>
  );
}

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
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Site</h1>

      <p className="text-lg text-center mb-6">
        Hi, I'm Camilla — an Applied Computing student who loves exploring biology, cooking, and all things green.
      </p>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <Image
          src="/profile.jpg"
          alt="Camilla's profile photo"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-300 shadow-md"
        />
      </div>

      {/* Interests List */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Things I'm Into</h2>
        <ul className="list-disc list-inside mb-4 text-left inline-block">
          {interests.map((item, index) => (
            <li key={index} tabIndex={0} className="focus:outline focus:outline-2 focus:outline-blue-500">
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={shuffleInterests}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-yellow-400"
        >
          Shuffle Interests
        </button>
      </div>
    </section>
  );
}

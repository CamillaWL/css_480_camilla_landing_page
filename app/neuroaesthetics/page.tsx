import Image from 'next/image';

export default function NeuroaestheticsPage() {
  return (
    <main className="text-gray-800">
      <header className="bg-gradient-to-r from-gray-700 to-pink-500 text-white text-center py-12 px-6">
        <h1 className="text-4xl font-bold">Neuroaesthetics</h1>
        <p className="text-lg mt-2">Exploring the Connection Between Art and the Human Brain</p>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">What is Neuroaesthetics?</h2>
          <p>
            Neuroaesthetics is a field that studies how our brains react to art and design.
            It blends neuroscience, psychology, and art theory to understand how beauty affects emotions and memory.
          </p>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Neuroimaging_in_aesthetic_experience.png"
            alt="Brain response to art"
            width={800}
            height={500}
            className="rounded-xl shadow-lg mt-4"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">The Brain on Art</h2>
          <p>
            Viewing art activates the brain’s reward systems, much like music, food, or love.
            Studies show art lowers stress and stimulates emotional and visual centers in the brain.
          </p>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Emotion_Processing_in_the_Brain.png"
            alt="Brain emotion areas"
            width={800}
            height={500}
            className="rounded-xl shadow-lg mt-4"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Art as Cognitive Exercise</h2>
          <p>
            Engaging with art boosts memory, empathy, and attention.
            That’s why art therapy is often used with patients experiencing cognitive decline.
          </p>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI_scan_human_head_side_view.jpg"
            alt="MRI brain scan"
            width={800}
            height={500}
            className="rounded-xl shadow-lg mt-4"
          />
        </section>
      </div>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        Created by Camilla Lindberg | CSS 480 Project
      </footer>
    </main>
  );
}


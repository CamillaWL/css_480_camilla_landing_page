export default function NeuroaestheticsPage() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <header className="bg-gradient-to-r from-gray-700 to-pink-500 text-white text-center py-12 px-6">
        <h1 className="text-4xl font-bold">Neuroaesthetics</h1>
        <p className="text-lg mt-2">
          Exploring the Connection Between Art and the Human Brain
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">What is Neuroaesthetics?</h2>
          <p>
            Neuroaesthetics is a scientific field that studies how our brains
            respond to art, design, and beauty.
          </p>
          <img
            src="/neuroaesthetics-brain.png"
            alt="Brain response to art"
            className="rounded-xl shadow-lg my-6 w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">The Emotional Brain</h2>
          <p>
            When we see something beautiful, it activates brain areas like the
            amygdala and prefrontal cortex.
          </p>
          <img
            src="/emotional-brain.png"
            alt="Brain regions responsible for emotion"
            className="rounded-xl shadow-lg my-6 w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Art and Brain Health</h2>
          <p>
            Art helps reduce stress and enhance focus. It’s even used in therapy
            for dementia and PTSD.
          </p>
          <img
            src="/mri-scan.jpg"
            alt="MRI scan of human brain"
            className="rounded-xl shadow-lg my-6 w-full"
          />
        </section>
      </div>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
        Created by Camilla Lindberg | CSS 480 Project
      </footer>
    </main>
  );
}

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
            respond to art, design, and beauty. It brings together neuroscience,
            psychology, and the arts to understand how aesthetics influence our
            thoughts, emotions, and behaviors.
          </p>
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*WZ5uEJ6Yz1aV1Zf5n0F4Vg.jpeg"
            alt="Neuroaesthetics concept art"
            className="rounded-xl shadow-lg my-6 w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">The Emotional Brain</h2>
          <p>
            When we see something beautiful, it activates areas in our brain
            related to reward, emotion, and memory. This includes the amygdala,
            prefrontal cortex, and orbitofrontal cortex — all of which light up
            when we engage with meaningful visuals.
          </p>
          <img
            src="https://karengosling.com/wp-content/uploads/2014/10/Emotional-Brain.jpg"
            alt="Brain emotion diagram"
            className="rounded-xl shadow-lg my-6 w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Art and Brain Health</h2>
          <p>
            Studies show that making or viewing art can reduce stress and
            improve focus. Art therapy is now used to support people with
            anxiety, dementia, and trauma. Even observing art passively can
            increase dopamine — the brain's \"feel-good\" chemical.
          </p>
          <img
            src="https://theodc.net/wp-content/uploads/2019/07/MRI-Scan.jpg"
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

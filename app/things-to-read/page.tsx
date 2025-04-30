'use client';

export default function ThingsToRead() {
  const links: { name: string; url: string; emoji: string }[] = [
    { name: 'The Sill – Plant Care Library', url: 'https://www.thesill.com', emoji: '🌱' },
    { name: 'Missouri Botanical Garden', url: 'https://www.missouribotanicalgarden.org/', emoji: '🌿' },
    { name: 'Healthline – Nutrition', url: 'https://www.healthline.com/nutrition', emoji: '🍎' },
    { name: 'Mayo Clinic – Healthy Living', url: 'https://www.mayoclinic.org/healthy-lifestyle', emoji: '🧘‍♀️' },
    { name: 'Bon Appétit Recipes', url: 'https://www.bonappetit.com/recipes', emoji: '🥗' },
    { name: 'Serious Eats – Guides', url: 'https://www.seriouseats.com', emoji: '🍳' },
    { name: 'NatGeo – Biology', url: 'https://www.nationalgeographic.com', emoji: '🧬' },
    { name: 'Khan Academy – Biology', url: 'https://www.khanacademy.org/science/biology', emoji: '🔬' },
    { name: 'House Plant Journal Blog', url: 'https://www.houseplantjournal.com/blogs/blog', emoji: '🪴' },
    { name: 'Harvard Health Blog', url: 'https://www.health.harvard.edu/blog', emoji: '🧠' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-lime-50 to-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-6">
          📚 Things to Read
        </h1>

        <p className="text-center text-green-900 mb-10">
          Here’s a list of science-y, nature-y, and health-y links I think are worth checking out 🍃
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {links.map(({ name, url, emoji }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="bg-white p-4 rounded-lg shadow-sm border border-green-200 hover:shadow-md focus:outline focus:outline-2 focus:outline-green-400 transition-all"
            >
              <div className="text-2xl mb-2">{emoji}</div>
              <p className="text-green-800 font-medium">{name}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

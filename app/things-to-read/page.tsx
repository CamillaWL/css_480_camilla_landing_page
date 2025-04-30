'use client';

export default function ThingsToRead() {
  const links: { name: string; url: string }[] = [
    { name: 'The Sill – Plant Care Library', url: 'https://www.thesill.com/pages/plant-care-library' },
    { name: 'Missouri Botanical Garden', url: 'https://www.missouribotanicalgarden.org/' },
    { name: 'Healthline – Nutrition', url: 'https://www.healthline.com/nutrition' },
    { name: 'Mayo Clinic – Healthy Living', url: 'https://www.mayoclinic.org/healthy-lifestyle' },
    { name: 'Bon Appétit Recipes', url: 'https://www.bonappetit.com/recipes' },
    { name: 'Serious Eats – Techniques and Guides', url: 'https://www.seriouseats.com/techniques' },
    { name: 'National Geographic – Science: Biology', url: 'https://www.nationalgeographic.com/science/biology' },
    { name: 'Khan Academy – Biology', url: 'https://www.khanacademy.org/science/biology' },
    { name: 'House Plant Journal Blog', url: 'https://www.houseplantjournal.com/blogs/blog' },
    { name: 'Harvard Health Blog', url: 'https://www.health.harvard.edu/blog' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-6">
          🌱 Things to Read
        </h1>

        <p className="text-center text-gray-700 mb-8">
          Here are some curated links based on my favorite topics — plants, health, cooking, and biology.
        </p>

        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <ul className="list-disc list-inside space-y-3 text-blue-700 text-lg">
            {links.map(({ name, url }, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  className="underline hover:text-blue-900 focus:outline focus:outline-2 focus:outline-blue-400"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

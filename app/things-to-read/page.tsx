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
    <>
      <h1 className="text-2xl font-bold mb-4">Things to Read</h1>
      <ul className="list-disc pl-6 space-y-2">
        {links.map(({ name, url }, i) => (
          <li key={i}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="text-blue-600 underline focus:outline focus:outline-2 focus:outline-blue-400"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

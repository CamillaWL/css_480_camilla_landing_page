import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hi! Welcome to my site</h1>
      <p className="mt-2">I'm Camilla, an Applied Computing student who loves biology, plants, and cooking.</p>

      <div className="my-6">
        <Image
          src="/profile.jpg"
          alt="Camilla's profile photo"
          width={300}
          height={300}
          className="rounded-xl shadow-lg"
        />
      </div>

      <h2 className="text-xl font-semibold mt-4">My Interests</h2>
      <ul className="list-disc pl-6 mt-2">
        <li tabIndex={0}>Biology</li>
        <li tabIndex={0}>Plants</li>
        <li tabIndex={0}>Cooking</li>
        <li tabIndex={0}>Working Out</li>
        <li tabIndex={0}>Reading</li>
      </ul>
    </>
  );
}

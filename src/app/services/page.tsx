import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <ul className="space-y-3 text-blue-700 font-semibold">
        <li><Link href="/services/oldage">Old Age Home</Link></li>
        <li><Link href="/services/hub">Rs.5 Idli Hub</Link></li>
        <li><Link href="/services/child">Child Education</Link></li>
        <li><Link href="/services/covid">Covid Widow Women</Link></li>
        <li><Link href="/services/raksha">Project Raksha</Link></li>
        <li><Link href="/services/women">Women Empowerment</Link></li>
        <li><Link href="/services/youth">Youth’s Empowerment</Link></li>
      </ul>
    </div>
  );
}

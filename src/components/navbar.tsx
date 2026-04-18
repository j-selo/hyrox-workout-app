import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-800 text-white border-b sticky top-0 z-50">
      {/* Navigation Links */}
      <div className="flex gap-x-6 text-gray-600">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
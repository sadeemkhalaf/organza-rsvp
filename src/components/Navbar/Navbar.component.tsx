import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/path-to-logo.png" // Path to your logo image
              alt="Organza Logo"
              width={120} // Adjust the width
              height={40} // Adjust the height
              priority // Ensures the logo loads quickly
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About us
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
            Dashboard
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-800">
            Profile
          </Link>
          <button className="text-gray-600 hover:text-gray-800">Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

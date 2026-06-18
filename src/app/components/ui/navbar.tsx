import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
        <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="flex items-center px-4">
                    <Image src="/insurance-logo.png" alt="Logo" width={30} height={30} className="mr-2" />
                    <div className="text-white text-lg font-bold">Insurance Portal</div>
                </Link>
            </div>
            <div className="flex items-center space-x-2">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
        </div>
    </nav>
  );
}


import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
            <Image src="/insurance-logo.png" alt="Logo" width={30} height={30} className="mr-2" />
            <div className="text-white text-lg font-bold">Insurance Portal</div>
            </div>
            <div>
                <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
        </div>
    </nav>
  );
}


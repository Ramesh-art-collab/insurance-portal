import Image from "next/image";


export default function Home() {
  return (
    <div className="flex-1">
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Welcome to the Insurance Portal</h1>
        <p className="text-gray-600 text-center mb-8">Your one-stop solution for all your insurance needs.</p>
        <div className="flex gap-8">
          <div className="w-1/2 min-w-0">
            <Image src="/insurance.png" alt="Insurance" width={600} height={400} className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
          <div className="w-1/2 min-w-0 flex flex-col justify-center gap-2">
            <p>Motor Insurance</p>
            <p>Health Insurance</p>
            <p>Life Insurance</p>
            <p>Travel Insurance</p>
          </div>
        </div>
      </main>
    </div>
  );
}

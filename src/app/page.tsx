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
          <div className="w-1/2 min-w-0 grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm text-center">
              <Image src="/car.png" alt="Car Insurance" width={60} height={60} className="mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">Motor Insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm text-center">
              <Image src="/health.png" alt="Health Insurance" width={60} height={60} className="mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">Health Insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm text-center">
              <Image src="/travel.png" alt="Travel Insurance" width={60} height={60} className="mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">Travel Insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm text-center">
              <Image src="/life.png" alt="Life Insurance" width={60} height={60} className="mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">Life Insurance</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

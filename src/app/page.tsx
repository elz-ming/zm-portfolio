import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-8">
      <div className="text-center">
        {/* Profile Circle */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-gray-300 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-yellow-500 cursor-pointer"></div>
        </div>

        {/* Welcome Content */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            This is your portfolio homepage
          </p>
        </div>
      </div>
    </div>
  );
}

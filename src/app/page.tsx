import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fullscreen image with call-to-action button */}
      <div className="relative w-full h-screen">
        <Image
          src="/ai.jpg" // Replace with the path to your image in the public folder
          alt="Background"
          fill // Makes the image fill its parent container
          style={{ objectFit: "cover" }} // Ensures the image covers the container
          priority // Optional: Prioritize loading this image for performance
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome To The World Of AI
            </h1>
            <Link href={`/blog`}>
              <button className="mt-4 px-6 py-3 bg-charcoal-gray text-white font-semibold rounded-lg hover:bg-green-600 transition">
                Explore our blog
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

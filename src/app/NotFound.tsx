"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('/notfound.jpg')" }}>  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-6">Sorry, this page is under construction.</p>
        
        <Link href="/" className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

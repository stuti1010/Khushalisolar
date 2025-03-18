"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoadingScreenProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Decreased to 100ms

    return () => clearTimeout(timer); 
  }, [setLoading]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-20 h-20 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center"
      >
        ☀️
      </motion.div>

  
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="mt-5 text-xl font-semibold"
      >
        Powering a Brighter Future...
      </motion.h1>
    </div>
  );
};

export default LoadingScreen;

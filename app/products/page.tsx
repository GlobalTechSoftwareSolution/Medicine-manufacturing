'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

// Animation variants for Framer Motion
const scaleAnimation = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.02, 1.01, 1.02, 1.01, 1.02, 1] },
  transition: { 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const scaleRotateAnimation = {
  initial: { scale: 1, rotate: 0 },
  animate: { 
    scale: [1, 1.03, 1.01, 1.03, 1.01, 1.03, 1],
    rotate: [0, 2, -2, -2, 0, 2, -2, 0]
  },
  transition: { 
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.5 },
  animate: { 
    scale: [1, 1.1, 1.05, 1.1, 1.05, 1.1, 1.05, 1],
    opacity: [0.5, 0.8, 1, 0.8, 1, 0.8, 1, 0.8, 0.5, 1],
    rotate: [0, 5, -5, -5, 0, 5, -5, 0]
  },
  transition: { 
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

interface ProductDetail {
  composition: string;
  indications: string;
  dosage: string;
  storage: string;
}

interface ProductDetails {
  [key: string]: ProductDetail;
}

export default function ProductsPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const productDetails: ProductDetails = {
    'PARANAC-PLUS': {
      composition: 'Advanced paracetamol formulation',
      indications: 'Pain relief and fever reduction',
      dosage: 'As prescribed by physician',
      storage: 'Store in cool, dry place'
    },
    'MONTORIN-LC': {
      composition: 'Montelukast with Levocetirizine',
      indications: 'Asthma and allergic rhinitis',
      dosage: 'Once daily as directed',
      storage: 'Keep away from moisture'
    },
    'PARANAC-SP': {
      composition: 'Spasmolytic paracetamol blend',
      indications: 'Muscle spasms and pain',
      dosage: 'As per medical advice',
      storage: 'Room temperature'
    },
    'PANFA-DSR': {
      composition: 'Pantoprazole with Domperidone',
      indications: 'GERD and acid reflux',
      dosage: 'Before meals as prescribed',
      storage: 'Store in dry place'
    },
    'AGUMED-625': {
      composition: 'Amoxicillin 625mg',
      indications: 'Bacterial infections',
      dosage: 'Twice daily with meals',
      storage: 'Refrigerate after opening'
    },
    'PARANAC-MR': {
      composition: 'Modified release paracetamol',
      indications: 'Chronic pain management',
      dosage: 'Extended release formula',
      storage: 'Cool, dry place'
    },
    'NR NANO-GEL': {
      composition: 'Nanotechnology-based gel',
      indications: 'Topical pain relief',
      dosage: 'Apply thin layer to affected area',
      storage: 'Store at room temperature'
    },
    'ITRODERM-PLUS': {
      composition: 'Advanced dermatological formula',
      indications: 'Skin conditions and infections',
      dosage: 'Apply as directed by physician',
      storage: 'Store in cool place'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Products Overview Section */}
      <div className="relative bg-gray-100 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="/product.png" 
            alt="NR Medicare Products" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onLoad={() => {
              // Force cache refresh
              console.log('Product image loaded');
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-semibold uppercase text-blue-600 tracking-wider mb-2">OVERVIEW</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Products</h1>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed text-justify">
              NR Medicare offers a comprehensive range of high-quality pharmaceutical products developed to meet essential healthcare needs. Our portfolio includes reliable formulations and active pharmaceutical ingredients (APIs) manufactured with a strong focus on safety, consistency, and regulatory compliance.
            </p>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Products</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* PARANAC-PLUS Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M1.jpg" 
                  alt="PARANAC-PLUS" 
                  className="w-full h-full object-cover"
                  animate={scaleAnimation}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">PARANAC-PLUS</h3>
                <button 
                  onClick={() => router.push('/products/paranac-plus')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* MONTORIN-LC Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M2.png" 
                  alt="MONTORIN-LC" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">MONTORIN-LC</h3>
                <button 
                  onClick={() => router.push('/products/montinor-lc')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* PARANAC-SP Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M3.png" 
                  alt="PARANAC-SP" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.06, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.5
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">PARANAC-SP</h3>
                <button 
                  onClick={() => router.push('/products/paranac-sp')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* PANFA-DSR Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M4.png" 
                  alt="PANFA-DSR" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.04, 1],
                    x: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.8
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">PANFA-DSR</h3>
                <button 
                  onClick={() => router.push('/products/panfa-dsr')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* AGUMED-625 Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M5.png" 
                  alt="AGUMED-625" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.03, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">AGUMED-625</h3>
                <button 
                  onClick={() => router.push('/products/agumed-625')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* PARANAC-MR Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M6.png" 
                  alt="PARANAC-MR" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -2, 0],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    repeatDelay: 1.2
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">PARANAC-MR</h3>
                <button 
                  onClick={() => router.push('/products/paranac-mr')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* NR NANO-GEL Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M7.PNG" 
                  alt="NR NANO-GEL" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.85, 1, 0.85]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    repeatDelay: 1.5
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">NR NANO-GEL</h3>
                <button 
                  onClick={() => router.push('/products/nr-nano-gel')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>

            {/* ITRODERM-PLUS Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <motion.img 
                  src="/M8.PNG" 
                  alt="ITRODERM-PLUS" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: [1, 1.06, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    repeatDelay: 1.8
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 text-center mb-3">ITRODERM-PLUS</h3>
                <button 
                  onClick={() => router.push('/products/itroderm-plus')}
                  className="w-full bg-gray-700 text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function ParanacPlusPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button 
            onClick={() => router.push('/products')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
        </div>
      </div>

      {/* Product Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">PARANAC-PLUS</h1>
            <p className="text-lg text-blue-700 mb-8">Advanced Pain Relief Formula</p>
            <div className="w-32 h-32 mx-auto mb-8 rounded-lg shadow-lg overflow-hidden">
              <img src="/M1.jpg" alt="PARANAC-PLUS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Basic Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Composition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Advanced paracetamol formulation with enhanced bioavailability for rapid pain relief and fever reduction. 
                      Contains 500mg of paracetamol per tablet with proprietary absorption enhancers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Indications</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Mild to moderate pain relief</li>
                      <li>Fever reduction</li>
                      <li>Headache and migraine relief</li>
                      <li>Menstrual pain management</li>
                      <li>Muscle aches and joint pain</li>
                      <li>Added new indication</li>
                    </ul>
                  </div>

                                  </div>
              </div>

              {/* Safety Information */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Safety Information</h3>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Contraindications:</strong> Severe hepatic impairment, hypersensitivity to paracetamol</p>
                  <p><strong>Side Effects:</strong> Rare allergic reactions, liver toxicity at high doses</p>
                  <p><strong>Pregnancy:</strong> Safe for use during pregnancy and lactation</p>
                  <p><strong>Storage:</strong> Store below 25°C, protect from moisture</p>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Features</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fast-acting formula for rapid relief</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Enhanced bioavailability technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Gentle on stomach lining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Non-drowsy formulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Compatible with other medications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Packaging & Availability</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Pack Sizes:</strong> 10 tablets, 20 tablets, 100 tablets</p>
                  <p><strong>Form:</strong> Film-coated tablets</p>
                  <p><strong>Color:</strong> White, round tablets</p>
                  <p><strong>Markings:</strong> "PARANAC-PLUS" imprint on one side</p>
                  <p><strong>Storage:</strong> Store in original container, tightly closed</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">Quality Assurance</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Manufacturing:</strong> WHO-GMP certified facility</p>
                  <p><strong>Quality Control:</strong> Batch-to-batch consistency testing</p>
                  <p><strong>Stability:</strong> 36-month shelf life from manufacturing date</p>
                  <p><strong>Regulatory:</strong> Approved by national drug authorities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => router.push('/products')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

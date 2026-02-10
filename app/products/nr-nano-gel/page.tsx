'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function NrNanoGelPage() {
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
      <div className="relative bg-gradient-to-r from-indigo-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">NR NANO-GEL</h1>
            <p className="text-lg text-indigo-700 mb-8">Advanced Nanotechnology Pain Relief</p>
            <div className="w-32 h-32 mx-auto mb-8 rounded-lg shadow-lg overflow-hidden">
              <img src="/M7.PNG" alt="NR NANO-GEL" className="w-full h-full object-cover" />
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
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">Composition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nanotechnology-based gel with advanced penetration enhancers. 
                      Contains active analgesic compounds in nano-particle formulation for targeted delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">Indications</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Localized muscle and joint pain</li>
                      <li>Arthritis pain management</li>
                      <li>Sports injuries and strains</li>
                      <li>Back pain relief</li>
                      <li>Post-operative pain</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">Safety Information</h3>
                    <div className="text-gray-700 space-y-2 text-sm">
                      <p><strong>Contraindications:</strong> Broken skin, open wounds, hypersensitivity</p>
                      <p><strong>Side Effects:</strong> Local skin irritation, rare allergic reactions</p>
                      <p><strong>Pregnancy:</strong> Consult healthcare provider before use</p>
                      <p><strong>Storage:</strong> Store at room temperature, protect from light</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Safety Information */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Safety Information</h3>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Contraindications:</strong> Broken skin, open wounds, hypersensitivity</p>
                  <p><strong>Side Effects:</strong> Local skin irritation, rare allergic reactions</p>
                  <p><strong>Pregnancy:</strong> Consult healthcare provider before use</p>
                  <p><strong>Storage:</strong> Store at room temperature, protect from light</p>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Key Features</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Nanotechnology delivery system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Rapid absorption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Non-greasy formula</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Targeted pain relief</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Packaging & Availability</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Pack Sizes:</strong> 30g tube, 50g tube, 100g tube</p>
                  <p><strong>Form:</strong> Translucent gel in aluminum tube</p>
                  <p><strong>Color:</strong> Clear to slightly tinted gel</p>
                  <p><strong>Texture:</strong> Smooth, non-sticky consistency</p>
                  <p><strong>Storage:</strong> Store in original container, tightly closed</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">Quality Assurance</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Manufacturing:</strong> WHO-GMP certified facility</p>
                  <p><strong>Quality Control:</strong> Batch-to-batch consistency testing</p>
                  <p><strong>Stability:</strong> 24-month shelf life from manufacturing date</p>
                  <p><strong>Regulatory:</strong> Approved by national drug authorities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => router.push('/products')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
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

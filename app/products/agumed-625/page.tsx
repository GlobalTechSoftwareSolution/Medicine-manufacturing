'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Agumed625Page() {
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
      <div className="relative bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-900 mb-4">AGUMED-625</h1>
            <p className="text-lg text-red-700 mb-8">Advanced Antibiotic Therapy</p>
            <div className="w-32 h-32 mx-auto mb-8 rounded-lg shadow-lg overflow-hidden">
              <img src="/M5.png" alt="AGUMED-625" className="w-full h-full object-cover" />
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
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Composition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Amoxicillin 500mg with Clavulanic Acid 125mg in a fixed-dose combination. 
                      Broad-spectrum antibiotic for effective treatment of bacterial infections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Indications</h3>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Upper and lower respiratory tract infections</li>
                      <li>Skin and soft tissue infections</li>
                      <li>Urinary tract infections</li>
                      <li>Dental infections</li>
                      <li>Ear, nose, and throat infections</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Administration</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Administration:</strong> Oral with water, preferably with meals</p>
                      <p><strong>Duration:</strong> Usually 5-14 days depending on infection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Information */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Safety Information</h3>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Contraindications:</strong> Penicillin allergy, severe hepatic impairment</p>
                  <p><strong>Side Effects:</strong> Diarrhea, nausea, rash, allergic reactions</p>
                  <p><strong>Pregnancy:</strong> Generally safe, consult healthcare provider</p>
                  <p><strong>Storage:</strong> Refrigerate after reconstitution, protect from light</p>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Key Features</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Broad-spectrum coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Beta-lactamase inhibitor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Enhanced bacterial killing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Reduced antibiotic resistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Packaging & Availability</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Pack Sizes:</strong> 6 tablets, 10 tablets, 20 tablets</p>
                  <p><strong>Form:</strong> Film-coated tablets</p>
                  <p><strong>Color:</strong> White, capsule-shaped tablets</p>
                  <p><strong>Markings:</strong> "AGUMED" imprint on one side</p>
                  <p><strong>Storage:</strong> Store in original container, tightly closed</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">Quality Assurance</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Marketing:</strong> WHO-GMP certified facility</p>
                  <p><strong>Quality Control:</strong> Batch-to-batch consistency testing</p>
                  <p><strong>Stability:</strong> 24-month shelf life from marketing date</p>
                  <p><strong>Regulatory:</strong> Approved by national drug authorities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => router.push('/products')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
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

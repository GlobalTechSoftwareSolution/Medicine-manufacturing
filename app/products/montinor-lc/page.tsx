'use client';



import { useRouter } from 'next/navigation';

import Footer from '../../components/Footer';

import Navbar from '../../components/Navbar';



export default function MontinorLcPage() {

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

      <div className="relative bg-gradient-to-r from-green-50 to-green-100 py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-green-900 mb-4">MONTORIN-LC</h1>

            <p className="text-lg text-green-700 mb-8">Advanced Respiratory Care</p>

            <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">

              <img src="/M2.png" alt="MONTORIN-LC" className="w-full h-full object-cover" />

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

                    <h3 className="text-lg font-semibold text-green-600 mb-2">Composition</h3>

                    <p className="text-gray-700 leading-relaxed">

                      Montelukast 10mg with Levocetirizine 5mg in a fixed-dose combination tablet. 

                      Provides dual-action therapy for asthma and allergic rhinitis with once-daily convenience.

                    </p>

                  </div>



                  <div>

                    <h3 className="text-lg font-semibold text-green-600 mb-2">Indications</h3>

                    <ul className="text-gray-700 space-y-2 list-disc list-inside">

                      <li>Chronic asthma management</li>

                      <li>Seasonal allergic rhinitis</li>

                      <li>Perennial allergic rhinitis</li>

                      <li>Exercise-induced bronchoconstriction</li>

                      <li>Urticaria and allergic skin conditions</li>

                    </ul>

                  </div>



                  <div>

                    <h3 className="text-lg font-semibold text-green-600 mb-2">Dosage & Administration</h3>

                    <div className="text-gray-700 space-y-2">

                      <p><strong>Adults & Adolescents (15+ years):</strong> 1 tablet once daily in the evening</p>

                      <p><strong>Children (6-14 years):</strong> Age-appropriate dosage as prescribed</p>

                      <p><strong>Administration:</strong> Oral, can be taken with or without food</p>

                      <p><strong>Timing:</strong> Preferably in the evening for optimal efficacy</p>

                    </div>

                  </div>

                </div>

              </div>



              {/* Safety Information */}

              <div className="bg-yellow-50 rounded-lg p-6">

                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Safety Information</h3>

                <div className="text-gray-700 space-y-2 text-sm">

                  <p><strong>Contraindications:</strong> Severe hepatic impairment, hypersensitivity to components</p>

                  <p><strong>Side Effects:</strong> Headache, fatigue, abdominal pain, rare neuropsychiatric events</p>

                  <p><strong>Pregnancy:</strong> Use only if clearly needed, consult healthcare provider</p>

                  <p><strong>Storage:</strong> Store at room temperature, protect from light and moisture</p>

                </div>

              </div>

            </div>



            {/* Right Column - Additional Info */}

            <div className="space-y-8">

              <div className="bg-green-50 rounded-lg p-6">

                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Features</h3>

                <ul className="text-gray-700 space-y-3">

                  <li className="flex items-start">

                    <span className="text-green-600 mr-2">✓</span>

                    <span>Once-daily dosing convenience</span>

                  </li>

                  <li className="flex items-start">

                    <span className="text-green-600 mr-2">✓</span>

                    <span>Dual mechanism of action</span>

                  </li>

                  <li className="flex items-start">

                    <span className="text-green-600 mr-2">✓</span>

                    <span>Non-sedating antihistamine</span>

                  </li>

                  <li className="flex items-start">

                    <span className="text-green-600 mr-2">✓</span>

                    <span>24-hour symptom control</span>

                  </li>

                  <li className="flex items-start">

                    <span className="text-green-600 mr-2">✓</span>

                    <span>Improved patient compliance</span>

                  </li>

                </ul>

              </div>



              <div className="bg-blue-50 rounded-lg p-6">

                <h3 className="text-lg font-semibold text-blue-800 mb-4">Packaging & Availability</h3>

                <div className="text-gray-700 space-y-2">

                  <p><strong>Pack Sizes:</strong> 10 tablets, 30 tablets, 90 tablets</p>

                  <p><strong>Form:</strong> Film-coated tablets</p>

                  <p><strong>Color:</strong> Light beige, oval tablets</p>

                  <p><strong>Markings:</strong> "ML" imprint on one side</p>

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

              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"

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


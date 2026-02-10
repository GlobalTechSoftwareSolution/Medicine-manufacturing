import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const medicineData = {
  1: {
    name: "CardioGuard Plus",
    category: "Cardiovascular Health",
    description: "Advanced formula for heart health and blood pressure support",
    fullDescription: "CardioGuard Plus is a comprehensive cardiovascular support supplement formulated with clinically proven ingredients to promote heart health and maintain healthy blood pressure levels. This advanced formula combines essential nutrients, antioxidants, and herbal extracts that work synergistically to support cardiovascular function.",
    dosage: "One tablet daily with meals",
    price: "$45.99",
    ingredients: ["Coenzyme Q10", "Omega-3 Fatty Acids", "Magnesium", "Vitamin D3", "Hawthorn Extract", "L-Carnitine"],
    benefits: [
      "Supports healthy blood pressure",
      "Promotes heart muscle function",
      "Improves circulation",
      "Reduces oxidative stress",
      "Supports cholesterol levels"
    ],
    sideEffects: ["Generally well tolerated", "Mild stomach upset in rare cases"],
    warnings: ["Consult doctor if pregnant/nursing", "Keep away from children"],
    image: "/medicine1.jpg"
  },
  2: {
    name: "ImmunoShield",
    category: "Immune System",
    description: "Powerful immune system booster with vitamin C and zinc",
    fullDescription: "ImmunoShield is a potent immune support formula designed to strengthen your body's natural defense mechanisms. This comprehensive supplement combines essential vitamins, minerals, and herbal extracts known for their immune-boosting properties.",
    dosage: "Two capsules daily",
    price: "$32.99",
    ingredients: ["Vitamin C", "Zinc", "Vitamin D", "Elderberry Extract", "Echinacea", "Selenium"],
    benefits: [
      "Enhances immune response",
      "Reduces duration of colds",
      "Supports respiratory health",
      "Increases antioxidant activity",
      "Promotes overall wellness"
    ],
    sideEffects: ["No significant side effects reported"],
    warnings: ["Do not exceed recommended dosage", "Consult physician if autoimmune condition"],
    image: "/medicine2.jpg"
  },
  3: {
    name: "NeuroCalm",
    category: "Neurological Support",
    description: "Natural anxiety and stress relief supplement",
    fullDescription: "NeuroCalm is a natural supplement formulated to promote relaxation, reduce anxiety, and support overall mental well-being. This gentle yet effective formula combines adaptogenic herbs and amino acids that help the body manage stress.",
    dosage: "One capsule twice daily",
    price: "$38.99",
    ingredients: ["Ashwagandha", "L-Theanine", "Magnesium Glycinate", "GABA", "Rhodiola Rosea", "5-HTP"],
    benefits: [
      "Reduces anxiety and stress",
      "Promotes calm relaxation",
      "Improves sleep quality",
      "Supports mood balance",
      "Enhances mental clarity"
    ],
    sideEffects: ["Mild drowsiness possible", "Dry mouth in rare cases"],
    warnings: ["May cause drowsiness", "Do not drive after taking", "Consult doctor if on medication"],
    image: "/medicine3.jpg"
  },
  4: {
    name: "JointFlex Pro",
    category: "Musculoskeletal",
    description: "Comprehensive joint support with glucosamine and chondroitin",
    fullDescription: "JointFlex Pro is an advanced joint support formula designed to maintain healthy joints, reduce inflammation, and improve mobility. This comprehensive supplement combines key nutrients essential for cartilage health and joint function.",
    dosage: "Two tablets daily with food",
    price: "$42.99",
    ingredients: ["Glucosamine Sulfate", "Chondroitin Sulfate", "MSM", "Turmeric Extract", "Boswellia", "Hyaluronic Acid"],
    benefits: [
      "Supports joint flexibility",
      "Reduces joint pain",
      "Promotes cartilage health",
      "Decreases inflammation",
      "Improves mobility"
    ],
    sideEffects: ["Mild gastrointestinal discomfort", "Allergic reactions possible"],
    warnings: ["Shellfish allergy warning", "Consult doctor if on blood thinners"],
    image: "/medicine4.jpg"
  },
  5: {
    name: "DigestiWell",
    category: "Digestive Health",
    description: "Probiotic blend for optimal gut health and digestion",
    fullDescription: "DigestiWell is a comprehensive probiotic supplement designed to support digestive health, boost immunity, and promote overall gut wellness. This advanced formula contains multiple strains of beneficial bacteria.",
    dosage: "One capsule before meals",
    price: "$28.99",
    ingredients: ["Lactobacillus Acidophilus", "Bifidobacterium Lactis", "Lactobacillus Plantarum", "Prebiotic Fiber", "Digestive Enzymes"],
    benefits: [
      "Improves digestion",
      "Reduces bloating and gas",
      "Supports immune function",
      "Promotes regularity",
      "Enhances nutrient absorption"
    ],
    sideEffects: ["Mild gas initially", "Bloating in first week"],
    warnings: ["Refrigerate after opening", "Consult doctor if immunocompromised"],
    image: "/medicine5.jpg"
  },
  6: {
    name: "VitaMax Complete",
    category: "Multivitamins",
    description: "Complete daily multivitamin with essential nutrients",
    fullDescription: "VitaMax Complete is a comprehensive multivitamin and mineral supplement designed to fill nutritional gaps and support overall health. This advanced formula contains over 30 essential vitamins, minerals, and antioxidants.",
    dosage: "One tablet daily",
    price: "$24.99",
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "B-Complex", "Iron", "Zinc", "Selenium"],
    benefits: [
      "Fills nutritional gaps",
      "Boosts energy levels",
      "Supports immune function",
      "Promotes healthy skin",
      "Enhances overall wellness"
    ],
    sideEffects: ["Urine color change", "Mild stomach upset"],
    warnings: ["Take with food", "Do not exceed recommended dose"],
    image: "/medicine6.jpg"
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function MedicineDetail({ params }: { params: { id: string } }) {
  // Get the ID from URL params
  const id = params.id;
  
  if (!id) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Medicine Not Found</h1>
            <p className="text-gray-600 mb-8">The medicine you're looking for doesn't exist.</p>
            <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const medicineId = parseInt(Array.isArray(id) ? id[0] : id, 10);
  const foundMedicine = medicineData[medicineId as keyof typeof medicineData];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{foundMedicine.name}</h1>
              <p className="text-xl text-blue-100">{foundMedicine.category}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 flex items-center justify-center h-96 overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-blue-600 font-medium text-lg">{foundMedicine.name}</p>
                    <p className="text-blue-500 text-sm mt-2">Medicine Image</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{foundMedicine.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{foundMedicine.fullDescription}</p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{foundMedicine.price}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      In Stock
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Dosage: {foundMedicine.dosage}
                  </div>
                </div>
                
                              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Ingredients</h3>
                <ul className="space-y-2">
                  {foundMedicine.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits</h3>
                <ul className="space-y-2">
                  {foundMedicine.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Safety Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Side Effects:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {foundMedicine.sideEffects.map((effect: string, index: number) => (
                        <li key={index}>• {effect}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Warnings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {foundMedicine.warnings.map((warning: string, index: number) => (
                        <li key={index}>• {warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

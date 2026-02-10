'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Add custom CSS animations
const customStyles = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    25%, 75% { opacity: 0.3; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .animate-blink {
    animation: blink 2s infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
  
  .hover\\:animate-blink:hover {
    animation: blink 0.5s infinite;
  }
  
  .hover\\:animate-pulse:hover {
    animation: pulse 1s infinite;
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

const diseases = [
  {
    title: "Diabetes",
    description: "Comprehensive information about diabetes prevention, management, and treatment options",
    icon: "🩺",
    details: {
      types: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes"],
      symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Fatigue", "Irritability", "Blurred vision", "Slow-healing sores"],
      prevention: ["Maintain healthy weight", "Eat balanced diet", "Exercise regularly", "Monitor blood sugar", "Avoid smoking"],
      treatment: ["Insulin therapy", "Oral medications", "Blood sugar monitoring", "Lifestyle changes", "Dietary management"],
      complications: ["Heart disease", "Kidney damage", "Nerve damage", "Eye damage", "Foot damage", "Skin conditions"]
    }
  },
  {
    title: "Heart Disease",
    description: "Education on cardiovascular health, prevention, and early detection of heart conditions",
    icon: "❤️",
    details: {
      types: ["Coronary Artery Disease", "Heart Attack", "Heart Failure", "Arrhythmia", "Valve Disease"],
      symptoms: ["Chest pain", "Shortness of breath", "Pain in neck/jaw/throat", "Fatigue", "Swelling in extremities", "Irregular heartbeat"],
      prevention: ["Control blood pressure", "Maintain cholesterol levels", "Exercise regularly", "Eat healthy diet", "Maintain healthy weight", "Avoid smoking"],
      treatment: ["Medications", "Lifestyle changes", "Medical procedures", "Surgery", "Cardiac rehabilitation"],
      riskFactors: ["High blood pressure", "High cholesterol", "Smoking", "Diabetes", "Obesity", "Family history"]
    }
  },
  {
    title: "Hypertension",
    description: "Understanding high blood pressure, its risks, and effective management strategies",
    icon: "📊",
    details: {
      types: ["Primary Hypertension", "Secondary Hypertension", "White Coat Hypertension", "Resistant Hypertension"],
      symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Flushing", "Dizziness", "Chest pain", "Vision changes", "Blood in urine"],
      prevention: ["Reduce sodium intake", "Maintain healthy weight", "Exercise regularly", "Limit alcohol", "Manage stress", "Quit smoking"],
      treatment: ["Lifestyle modifications", "Medications", "Regular monitoring", "Dietary changes", "Stress management"],
      complications: ["Stroke", "Heart attack", "Kidney disease", "Vision loss", "Memory loss", "Aneurysm"]
    }
  },
  {
    title: "Cancer",
    description: "Information about cancer prevention, early detection, and treatment advances",
    icon: "🎗",
    details: {
      types: ["Carcinoma", "Sarcoma", "Leukemia", "Lymphoma", "Melanoma"],
      symptoms: ["Unexplained weight loss", "Fatigue", "Fever", "Pain", "Skin changes", "Changes in bowel/bladder habits", "Persistent cough", "Unusual bleeding"],
      prevention: ["Avoid tobacco", "Protect your skin", "Eat healthy diet", "Maintain healthy weight", "Get vaccinated", "Avoid risky behaviors"],
      treatment: ["Surgery", "Radiation therapy", "Chemotherapy", "Immunotherapy", "Targeted therapy", "Hormone therapy"],
      screening: ["Regular check-ups", "Cancer screenings", "Self-exams", "Genetic testing", "Imaging tests", "Blood tests"]
    }
  },
  {
    title: "Respiratory Diseases",
    description: "Education on asthma, COPD, and other respiratory conditions management",
    icon: "🫁",
    details: {
      types: ["Asthma", "COPD", "Bronchitis", "Pneumonia", "Tuberculosis", "Sleep Apnea"],
      symptoms: ["Shortness of breath", "Wheezing", "Chest tightness", "Chronic cough", "Mucus production", "Difficulty breathing", "Fatigue", "Sleep problems"],
      prevention: ["Avoid smoking", "Avoid pollutants", "Get vaccinated", "Exercise regularly", "Maintain healthy weight", "Practice good hygiene"],
      treatment: ["Inhalers", "Medications", "Oxygen therapy", "Pulmonary rehabilitation", "Lifestyle changes", "Surgery"],
      triggers: ["Allergens", "Pollution", "Cold air", "Exercise", "Stress", "Infections", "Smoke"]
    }
  },
  {
    title: "Mental Health Disorders",
    description: "Understanding depression, anxiety, and other mental health conditions",
    icon: "🧠",
    details: {
      types: ["Depression", "Anxiety Disorders", "Bipolar Disorder", "Schizophrenia", "PTSD", "Eating Disorders"],
      symptoms: ["Persistent sadness", "Loss of interest", "Excessive worry", "Mood swings", "Social withdrawal", "Sleep problems", "Appetite changes", "Concentration issues"],
      prevention: ["Build resilience", "Maintain relationships", "Manage stress", "Get enough sleep", "Exercise regularly", "Seek help early"],
      treatment: ["Psychotherapy", "Medications", "Lifestyle changes", "Support groups", "Stress management", "Cognitive behavioral therapy"],
      riskFactors: ["Genetics", "Brain chemistry", "Trauma", "Chronic illness", "Substance abuse", "Social isolation"]
    }
  },
  {
    title: "Arthritis",
    description: "Comprehensive guide to arthritis types, symptoms, and management strategies",
    icon: "🦴",
    details: {
      types: ["Osteoarthritis", "Rheumatoid Arthritis", "Psoriatic Arthritis", "Gout", "Lupus", "Fibromyalgia"],
      symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Redness", "Warmth", "Fatigue", "Fever"],
      prevention: ["Maintain healthy weight", "Exercise regularly", "Avoid injuries", "Protect joints", "Eat anti-inflammatory foods", "Stay active"],
      treatment: ["Medications", "Physical therapy", "Exercise", "Weight management", "Surgery", "Assistive devices"],
      complications: ["Joint damage", "Disability", "Reduced mobility", "Chronic pain", "Depression", "Work limitations"]
    }
  },
  {
    title: "Diarrheal Diseases",
    description: "Understanding causes, prevention, and treatment of diarrheal illnesses",
    icon: "🤢",
    details: {
      types: ["Viral Gastroenteritis", "Bacterial Infections", "Parasitic Infections", "Food Poisoning", "Antibiotic-associated Diarrhea"],
      symptoms: ["Watery stools", "Abdominal cramps", "Bloating", "Nausea", "Vomiting", "Fever", "Dehydration", "Blood in stool"],
      prevention: ["Hand washing", "Safe food handling", "Clean water", "Vaccination", "Avoid contaminated food", "Proper sanitation"],
      treatment: ["Oral rehydration", "Antibiotics", "Anti-diarrheal medications", "Probiotics", "Dietary modifications", "IV fluids"],
      riskFactors: ["Poor sanitation", "Contaminated water", "Weak immune system", "Travel", "Food handling", "Age"]
    }
  },
  {
    title: "Malaria",
    description: "Essential information about malaria prevention, symptoms, and treatment",
    icon: "🦟",
    details: {
      types: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale", "Plasmodium malariae", "Plasmodium knowlesi"],
      symptoms: ["Fever", "Chills", "Headache", "Muscle pain", "Fatigue", "Nausea", "Vomiting", "Anemia"],
      prevention: ["Mosquito nets", "Insect repellents", "Antimalarial drugs", "Indoor residual spraying", "Eliminate breeding sites", "Protective clothing"],
      treatment: ["Antimalarial medications", "Supportive care", "IV fluids", "Blood transfusion", "Monitoring", "Hospitalization"],
      complications: ["Severe anemia", "Cerebral malaria", "Organ failure", "Death", "Neurological damage", "Pregnancy complications"]
    }
  },
  {
    title: "Tuberculosis",
    description: "Complete guide to TB prevention, detection, and treatment protocols",
    icon: "🫁",
    details: {
      types: ["Pulmonary TB", "Extra-pulmonary TB", "Latent TB", "Multi-drug resistant TB", "Extensively drug-resistant TB"],
      symptoms: ["Persistent cough", "Chest pain", "Coughing blood", "Fatigue", "Weight loss", "Fever", "Night sweats", "Loss of appetite"],
      prevention: ["BCG vaccination", "Screening", "Infection control", "Treatment of latent TB", "Mask wearing", "Ventilation"],
      treatment: ["Antibiotics", "Directly observed therapy", "Multi-drug regimens", "Long-term treatment", "Monitoring", "Contact tracing"],
      complications: ["Drug resistance", "Lung damage", "Meningitis", "Bone TB", "Kidney TB", "Death"]
    }
  },
  {
    title: "HIV/AIDS",
    description: "Understanding HIV prevention, treatment, and living with AIDS",
    icon: "🔴",
    details: {
      types: ["HIV-1", "HIV-2", "Acute HIV", "Chronic HIV", "AIDS"],
      symptoms: ["Flu-like illness", "Swollen lymph nodes", "Weight loss", "Fever", "Fatigue", "Opportunistic infections", "Night sweats", "Diarrhea"],
      prevention: ["Safe sex", "Condom use", "PrEP", "Clean needles", "Blood screening", "Mother-to-child transmission prevention"],
      treatment: ["Antiretroviral therapy", "ART medications", "Viral load monitoring", "CD4 count monitoring", "Opportunistic infection treatment", "Supportive care"],
      complications: ["Opportunistic infections", "Cancers", "Neurological problems", "Cardiovascular disease", "Kidney disease", "Liver disease"]
    }
  },
  {
    title: "Typhoid Fever",
    description: "Comprehensive information about typhoid fever causes and management",
    icon: "🤒",
    details: {
      types: ["Typhoid fever", "Paratyphoid fever", "Drug-resistant typhoid", "Carrier state"],
      symptoms: ["High fever", "Weakness", "Stomach pain", "Headache", "Loss of appetite", "Rash", "Constipation or diarrhea", "Rose spots"],
      prevention: ["Typhoid vaccine", "Safe drinking water", "Food hygiene", "Hand washing", "Avoid raw foods", "Travel precautions"],
      treatment: ["Antibiotics", "Supportive care", "IV fluids", "Nutritional support", "Fever control", "Monitoring"],
      complications: ["Intestinal bleeding", "Perforation", "Encephalitis", "Myocarditis", "Pneumonia", "Death"]
    }
  },
  {
    title: "Hepatitis",
    description: "Understanding different types of hepatitis and liver health",
    icon: "🟡",
    details: {
      types: ["Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis D", "Hepatitis E", "Autoimmune hepatitis"],
      symptoms: ["Fatigue", "Jaundice", "Abdominal pain", "Dark urine", "Loss of appetite", "Nausea", "Fever", "Joint pain"],
      prevention: ["Vaccination", "Safe sex", "Clean needles", "Food safety", "Water purification", "Avoid alcohol"],
      treatment: ["Antiviral medications", "Supportive care", "Liver transplant", "Lifestyle changes", "Monitoring", "Vaccination"],
      complications: ["Liver cirrhosis", "Liver cancer", "Liver failure", "Chronic hepatitis", "Liver transplantation", "Death"]
    }
  },
  {
    title: "Dengue Fever",
    description: "Essential guide to dengue fever prevention, symptoms, and treatment",
    icon: "🦟",
    details: {
      types: ["Dengue fever", "Dengue hemorrhagic fever", "Dengue shock syndrome", "Severe dengue"],
      symptoms: ["High fever", "Severe headache", "Pain behind eyes", "Joint pain", "Muscle pain", "Rash", "Bleeding", "Low platelets"],
      prevention: ["Mosquito control", "Repellents", "Eliminate breeding sites", "Protective clothing", "Screening", "Community efforts"],
      treatment: ["Supportive care", "IV fluids", "Fever control", "Pain management", "Monitoring", "Hospitalization"],
      complications: ["Dengue hemorrhagic fever", "Dengue shock syndrome", "Organ failure", "Bleeding", "Death", "Severe plasma leakage"]
    }
  },
  {
    title: "Cholera",
    description: "Understanding cholera prevention, symptoms, and emergency treatment",
    icon: "💧",
    details: {
      types: ["Classical cholera", "El Tor cholera", "O139 cholera"],
      symptoms: ["Watery diarrhea", "Vomiting", "Dehydration", "Muscle cramps", "Rapid heart rate", "Low blood pressure", "Thirst", "Dry mucous membranes"],
      prevention: ["Clean water", "Sanitation", "Vaccination", "Food safety", "Hand washing", "Oral rehydration solutions"],
      treatment: ["Oral rehydration", "IV fluids", "Antibiotics", "Zinc supplements", "Electrolyte replacement", "Monitoring"],
      complications: ["Severe dehydration", "Electrolyte imbalance", "Kidney failure", "Hypovolemic shock", "Death", "Metabolic acidosis"]
    }
  }
];

export default function Education() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);
  const diseasesPerPage = 6;

  const filteredDiseases = diseases.filter(disease =>
    disease.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedDiseases = showMore ? filteredDiseases : filteredDiseases.slice(0, diseasesPerPage);
  const hasMoreDiseases = filteredDiseases.length > diseasesPerPage;
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/desease.png" 
              alt="Disease Education Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
            <div className="text-center w-full">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Disease Education
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Providing comprehensive information about common diseases and their management
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Diseases Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Diseases</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Educational resources for understanding and managing various health conditions
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search diseases by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {displayedDiseases.map((disease, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white bg-opacity-90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    {/* Disease Header */}
                    <div className="bg-gray-100 bg-opacity-80 text-gray-800 p-4">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="text-3xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {disease.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold">{disease.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Disease Description */}
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{disease.description}</p>
                      
                      {/* View Details Button */}
                      <motion.button
                        onClick={() => setSelectedDisease(disease)}
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* More Options Button */}
            {hasMoreDiseases && !showMore && (
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.button
                  onClick={() => setShowMore(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More Options ({filteredDiseases.length - diseasesPerPage} more diseases)
                </motion.button>
              </motion.div>
            )}
            
            {showMore && (
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => setShowMore(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Less
                </motion.button>
              </motion.div>
            )}
            
            {filteredDiseases.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500 text-base">No diseases found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </section>

        {/* Disease Details Modal */}
        <AnimatePresence>
          {selectedDisease && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-white bg-opacity-95 backdrop-blur-sm border border-gray-200 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
              >
              {/* Modal Header */}
              <div className="bg-gray-100 bg-opacity-80 text-gray-800 p-4 sticky top-0 z-10 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{selectedDisease.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{selectedDisease.title}</h3>
                      <p className="text-sm text-gray-600">{selectedDisease.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedDisease(null)}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Types */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center text-sm">
                      <span className="text-blue-600 mr-2">🏷️</span> Types
                    </h4>
                    <ul className="space-y-1">
                      {selectedDisease.details.types.map((type: any, idx: any) => (
                        <li key={idx} className="text-xs text-blue-800 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Symptoms */}
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2 flex items-center text-sm">
                      <span className="text-red-600 mr-2">⚠️</span> Symptoms
                    </h4>
                    <ul className="space-y-1">
                      {selectedDisease.details.symptoms.map((symptom: any, idx: any) => (
                        <li key={idx} className="text-xs text-red-800 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Prevention */}
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center text-sm">
                      <span className="text-green-600 mr-2">🛡️</span> Prevention
                    </h4>
                    <ul className="space-y-1">
                      {selectedDisease.details.prevention.map((item: any, idx: any) => (
                        <li key={idx} className="text-xs text-green-800 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Treatment */}
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2 flex items-center text-sm">
                      <span className="text-purple-600 mr-2">💊</span> Treatment
                    </h4>
                    <ul className="space-y-1">
                      {selectedDisease.details.treatment.map((item: any, idx: any) => (
                        <li key={idx} className="text-xs text-purple-800 flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Additional Info */}
                  {selectedDisease.details.complications && (
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2 flex items-center text-sm">
                        <span className="text-orange-600 mr-2">⚡</span> Complications
                      </h4>
                      <ul className="space-y-1">
                        {selectedDisease.details.complications.map((item: any, idx: any) => (
                          <li key={idx} className="text-xs text-orange-800 flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedDisease.details.riskFactors && (
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2 flex items-center text-sm">
                        <span className="text-indigo-600 mr-2">🎯</span> Risk Factors
                      </h4>
                      <ul className="space-y-1">
                        {selectedDisease.details.riskFactors.map((item: any, idx: any) => (
                          <li key={idx} className="text-xs text-indigo-800 flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedDisease.details.triggers && (
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center text-sm">
                        <span className="text-yellow-600 mr-2">🔥</span> Triggers
                      </h4>
                      <ul className="space-y-1">
                        {selectedDisease.details.triggers.map((item: any, idx: any) => (
                          <li key={idx} className="text-xs text-yellow-800 flex items-start">
                            <span className="text-yellow-600 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedDisease.details.screening && (
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2 flex items-center text-sm">
                        <span className="text-teal-600 mr-2">🔍</span> Screening
                      </h4>
                      <ul className="space-y-1">
                        {selectedDisease.details.screening.map((item: any, idx: any) => (
                          <li key={idx} className="text-xs text-teal-800 flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <motion.button 
                    onClick={() => setSelectedDisease(null)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>

        </main>
      
      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

interface EducationSection {
  title: string;
  content: string[];
}

interface EducationContent {
  [key: string]: {
    title: string;
    sections: EducationSection[];
  };
}

export default function IndividualEducationPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('general');

  const categories = [
    {
      id: 'general',
      name: 'General Health',
      icon: '🏥',
      color: 'blue',
      description: 'Basic healthcare knowledge and wellness tips'
    },
    {
      id: 'pharmacology',
      name: 'Pharmacology',
      icon: '💊',
      color: 'green',
      description: 'Understanding medications and their effects'
    },
    {
      id: 'diseases',
      name: 'Disease Information',
      icon: '🦠',
      color: 'red',
      description: 'Common diseases and their management'
    },
    {
      id: 'first-aid',
      name: 'First Aid',
      icon: '🚑',
      color: 'yellow',
      description: 'Emergency care and basic medical procedures'
    },
    {
      id: 'nutrition',
      name: 'Nutrition',
      icon: '🥗',
      color: 'purple',
      description: 'Dietary guidelines and nutritional information'
    },
    {
      id: 'mental-health',
      name: 'Mental Health',
      icon: '🧠',
      color: 'indigo',
      description: 'Psychological wellness and stress management'
    },
    {
      id: 'prevention',
      name: 'Preventive Care',
      icon: '🛡️',
      color: 'pink',
      description: 'Disease prevention and health maintenance'
    }
  ];

  const content: EducationContent = {
    general: {
      title: 'General Health Education',
      sections: [
        {
          title: 'Understanding Your Body',
          content: [
            'The human body is a complex system of organs, tissues, and cells working together.',
            'Basic anatomy knowledge helps you understand how your body functions.',
            'Regular health check-ups are essential for maintaining optimal body function.',
            'Listen to your body\'s signals and respond appropriately to symptoms.'
          ]
        },
        {
          title: 'Healthy Lifestyle Habits',
          content: [
            'Balanced diet provides essential nutrients for body function and repair.',
            'Regular exercise strengthens muscles, improves circulation, and boosts immunity.',
            'Adequate sleep (7-9 hours) allows body to repair and regenerate.',
            'Stress management techniques improve both mental and physical health.'
          ]
        },
        {
          title: 'Preventive Healthcare',
          content: [
            'Vaccinations protect against various infectious diseases.',
            'Regular screenings detect health issues early when treatment is most effective.',
            'Hygiene practices prevent infection spread and maintain overall health.',
            'Avoid smoking and limit alcohol consumption for better long-term health.'
          ]
        }
      ]
    },
    pharmacology: {
      title: 'Pharmacology Education',
      sections: [
        {
          title: 'Drug Classification',
          content: [
            'Prescription drugs require medical authorization and supervision.',
            'Over-the-counter medications treat mild symptoms without prescription.',
            'Controlled substances have strict regulations due to addiction potential.',
            'Herbal supplements can interact with prescription medications.'
          ]
        },
        {
          title: 'Medication Safety',
          content: [
            'Always read medication labels and follow dosage instructions carefully.',
            'Store medications properly to maintain effectiveness and prevent accidents.',
            'Never share prescription medications with others.',
            'Report side effects to your healthcare provider immediately.'
          ]
        },
        {
          title: 'Drug Interactions',
          content: [
            'Some foods can affect how medications work in your body.',
            'Multiple medications can interact and cause unexpected effects.',
            'Alcohol can enhance or interfere with certain drug effects.',
            'Always inform your doctor about all medications and supplements you take.'
          ]
        }
      ]
    },
    diseases: {
      title: 'Disease Information',
      sections: [
        {
          title: 'Common Infectious Diseases',
          content: [
            'Influenza spreads through respiratory droplets and causes fever, body aches.',
            'COVID-19 affects respiratory system with varying severity levels.',
            'Hepatitis viruses primarily affect the liver with different strains.',
            'Tuberculosis is a bacterial infection affecting lungs but can spread elsewhere.'
          ]
        },
        {
          title: 'Chronic Conditions',
          content: [
            'Diabetes affects blood sugar regulation and requires lifelong management.',
            'Hypertension (high blood pressure) increases risk of heart disease and stroke.',
            'Asthma causes airway inflammation and breathing difficulties.',
            'Arthritis involves joint inflammation and can limit mobility.'
          ]
        },
        {
          title: 'Prevention Strategies',
          content: [
            'Hand washing is one of the most effective disease prevention methods.',
            'Safe food handling prevents foodborne illnesses.',
            'Vaccinations provide immunity against specific diseases.',
            'Regular exercise and healthy diet strengthen immune system function.'
          ]
        }
      ]
    },
    'first-aid': {
      title: 'First Aid Education',
      sections: [
        {
          title: 'Emergency Response',
          content: [
            'Call emergency services (911) for life-threatening situations.',
            'Check breathing, pulse, and consciousness level of injured person.',
            'Apply direct pressure to bleeding wounds to control blood loss.',
            'Keep injured person calm and still while waiting for medical help.'
          ]
        },
        {
          title: 'Common Injuries',
          content: [
            'Cuts and scrapes should be cleaned with antiseptic and covered.',
            'Sprains require RICE: Rest, Ice, Compression, Elevation.',
            'Burns should be cooled with running water and covered loosely.',
            'Fractures need immobilization and immediate medical attention.'
          ]
        },
        {
          title: 'First Aid Kit Essentials',
          content: [
            'Bandages, gauze, and adhesive tape for wound care.',
            'Antiseptic wipes, antibiotic ointment, and pain relievers.',
            'Scissors, tweezers, and thermometer for basic procedures.',
            'Emergency contact information and personal medical history.'
          ]
        }
      ]
    },
    nutrition: {
      title: 'Nutrition Education',
      sections: [
        {
          title: 'Macronutrients',
          content: [
            'Proteins build and repair body tissues (meat, fish, beans, nuts).',
            'Carbohydrates provide energy for daily activities (grains, fruits, vegetables).',
            'Fats support hormone production and vitamin absorption (oils, nuts, avocado).',
            'Water is essential for digestion, temperature regulation, and nutrient transport.'
          ]
        },
        {
          title: 'Vitamins and Minerals',
          content: [
            'Vitamin C supports immune function and wound healing.',
            'Calcium and Vitamin D are essential for bone health.',
            'Iron prevents anemia and supports oxygen transport in blood.',
            'B vitamins are crucial for energy metabolism and nervous system function.'
          ]
        },
        {
          title: 'Healthy Eating Patterns',
          content: [
            'Eat a variety of foods from all food groups daily.',
            'Control portion sizes to maintain healthy weight.',
            'Limit processed foods, sugar, and saturated fats.',
            'Regular meal timing helps maintain stable blood sugar levels.'
          ]
        }
      ]
    },
    'mental-health': {
      title: 'Mental Health Education',
      sections: [
        {
          title: 'Stress Management',
          content: [
            'Deep breathing exercises can quickly reduce stress hormones.',
            'Regular physical activity releases endorphins and improves mood.',
            'Adequate sleep is crucial for emotional regulation and cognitive function.',
            'Mindfulness and meditation help manage anxiety and improve focus.'
          ]
        },
        {
          title: 'Common Mental Health Conditions',
          content: [
            'Depression affects mood, energy, and daily functioning.',
            'Anxiety disorders involve excessive worry and physical symptoms.',
            'Bipolar disorder causes extreme mood swings between highs and lows.',
            'Schizophrenia affects thinking, perception, and emotional responses.'
          ]
        },
        {
          title: 'Seeking Help',
          content: [
            'Talking about mental health reduces stigma and promotes healing.',
            'Professional help is available through therapists, counselors, and psychiatrists.',
            'Support groups provide community and shared experiences.',
            'Crisis hotlines offer immediate help for urgent situations.'
          ]
        }
      ]
    },
    prevention: {
      title: 'Preventive Care Education',
      sections: [
        {
          title: 'Health Screenings',
          content: [
            'Annual physical exams detect health issues early.',
            'Blood pressure, cholesterol, and diabetes screenings assess cardiovascular risk.',
            'Cancer screenings (mammograms, colonoscopies) detect tumors early.',
            'Vision and hearing tests identify sensory problems that need correction.'
          ]
        },
        {
          title: 'Vaccination Information',
          content: [
            'Childhood vaccinations protect against serious infectious diseases.',
            'Flu shots recommended annually, especially for high-risk groups.',
            'COVID-19 vaccines reduce severity and prevent serious complications.',
            'Travel vaccines protect against region-specific diseases.'
          ]
        },
        {
          title: 'Lifestyle Prevention',
          content: [
            'Regular dental check-ups prevent gum disease and tooth decay.',
            'Skin protection (sunscreen) prevents skin cancer and premature aging.',
            'Regular exercise reduces risk of heart disease, diabetes, and some cancers.',
            'Avoiding tobacco and excessive alcohol prevents many chronic diseases.'
          ]
        }
      ]
    }
  };

  const currentContent = content[selectedCategory] || content.general;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-50 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold text-teal-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Individual Education
            </motion.h1>
            <motion.p 
              className="text-lg text-teal-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive Medical Knowledge Base
            </motion.p>
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/desease.png"
                alt="Disease Information"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Choose Education Category
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `border-${category.color}-500 bg-${category.color}-50 shadow-lg`
                    : `border-gray-200 bg-white hover:border-${category.color}-300 hover:bg-${category.color}-50 shadow-md`
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {category.icon}
                </motion.div>
                <div className="text-sm font-semibold text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-600 mt-1">{category.description}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Display */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {currentContent.title}
          </motion.h2>
          
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {currentContent.sections.map((section, index) => (
                <motion.div 
                  key={`${selectedCategory}-${index}`}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <div className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                      >
                        <motion.span 
                          className="text-teal-600 mr-3 mt-1"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 + 0.1 }}
                        >
                          •
                        </motion.span>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.button
            onClick={() => router.push('/education')}
            className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Education
          </motion.button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

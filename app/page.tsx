'use client';

import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/navigation';

import Navbar from './components/Navbar';

import Footer from './components/Footer';



type Message = {

  text: string;

  sender: 'user' | 'bot';

};



export default function Home() {

  const router = useRouter();

  const [currentImage, setCurrentImage] = useState(0);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState<Message[]>([

    { text: '👋 Welcome to NR Medicare! 🏥\n\nPlease choose a topic below to learn more about our company:', sender: 'bot' }

  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  };

  React.useEffect(() => {

    scrollToBottom();

  }, [messages]);



  const handleSectionClick = (section: string) => {

    const userMessage = { text: section, sender: 'user' as const };

    setMessages(prev => [...prev, userMessage]);

    // Generate response based on section

    let botResponse = '';

    switch (section) {

      case 'About Company':

        botResponse = '🏢 About NR Medicare:\n\nNR Medicare is a leading pharmaceutical marketing company based in Karnataka, India. Founded with a vision to deliver high-quality, affordable medicines with international standards, we specialize in pharmaceutical formulations and serve customers across Karnataka and other states in India.\n\n📊 Our Statistics:\n• 25+ years of industry experience\n• 50+ countries served globally\n• 1000+ research projects completed\n• 99% quality success rate\n• 8+ pharmaceutical formulations\n\n🎯 Our Mission: To make quality healthcare accessible to everyone through innovative pharmaceutical solutions.';

        break;

      case 'Our Products':

        botResponse = '💊 Our Product Portfolio:\n\n🔬 Core Products:\n1. PARANAC-PLUS - Advanced pain relief medication\n2. MONTORIN-LC - Asthma and allergy treatment\n3. PARANAC-SP - Muscle spasm relaxant\n4. PANFA-DSR - GERD and acid reflux management\n5. AGUMED-625 - Broad-spectrum antibiotic\n6. PARANAC-MR - Chronic pain management\n7. NR NANO-GEL - Topical pain relief gel\n8. ITRODERM-PLUS - Dermatological conditions\n\n🏆 Quality Assurance:\n• USFDA approved manufacturing\n• EDQM certified facilities\n• WHO-GMP compliance\n• ISO 9001:2015 certified\n\n📦 For bulk orders and pricing, contact our sales team!';

        break;

      case 'Quality Standards':

        botResponse = '🏆 Quality Excellence at NR Medicare:\n\n🔍 Certifications:\n• USFDA (United States Food and Drug Administration)\n• EDQM (European Directorate for the Quality of Medicines)\n• WHO-GMP (World Health Organization - Good Manufacturing Practices)\n• ISO 9001:2015 Quality Management\n• DCGI (Drug Controller General of India) approved\n\n📊 Quality Metrics:\n• 99% quality success rate\n• Zero tolerance policy for quality compromises\n• State-of-the-art testing laboratories\n• Continuous quality improvement programs\n• Regular audits and compliance checks\n\n🔬 Our Commitment:\nEvery product undergoes rigorous testing at multiple stages to ensure safety, efficacy, and consistency.';

        break;

      case 'Contact Us':

        botResponse = '📞 Contact Information:\n\n🏢 Corporate Office:\n• No 36, 1st Floor, Giridhama Layout\n• Rajarajeshwarinagar, Bangalore – 560098\n\n📱 Phone Numbers:\n• +91 9663664548 (Primary)\n• +91 9480090238 (Secondary)\n\n📧 Email:\n• info@nrmedicare.com\n• sales@nrmedicare.com\n\n⏰ Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 2:00 PM\n• Sunday: Closed\n\n🌐 Website: www.nrmedicare.com';

        break;

      case 'Careers':

        botResponse = '💼 Career Opportunities at NR Medicare:\n\n🚀 Why Join Us:\n• Work with industry leaders\n• Competitive salary packages\n• Professional development programs\n• Health and wellness benefits\n• Work-life balance culture\n\n📋 Current Openings:\n• Research & Development Scientists\n• Quality Assurance Specialists\n• Sales and Marketing Executives\n• Production Managers\n• Regulatory Affairs Officers\n• Supply Chain Professionals\n\n📧 How to Apply:\nSend your resume to: careers@nrmedicare.com\n\n📞 HR Contact: +91 9663664548\n\n🎓 We also offer internship programs for fresh graduates!';

        break;

      case 'Research & Innovation':

        botResponse = '🔬 Innovation & Research at NR Medicare:\n\n💡 R&D Facilities:\n• State-of-the-art research laboratories\n• Advanced analytical equipment\n• Dedicated formulation development labs\n• Clinical research capabilities\n\n🧬 Research Focus Areas:\n• Novel drug delivery systems\n• Bioavailability enhancement\n• Generic drug development\n• Herbal medicine standardization\n• Pediatric formulations\n\n📊 Research Achievements:\n• 1000+ completed research projects\n• 25+ patents filed\n• 50+ peer-reviewed publications\n• Collaborations with leading universities\n\n🎯 Future Initiatives:\n• AI-driven drug discovery\n• Personalized medicine solutions\n• Sustainable manufacturing processes';

        break;

      default:

        botResponse = 'Thank you for your interest! Please choose a section from the menu or type your question.';

    }

    setTimeout(() => {

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);

    }, 500);

  };



  const handleSendMessage = () => {

    if (message.trim()) {

      const userMessage = { text: message, sender: 'user' as const };

      setMessages([...messages, userMessage]);

      setMessage('');



      // Generate bot response based on user message

      const lowerMessage = message.toLowerCase();

      let botResponse = '';



      // Website information responses

      if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you')) {

        botResponse = '🏢 About NR Medicare:\n\nNR Medicare is a leading pharmaceutical marketing company based in Karnataka, India. Founded with a vision to deliver high-quality, affordable medicines with international standards, we specialize in pharmaceutical formulations and serve customers across Karnataka and other states in India.\n\n📊 Our Statistics:\n• 25+ years of industry experience\n• 50+ countries served globally\n• 1000+ research projects completed\n• 99% quality success rate\n• 8+ pharmaceutical formulations\n\n🎯 Our Mission: To make quality healthcare accessible to everyone through innovative pharmaceutical solutions.';

      }

      else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('reach')) {

        botResponse = '📞 Contact Information:\n\n🏢 Corporate Office:\n• No 36, 1st Floor, Giridhama Layout\n• Rajarajeshwarinagar, Bangalore – 560098\n\n📱 Phone Numbers:\n• +91 9663664548 (Primary)\n• +91 9480090238 (Secondary)\n\n📧 Email:\n• info@nrmedicare.com\n• sales@nrmedicare.com\n\n⏰ Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 2:00 PM\n• Sunday: Closed\n\n🌐 Website: www.nrmedicare.com';

      }

      else if (lowerMessage.includes('product') || lowerMessage.includes('medicine') || lowerMessage.includes('drug') || lowerMessage.includes('pharmaceutical')) {

        botResponse = '💊 Our Product Portfolio:\n\n🔬 Core Products:\n1. PARANAC-PLUS - Advanced pain relief medication\n2. MONTORIN-LC - Asthma and allergy treatment\n3. PARANAC-SP - Muscle spasm relaxant\n4. PANFA-DSR - GERD and acid reflux management\n5. AGUMED-625 - Broad-spectrum antibiotic\n6. PARANAC-MR - Chronic pain management\n7. NR NANO-GEL - Topical pain relief gel\n8. ITRODERM-PLUS - Dermatological conditions\n\n🏆 Quality Assurance:\n• USFDA approved manufacturing\n• EDQM certified facilities\n• WHO-GMP compliance\n• ISO 9001:2015 certified\n\n📦 For bulk orders and pricing, contact our sales team!';

      }

      else if (lowerMessage.includes('quality') || lowerMessage.includes('certification') || lowerMessage.includes('standard') || lowerMessage.includes('fda')) {

        botResponse = '🏆 Quality Excellence at NR Medicare:\n\n🔍 Certifications:\n• USFDA (United States Food and Drug Administration)\n• EDQM (European Directorate for the Quality of Medicines)\n• WHO-GMP (World Health Organization - Good Manufacturing Practices)\n• ISO 9001:2015 Quality Management\n• DCGI (Drug Controller General of India) approved\n\n📊 Quality Metrics:\n• 99% quality success rate\n• Zero tolerance policy for quality compromises\n• State-of-the-art testing laboratories\n• Continuous quality improvement programs\n• Regular audits and compliance checks\n\n🔬 Our Commitment:\nEvery product undergoes rigorous testing at multiple stages to ensure safety, efficacy, and consistency.';

      }

      else if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('work') || lowerMessage.includes('join')) {

        botResponse = '💼 Career Opportunities at NR Medicare:\n\n🚀 Why Join Us:\n• Work with industry leaders\n• Competitive salary packages\n• Professional development programs\n• Health and wellness benefits\n• Work-life balance culture\n\n📋 Current Openings:\n• Research & Development Scientists\n• Quality Assurance Specialists\n• Sales and Marketing Executives\n• Production Managers\n• Regulatory Affairs Officers\n• Supply Chain Professionals\n\n📧 How to Apply:\nSend your resume to: careers@nrmedicare.com\n\n📞 HR Contact: +91 9663664548\n\n🎓 We also offer internship programs for fresh graduates!';

      }

      else if (lowerMessage.includes('innovation') || lowerMessage.includes('research') || lowerMessage.includes('r&d') || lowerMessage.includes('development')) {

        botResponse = '🔬 Innovation & Research at NR Medicare:\n\n💡 R&D Facilities:\n• State-of-the-art research laboratories\n• Advanced analytical equipment\n• Dedicated formulation development labs\n• Clinical research capabilities\n\n🧬 Research Focus Areas:\n• Novel drug delivery systems\n• Bioavailability enhancement\n• Generic drug development\n• Herbal medicine standardization\n• Pediatric formulations\n\n📊 Research Achievements:\n• 1000+ completed research projects\n• 25+ patents filed\n• 50+ peer-reviewed publications\n• Collaborations with leading universities\n\n🎯 Future Initiatives:\n• AI-driven drug discovery\n• Personalized medicine solutions\n• Sustainable manufacturing processes';

      }

      else if (lowerMessage.includes('service') || lowerMessage.includes('support') || lowerMessage.includes('customer') || lowerMessage.includes('help')) {

        botResponse = '🤝 Customer Support Services:\n\n⭐ Our Services:\n• 24/7 customer support hotline\n• Product information assistance\n• Order tracking and updates\n• Technical support for healthcare professionals\n• Complaint resolution within 48 hours\n\n📞 Support Channels:\n• Phone: +91 9663664548 (24/7)\n• Email: support@nrmedicare.com\n• WhatsApp: +91 9663664548\n• Live chat: Available on our website\n\n🔧 Additional Services:\n• Product training for healthcare staff\n• Pharmacovigilance reporting\n• Adverse drug reaction monitoring\n• Product quality feedback system\n\n📊 Service Standards:\n• 95% customer satisfaction rate\n• Average response time: 2 hours\n• First-call resolution: 85%';

      }

      else if (lowerMessage.includes('website') || lowerMessage.includes('details') || lowerMessage.includes('all') || lowerMessage.includes('everything') || lowerMessage.includes('overview')) {

        botResponse = '🌐 NR Medicare - Complete Overview:\n\n🏢 Company Profile:\n• Leading pharmaceutical marketing company\n• Established in Bangalore, India\n• 25+ years of industry excellence\n• Serving 50+ countries globally\n\n💼 Business Areas:\n• Pharmaceutical manufacturing\n• Research & development\n• Quality assurance\n• International marketing\n• Educational programs\n\n📊 Key Metrics:\n• Annual turnover: $50M+\n• Employee strength: 500+\n• Manufacturing facilities: 3\n• Product portfolio: 8+ core products\n• R&D investment: 15% of revenue\n\n🏆 Achievements:\n• Best Pharmaceutical Company 2023\n• Excellence in Quality Award\n• Innovation in Healthcare Award\n• Export Excellence Recognition\n\n📞 Quick Contact:\n• Phone: +91 9663664548\n• Email: info@nrmedicare.com\n• Website: www.nrmedicare.com\n\nHow can I help you learn more about any specific area?';

      }

      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('greetings')) {

        botResponse = '👋 Welcome to NR Medicare! 🏥\n\nHello! I\'m your virtual assistant for NR Medicare. I\'m here to help you with comprehensive information about our pharmaceutical company.\n\n🔍 I can assist you with:\n• 📋 About our company and mission\n• 💊 Detailed product information\n• 📞 Contact and support details\n• 🏆 Quality certifications and standards\n• 💼 Career opportunities\n• 🔬 Research and innovation\n• 📚 Educational programs\n• 📦 Ordering and purchasing\n• 🤝 Customer services\n• 🌐 Complete company overview\n\n💡 Try asking me about:\n• "Tell me about your products"\n• "What are your quality standards?"\n• "How can I contact you?"\n• "What career opportunities are available?"\n\nWhat would you like to know today? 😊';

      }

      else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {

        botResponse = '🙏 Thank you for contacting NR Medicare!\n\nYou\'re very welcome! We\'re delighted to assist you. Is there anything else you\'d like to know about our pharmaceutical products, services, or company?\n\n📞 Remember, our team is always here to help:\n• Phone: +91 9663664548\n• Email: info@nrmedicare.com\n• WhatsApp: +91 9663664548\n\n🌟 Your health is our priority!';

      }

      else {

        botResponse = '🤔 I understand you\'re interested in NR Medicare. Let me help you better!\n\n📋 Here are some topics I can assist with:\n\n• Type "products" for our pharmaceutical portfolio\n• Type "quality" for our certifications and standards\n• Type "contact" for our contact information\n• Type "careers" for job opportunities\n• Type "research" for our R&D initiatives\n• Type "overview" for complete company details\n\n📞 For immediate assistance:\n• Call: +91 9663664548\n• Email: info@nrmedicare.com\n\n💡 What specific information would you like about NR Medicare?';

      }



      // Add bot response after a short delay

      setTimeout(() => {

        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);

      }, 800);

    }

  };



  const images = [

    { src: '/home.png', title: 'Quality Healthcare', subtitle: 'Delivering excellence in pharmaceutical manufacturing' },

    { src: '/home2.jpg', title: 'Global Reach', subtitle: 'Serving patients worldwide with innovative solutions' },

    { src: '/home3.jpg', title: 'Research & Innovation', subtitle: 'Pioneering breakthrough treatments and technologies' },

    { src: '/home4.jpg', title: 'Patient Care', subtitle: 'Committed to better health outcomes for everyone' }

  ];



  const nextImage = () => {

    setCurrentImage((prev) => (prev + 1) % images.length);

  };



  const prevImage = () => {

    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  };



  // Auto-slide images every 6 seconds

  useEffect(() => {

    const interval = setInterval(() => {

      nextImage();

    }, 6000);



    return () => clearInterval(interval);

  }, []);



  // Animation variants

  const backgroundImageVariants = {

    hidden: { opacity: 0, scale: 1.1 },

    visible: { opacity: 0.3, scale: 1 },

    exit: { opacity: 0, scale: 0.9 }

  };



  const carouselImageVariants = {

    enter: { x: 300, opacity: 0 },

    center: { x: 0, opacity: 1 },

    exit: { x: -300, opacity: 0 }

  };



  // Auto-slide images every 6 seconds

  useEffect(() => {

    const interval = setInterval(() => {

      nextImage();

    }, 6000);



    return () => clearInterval(interval);

  }, []);

  return (

    <div className="min-h-screen bg-white">

      <Navbar />



      {/* Fixed Chat Widgets */}

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col-reverse items-end space-y-reverse space-y-2 sm:space-y-reverse sm:space-y-3">

        {/* WhatsApp Button */}
        <a href="https://wa.me/9663664548" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center">

          <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">

            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34-1.58 0-3.11-.44-4.44-1.27l-.32-.2-3.35.88.89-3.27-.22-.33a8.188 8.188 0 01-1.26-4.38c0-4.6 3.74-8.34 8.34-8.34zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.18 1.13.15 1.56.09.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2.02-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />

          </svg>

        </a>



        {/* Floating Chat Button */}
        <div
          className={`${isChatOpen ? 'w-[calc(100vw-32px)] sm:w-80 h-[70vh] sm:h-[500px] rounded-lg' : 'w-10 h-10 sm:w-12 sm:h-12 rounded-full'} bg-white shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-gray-100 border border-gray-300`}
          onClick={() => setIsChatOpen(!isChatOpen)}
        >

          {/* White Chat Icon - Hidden when chat is open */}
          <svg
            className={`w-5 h-5 sm:w-7 sm:h-7 text-blue-600 ${isChatOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >

            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />

          </svg>



          {/* Expanded Chat Content */}
          {isChatOpen && (
            <div className="w-full h-full flex flex-col p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Chat with us</h3>
                <button
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsChatOpen(false);
                  }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Clickable Sections */}
              <div className="mb-3">
                <p className="text-xs text-gray-600 mb-2">Quick Topics:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('About Company');
                    }}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    🏢 About
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('Our Products');
                    }}
                    className="bg-green-100 hover:bg-green-200 text-green-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    💊 Products
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('Quality Standards');
                    }}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    🏆 Quality
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('Contact Us');
                    }}
                    className="bg-red-100 hover:bg-red-200 text-red-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    📞 Contact
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('Careers');
                    }}
                    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    💼 Careers
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSectionClick('Research & Innovation');
                    }}
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded transition-colors"
                  >
                    🔬 Research
                  </button>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 bg-white rounded-lg p-2 sm:p-3 mb-3 overflow-y-auto border border-gray-200 min-h-0">
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-black'
                      }`}>
                      {msg.text}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  onClick={(e) => e.stopPropagation()}
                  placeholder="Type your message..."
                  className="flex-1 px-2 py-1 sm:px-3 sm:py-2 bg-white text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSendMessage();
                  }}
                  className="bg-blue-500 text-white p-1 sm:p-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>



      <main>

        {/* Hero Section with Full Screen Image Carousel */}

        <section className="relative text-black min-h-screen">

          <div className="absolute inset-0">

            <AnimatePresence mode="wait">

              <motion.img

                key={currentImage}

                src={images[currentImage].src}

                alt={`NR Medicare Image ${currentImage + 1}`}

                className="w-full h-full object-cover"

                variants={carouselImageVariants}

                initial="enter"

                animate="center"

                exit="exit"

                transition={{ duration: 0.8, ease: "easeInOut" }}

              />

            </AnimatePresence>



            {/* Dark Overlay for Images */}

            <div className="absolute inset-0 bg-black/60"></div>



            {/* Light Overlay for Text Readability */}

            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>

          </div>



          {/* Content Overlay */}

          <div className="relative min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                <div>

                  <motion.h1

                    className="text-4xl md:text-6xl font-bold mb-6 font-sans mt-12 bg-gradient-to-r from-red-600 via-blue-600 to-blue-800 bg-clip-text text-transparent"

                    initial={{ opacity: 0, x: -50 }}

                    animate={{ opacity: 1, x: 0 }}

                    transition={{ duration: 1, delay: 0.5 }}

                  >

                    NR Medicare

                  </motion.h1>

                  <motion.p

                    className="text-xl md:text-2xl mb-12 text-black font-sans font-medium leading-relaxed"

                    initial={{ opacity: 0, x: -50 }}

                    animate={{ opacity: 1, x: 0 }}

                    transition={{ duration: 1, delay: 0.8 }}

                  >

                    NR Medicare is a pharmaceutical marketing company committed to delivering high-quality, affordable medicines. We focus on quality, compliance, and innovation to meet healthcare needs.

                  </motion.p>

                </div>

              </div>

            </div>

          </div>

          <motion.button

            onClick={prevImage}

            className="pointer-events-auto bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"

            whileHover={{ scale: 1.1 }}

            whileTap={{ scale: 0.9 }}

          >

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7" />

            </svg>

          </motion.button>

          <motion.button

            onClick={nextImage}

            className="pointer-events-auto bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 cursor-pointer"

            whileHover={{ scale: 1.1 }}

            whileTap={{ scale: 0.9 }}

          >

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7" />

            </svg>

          </motion.button>

          {/* Desktop Image Indicators */}

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 hidden lg:flex">

            {images.map((_, index) => (

              <motion.button

                key={index}

                onClick={() => setCurrentImage(index)}

                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${index === currentImage

                    ? 'bg-black w-12'

                    : 'bg-black bg-opacity-50 hover:bg-opacity-75'

                  }`}

                whileHover={{ scale: 1.2 }}

                whileTap={{ scale: 0.8 }}

                animate={{

                  width: index === currentImage ? 48 : 12,

                  backgroundColor: index === currentImage ? '#000000' : 'rgba(0,0,0,0.5)'

                }}

                transition={{ duration: 0.3 }}

              />

            ))}

          </div>



          {/* Desktop Image Info Overlay */}

          <div className="absolute bottom-8 right-8 text-black hidden lg:block">

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.5 }}

              className="text-right"

            >

              <h3 className="text-2xl font-bold mb-1 text-white">{images[currentImage].title}</h3>

              <p className="text-lg opacity-90 text-white">{images[currentImage].subtitle}</p>

            </motion.div>

          </div>

        </section>



        {/* Features Section */}

        <section className="py-16 bg-gray-50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">

              <h2 className="text-3xl font-bold text-gray-900 mb-4">

                Why Choose NR Medicare

              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">

                We combine advanced technology with medical expertise to deliver exceptional healthcare solutions

              </p>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="text-center bg-white p-8 rounded-lg shadow-md">

                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">

                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                  </svg>

                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-2">Quality Excellence</h3>

                <p className="text-black">ISO certified manufacturing with strict quality control</p>

              </div>



              <div className="text-center bg-white p-8 rounded-lg shadow-md">

                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">

                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />

                  </svg>

                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-2">Innovation</h3>

                <p className="text-black">Cutting-edge research and development in healthcare</p>

              </div>



              <div className="text-center bg-white p-8 rounded-lg shadow-md">

                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">

                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />

                  </svg>

                </div>

                <h3 className="text-xl font-semibold text-purple-600 mb-2">Global Reach</h3>

                <p className="text-black">Serving patients and providers worldwide</p>

              </div>

            </div>

          </div>

        </section>



        {/* Stats Section */}

        <section className="py-16 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              <div className="bg-blue-50 p-6 rounded-lg">

                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>

                <div className="text-gray-600">Research Projects</div>

              </div>

              <div className="bg-green-50 p-6 rounded-lg">

                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>

                <div className="text-gray-600">Countries</div>

              </div>

              <div className="bg-purple-50 p-6 rounded-lg">

                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>

                <div className="text-gray-600">Years</div>

              </div>

              <div className="bg-red-50 p-6 rounded-lg">

                <div className="text-3xl font-bold text-red-600 mb-2">99%</div>

                <div className="text-gray-600">Success Rate</div>

              </div>

            </div>

          </div>

        </section>



        {/* CTA Section */}

        <section className="py-16 bg-blue-600 text-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-3xl font-bold mb-4">

              Ready to Transform Healthcare?

            </h2>

            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">

              Join us in our mission to deliver quality pharmaceutical solutions worldwide. Partner with NR Medicare for excellence in medicine manufacturing.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button

                onClick={() => window.location.href = '/products'}

                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"

              >

                Learn more

              </button>

              <button

                onClick={() => window.location.href = '/contact'}

                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer"

              >

                Contact us

              </button>

            </div>

          </div>

        </section>



      </main>



      <Footer />

    </div>

  );

}


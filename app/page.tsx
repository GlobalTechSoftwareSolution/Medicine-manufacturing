'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: '👋 Welcome to NR Medicare! How can we help you today?', sender: 'bot' }
  ]);

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
        botResponse = 'NR Medicare is a leading pharmaceutical marketing company based in Karnataka, committed to delivering high-quality, affordable medicines with international standards. We specialize in pharmaceutical formulations and serve customers across Karnataka and other states in India.';
      }
      else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
        botResponse = '📞 Contact Information:\n• Phone: +91 9663664548\n• Phone: +91 9480090238\n• Email: nagendra0297@gmail.com\n• Address: No 36, 1st Floor, Giridhama Layout, Rajarajeshwarinagar, Bangalore – 560098\n• Business Hours: Mon-Fri 9AM-6PM, Sat 10AM-2PM';
      }
      else if (lowerMessage.includes('product') || lowerMessage.includes('medicine') || lowerMessage.includes('drug')) {
        botResponse = '💊 Our Products:\n• PARANAC-PLUS (Pain relief)\n• MONTORIN-LC (Asthma/Allergy)\n• PARANAC-SP (Muscle spasms)\n• PANFA-DSR (GERD/Acid reflux)\n• AGUMED-625 (Antibiotic)\n• PARANAC-MR (Chronic pain)\n• NR NANO-GEL (Topical pain)\n• ITRODERM-PLUS (Skin conditions)';
      }
      else if (lowerMessage.includes('quality') || lowerMessage.includes('certification') || lowerMessage.includes('standard')) {
        botResponse = '🏆 Quality Excellence:\nNR Medicare maintains the highest quality standards with USFDA, EDQM, and WHO-GMP certified manufacturing facilities. We have 99% quality success rate and 1000+ research projects completed.';
      }
      else if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('work')) {
        botResponse = '💼 Careers:\nWe are always looking for talented professionals to join our team. Send your resume to nagendra0297@gmail.com for career opportunities at NR Medicare.';
      }
      else if (lowerMessage.includes('innovation') || lowerMessage.includes('research') || lowerMessage.includes('r&d')) {
        botResponse = '🔬 Innovation:\nNR Medicare invests heavily in research and development with advanced R&D facilities. We focus on breakthrough technologies and innovative pharmaceutical formulations to meet evolving healthcare needs.';
      }
      else if (lowerMessage.includes('education') || lowerMessage.includes('training')) {
        botResponse = '📚 Individual Education:\nWe provide educational programs and training for healthcare professionals and individuals interested in pharmaceutical sciences. Contact us for more information about our educational initiatives.';
      }
      else if (lowerMessage.includes('order') || lowerMessage.includes('purchase') || lowerMessage.includes('buy')) {
        botResponse = '📦 Ordering:\nTo place orders or inquire about pricing, please contact our sales team:\n• Phone: +91 9663664548\n• Email: nagendra0297@gmail.com\nWe offer competitive pricing for bulk orders.';
      }
      else if (lowerMessage.includes('website') || lowerMessage.includes('details') || lowerMessage.includes('all') || lowerMessage.includes('everything')) {
        botResponse = '🌐 NR Medicare Complete Information:\n\n🏢 Company: Leading pharmaceutical manufacturer\n📍 Location: Bangalore, India\n📞 Contact: +91 9663664548\n📧 Email: nagendra0297@gmail.com\n\n💊 Products: 8+ pharmaceutical formulations\n🌍 Reach: 50+ countries served\n🏆 Quality: USFDA, EDQM, WHO-GMP certified\n📊 Experience: 25+ years\n🔬 Research: 1000+ projects\n✅ Success: 99% quality rate\n\n📞 For orders: Call +91 9663664548\n💼 For careers: Email nagendra0297@gmail.com';
      }
      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        botResponse = 'Hello! Welcome to NR Medicare! 👋\n\nI can help you with information about:\n• Our products and medicines\n• Company details and contact info\n• Quality certifications\n• Career opportunities\n• Ordering information\n• And much more!\n\nWhat would you like to know?';
      }
      else {
        botResponse = 'Thank you for your message! Our team will get back to you soon. For urgent queries, please call us at +91 9663664548 or email nagendra0297@gmail.com. Is there anything specific about NR Medicare I can help you with?';
      }

      // Add bot response after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 800);

      // Send message to backend
      fetch('/api/send-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatHistory: [...messages, userMessage, { text: botResponse, sender: 'bot' }],
        }),
      });
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
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col space-y-2 sm:space-y-3">
        {/* WhatsApp Button */}
        <a href="https://wa.me/9663664548" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center border border-black">
          <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34-1.58 0-3.11-.44-4.44-1.27l-.32-.2-3.35.88.89-3.27-.22-.33a8.188 8.188 0 01-1.26-4.38c0-4.6 3.74-8.34 8.34-8.34zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.18 1.13.15 1.56.09.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2.02-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
          </svg>
        </a>
        
        {/* Chat Box */}
        <div className={`${isChatOpen ? 'w-72 sm:w-80 h-auto rounded-lg' : 'w-10 h-10 sm:w-12 sm:h-12 rounded-full'} bg-black shadow-2xl p-3 sm:p-4 flex items-center justify-center transition-all duration-300 cursor-pointer`}>
          <svg 
            className={`w-5 h-5 sm:w-6 sm:h-6 text-white ${isChatOpen ? 'hidden' : 'block'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Expanded Chat Content */}
          {isChatOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white text-sm sm:text-base">Chat with us</h3>
                <button 
                  className="text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setIsChatOpen(false)}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 mb-3 h-32 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-2 py-1 sm:px-3 sm:py-2 bg-gray-700 text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-1 sm:p-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
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
                    className="text-xl md:text-2xl mb-12 text-white font-sans font-medium leading-relaxed"
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
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentImage 
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
              <h3 className="text-2xl font-bold mb-1">{images[currentImage].title}</h3>
              <p className="text-lg opacity-90">{images[currentImage].subtitle}</p>
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
                <p className="text-gray-600">ISO certified manufacturing with strict quality control</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Innovation</h3>
                <p className="text-white">Cutting-edge research and development in healthcare</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Global Reach</h3>
                <p className="text-gray-600">Serving patients and providers worldwide</p>
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

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Video Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen min-h-[400px] md:min-h-[600px] bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/aboutvideo-poster.jpg"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            filter: 'brightness(1.1) contrast(1.1)'
          }}
        >
          <source src="/aboutvideo.mp4" type="video/mp4" />
          <source src="/aboutvideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Lighter Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl text-center sm:text-left">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-blue-400 font-sans drop-shadow-lg leading-tight">
                About NR Medicare
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-full sm:max-w-3xl text-white font-sans drop-shadow-lg">
                NR Medicare advances healthcare through innovation, quality, and excellence. We deliver trusted solutions focused on safety, care, and better patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About NR Medicare Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-2">
            About NR Medicare
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
            Innovating for a Healthier Tomorrow
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              At NR Medicare, we are a global medical device company dedicated to advancing healthcare excellence through innovative technology and unwavering commitment to quality. We pursue reliable solutions and cutting-edge medical devices to contribute to healthcare in more than 160 countries and regions around the globe.
            </p>

            <p>
              Our mission is to reduce patients' difficulties both mentally and physically, while delivering solutions that help solve various challenges in medical settings. We promise to walk alongside healthcare professionals to continue making great contributions to society, now and into the future.
            </p>

            <p>
              Through relentless innovation, rigorous quality standards, and deep understanding of patient needs, we strive to create medical devices that transform healthcare delivery and improve lives worldwide.
            </p>
          </div>


        </div>

        {/* Vision & Mission Statement Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Vision Statement</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-l-4 border-blue-500">
              <p className="text-xl text-gray-700 leading-relaxed text-center italic">
                "To become a trusted and innovative pharma marketing company, improving healthcare reach through ethical promotion and quality-focused partnerships."
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mission Statement</h3>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border-l-4 border-green-500">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Our mission is to market high-quality pharmaceutical products ethically, build long-term relationships with healthcare professionals, and ensure patient well-being through consistent value and trust.
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ethical Marketing</h3>
              <p className="text-gray-600 text-sm">Promoting pharmaceutical products with integrity and transparency</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">Building long-term relationships with healthcare professionals</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Patient Well-being</h3>
              <p className="text-gray-600 text-sm">Ensuring consistent value and trust for better health outcomes</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

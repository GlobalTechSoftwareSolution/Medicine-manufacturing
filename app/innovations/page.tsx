import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const innovations = [
  {
    title: "Nano-Delivery Technology",
    description: "Revolutionary nanoparticle-based drug delivery system that enhances bioavailability and targeted treatment",
    image: "/innovation1.jpg",
    category: "Drug Delivery",
    status: "In Development"
  },
  {
    title: "AI-Powered Drug Discovery",
    description: "Machine learning algorithms accelerating identification of promising drug candidates",
    image: "/innovation2.jpg",
    category: "Research & Development",
    status: "Active"
  },
  {
    title: "Biopharmaceutical Manufacturing",
    description: "Advanced cell culture and purification technologies for biologics and biosimilars",
    image: "/innovation3.jpg",
    category: "Manufacturing",
    status: "Commercial"
  },
  {
    title: "Personalized Medicine Platform",
    description: "Genetic-based treatment optimization for individual patient needs",
    image: "/innovation4.jpg",
    category: "Precision Medicine",
    status: "Pilot Phase"
  },
  {
    title: "Sustainable Packaging Solutions",
    description: "Eco-friendly packaging materials that reduce environmental impact while maintaining product integrity",
    image: "/innovation5.jpg",
    category: "Sustainability",
    status: "Implementation"
  },
  {
    title: "Continuous Manufacturing",
    description: "Real-time monitoring and adaptive control systems for streamlined production",
    image: "/innovation6.jpg",
    category: "Manufacturing",
    status: "Active"
  }
];

export default function Innovations() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Innovations</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Pioneering future of pharmaceutical technology through cutting-edge research and development
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Breakthroughs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to innovation drives us to develop groundbreaking solutions that transform healthcare delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <p className="text-blue-600 font-medium">Innovation Image</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {innovation.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        innovation.status === 'Commercial' ? 'bg-green-100 text-green-800' :
                        innovation.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                        innovation.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
                        innovation.status === 'Pilot Phase' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {innovation.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
                    <p className="text-gray-600 mb-4">{innovation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Research & Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our R&D division is at forefront of pharmaceutical innovation, with over 500 scientists and researchers working across multiple disciplines to develop next generation of medicines.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">500+ Research Projects</h4>
                      <p className="text-gray-600">Active research initiatives across therapeutic areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">200+ Patents Filed</h4>
                      <p className="text-gray-600">Intellectual property protecting our innovations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">50+ Partnerships</h4>
                      <p className="text-gray-600">Collaborations with academic institutions and biotech companies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Innovation Timeline</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                    <div className="ml-4">
                      <h4 className="font-semibold">2024</h4>
                      <p className="text-gray-600">Launch of AI-powered drug discovery platform</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                    <div className="ml-4">
                      <h4 className="font-semibold">2023</h4>
                      <p className="text-gray-600">FDA approval for novel biologic manufacturing process</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                    <div className="ml-4">
                      <h4 className="font-semibold">2022</h4>
                      <p className="text-gray-600">Breakthrough in targeted drug delivery systems</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                    <div className="ml-4">
                      <h4 className="font-semibold">2021</h4>
                      <p className="text-gray-600">Establishment of personalized medicine research center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Innovation Journey</h2>
            <p className="text-xl mb-8 text-blue-100">
              Partner with us to shape future of pharmaceutical innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Explore Partnership Opportunities
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Research Publications
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

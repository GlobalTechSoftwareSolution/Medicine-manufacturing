'use client';



import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import Image from 'next/image';



export default function CareersPage() {

  const router = useRouter();

  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const [selectedLocation, setSelectedLocation] = useState('all');

  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const [selectedJob, setSelectedJob] = useState<any>(null);

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [showTermsModal, setShowTermsModal] = useState(false);



  const vacancies = [

    {

      id: 1,

      title: 'Senior Research Scientist',

      department: 'R&D',

      location: 'Bangalore',

      experience: '5-8 years',

      type: 'Full-time',

      description: 'Lead research initiatives in novel drug discovery and development.',

      responsibilities: ['Design and execute experiments', 'Analyze research data', 'Prepare technical reports', 'Mentor junior researchers'],

      qualifications: ['PhD in Pharmaceutical Sciences', 'Experience in drug formulation', 'Strong publication record']

    },

    {

      id: 2,

      title: 'Quality Assurance Manager',

      department: 'Quality',

      location: 'Pune',

      experience: '3-5 years',

      type: 'Full-time',

      description: 'Oversee quality control processes and ensure regulatory compliance.',

      responsibilities: ['Implement quality systems', 'Conduct audits', 'Train quality staff', 'Ensure compliance'],

      qualifications: ['B.Pharm/M.Pharm', 'Knowledge of GMP guidelines', 'Attention to detail']

    },

    {

      id: 3,

      title: 'Medical Representative',

      department: 'Sales',

      location: 'Mumbai',

      experience: '2-4 years',

      type: 'Field Job',

      description: 'Promote and sell pharmaceutical products to healthcare professionals.',

      responsibilities: ['Achieve sales targets', 'Build customer relationships', 'Conduct product presentations', 'Market research'],

      qualifications: ['Graduate in any discipline', 'Good communication skills', 'Willingness to travel']

    },

    {

      id: 4,

      title: 'Production Supervisor',

      department: 'Manufacturing',

      location: 'Hyderabad',

      experience: '4-6 years',

      type: 'Full-time',

      description: 'Supervise production operations and ensure adherence to SOPs.',

      responsibilities: ['Manage production team', 'Monitor production schedules', 'Ensure quality standards', 'Report production metrics'],

      qualifications: ['B.Pharm/D.Pharm', 'Experience in pharma manufacturing', 'Leadership skills']

    },

    {

      id: 5,

      title: 'Regulatory Affairs Officer',

      department: 'Regulatory',

      location: 'Delhi',

      experience: '2-3 years',

      type: 'Full-time',

      description: 'Handle regulatory submissions and compliance documentation.',

      responsibilities: ['Prepare regulatory submissions', 'Maintain regulatory files', 'Liaise with authorities', 'Track regulatory changes'],

      qualifications: ['B.Pharm/M.Pharm', 'Knowledge of regulatory guidelines', 'Documentation skills']

    },

    {

      id: 6,

      title: 'Business Development Manager',

      department: 'Marketing',

      location: 'Bangalore',

      experience: '5-7 years',

      type: 'Full-time',

      description: 'Develop and implement business growth strategies.',

      responsibilities: ['Identify business opportunities', 'Develop partnerships', 'Market analysis', 'Revenue growth'],

      qualifications: ['MBA/PGDM', 'Experience in pharma industry', 'Strong negotiation skills']

    }

  ];



  const departments = ['all', 'R&D', 'Quality', 'Sales', 'Manufacturing', 'Regulatory', 'Marketing'];

  const locations = ['all', 'Bangalore', 'Pune', 'Mumbai', 'Hyderabad', 'Delhi'];



  const filteredVacancies = vacancies.filter(vacancy => {

    const departmentMatch = selectedDepartment === 'all' || vacancy.department === selectedDepartment;

    const locationMatch = selectedLocation === 'all' || vacancy.location === selectedLocation;

    return departmentMatch && locationMatch;

  });



  const handleApplyNow = (job: any) => {

    setSelectedJob(job);

    setShowApplicationModal(true);

  };



  const handleUploadResume = () => {

    // Create file input element

    const fileInput = document.createElement('input');

    fileInput.type = 'file';

    fileInput.accept = '.pdf,.doc,.docx';

    fileInput.onchange = (e: any) => {

      const file = e.target?.files?.[0];

      if (file) {

        alert(`Resume "${file.name}" uploaded successfully! We'll review your application and contact you soon.`);

      }

    };

    fileInput.click();

  };



  const handleJoinTalentPool = () => {

    const email = prompt('Enter your email to join our talent pool:');

    if (email && email.includes('@')) {

      alert(`Thank you! We've added ${email} to our talent pool. You'll receive updates about relevant opportunities.`);

    } else if (email) {

      alert('Please enter a valid email address.');

    }

  };



  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');

    const email = formData.get('email');

    const phone = formData.get('phone');

    const experience = formData.get('experience');



    if (name && email && phone && selectedJob) {
      try {
        // Send email using the same API as contact form
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            company: selectedJob.department + ' - ' + selectedJob.location,
            message: `Job Application for: ${selectedJob.title}\n\nDepartment: ${selectedJob.department}\nLocation: ${selectedJob.location}\nExperience: ${experience}\n\nApplicant Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nApplied via NR Medicare Careers Page`
          }),
        });

        if (response.ok) {
          alert(`Thank you for applying for ${selectedJob.title}! We'll review your application and contact you soon.`);
          setShowApplicationModal(false);
          setSelectedJob(null);
          if (form) form.reset();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Application submission failed');
        }
      } catch (error: any) {
        console.error('Application submission error:', error);
        alert(`Failed to submit application: ${error.message || 'Please try again later or contact us directly at info@nrmedicare.com'}`);
      }

    } else {

      alert('Please fill in all required fields.');

    }

  };



  const handleViewDetails = (job: any) => {

    setSelectedJob(job);

    setShowDetailsModal(true);

  };



  const handleShowTerms = () => {

    setShowTermsModal(true);

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <Navbar />



      {/* Hero Section */}

      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">

        <div className="absolute inset-0 opacity-20">

          <Image

            src="/careers.png"

            alt="Careers at NR Medicare"

            fill

            className="object-cover"

            priority

          />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>

          <p className="text-xl max-w-3xl mx-auto opacity-90">

            Build a rewarding career with NR Medicare and contribute to transforming healthcare globally

          </p>

        </div>

      </div>



      {/* Why Join Us Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Join NR Medicare?</h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          <motion.div

            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"

            whileHover={{

              scale: 1.05,

              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"

            }}

            transition={{ duration: 0.3 }}

          >

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">

              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />

              </svg>

            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Growth Opportunities</h3>

            <p className="text-gray-600">Continuous learning and professional development programs to advance your career</p>

          </motion.div>



          <motion.div

            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500"

            whileHover={{

              scale: 1.05,

              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"

            }}

            transition={{ duration: 0.3 }}

          >

            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">

              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

              </svg>

            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Inclusive Culture</h3>

            <p className="text-gray-600">Diverse and collaborative work environment where every voice matters</p>

          </motion.div>



          <motion.div

            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"

            whileHover={{

              scale: 1.05,

              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"

            }}

            transition={{ duration: 0.3 }}

          >

            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

              </svg>

            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Make an Impact</h3>

            <p className="text-gray-600">Contribute to meaningful work that improves lives globally</p>

          </motion.div>

        </div>

      </div>



      {/* Hiring Process Section */}

      <div className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Hiring Process</h2>

            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

              Our streamlined hiring process ensures we find the right talent while providing a great candidate experience

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="text-center">

              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">

                1

              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">Application</h3>

              <p className="text-gray-600 text-sm">Submit your application online with your resume and cover letter</p>

            </div>



            <div className="text-center">

              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">

                2

              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">Screening</h3>

              <p className="text-gray-600 text-sm">Our team reviews your application and assesses fit for the role</p>

            </div>



            <div className="text-center">

              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">

                3

              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">Interviews</h3>

              <p className="text-gray-600 text-sm">Multiple rounds to assess technical and cultural fit</p>

            </div>



            <div className="text-center">

              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">

                4

              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">Offer</h3>

              <p className="text-gray-600 text-sm">Successful candidates receive a competitive offer package</p>

            </div>

          </div>

        </div>

      </div>



      {/* Current Vacancies Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Current Vacancies</h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>

          <p className="text-xl text-gray-600">Explore opportunities across various departments and locations</p>

        </div>



        {/* Filters */}

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block text-sm font-medium text-black mb-2">Department</label>

              <select

                value={selectedDepartment}

                onChange={(e) => setSelectedDepartment(e.target.value)}

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black appearance-auto"
                style={{ color: 'black' }}

              >

                {departments.map(dept => (

                  <option key={dept} value={dept} style={{ color: 'black' }}>

                    {dept === 'all' ? 'All Departments' : dept}

                  </option>

                ))}

              </select>

            </div>



            <div>

              <label className="block text-sm font-medium text-black mb-2">Location</label>

              <select

                value={selectedLocation}

                onChange={(e) => setSelectedLocation(e.target.value)}

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black appearance-auto"
                style={{ color: 'black' }}

              >

                {locations.map(loc => (

                  <option key={loc} value={loc} style={{ color: 'black' }}>

                    {loc === 'all' ? 'All Locations' : loc}

                  </option>

                ))}

              </select>

            </div>

          </div>

        </div>



        {/* Job Listings */}

        <div className="space-y-6">

          {filteredVacancies.length > 0 ? (

            filteredVacancies.map(vacancy => (

              <div key={vacancy.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                  <div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{vacancy.title}</h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">

                      <span className="flex items-center">

                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />

                        </svg>

                        {vacancy.department}

                      </span>

                      <span className="flex items-center">

                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

                        </svg>

                        {vacancy.location}

                      </span>

                      <span className="flex items-center">

                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />

                        </svg>

                        {vacancy.experience}

                      </span>

                      <span className="flex items-center">

                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

                        </svg>

                        {vacancy.type}

                      </span>

                    </div>

                  </div>

                  <div className="flex space-x-3">

                    <button

                      onClick={() => handleApplyNow(vacancy)}

                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"

                    >

                      Apply

                    </button>

                    <button

                      onClick={() => handleViewDetails(vacancy)}

                      className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"

                    >

                      View Details

                    </button>

                  </div>

                </div>



                <p className="text-gray-600 mb-4">{vacancy.description}</p>

              </div>

            ))

          ) : (

            <div className="bg-white rounded-xl shadow-lg p-12 text-center">

              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">

                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>

              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">No vacancies found</h3>

              <p className="text-gray-600">Try adjusting your filters or check back later for new opportunities</p>

            </div>

          )}

        </div>

      </div>



      {/* Life at NR Medicare Section */}

      <div className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Life at NR Medicare</h2>

            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">

              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>

              <div className="text-gray-700">Employees</div>

            </div>

            <div className="text-center">

              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>

              <div className="text-gray-700">Years of Excellence</div>

            </div>

            <div className="text-center">

              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>

              <div className="text-gray-700">Locations</div>

            </div>

            <div className="text-center">

              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>

              <div className="text-gray-700">Employee Satisfaction</div>

            </div>

          </div>

        </div>

      </div>



      {/* CTA Section */}

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>

          <p className="text-xl mb-8 opacity-90">

            Take the first step towards a rewarding career in healthcare

          </p>

          <div className="flex justify-center">
            <button
              onClick={handleShowTerms}
              className="text-white underline hover:text-gray-200 text-lg font-medium transition-colors duration-300"
            >
              Terms & Conditions
            </button>
          </div>

        </div>

      </div>



      {/* Application Modal */}

      {showApplicationModal && selectedJob && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

            <div className="p-6 border-b">

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h3>

                <button

                  onClick={() => setShowApplicationModal(false)}

                  className="text-gray-500 hover:text-gray-700"

                >

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                  </svg>

                </button>

              </div>

            </div>



            <form onSubmit={handleApplicationSubmit} className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>

                  <input

                    type="text"

                    name="name"

                    required

                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                    placeholder="Enter your full name"

                  />

                </div>



                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>

                  <input

                    type="email"

                    name="email"

                    required

                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                    placeholder="your.email@example.com"

                  />

                </div>



                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>

                  <input

                    type="tel"

                    name="phone"

                    required

                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                    placeholder="+91 98765 43210"

                  />

                </div>



                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>

                  <input

                    type="text"

                    name="experience"

                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                    placeholder="e.g., 3 years"

                  />

                </div>

              </div>



              <div className="mt-4">

                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>

                <textarea

                  name="coverLetter"

                  rows={4}

                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                  placeholder="Tell us why you're interested in this position..."

                />

              </div>



              <div className="mt-4">

                <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>

                <input

                  type="file"

                  accept=".pdf,.doc,.docx"

                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                />

              </div>



              <div className="mt-6 flex space-x-4">

                <button

                  type="submit"

                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"

                >

                  Submit Application

                </button>

                <button

                  type="button"

                  onClick={() => setShowApplicationModal(false)}

                  className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"

                >

                  Cancel

                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* Job Details Modal */}

      {showDetailsModal && selectedJob && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">

            <div className="p-6 border-b">

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h3>

                <button

                  onClick={() => setShowDetailsModal(false)}

                  className="text-gray-500 hover:text-gray-700"

                >

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                  </svg>

                </button>

              </div>

            </div>



            <div className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                <div>

                  <h4 className="font-semibold text-gray-700 mb-2">Department</h4>

                  <p className="text-gray-600">{selectedJob.department}</p>

                </div>

                <div>

                  <h4 className="font-semibold text-gray-700 mb-2">Location</h4>

                  <p className="text-gray-600">{selectedJob.location}</p>

                </div>

                <div>

                  <h4 className="font-semibold text-gray-700 mb-2">Experience</h4>

                  <p className="text-gray-600">{selectedJob.experience}</p>

                </div>

                <div>

                  <h4 className="font-semibold text-gray-700 mb-2">Job Type</h4>

                  <p className="text-gray-600">{selectedJob.type}</p>

                </div>

              </div>



              <div className="mb-6">

                <h4 className="font-semibold text-gray-700 mb-2">Job Description</h4>

                <p className="text-gray-600">{selectedJob.description}</p>

              </div>



              <div className="mb-6">

                <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>

                <ul className="list-disc list-inside text-gray-600 space-y-1">

                  {selectedJob.responsibilities.map((req: string, index: number) => (

                    <li key={index}>{req}</li>

                  ))}

                </ul>

              </div>



              <div className="mb-6">

                <h4 className="font-semibold text-gray-700 mb-2">Qualifications</h4>

                <ul className="list-disc list-inside text-gray-600 space-y-1">

                  {selectedJob.qualifications.map((req: string, index: number) => (

                    <li key={index}>{req}</li>

                  ))}

                </ul>

              </div>



              <div className="flex space-x-4">

                <button

                  onClick={() => {

                    setShowDetailsModal(false);

                    handleApplyNow(selectedJob);

                  }}

                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"

                >

                  Apply for this Position

                </button>

                <button

                  onClick={() => setShowDetailsModal(false)}

                  className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"

                >

                  Close

                </button>

              </div>

            </div>

          </div>

        </div>

      )}



      {/* Terms & Conditions Modal */}

      {showTermsModal && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

            <div className="p-6 border-b">

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold text-gray-800">Terms & Conditions</h3>

                <button

                  onClick={() => setShowTermsModal(false)}

                  className="text-gray-500 hover:text-gray-700"

                >

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                  </svg>

                </button>

              </div>

            </div>



            <div className="p-6">

              <div className="prose max-w-none">

                <h4 className="text-lg font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h4>

                <p className="text-gray-600 mb-6">

                  By applying for any position at NR Medicare, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">2. Application Process</h4>

                <p className="text-gray-600 mb-6">

                  All applications submitted through our career portal are subject to review. We reserve the right to accept or reject any application at our discretion. Shortlisted candidates will be contacted for further interviews.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">3. Privacy and Data Protection</h4>

                <p className="text-gray-600 mb-6">

                  Your personal information will be handled in accordance with our Privacy Policy. We are committed to protecting your privacy and will only use your information for recruitment purposes.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">4. Equal Employment Opportunity</h4>

                <p className="text-gray-600 mb-6">

                  NR Medicare is an equal opportunity employer. We do not discriminate on the basis of race, color, religion, gender, sexual orientation, age, disability, or any other protected characteristic.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">5. Confidentiality</h4>

                <p className="text-gray-600 mb-6">

                  info@nrmedicare.com the recruitment process is confidential. Candidates are expected to maintain confidentiality regarding any proprietary information they may encounter during interviews.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">6. Background Verification</h4>

                <p className="text-gray-600 mb-6">

                  Employment offers are contingent upon successful completion of background verification, including but not limited to employment history, education verification, and reference checks.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">7. Intellectual Property</h4>

                <p className="text-gray-600 mb-6">

                  Any ideas, concepts, or materials shared by candidates during the recruitment process become the property of NR Medicare and may be used without compensation.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">8. No Employment Guarantee</h4>

                <p className="text-gray-600 mb-6">

                  Submission of an application does not guarantee employment. NR Medicare reserves the right to modify or cancel recruitment processes at any time without notice.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">9. Governing Law</h4>

                <p className="text-gray-600 mb-6">

                  These Terms & Conditions are governed by the laws of India, without regard to its conflict of law principles.

                </p>



                <h4 className="text-lg font-semibold text-gray-800 mb-4">10. Contact Information</h4>

                <p className="text-gray-600 mb-6">

                  For any questions regarding these Terms & Conditions, please contact our HR department at info@nrmedicare.com.

                </p>



                <div className="bg-gray-50 p-4 rounded-lg mt-8">

                  <p className="text-sm text-gray-600">

                    <strong>Last Updated:</strong> January 2026<br />

                    <strong>Version:</strong> 1.0

                  </p>

                </div>

              </div>



              <div className="mt-6 flex justify-end">

                <button

                  onClick={() => setShowTermsModal(false)}

                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"

                >

                  I Agree

                </button>

              </div>

            </div>

          </div>

        </div>

      )}



      <Footer />

    </div>

  );

}


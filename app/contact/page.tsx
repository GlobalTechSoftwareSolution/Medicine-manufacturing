'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const form = useRef<HTMLFormElement>(null);
  const [isEmailJSLoaded, setIsEmailJSLoaded] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      (window as any).emailjs.init('-VkdNw70CCWimx_AP');
      setIsEmailJSLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state keys
    const stateKey = name.replace('from_', '') as keyof typeof formData;
    
    setFormData({
      ...formData,
      [stateKey]: value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current || !isEmailJSLoaded) {
      alert('Email service is loading. Please try again in a moment.');
      return;
    }

    // EmailJS configuration
    const serviceId = 'service_shplp7t';
    const templateId = 'template_lny28sp';
    const publicKey = '-VkdNw70CCWimx_AP';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };

    // Using EmailJS to send email
    (window as any).emailjs.sendForm('service_hlym7mg', 'template_lny28sp', form.current, '-VkdNw70CCWimx_AP')
      .then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully! We will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
        },
        (error: any) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Get in touch with our team to discuss your pharmaceutical needs, partnerships, or any inquiries
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                  Whether you're a healthcare provider, distributor, or potential partner, we're here to help. 
                  Reach out to us and our dedicated team will respond promptly.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Headquarter</h3>
                      <p className="text-sm sm:text-base text-gray-600">No 36 1st Flr Giridhama, Layout 5th Mn Gattigere, Rajarajeshwarinagar, Bangalore, Bangalore South, Karnataka, India, 560098.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-600">+91 96663664548</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Email</h3>
                      <p className="text-sm sm:text-base text-gray-600">nagendra0297@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday: 10:00 AM - 2:00 PM EST<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
                  <form ref={form} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="from_phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="from_company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
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

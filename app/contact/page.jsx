'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Using Formspree - just replace YOUR_FORM_ID with your actual form ID
      const response = await fetch('https://formspree.io/f/xojalprn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        })
        // Reset form
        setFormData({ name: '', email: '', message: '' })
      } else {
        // Get the error details from Formspree
        const errorData = await response.text()
        console.log('Error response:', errorData)
        console.log('Response status:', response.status)
        throw new Error(`Form submission failed with status ${response.status}: ${errorData}`)
      }
    } catch (error) {
      console.error('Form Error:', error)
      setStatus({
        type: 'error',
        message: `Error: ${error.message}. Please check the console for more details.`
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Status Messages */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Alternative Contact Methods</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Email:</strong> 
                  <a href="mailto:shanalhr963@gmail.com" className="text-blue-600 hover:text-blue-700 ml-2">
                    shanalhr963@gmail.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/in/shanal-rathnaweera-7584b1285/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 ml-2">
                    Connect with me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

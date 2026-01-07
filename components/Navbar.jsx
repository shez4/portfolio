'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Shanal's Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/homelab" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors relative group">
              Homelab
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/troubleshooting" className="text-gray-700 hover:text-teal-600 font-medium transition-colors relative group">
              Troubleshooting
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="/homelab" className="text-gray-700 hover:text-cyan-600 font-medium" onClick={() => setIsOpen(false)}>
                Homelab
              </Link>
              <Link href="/troubleshooting" className="text-gray-700 hover:text-teal-600 font-medium" onClick={() => setIsOpen(false)}>
                Troubleshooting
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

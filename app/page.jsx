import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="float">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-2xl">
              Hi, I'm <span className="inline-block bg-white text-transparent bg-clip-text">Shanal</span>
            </h1>
          </div>
          <p className="text-3xl md:text-4xl mb-4 text-white font-semibold">IT Support | Troubleshooting | Homelab Builder</p>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Passionate about technology, problem-solving, and building efficient IT solutions
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/homelab" className="btn-secondary">
              Explore Homelab
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my technical work, homelab projects, and IT troubleshooting documentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects */}
            <Link href="/projects" className="block">
              <div className="glass rounded-2xl p-8 text-center card-hover h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Technical Projects</h3>
                <p className="text-gray-600 mb-4">
                  Automation scripts, server configurations, network setups, and development projects
                </p>
                <span className="text-blue-600 font-semibold">View All Projects →</span>
              </div>
            </Link>
            
            {/* Homelab */}
            <Link href="/homelab" className="block">
              <div className="glass rounded-2xl p-8 text-center card-hover h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Homelab</h3>
                <p className="text-gray-600 mb-4">
                  Proxmox, Pi-hole, Ubuntu Server, network infrastructure, and virtualization projects
                </p>
                <span className="text-cyan-600 font-semibold">Explore Homelab →</span>
              </div>
            </Link>
            
            {/* Troubleshooting */}
            <Link href="/troubleshooting" className="block">
              <div className="glass rounded-2xl p-8 text-center card-hover h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Troubleshooting</h3>
                <p className="text-gray-600 mb-4">
                  Real-world IT support cases with detailed step-by-step solutions and analysis
                </p>
                <span className="text-teal-600 font-semibold">View Cases →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center gradient-text mb-12">Core Skills & Tools</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Operating Systems</h4>
                <p className="text-gray-600 text-sm">Windows Server, Linux (Ubuntu, Debian), Proxmox VE</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Networking</h4>
                <p className="text-gray-600 text-sm">TCP/IP, DNS, DHCP, VLANs, Firewalls, VPN</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Tools & Services</h4>
                <p className="text-gray-600 text-sm">Active Directory, Pi-hole, Docker, Git, PowerShell</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Troubleshooting</h4>
                <p className="text-gray-600 text-sm">Hardware, Software, Network diagnostics, Event logs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in my work or looking for IT support expertise? Get in touch!
          </p>
          <Link href="/about" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Learn More About Me
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

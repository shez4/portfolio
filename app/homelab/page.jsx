import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Homelab Card Component
function HomelabCard({ title, description, purpose, tools, learned, status = 'Active' }) {
  return (
    <div className="glass rounded-2xl p-8 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
          status === 'Active' ? 'bg-green-100 text-green-700' : 
          status === 'Planning' ? 'bg-yellow-100 text-yellow-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Purpose
          </h4>
          <p className="text-gray-600 text-sm">{purpose}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Learnings
          </h4>
          <p className="text-gray-600 text-sm">{learned}</p>
        </div>
      </div>
    </div>
  )
}

// Sample homelab projects - Easy to add more
const homelabProjects = [
  {
    title: 'Ad Blocker',
    description: 'DNS-level ad blocking and network monitoring running on Raspberry Pi, protecting all devices on the network.',
    purpose: 'Block ads and trackers across all network devices, improve browsing speed, and monitor DNS queries.',
    tools: ['Pi-hole', 'Raspberry Pi', 'DNS', 'DHCP'],
    learned: 'DNS fundamentals, network-level filtering, DHCP configuration, and network traffic analysis.',
    status: 'Planning'
  },
  {
    title: 'Network Storage & File Server',
    description: 'Centralized storage solution with SMB/NFS shares for backups, media, and file sharing across the network.',
    purpose: 'Provide reliable centralized storage with redundancy and easy access from all devices.',
    tools: ['Twingate', 'Samba', 'User & Access Management', 'Security', ],
    learned: 'Storage management, Twingate, network file sharing protocols.',
    status: 'Active'
  }
]

export default function Homelab() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Homelab Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              My personal infrastructure for learning, testing, and running services. 
              A hands-on environment for developing IT skills and experimenting with new technologies.
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">
                  {homelabProjects.filter(project => project.status === 'Active').length}
                </div>
                <div className="text-gray-600 text-sm">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">
                  {homelabProjects
                    .filter(project => project.status === 'Active')
                    .reduce((total, project) => total + project.tools.length, 0)}
                </div>
                <div className="text-gray-600 text-sm">Services Running</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-gray-600 text-sm">Uptime Goal</div>
              </div>
            </div>
          </div>

          {/* Homelab Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {homelabProjects.map((project, index) => (
              <HomelabCard key={index} {...project} />
            ))}
          </div>

          {/* Infrastructure Overview */}
          <div className="glass rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-center gradient-text mb-8">Infrastructure Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Hardware</h3>
                <p className="text-gray-600 text-sm">Dell mini pc, Raspberry Pi 4, Synology NAS, Managed Network Switch</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Software</h3>
                <p className="text-gray-600 text-sm">Twingate, Pi-hole, Linux users/groups</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Services</h3>
                <p className="text-gray-600 text-sm">Ad Blocker, File sharing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

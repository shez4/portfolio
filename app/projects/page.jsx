import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

// Sample projects - You can easily add more here
const projects = [
  {
    title: 'PowerShell Automation Scripts',
    description: 'Collection of PowerShell scripts for automating Windows Server administration tasks, user management, and system monitoring.',
    tags: ['PowerShell', 'Windows Server', 'Automation'],
    github: 'https://github.com/yourusername/powershell-scripts',
    image: null
  },
  {
    title: 'Network Monitoring Dashboard',
    description: 'Custom dashboard for monitoring network devices, bandwidth usage, and system health using SNMP and real-time alerts.',
    tags: ['Python', 'Networking', 'Monitoring'],
    github: 'https://github.com/yourusername/network-monitor',
    image: null
  },
  {
    title: 'Active Directory Management Tool',
    description: 'GUI tool for streamlining Active Directory user creation, group management, and permission assignments.',
    tags: ['PowerShell', 'Active Directory', 'GUI'],
    github: 'https://github.com/yourusername/ad-tool',
    image: null
  },
  {
    title: 'Backup Automation System',
    description: 'Automated backup solution with scheduling, compression, and cloud upload capabilities for critical data.',
    tags: ['Python', 'Automation', 'Cloud'],
    github: 'https://github.com/yourusername/backup-system',
    image: null
  },
  {
    title: 'Server Configuration Templates',
    description: 'Standardized configuration files and documentation for deploying Windows and Linux servers efficiently.',
    tags: ['Linux', 'Windows Server', 'Documentation'],
    github: 'https://github.com/yourusername/server-templates',
    image: null
  },
  {
    title: 'IT Ticketing System Integration',
    description: 'Custom API integration connecting helpdesk ticketing system with monitoring tools for automated ticket creation.',
    tags: ['API', 'JavaScript', 'Automation'],
    github: 'https://github.com/yourusername/ticket-integration',
    image: null
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Technical Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of automation scripts, server configurations, networking projects, and development work. 
              All projects are available on GitHub with full documentation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                image={project.image}
              />
            ))}
          </div>

          {/* Add More Note */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
              <p className="text-gray-600">
                I'm constantly working on new projects and documenting existing work. 
                Check back regularly or visit my GitHub for the latest updates.
              </p>
              <a 
                href="https://github.com/shez4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 btn-primary"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

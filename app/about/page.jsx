import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'

export default function About() {
  const skills = {
    'Operating Systems': ['Windows 10/11', 'Ubuntu Desktop', 'MacOS'],
    'Networking': ['TCP/IP', 'DNS/DHCP', 'VPN', 'Network Troubleshooting'],
    'Tools & Software': ['Visual Studio', 'GitHub', 'VS Code', 'Figma', 'Zendesk', 'Active Directory'],
    'Hardware': ['PC Building & Repair', 'Server Hardware', 'Network Equipment', 'Storage Systems']
  }

  const certifications = [
    'Bachelor of Software Engineering (Final Semester Completed)'
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              S
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Software Engineering | Homelab Enthusiast | Continuous Learner
            </p>
          </div>

          {/* Bio */}
          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hello, I'm Shanal</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm an aspiring IT professional with a passion for troubleshooting, building infrastructure, 
                and helping people solve technical problems. My journey into IT started with curiosity about 
                how things work, which led me to build my own computers and eventually create a full homelab environment.
              </p>
              <p>
                Through my homelab, I've gained hands-on experience with virtualization, networking, Linux server 
                administration, and automation. I enjoy documenting my learning process and sharing knowledge 
                with others in the IT community.
              </p>
              <p>
                I'm currently focused on expanding my IT skills, earning industry certifications, and building 
                a strong foundation in help desk support, system administration, and network infrastructure.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-800">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm px-3 py-1.5 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-6 text-center">Certifications & Studies</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">My IT Journey</h2>
            <Timeline />
          </div>

          {/* CV Download */}
          <div className="text-center">
            <div className="glass rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
              <p className="text-gray-600 mb-6">
                View my complete work history, skills, and qualifications
              </p>
              <a 
                href="/ShanalRathnaweera_CV.pdf" 
                download="Shanal_Rathnaweera_CV.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV (PDF)
              </a>
              <p className="text-sm text-gray-500 mt-4">
                (CV file: ShanalRathnaweera_CV.pdf)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

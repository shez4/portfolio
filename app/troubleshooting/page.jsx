import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Troubleshooting Case Component
function TroubleshootingCard({ title, problem, investigation, steps, tools, rootCause, fix, prevention, difficulty }) {
  const difficultyColor = {
    'Basic': 'bg-green-100 text-green-700',
    'Intermediate': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
  }

  return (
    <div className="glass rounded-2xl p-8 mb-8">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${difficultyColor[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      
      {/* Problem */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Problem Description
        </h4>
        <p className="text-gray-600 pl-7">{problem}</p>
      </div>

      {/* Investigation */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Initial Investigation
        </h4>
        <p className="text-gray-600 pl-7">{investigation}</p>
      </div>

      {/* Steps Taken */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Troubleshooting Steps
        </h4>
        <ol className="list-decimal list-inside space-y-2 pl-7 text-gray-600">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Tools Used */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Tools Used
        </h4>
        <div className="flex flex-wrap gap-2 pl-7">
          {tools.map((tool, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Root Cause */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Root Cause
        </h4>
        <p className="text-gray-600 pl-7">{rootCause}</p>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Solution / Fix Applied
        </h4>
        <p className="text-gray-600 pl-7">{fix}</p>
      </div>

      {/* Prevention */}
      <div>
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Prevention & Best Practices
        </h4>
        <p className="text-gray-600 pl-7">{prevention}</p>
      </div>
    </div>
  )
}

// Sample troubleshooting cases - Easy to add more
const troubleshootingCases = [
  {
    title: 'Slow Boot Up',
    problem: 'When powering on the computer it takes about 20 minutes to boot up and takes a few minutes to load up applications.',
    investigation: 'Checked system specifications, reviewed boot process, analyzed disk performance, and examined startup programs.',
    steps: [
      'Checked Task Manager for startup programs',
      'Ran disk health check using CrystalDiskInfo',
      'Monitored boot time using Event Viewer',
      'Tested disk read/write speeds',
      'Checked available storage space',
      'Reviewed system specifications and age of hardware',
      'Researched M.2 SSD compatibility with motherboard',
      'Backed up important data before hardware swap'
    ],
    tools: ['Task Manager', 'CrystalDiskInfo', 'Event Viewer', 'Disk Management', 'System Information'],
    rootCause: 'The computer was using an HDD which had the OS installed on it. Traditional hard drives have much slower read/write speeds compared to SSDs.',
    fix: 'Swapped the HDD with an M.2 drive. Cloned the OS to the new drive and configured the system to boot from the faster storage.',
    prevention: 'Use SSD storage for operating systems, regular disk health monitoring, and keep startup programs to a minimum.',
    difficulty: 'Basic'
  }
]

export default function Troubleshooting() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              IT Troubleshooting Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world IT support scenarios documented with detailed investigation processes, 
              troubleshooting steps, tools used, and solutions implemented.
            </p>
          </div>

          {/* Troubleshooting Cases */}
          <div className="max-w-5xl mx-auto">
            {troubleshootingCases.map((case_, index) => (
              <TroubleshootingCard key={index} {...case_} />
            ))}
          </div>

          {/* Add More Note */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">More Cases Being Documented</h3>
              <p className="text-gray-600">
                I'm continuously documenting new troubleshooting cases from real-world IT support scenarios. 
                Each case includes detailed steps, tools used, and lessons learned.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

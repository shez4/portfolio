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
    title: 'Network Connectivity Issues - Users Unable to Access Internet',
    problem: 'Multiple users reporting intermittent internet connectivity issues. Some devices could connect while others could not.',
    investigation: 'Checked physical connections, verified router status lights, tested connectivity from different devices and network segments.',
    steps: [
      'Verified physical cable connections and switch port status',
      'Ran ping tests to gateway and external DNS servers',
      'Checked DHCP server for IP address conflicts',
      'Reviewed firewall logs for blocked traffic',
      'Tested DNS resolution using nslookup',
      'Examined network adapter settings on affected devices'
    ],
    tools: ['ping', 'ipconfig', 'nslookup', 'tracert', 'Event Viewer', 'Router Admin Panel'],
    rootCause: 'DHCP server was running out of available IP addresses in the pool. Some devices received duplicate IPs causing conflicts.',
    fix: 'Expanded DHCP pool range, cleared old DHCP leases, and set appropriate lease times. Renewed IP addresses on affected devices using ipconfig /release and /renew.',
    prevention: 'Implemented regular monitoring of DHCP scope utilization, set up alerts for low IP availability, and documented proper lease time configurations.',
    difficulty: 'Intermediate'
  },
  {
    title: 'Windows Update Failing - Error 0x80070002',
    problem: 'User unable to install Windows updates. Error code 0x80070002 appearing repeatedly during update installation.',
    investigation: 'Checked Windows Update history, reviewed Windows Update logs, verified disk space and system file integrity.',
    steps: [
      'Checked available disk space on C: drive',
      'Ran Windows Update Troubleshooter',
      'Stopped Windows Update service',
      'Cleared SoftwareDistribution folder contents',
      'Ran SFC /scannow to check system files',
      'Ran DISM tool to repair Windows image',
      'Restarted Windows Update service',
      'Manually triggered update check'
    ],
    tools: ['Windows Update Troubleshooter', 'Command Prompt', 'SFC', 'DISM', 'Services.msc', 'Event Viewer'],
    rootCause: 'Corrupted Windows Update cache files in the SoftwareDistribution folder preventing new updates from downloading correctly.',
    fix: 'Cleared the SoftwareDistribution folder after stopping Windows Update service, repaired system files with SFC and DISM, then restarted the service.',
    prevention: 'Regular system maintenance including disk cleanup, periodic clearing of update cache, and monitoring of available disk space.',
    difficulty: 'Basic'
  },
  {
    title: 'Email Server - Messages Stuck in Outbox',
    problem: 'Email messages not sending and remaining stuck in Outbox. Users unable to send external emails while internal emails worked fine.',
    investigation: 'Verified email client settings, checked server connectivity, reviewed mail server logs, and tested SMTP relay.',
    steps: [
      'Verified SMTP server settings in email client',
      'Tested telnet connection to SMTP port 587',
      'Checked firewall rules for outbound SMTP traffic',
      'Reviewed mail server logs for errors',
      'Verified SPF and DKIM records in DNS',
      'Tested email sending from webmail interface',
      'Checked mail queue status on server',
      'Verified antivirus not blocking email traffic'
    ],
    tools: ['Telnet', 'Mail Server Console', 'DNS Tools', 'Wireshark', 'Event Viewer', 'nslookup'],
    rootCause: 'ISP blocking outbound port 25 for SMTP relay. Server trying to use port 25 instead of submission port 587 with authentication.',
    fix: 'Reconfigured email server to use port 587 with TLS encryption and SMTP authentication. Updated all email clients to use the same settings.',
    prevention: 'Document proper SMTP configuration settings, implement monitoring for mail queue buildup, and maintain email server configuration documentation.',
    difficulty: 'Advanced'
  },
  {
    title: 'Printer Not Responding - Network Printer Offline',
    problem: 'Network printer showing as offline on multiple computers. Print jobs queuing but not printing.',
    investigation: 'Checked printer physical status, verified network connectivity, tested from different computers, reviewed printer spooler service.',
    steps: [
      'Verified printer powered on and showing ready status',
      'Checked network cable connection and switch port',
      'Pinged printer IP address from multiple devices',
      'Checked printer driver version and status',
      'Cleared print spooler queue',
      'Restarted print spooler service',
      'Removed and re-added printer',
      'Updated printer firmware and drivers'
    ],
    tools: ['ping', 'Print Management Console', 'Services.msc', 'Device Manager', 'Printer Web Interface'],
    rootCause: 'Printer had static IP that conflicted with DHCP-assigned address. Print spooler service was also stuck due to corrupted print job.',
    fix: 'Assigned printer a reserved DHCP address based on MAC, cleared spooler, restarted services, and updated printer drivers on all affected computers.',
    prevention: 'Implement proper IP address management, use DHCP reservations for network printers, and maintain updated driver versions.',
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

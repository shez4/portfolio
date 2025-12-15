export default function Timeline() {
  const events = [
    { 
      year: '2025', 
      title: 'IT Studies & Certification Path', 
      description: 'Pursuing CompTIA A+ certification while building practical skills through homelab projects and documentation'
    },
    { 
      year: '2024', 
      title: 'Homelab Expansion', 
      description: 'Built comprehensive homelab with Proxmox, Docker services, Pi-hole, network segmentation, and monitoring stack'
    },
    { 
      year: '2023', 
      title: 'Started IT Journey', 
      description: 'Began learning system administration, networking fundamentals, and troubleshooting methodologies'
    },
    { 
      year: '2022', 
      title: 'First Custom PC Build', 
      description: 'Built first computer from scratch, sparking deep interest in hardware and system configuration'
    },
  ]

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {event.year}
            </div>
            {index < events.length - 1 && (
              <div className="w-1 h-full bg-gradient-to-b from-blue-200 to-cyan-200 mt-2"></div>
            )}
          </div>
          <div className="glass rounded-xl p-6 flex-1 mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Timeline() {
  const events = [
    { 
      year: '2025', 
      title: 'Homelab Setup & Bachelor\'s Completion', 
      description: 'Set up comprehensive homelab environment and completed Bachelor\'s degree in Software Engineering'
    },
    { 
      year: '2024', 
      title: 'PC Assembly', 
      description: 'Gained hands-on experience building and assembling personal computers from components'
    },
    { 
      year: '2023', 
      title: 'Diploma in Information Technology', 
      description: 'Completed comprehensive diploma program covering IT fundamentals and practical applications'
    },
    { 
      year: '2022', 
      title: 'Certificate in Information Technology', 
      description: 'Earned certification focusing on Microsoft 365 applications and cloud-based productivity tools'
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

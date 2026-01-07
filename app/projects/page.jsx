import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'



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
              This space is reserved for showcasing technical projects and development work. 
              Check back soon as I begin documenting and sharing my projects!
            </p>
          </div>

          {/* Projects Section */}
          <div className="flex justify-center">
            <div className="glass rounded-2xl p-12 max-w-2xl text-center">
              <div className="text-6xl mb-6">🚧</div>
              <h3 className="text-2xl font-bold mb-4">Projects Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                I'm currently setting up this section to showcase technical projects, 
                automation scripts, and development work. Stay tuned for updates!
              </p>
              <div className="text-sm text-gray-500">
                <p>This section will feature real-world projects and solutions</p>
              </div>
            </div>
          </div>

          {/* Add More Note */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Building Something Great</h3>
              <p className="text-gray-600">
                This portfolio is a work in progress. As I develop new projects and 
                document existing work, they'll be featured here with full details and documentation.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                <p>💡 Ideas in development • 🔨 Projects in planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

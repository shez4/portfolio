import SectionCard from './SectionCard'

export default function TroubleshootingSteps() {
  const issues = [
    {
      title: 'Build Errors',
      solution: 'Check package.json dependencies and run npm install',
      steps: ['Verify Node.js version', 'Clear node_modules', 'Reinstall packages']
    },
    {
      title: 'Styling Issues',
      solution: 'Ensure Tailwind CSS is properly configured',
      steps: ['Check tailwind.config.js', 'Verify PostCSS setup', 'Import globals.css']
    },
    {
      title: 'Deployment Problems',
      solution: 'Review build logs and environment variables',
      steps: ['Check build command', 'Verify environment variables', 'Review server logs']
    }
  ]

  return (
    <div className="space-y-6">
      {issues.map((issue, index) => (
        <SectionCard key={index} title={issue.title}>
          <p className="text-gray-700 mb-4"><strong>Solution:</strong> {issue.solution}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {issue.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </SectionCard>
      ))}
    </div>
  )
}

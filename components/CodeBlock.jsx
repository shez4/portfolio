export default function CodeBlock({ code, language = 'javascript' }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-gray-100 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

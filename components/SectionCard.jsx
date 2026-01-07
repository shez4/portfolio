export default function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <div>{children}</div>
    </div>
  )
}

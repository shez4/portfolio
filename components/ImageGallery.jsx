export default function ImageGallery({ images = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))
      ) : (
        <div className="col-span-2 md:col-span-3 text-center text-gray-500 py-8">
          No images to display
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pristine Slopes',
    },
    {
      url: 'https://images.pexels.com/photos/1431829/pexels-photo-1431829.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mountain Views',
    },
    {
      url: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fresh Powder',
    },
    {
      url: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ski Lifts',
    },
    {
      url: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Resort Village',
    },
    {
      url: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Backcountry',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience Gudauri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breathtaking beauty of Georgia's premier ski resort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Gudauri?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">3279m</div>
              <p className="text-blue-100">Peak Elevation</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">70km</div>
              <p className="text-blue-100">of Ski Runs</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p className="text-blue-100">Days of Sunshine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

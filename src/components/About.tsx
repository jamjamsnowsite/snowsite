import { Award, Users, Mountain, Calendar } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Students Taught', value: '500+' },
    { icon: Mountain, label: 'Mountains Conquered', value: '50+' },
    { icon: Award, label: 'Certifications', value: '5' },
  ];

  const instructorImages = [
    'https://images.pexels.com/photos/848595/pexels-photo-848595.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/848604/pexels-photo-848604.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Instructor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the thrill of snowboarding with a certified professional who knows every slope in Gudauri
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Passionate About Teaching
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience on the slopes of Gudauri, I've dedicated my life to helping riders of all levels discover the joy and freedom of snowboarding. From complete beginners taking their first turns to advanced riders perfecting their technique, I tailor each lesson to your individual goals and learning style.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Gudauri offers some of the best powder in the Caucasus Mountains, and I know every run, every secret spot, and every safe route. Whether you're looking to build confidence, learn new tricks, or explore off-piste terrain, I'll guide you every step of the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                CASI Certified
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                Avalanche Safety
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                First Aid
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={instructorImages[0]}
                alt="Instructor snowboarding"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <img
              src={instructorImages[1]}
              alt="Instructor teaching"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={instructorImages[2]}
              alt="Instructor on mountain"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

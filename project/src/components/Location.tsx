import { MapPin, Clock, Snowflake, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Gudauri, Georgia's premier mountain resort
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  Gudauri Ski Resort<br />
                  Mtskheta-Mtianeti Region<br />
                  Georgia, Caucasus Mountains
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Season</h3>
                <p className="text-gray-600">
                  December - April<br />
                  Daily lessons available<br />
                  9:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Getting There</h3>
                <p className="text-gray-600">
                  120 km from Tbilisi<br />
                  2 hour drive on the Georgian Military Highway<br />
                  Transfers available upon request
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Snow Conditions</h3>
                <p className="text-gray-600">
                  Average snowfall: 3-4 meters<br />
                  Peak season: January - March<br />
                  Off-piste opportunities available
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11912.857837668984!2d44.46823!3d42.4786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446b0b6e8e0001%3A0x6b7e3d8c8e8e8e8e!2sGudauri!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gudauri Location Map"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-sm text-gray-500 mb-1">Elevation</div>
              <div className="text-3xl font-bold text-blue-600">2196m</div>
              <div className="text-sm text-gray-600">Base Station</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Shield, Users, Clock, Star } from "lucide-react";

const index = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Why Choose{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #e11d48 0%, #db2777 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                WeTooMedia
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by bureaucrats, designed for professionals. Experience
              matchmaking that understands your lifestyle and values.
            </p>
          </div>

          {/* Feature 1: 100% Confidential Service */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="w-full h-80 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-24 h-24 border-4 border-rose-200 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy First
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                  100% Confidential Service
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your privacy is our top priority. We implement
                  enterprise-grade security measures to ensure your personal
                  information remains completely confidential. Our platform is
                  designed with the highest standards of data protection, giving
                  you peace of mind while searching for your life partner.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      End-to-end encryption for all communications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Strict verification processes for all profiles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Your data is never shared with third parties
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Better Response */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
            {/* Content */}
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  Quality Matches
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                  Better Response Rate
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect with a trusted community of verified professionals.
                  Our platform ensures that every profile is thoroughly vetted,
                  leading to meaningful conversations and genuine connections.
                  Experience higher response rates from serious, like-minded
                  individuals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Verified profiles with professional credentials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Active community of serious professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Higher engagement and response rates
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="w-full h-80 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-12 h-12 bg-green-200 rounded-full"></div>
                        <div className="w-12 h-12 bg-emerald-200 rounded-full"></div>
                        <div className="w-12 h-12 bg-green-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Save Time & Effort */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-32 h-2 bg-blue-200 rounded-full"></div>
                        <div className="w-24 h-2 bg-indigo-200 rounded-full"></div>
                        <div className="w-28 h-2 bg-blue-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  Efficiency
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                  Save Time & Effort
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our intelligent matchmaking system does the heavy lifting for
                  you. Advanced algorithms and personalized recommendations help
                  you find compatible matches quickly, saving you valuable time
                  while ensuring quality connections.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Smart matching algorithms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Personalized recommendations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Streamlined communication tools
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 4: Strong Bureaucrat Network */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Exclusive Network
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                  Strong Bureaucrat Network
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our founder has genuine connections within bureaucrat circles,
                  ensuring access to an exclusive network of IAS, IPS officers,
                  doctors, judges, and State PCS officers. This insider network
                  provides you with opportunities to connect with the most
                  suitable matches.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Direct access to bureaucrat circles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Verified profiles from government services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Exclusive networking opportunities
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-100 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white fill-current" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-violet-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-violet-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-violet-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

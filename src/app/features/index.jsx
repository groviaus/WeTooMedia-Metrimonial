import { Shield, Users, Clock, Star, CheckCircle } from "lucide-react";

const index = () => {
  const features = [
    {
      id: 1,
      icon: Shield,
      badge: "Privacy First",
      title: "100% Confidential Service",
      description: "Your privacy is our top priority. We implement enterprise-grade security measures to ensure your personal information remains completely confidential. Our platform is designed with the highest standards of data protection, giving you peace of mind while searching for your life partner.",
      points: [
        "End-to-end encryption for all communications",
        "Strict verification processes for all profiles",
        "Your data is never shared with third parties"
      ],
      colors: {
        bg: "from-rose-100 to-pink-100",
        content: "from-rose-50 to-pink-50",
        icon: "from-rose-500 to-pink-500",
        badge: "bg-rose-50 text-rose-700",
        bullet: "text-rose-500",
        border: "border-rose-200"
      },
      imageContent: {
        type: "circle",
        elements: [{ className: "w-24 h-24 border-4 border-rose-200 rounded-full mx-auto" }]
      }
    },
    {
      id: 2,
      icon: Users,
      badge: "Quality Matches",
      title: "Better Response Rate",
      description: "Connect with a trusted community of verified professionals. Our platform ensures that every profile is thoroughly vetted, leading to meaningful conversations and genuine connections. Experience higher response rates from serious, like-minded individuals.",
      points: [
        "Verified profiles with professional credentials",
        "Active community of serious professionals",
        "Higher engagement and response rates"
      ],
      colors: {
        bg: "from-green-100 to-emerald-100",
        content: "from-green-50 to-emerald-50",
        icon: "from-green-500 to-emerald-500",
        badge: "bg-green-50 text-green-700",
        bullet: "text-green-500"
      },
      imageContent: {
        type: "circles",
        elements: [
          { className: "w-12 h-12 bg-green-200 rounded-full" },
          { className: "w-12 h-12 bg-emerald-200 rounded-full" },
          { className: "w-12 h-12 bg-green-300 rounded-full" }
        ]
      }
    },
    {
      id: 3,
      icon: Clock,
      badge: "Efficiency",
      title: "Save Time & Effort",
      description: "Our intelligent matchmaking system does the heavy lifting for you. Advanced algorithms and personalized recommendations help you find compatible matches quickly, saving you valuable time while ensuring quality connections.",
      points: [
        "Smart matching algorithms",
        "Personalized recommendations",
        "Streamlined communication tools"
      ],
      colors: {
        bg: "from-blue-100 to-indigo-100",
        content: "from-blue-50 to-indigo-50",
        icon: "from-blue-500 to-indigo-500",
        badge: "bg-blue-50 text-blue-700",
        bullet: "text-blue-500"
      },
      imageContent: {
        type: "bars",
        elements: [
          { className: "w-32 h-2 bg-blue-200 rounded-full" },
          { className: "w-24 h-2 bg-indigo-200 rounded-full" },
          { className: "w-28 h-2 bg-blue-300 rounded-full" }
        ]
      }
    },
    {
      id: 4,
      icon: Star,
      badge: "Exclusive Network",
      title: "Strong Bureaucrat Network",
      description: "We have genuine connections within bureaucrat circles, ensuring access to an exclusive network of IAS, IPS officers, doctors, judges, and State PCS officers. This insider network provides you with opportunities to connect with the most suitable matches.",
      points: [
        "Direct access to bureaucrat circles",
        "Verified profiles from government services",
        "Exclusive networking opportunities"
      ],
      colors: {
        bg: "from-purple-100 to-violet-100",
        content: "from-purple-50 to-violet-50",
        icon: "from-purple-500 to-violet-500",
        badge: "bg-purple-50 text-purple-700",
        bullet: "text-purple-500"
      },
      imageContent: {
        type: "grid",
        elements: [
          { className: "w-8 h-8 bg-purple-200 rounded-full" },
          { className: "w-8 h-8 bg-violet-200 rounded-full" },
          { className: "w-8 h-8 bg-purple-300 rounded-full" },
          { className: "w-8 h-8 bg-violet-300 rounded-full" },
          { className: "w-8 h-8 bg-purple-200 rounded-full" },
          { className: "w-8 h-8 bg-violet-200 rounded-full" }
        ]
      }
    }
  ];

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

          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            const isLast = index === features.length - 1;

            return (
              <div key={feature.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isLast ? 'mb-20 lg:mb-24' : ''}`}>
                {/* Image */}
                <div className={isEven ? "order-2 lg:order-1" : "order-1 lg:order-2"}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.colors.bg} rounded-3xl transform ${isEven ? 'rotate-3' : '-rotate-3'}`}></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                      <div className={`w-full h-80 bg-gradient-to-br ${feature.colors.content} rounded-2xl flex items-center justify-center`}>
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${feature.colors.icon} rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className={feature.imageContent.type === "circles" ? "flex justify-center space-x-2" : feature.imageContent.type === "grid" ? "grid grid-cols-3 gap-2" : "space-y-2"}>
                            {feature.imageContent.elements.map((element, i) => (
                              <div key={i} className={element.className}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "order-1 lg:order-2" : "order-2 lg:order-1"}>
                  <div className="space-y-6">
                    <div className={`inline-flex items-center px-4 py-2 ${feature.colors.badge} rounded-full text-sm font-medium`}>
                      <IconComponent className="w-4 h-4 mr-2" />
                      {feature.badge}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 ${feature.colors.bullet} rounded-full mt-1 mr-3 flex-shrink-0`}/>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default index;

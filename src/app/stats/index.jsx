"use client"

const index = () => {
  return (
    <section
        className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 font-serif">50K+</div>
              <div className="text-sm lg:text-base opacity-90">Happy Couples</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 font-serif">2M+</div>
              <div className="text-sm lg:text-base opacity-90">Verified Profiles</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 font-serif">95%</div>
              <div className="text-sm lg:text-base opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 font-serif">24/7</div>
              <div className="text-sm lg:text-base opacity-90">Support</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default index
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe, ArrowRight, Heart, Star, Users, Shield, Clock } from "lucide-react"
import { HeroMarquee } from "@/components/HeroMarquee"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
                  }}
                >
                  <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-white fill-current" />
                </div>
                <span className="text-xl lg:text-2xl font-bold text-gray-900 font-serif">WeTooMedia</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <a
                href="#"
                className="text-gray-900 hover:text-rose-600 font-medium text-sm lg:text-base transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base transition-colors duration-200"
              >
                About us
              </a>
              <div className="flex items-center space-x-1">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base transition-colors duration-200"
                >
                  Services
                </a>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex items-center space-x-1">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base transition-colors duration-200"
                >
                  Success Stories
                </a>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="hidden sm:flex items-center space-x-1 text-gray-600">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">IN</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <Button
                variant="outline"
                className="text-gray-900 border-gray-300 hover:bg-gray-50 bg-transparent text-sm lg:text-base px-4 lg:px-6 transition-all duration-200"
              >
                Login
              </Button>
              <Button
                className="text-white font-medium text-sm lg:text-base px-4 lg:px-6 transition-all duration-300 transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
                  boxShadow: "0 10px 25px -3px rgba(244, 63, 94, 0.1), 0 4px 6px -2px rgba(244, 63, 94, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e11d48 0%, #db2777 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
                }}
              >
                Register Free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-16 sm:pt-20 lg:pt-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, rgba(255, 241, 242, 0.5) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8 font-sans">
            Where Love Stories
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #e11d48 0%, #db2777 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Begin Forever
            </span>
          </h1>
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Every great love story starts with a single moment of connection. At WeTooMedia, we believe that your
            perfect match is waiting to write the most beautiful chapter of your life together. Join thousands of
            couples who found their soulmate through our trusted matrimonial platform.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="text-white font-semibold px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
                boxShadow: "0 20px 25px -5px rgba(244, 63, 94, 0.1), 0 10px 10px -5px rgba(244, 63, 94, 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #e11d48 0%, #db2777 100%)"
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(244, 63, 94, 0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(244, 63, 94, 0.1), 0 10px 10px -5px rgba(244, 63, 94, 0.04)"
              }}
            >
              Find Your Soulmate
              <Heart className="w-5 h-5 ml-2 fill-current" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-rose-200 text-rose-600 hover:bg-rose-50 font-semibold px-8 lg:px-14 py-3 lg:py-4 text-base lg:text-lg bg-transparent transition-all duration-200"
            >
              Browse Profiles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8 md:space-x-12 lg:space-x-16 opacity-60">
            {/* Trust badges */}
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="text-gray-500 font-medium text-sm lg:text-base">Verified</span>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="text-gray-500 font-medium text-sm lg:text-base">2M+ Members</span>
            </div>

            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 fill-current" />
              <span className="text-gray-500 font-medium text-sm lg:text-base">4.8 Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="text-gray-500 font-medium text-sm lg:text-base">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      {/* <section
        className="pb-12 pt-5 lg:pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 241, 242, 0.3) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Beautiful Love Stories
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the magic of true love through our success stories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="relative sm:-mt-5 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
                  alt="Handsome groom in traditional attire"
                  width={300}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative sm:mt-8 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop"
                  alt="Beautiful bride in elegant dress"
                  width={300}
                  height={400}
                  className="w-full  h-64 sm:h-72 lg:h-80 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative sm:-mt-5 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop"
                  alt="Happy couple celebrating their engagement"
                  width={300}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative sm:mt-8 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop&crop=face"
                  alt="Elegant bride with traditional jewelry"
                  width={300}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative sm:-mt-5 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop"
                  alt="Romantic wedding ceremony moment"
                  width={300}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <HeroMarquee />

      {/* Stats Section */}
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
    </div>
  )
}

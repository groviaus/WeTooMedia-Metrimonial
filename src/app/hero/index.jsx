"use client"

import { Button } from "@/components/ui/button"
import {  ArrowRight, Heart, Star, Users, Shield, Clock } from "lucide-react"
import { HeroMarquee } from "@/components/HeroMarquee"

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section
        className="pt-16 sm:pt-20 lg:pt-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, rgba(255, 241, 242, 0.5) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8 font-sans">
            India's #1 Elite Muslim Matrimony
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
              for IAS, PCS, Doctors & Judges
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
      {/* <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8 md:space-x-12 lg:space-x-16 opacity-60">
           
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
      </section> */}

      

      <HeroMarquee />

     
    
    </div>
  )
}

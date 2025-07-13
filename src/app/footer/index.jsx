import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {  
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 border-t border-pink-100">
      <div className="container sm:max-w-7xl mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                WeTooMedia
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Where love stories begin forever. Connecting hearts and creating beautiful relationships that last a
              lifetime.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white group"
              >
                <Facebook className="h-4 w-4 text-pink-600 group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white group"
              >
                <Twitter className="h-4 w-4 text-pink-600 group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white group"
              >
                <Instagram className="h-4 w-4 text-pink-600 group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white group"
              >
                <Linkedin className="h-4 w-4 text-pink-600 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Success Stories", "Pricing", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Find Your Soulmate",
                "Premium Matchmaking",
                "Profile Verification",
                "Wedding Planning",
                "Relationship Counseling",
                "Success Coaching",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 mt-2"></div>
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Phone</p>
                  <p className="text-sm text-gray-600">+91 9773573083</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">wetoo.media@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Address</p>
                  <p className="text-sm text-gray-600">
                    Shaheen Bagh,
                    <br />
                   Okhla, New Delhi
                    <br />
                    110025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-pink-100">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 lg:p-8">
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Stay Updated with Love Stories</h3>
              <p className="text-pink-100 mb-6 text-sm lg:text-base">
                Subscribe to our newsletter for dating tips, success stories, and special offers
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-800 placeholder-gray-500 bg-white"
                />
                <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pink-100">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} WeTooMedia. All rights reserved. Made with{" "}
                <Heart className="inline h-4 w-4 text-pink-500 fill-current" /> for love.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

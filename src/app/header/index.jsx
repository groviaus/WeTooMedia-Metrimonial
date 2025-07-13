"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Heart } from "lucide-react"

const index = () => {
  return (
    <>
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
           {/* <div className="hidden sm:flex items-center space-x-1 text-gray-600">
             <Globe className="w-4 h-4" />
             <span className="text-sm font-medium">IN</span>
             <ChevronDown className="w-3 h-3" />
           </div> */}
           {/* <Button
             variant="outline"
             className="text-gray-900 border-gray-300 hover:bg-gray-50 bg-transparent text-sm lg:text-base px-4 lg:px-6 transition-all duration-200"
           >
             Login
           </Button> */}
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
   </>
  )
}

export default index
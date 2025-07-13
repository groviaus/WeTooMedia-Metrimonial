import Accordion from "@/components/ui/Accordion";
import Image from "next/image";

const faqs = [
  {
    question: "How do I update my profile information?",
    answer:
      "To update your profile, log in and go to your account settings. Edit your details and save the changes. Your profile will be updated instantly.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via the 'Contact Us' page or email us at wetoo.media@gmail.com. We respond within 24 hours.",
  },
  {
    question: "How do I join a group or community?",
    answer:
      "Navigate to the 'Groups' section from your dashboard and request to join any community that interests you. Approval is usually instant.",
  },
  {
    question: "How do I change my email address?",
    answer:
      "Go to your account settings, select 'Change Email', enter your new email address, and confirm via the verification link sent to your new email.",
  },
  {
    question: "Is my information safe and private?",
    answer:
      "Absolutely. We use advanced encryption and never share your data with third parties. Your privacy is our top priority.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 font-serif">
            Frequently <span className="text-pink-500">Asked Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our platform, privacy, and how to
            get the most out of your matchmaking experience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image with glassmorphism and gradient overlay */}
          <div className="w-full   lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl mb-8 lg:mb-0  relative sm:sticky sm:top-32">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/30 via-white/10 to-purple-400/30 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="FAQ board inspiration"
              width={600}
              height={350}
              className="object-cover w-full h-64 lg:h-96"
              style={{ filter: "blur(0px) brightness(0.98)" }}
            />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-20" />
          </div>
          {/* FAQ Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 bg-white/70 rounded-2xl p-6 shadow-l backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-left">
              We connect you with the best, and help you stay open to new
              possibilities
            </h3>
            <Accordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

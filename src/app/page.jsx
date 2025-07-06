// pages/index.jsx
export default function HomePage() {
  return (
    <main className="font-sans bg-[#FAFAF5] text-[#2C3E50]">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-[#FAFAF5]">
        <h1 className="text-4xl font-bold mb-4">Find Your Life Partner</h1>
        <p className="max-w-xl mx-auto text-lg">
          A trusted matrimonial platform exclusively for civil servants.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-[#C9AD6A] text-white hover:opacity-90">
          Join Now
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-[#F5F0EC]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p>
              We offer a private, respectful, and secure space for civil servants to connect and build meaningful relationships.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Confidentiality & Trust</li>
              <li>Respectful Matching</li>
              <li>Serious Intentions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Real Connections. Real Stories.</h2>
          <p className="mb-10">Discover the meaningful matches made through our platform.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F0EC] p-6 rounded-lg shadow-sm">
              <p>"We met through this platform and couldn't be happier."</p>
              <span className="block mt-4 text-sm text-[#800020]">– IAS Couple, Delhi</span>
            </div>
            <div className="bg-[#F5F0EC] p-6 rounded-lg shadow-sm">
              <p>"A genuine space that respects our profession and our values."</p>
              <span className="block mt-4 text-sm text-[#800020]">– IRS Officer, Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#800020] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Soulmate?</h2>
        <p className="mb-6">Join thousands of civil servants already making meaningful connections.</p>
        <button className="px-6 py-3 bg-[#C9AD6A] text-[#2C3E50] font-semibold rounded-full hover:opacity-90">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#2C3E50] text-white text-center">
        <p>&copy; {new Date().getFullYear()} CivilMatch. All rights reserved.</p>
      </footer>
    </main>
  );
}

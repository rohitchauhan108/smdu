"use client"

import { ChevronDown, Globe, Mail, Phone, MapPin } from "lucide-react"

export default function InformationCornerPage() {
  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs sm:text-sm font-semibold uppercase mb-4">
            University Information
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Information Corner — Study in India
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The “Information Corner – Study in India” at Smt. Manjira Devi University is an officially designated student-support
              and outreach facility established in accordance with UGC guidelines. It provides accurate, updated and comprehensive
              information to Indian and international students about programmes, admission procedures, eligibility norms, scholarships,
              regulatory requirements and campus life in India.
            </p>
          </div>

          {/* Key Functions */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-8 flex items-center gap-3">
              <Globe className="w-7 h-7" />
              Key Functions (UGC-compliant)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Provide Accurate Academic Information</h3>
                <p className="text-sm text-gray-700">Program details, curriculum structures, NEP-2020 features, credit framework and UGC regulations.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Admission Guidance</h3>
                <p className="text-sm text-gray-700">Eligibility norms, required documents, entrance examinations, international admissions and equivalence rules.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Information on Fees, Scholarships & Financial Aid</h3>
                <p className="text-sm text-gray-700">Government/UGC scholarships, Study in India scholarships, and university-specific concessions.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Student Support Services</h3>
                <p className="text-sm text-gray-700">Hostel information, medical facilities, anti-ragging guidelines, grievance redressal and counselling services.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. International Student Facilitation</h3>
                <p className="text-sm text-gray-700">Visa support, FRRO guidance, orientation programmes, cultural integration and dedicated liaison services.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Regulatory Compliance</h3>
                <p className="text-sm text-gray-700">Ensuring all information aligns with UGC, Ministry of Education and Study in India directives.</p>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">7. Digital & On-Campus Helpdesk</h3>
                <p className="text-sm text-gray-700">A website section plus a physical helpdesk providing verified information and round-the-clock access to essential resources.</p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">How to Use the Information Corner</h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Visit the on-campus helpdesk for one-on-one guidance (walk-in and appointment available).</li>
              <li>Check the dedicated Study in India web page for downloadable forms and application instructions.</li>
              <li>Request equivalence guidance for foreign certificates and translations.</li>
              <li>Ask for scholarship eligibility checks and application support.</li>
              <li>Book orientation / counselling sessions through the helpdesk.</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Contact & Support</h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p><strong>Information Corner — Study in India</strong></p>
              <p>Office: Office of International & Academic Collaborations, Smt. Manjira Devi University</p>
              <p>
                Email:{" "}
                <a href="mailto:international@smdu.edu.in" className="text-orange-600 hover:underline">
                  international@smdu.edu.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+918006345557" className="text-orange-600 hover:underline">
                  +91-80063-45557
                </a>
              </p>
              <p>
                Web:{" "}
                <a
                  href="https://smdu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  smdu.edu.in
                </a>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            The Information Corner provides authoritative guidance aligned to UGC and Study-in-India norms. For official confirmations and
            detailed policy queries, please contact the Office of International & Academic Collaborations.
          </div>
        </div>
      </div>
    </section>
  )
}
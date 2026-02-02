"use client"

import { ChevronDown, Newspaper } from "lucide-react"

export default function NewslettersPage() {
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
            University Updates
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Newsletters
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Smt. Manjira Devi University, Uttarkashi
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The Information Corner at Smt. Manjira Devi University serves as a
              central platform to share important updates and highlights of the
              University. Through our newsletters, we keep students, faculty, staff,
              and stakeholders informed about academic, cultural, and administrative
              activities.
            </p>
          </div>

          {/* What Our Newsletters Include */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Newspaper className="w-7 h-7" />
              What Our Newsletters Include
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>University announcements and notices</li>
              <li>Academic achievements and research updates</li>
              <li>Student activities and campus events</li>
              <li>Workshops, seminars, and conferences</li>
              <li>Admissions, examinations, and placement updates</li>
              <li>Social initiatives and community outreach programs</li>
            </ul>
          </div>

          {/* Purpose of the Newsletter */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Purpose of the Newsletter</h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>To ensure transparent communication</li>
              <li>To keep stakeholders updated with university developments</li>
              <li>To promote achievements and best practices</li>
              <li>To strengthen the connection between the University and its community</li>
            </ul>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Availability</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              The newsletters are published periodically and are available:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>On the official University website</li>
              <li>At the Information Corner / Notice Board</li>
              <li>Through digital circulation (PDF format)</li>
            </ul>

            <p className="mt-6 text-sm text-gray-700 italic text-center">
              Students, faculty members, and staff are encouraged to regularly check
              the Information Corner to stay informed and engaged with the vibrant
              academic and campus life of Smt. Manjira Devi University.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
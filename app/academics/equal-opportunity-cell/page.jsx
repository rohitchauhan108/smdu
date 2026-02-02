"use client"

import { ChevronDown } from "lucide-react"

export default function EqualOpportunityCellPage() {
  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-3 sm:px-4">

        {/* Header - same as your reference */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-700 text-[10px] sm:text-xs font-semibold uppercase mb-3 sm:mb-4">
            University Governance
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
            Equal Opportunity Cell / Gender Sensitization Cell
          </h1>

          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mx-auto px-4 max-w-md">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-14 sm:w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* Table Card */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl border border-orange-100 overflow-hidden">

          {/* Mobile swipe hint */}
          <div className="md:hidden text-[10px] text-gray-500 text-right px-4 pt-3">
            ← Swipe horizontally →
          </div>

          {/* Scrollable Table */}
          <div
            className="
              relative
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              scrollbar-thin
              scrollbar-thumb-orange-300
              scrollbar-track-orange-100/40
            "
          >
            <table className="w-full min-w-150 border-collapse text-sm">
              <thead>
                <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <th className="px-4 py-4 text-left font-semibold">S. No.</th>
                  <th className="px-4 py-4 text-left font-semibold">Name</th>
                  <th className="px-4 py-4 text-left font-semibold">Designation</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-orange-100">
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">1</td>
                  <td className="px-4 py-4">Dr. Amit Kumar</td>
                  <td className="px-4 py-4">Registrar — Chairperson</td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">2</td>
                  <td className="px-4 py-4">Mr. Naveen Nautiyal</td>
                  <td className="px-4 py-4">In-Charge Exam — Member</td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">3</td>
                  <td className="px-4 py-4">Mr. Rajesh Kohli</td>
                  <td className="px-4 py-4">H.O.D B.Ed. Department — Member</td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">4</td>
                  <td className="px-4 py-4">Mr. Ashish Chand Ramola</td>
                  <td className="px-4 py-4">Agri. Department — Member</td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">5</td>
                  <td className="px-4 py-4">Mr. Khushpal Singh</td>
                  <td className="px-4 py-4">B.Ed. Department — Member</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { ChevronDown, ShieldCheck } from "lucide-react"

export default function ReservationRosterPage() {
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
            University Policy
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Reservation Roster
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
              Smt. Manjira Devi University follows the reservation policy as
              prescribed by the Government of India, State Government, and the
              University Grants Commission (UGC), wherever applicable, for admissions
              and appointments.
            </p>
          </div>

          {/* Reservation Categories Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7" />
                Reservation Categories
              </h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-125 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Category</th>
                      <th className="px-4 py-4 text-left font-semibold">Reservation Percentage*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Scheduled Caste (SC)</td>
                      <td className="px-4 py-4">As per Government norms</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Scheduled Tribe (ST)</td>
                      <td className="px-4 py-4">As per Government norms</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Other Backward Classes (OBC)</td>
                      <td className="px-4 py-4">As per Government norms</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Economically Weaker Section (EWS)</td>
                      <td className="px-4 py-4">As per Government norms</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">General (Unreserved)</td>
                      <td className="px-4 py-4">Remaining seats</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-gray-600 italic text-center">
                * Reservation percentages are subject to change from time to time as
                per government regulations.
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Important Notes</h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>
                Reservation is applicable only where mandated by
                statutory/regulatory authorities.
              </li>
              <li>
                All admissions and appointments are carried out strictly as per
                applicable rules and eligibility criteria.
              </li>
              <li>
                Relevant certificates issued by competent authorities are mandatory
                to claim reservation benefits.
              </li>
              <li>
                The University adheres to UGC, State Government, and other statutory
                body guidelines.
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-700 text-center font-medium">
              📌 For detailed information, candidates may contact the{" "}
              <strong>Admission Cell / Establishment Section</strong> of the
              University.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
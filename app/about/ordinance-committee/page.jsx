"use client"

import { ChevronDown } from "lucide-react"

export default function OrdinanceCommitteePage() {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">

      {/* ================= PATTERN GRID BACKGROUND ================= */}
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="relative container mx-auto max-w-6xl px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-4">
            University Committees
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900">
            Ordinance Committee
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Smt. Manjira Devi University, Uttarkashi
          </p>

          <div className="w-24 h-1 bg-[#F56A14] mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">

              <thead>
                <tr className="bg-[#F56A14] text-white">
                  <th className="px-6 py-5 text-left font-semibold border-r border-orange-300">
                    S. No.
                  </th>
                  <th className="px-6 py-5 text-left font-semibold border-r border-orange-300">
                    Name
                  </th>
                  <th className="px-6 py-5 text-left font-semibold border-r border-orange-300">
                    Designation
                  </th>
                  <th className="px-6 py-5 text-left font-semibold">
                    Role in Committee
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-orange-200">

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">1</td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Prof. J. P. Pachauri
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Ex. Vice-Chancellor
                  </td>
                  <td className="px-6 py-5 font-semibold">Chairperson</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">2</td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Dr. A. K. Khanduri
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Ex. Registrar / Secretary<br />
                    University Grants Commission, New Delhi
                  </td>
                  <td className="px-6 py-5">Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">3</td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Dr. R. M. Bhatt
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Ex. Computer Science Programmer<br />
                    HNB Central University, Srinagar Garhwal
                  </td>
                  <td className="px-6 py-5">Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">4</td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Dr. Lokesh Gambheer
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Registrar<br />
                    S. G. R. R. University, Patel Nagar, Dehradun
                  </td>
                  <td className="px-6 py-5">Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">5</td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Dr. G. C. Madhwal
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Special Duty Officer
                  </td>
                  <td className="px-6 py-5">
                    Member (Secretary)
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}

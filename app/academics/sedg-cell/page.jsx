"use client"

import { ChevronDown } from "lucide-react"

export default function SEDGCellPage() {
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
            University Governance
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Socio-Economically Disadvantaged Groups (SEDG) Cell
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Overview</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                The students belonging to Socio-Economically Disadvantaged Groups (SEDGs) face
                multiple challenges in accessing quality education due to socio-cultural,
                economic, and historical barriers. The National Education Policy (NEP) 2020 has
                emphasized on the increased participation of SEDGs in higher education,
                identifying groups based on gender, social, educational, and economic identities.
              </p>
              <p>
                The <strong>SEDG Cell</strong> at Smt. Manjira Devi University ensures protection of
                constitutionally guaranteed rights, dignity, and equal access to education.
                It promotes inclusivity and works with other statutory bodies such as
                SC/ST Cell, Equal Opportunity Cell, and Women Empowerment Committee.
              </p>
            </div>
          </div>

          {/* Composition Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Composition of SEDG Cell</h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-200 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">S. No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Name</th>
                      <th className="px-4 py-4 text-left font-semibold">Designation</th>
                      <th className="px-4 py-4 text-left font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">1</td>
                      <td>Dr. Ankur Aggarwal</td>
                      <td>Principal, SoA&H</td>
                      <td>Chairperson</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">2</td>
                      <td>Dr. Kapil Mohan</td>
                      <td>Principal, SoN&YS</td>
                      <td>Member</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">3</td>
                      <td>Mr. Naveen Nautiyal</td>
                      <td>Controller of Examination</td>
                      <td>Member</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">4</td>
                      <td>Mr. Vikas Dhawan</td>
                      <td>HOD, Department of Pharmacy</td>
                      <td>Member</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">5</td>
                      <td>Mrs. Jaisudha</td>
                      <td>Principal, SoP&HS</td>
                      <td>Member</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">6</td>
                      <td>Dr. Nitin Bhadri</td>
                      <td>P.S. (V.C.), SMDU</td>
                      <td>Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Key Responsibilities</h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-250 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Responsibility</th>
                      <th className="px-4 py-4 text-left font-semibold">Description</th>
                      <th className="px-4 py-4 text-left font-semibold">Department / Section Responsible</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Report and Feedback Mechanism</td>
                      <td className="px-4 py-4">Collect feedback from students about welfare program effectiveness.</td>
                      <td className="px-4 py-4">All Deans / HODs / Principals / Nodal Officers, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Implement Reservation Policies</td>
                      <td className="px-4 py-4">Ensure government-mandated reservations for admissions and scholarships are followed.</td>
                      <td className="px-4 py-4">Central Admission Cell, Training & Placement, Scholarship Department</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Address Grievances and Complaints</td>
                      <td className="px-4 py-4">Act as a forum for addressing grievances and discrimination faced by SEDG students.</td>
                      <td className="px-4 py-4">Students Grievance Redressal Committee (SGRC), Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Provide Counseling and Mentoring</td>
                      <td className="px-4 py-4">Offer academic and career guidance to SEDG students.</td>
                      <td className="px-4 py-4">HODs / Course Coordinators, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Monitor Student Progress</td>
                      <td className="px-4 py-4">Track the academic progress of SEDG students and address challenges.</td>
                      <td className="px-4 py-4">HODs / Course Coordinators, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Organize Awareness Programs</td>
                      <td className="px-4 py-4">Conduct workshops and seminars on inclusivity and SEDG issues.</td>
                      <td className="px-4 py-4">All Deans / HODs / Principals, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Promote Social Integration</td>
                      <td className="px-4 py-4">Organize sensitization programs for faculty and staff.</td>
                      <td className="px-4 py-4">All Deans / HODs / Principals, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Support Schemes and Scholarships</td>
                      <td className="px-4 py-4">Facilitate access to financial aid and welfare programs for SEDG students.</td>
                      <td className="px-4 py-4">University Scholarship Department</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Encourage Leadership Development</td>
                      <td className="px-4 py-4">Provide leadership opportunities for SEDG students in committees and councils.</td>
                      <td className="px-4 py-4">All Deans / HODs / Principals, Dean Students Welfare</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">Conduct Training for Faculty and Staff</td>
                      <td className="px-4 py-4">Organize sensitization programs for a respectful and inclusive culture.</td>
                      <td className="px-4 py-4">All Deans / HODs / Principals, Dean Students Welfare</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-base text-gray-800 font-semibold pt-8 border-t border-orange-100">
            <p><strong>Dr. Kapil Mohan</strong><br />Registrar, Smt. Manjira Devi University</p>
          </div>
        </div>
      </div>
    </section>
  )
}
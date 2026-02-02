"use client";

import { ChevronDown, Users } from "lucide-react";

export default function SCSTOBCommitteePage() {
  const committeeMembers = [
    {
      sno: 1,
      name: "Dr. Kapil Mohan",
      designation: "Principal BNYS — Chairperson",
    },
    {
      sno: 2,
      name: "Mr. Someshwar Dobhal",
      designation: "B.Ed. Department — Member",
    },
    {
      sno: 3,
      name: "Mr. Rajesh Rana",
      designation: "Exam Cell — Member",
    },
    {
      sno: 4,
      name: "Mrs. Durgi Khanduri",
      designation: "Nursing Department — Member",
    },
    {
      sno: 5,
      name: "Mrs. Sarita Ramola",
      designation: "Paramedical Department — Member",
    },
  ];

  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">
      {/* Subtle background grid like previous pages */}
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
            Grievance & Welfare
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            SC / ST / OBC Committee
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Card with Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-8 text-center flex items-center justify-center gap-3">
            <Users className="w-8 h-8" />
            Committee Members
          </h2>
        
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border border-orange-100 rounded-xl overflow-hidden bg-white shadow-md">
              <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">S. No.</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Name</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {committeeMembers.map((member) => (
                  <tr key={member.sno} className="hover:bg-orange-50/50 transition">
                    <td className="px-6 py-5 font-medium text-gray-800 border-r border-orange-100">{member.sno}</td>
                    <td className="px-6 py-5 text-gray-800 border-r border-orange-100">{member.name}</td>
                    <td className="px-6 py-5 text-gray-700">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {committeeMembers.map((member) => (
              <div
                key={member.sno}
                className="bg-white rounded-xl shadow-md border border-orange-100 p-5 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center text-lg">
                    {member.sno}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                </div>
                <p className="text-gray-700 text-sm">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { ChevronDown } from "lucide-react";

export default function EntrepreneurshipCellPage() {
  const committeeData = [
    {
      sno: 1,
      name: "Dr. Bhagwan Nautiyal",
      designation: "Vice–Chancellor",
      role: "Chairperson",
    },
    {
      sno: 2,
      name: "Dr. Ankur Agrwal",
      designation: "Principal",
      role: "Coordinator",
    },
    {
      sno: 3,
      name: "Dr. Kapil Mohan",
      designation: "Principal",
      role: "Member",
    },
    {
      sno: 4,
      name: "Mrs. Jaisudha",
      designation: "Principal",
      role: "Member",
    },
    {
      sno: 5,
      name: "Mr. Rajesh Kohli",
      designation: "HOD",
      role: "Member",
    },
    {
      sno: 6,
      name: "Mr. Vikas Dhawan",
      designation: "HOD",
      role: "Member",
    },
    {
      sno: 7,
      name: "Dr. Jaihari Srivastava",
      designation: "Research Officer",
      role: "Member",
    },
    {
      sno: 8,
      name: "Mr. Sachin Bisht",
      designation: "Lecturer",
      role: "Member",
    },
    {
      sno: 9,
      name: "Mr. Ashish Chand Ramola",
      designation: "Associate Professor",
      role: "Member",
    },
    {
      sno: 10,
      name: "Mrs. Sevika Ramola",
      designation: "Associate Professor",
      role: "Member",
    },
    {
      sno: 11,
      name: "Bilal Ahmad",
      designation: "Assistant Professor",
      role: "Member",
    },
    {
      sno: 12,
      name: "Ms. Sakshi",
      designation: "Office Assistant – E–Cell",
      role: "Member",
    },
    {
      sno: 13,
      name: "Ms. Subhashini",
      designation: "Office Assistant – E–Cell",
      role: "Member",
    },
    {
      sno: 14,
      name: "Mr. Saurav Semwal",
      designation: "Office Assistant – E–Cell",
      role: "Member",
    },
  ];

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
            Committee & Governance
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Entrepreneurship Cell (E-Cell)
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Rukmani Nagar, Hitanu (Dhanari), Dunda, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-16">
          {/* Intro Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
              The ‘Entrepreneurship Cell’ (E-Cell) of Smt. Manjira Devi University,
              Rukmani Nagar Hitanu (Dhanari), Dunda Uttarkashi, is hereby constituted as follows:
            </p>
          </div>

          {/* Committee Table Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">
              Committee Members
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-gray-200 bg-white rounded-xl overflow-hidden">
                <thead className="bg-orange-500">
                  <tr>
                    <th className="px-6 py-4 text-white text-left font-semibold border-b border-orange-600">
                      S. No.
                    </th>
                    <th className="px-6 py-4 text-white text-left font-semibold border-b border-orange-600">
                      Name
                    </th>
                    <th className="px-6 py-4 text-white text-left font-semibold border-b border-orange-600">
                      Designation
                    </th>
                    <th className="px-6 py-4 text-white text-left font-semibold border-b border-orange-600">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {committeeData.map((member) => (
                    <tr key={member.sno} className="border-t hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-5 border-r text-gray-900">{member.sno}</td>
                      <td className="px-6 py-5 border-r font-medium text-gray-900">
                        {member.name}
                      </td>
                      <td className="px-6 py-5 border-r text-gray-700">
                        {member.designation}
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-6">
              {committeeData.map((member) => (
                <div
                  key={member.sno}
                  className="bg-gray-50 rounded-xl shadow-md p-6 border border-orange-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-orange-600">
                      S. No. {member.sno}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {member.role}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">Name</div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Designation</div>
                      <div className="text-gray-700">{member.designation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Registrar Note */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10 text-center">
            <p className="font-semibold text-lg text-gray-900">
              <strong>Dr. Kapil Mohan</strong>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Registrar, Smt. Manjira Devi University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
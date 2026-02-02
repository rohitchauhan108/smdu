"use client";

import { ChevronDown, Home, Shield, Users } from "lucide-react";

export default function HostelFacilityPage() {
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
            Student Accommodation
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Hostel Facility
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-16">
          {/* 1. Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Home className="w-7 h-7" />
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The hostel infrastructure at Smt. Manjira Devi University comprises more
              than two dedicated hostel buildings within the campus, each having three
              floors and collectively accommodating more than 30 well-ventilated rooms.
              The hostel is designed to support a conducive living and learning
              environment, meeting UGC requirements related to capacity, safety,
              hygiene, and student welfare.
            </p>
          </div>

          {/* 2. Facilities Available */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7" />
              2. Facilities Available
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Adequate residential rooms with proper lighting and ventilation</li>
              <li>Safe drinking water and sanitation facilities on each floor</li>
              <li>Continuous electricity supply with power backup</li>
              <li>Common areas for study and recreation</li>
              <li>Mess / dining facilities or access to hygienic food services</li>
              <li>24×7 security arrangements, including wardens and surveillance</li>
              <li>Fire safety measures and emergency exits as per statutory norms</li>
              <li>Medical assistance and first-aid facilities</li>
              <li>
                Separate arrangements ensuring privacy, dignity, and safety (where
                applicable)
              </li>
            </ul>
          </div>

          {/* 3. Administration & Student Welfare */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Users className="w-7 h-7" />
              3. Administration & Student Welfare
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The hostel is administered under institutional regulations and supervised
              by appointed wardens to maintain discipline, cleanliness, and student
              well-being. This ensures compliance with UGC objectives of providing
              equitable access to safe and affordable residential facilities,
              particularly for students from distant and rural areas.
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            For hostel admission, rules, or queries contact the Hostel Warden or University Administration Office.
          </div>
        </div>
      </div>
    </section>
  );
}
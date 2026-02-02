"use client";

import { ChevronDown, Target, Users, Heart, Shield, Globe, Award, CheckCircle } from "lucide-react";

export default function NCCNSSPage() {
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
            Community & Discipline
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            NCC / NSS Facilities
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-16">
          {/* 1. Introduction */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Users className="w-7 h-7" />
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The National Cadet Corps (NCC) and National Service Scheme (NSS) at Smt. Manjira Devi University are vibrant programs aimed at developing character, discipline, leadership, and a spirit of social service among students. In line with UGC and government guidelines, these schemes provide opportunities for youth to contribute to nation-building through training, community service, and adventure activities.
            </p>
          </div>

          {/* 2. Objectives */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7" />
              2. Objectives of NCC / NSS
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>To develop leadership qualities, discipline, and a secular outlook among students.</li>
              <li>To foster national integration, social harmony, and community service.</li>
              <li>To promote physical fitness, adventure, and environmental awareness through camps and activities.</li>
              <li>To create responsible citizens who contribute to rural development and disaster management.</li>
            </ul>
          </div>

          {/* 3. Key Activities */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Heart className="w-7 h-7" />
              3. Key Activities and Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">NCC Activities</h3>
                <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                  <li>Annual training camps, parades, and weapon training</li>
                  <li>Adventure activities like trekking, rock climbing, and rafting</li>
                  <li>Community outreach: blood donation, tree plantation, Swachh Bharat drives</li>
                  <li>Republic Day and Independence Day parades participation</li>
                  <li>Certificate 'B' & 'C' exams for career benefits</li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">NSS Activities</h3>
                <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                  <li>Regular community service: village adoption, health camps, literacy drives</li>
                  <li>Special camps: 7-day residential camps for rural development projects</li>
                  <li>Awareness programs: AIDS, environment, gender sensitization</li>
                  <li>National festivals celebration and social welfare initiatives</li>
                  <li>Volunteering for disaster relief and COVID/other awareness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Enrollment and Benefits */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Award className="w-7 h-7" />
              4. Enrollment and Benefits
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Open to all students (voluntary enrollment, preference for motivated cadets/volunteers).</li>
              <li>Certificates provide weightage in jobs, higher education, and reservations.</li>
              <li>Opportunities for national-level camps, awards, and adventure training.</li>
              <li>Enhances personality development, teamwork, and leadership skills.</li>
            </ul>
          </div>

          {/* 5. Administration & Compliance */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7" />
              5. Administration & Compliance
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Programmes coordinated by NCC/NSS Officers appointed by the University.</li>
              <li>Follows guidelines from Directorate General NCC and NSS Regional Centre.</li>
              <li>Regular meetings, reporting, and audits as per UGC norms.</li>
              <li>Inclusive participation encouraged, especially for girls and underprivileged students.</li>
            </ul>
          </div>

          {/* 6. Conclusion */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Globe className="w-7 h-7" />
              6. Conclusion
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              NCC and NSS at Smt. Manjira Devi University foster disciplined, socially responsible, and patriotic youth. Through structured training and service activities, these programs contribute to personal growth and national development, aligning with UGC's vision for holistic student education.
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            For enrollment, activities, or queries contact the NCC/NSS Coordinator or University Student Welfare Office.
          </div>
        </div>
      </div>
    </section>
  );
}
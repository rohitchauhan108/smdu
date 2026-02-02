"use client";

import { ChevronDown, Target, Zap, Dumbbell, Shield, Users, Trophy, CheckCircle } from "lucide-react";

export default function SportsFacilitiesPage() {
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
            Student Wellness
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Sports Facilities for Students
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
              <Dumbbell className="w-7 h-7" />
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Sports facilities at Smt. Manjira Devi University are designed to promote the physical, social, and mental
              well-being of students. In line with UGC guidelines, the University ensures students have access to safe,
              inclusive and well-maintained spaces for physical education, training and competitive sports.
            </p>
          </div>

          {/* 2. Objectives */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7" />
              2. Objectives of Sports Facilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>To encourage active participation in sports and fitness activities.</li>
              <li>To provide adequate infrastructure for university-level sports.</li>
              <li>To support talent development through coaching and training.</li>
              <li>To create an environment that promotes teamwork, discipline and healthy lifestyle.</li>
            </ul>
          </div>

          {/* 3. Types of Sports Facilities */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7" />
              3. Types of Sports Facilities Available
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">A. Outdoor Sports Facilities</h3>
                <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Cricket Ground</strong>
                    <p className="text-sm text-gray-600 mt-1">Full-sized playing field with practice nets; suitable for tournaments.</p>
                  </li>
                  <li>
                    <strong>Football Ground</strong>
                    <p className="text-sm text-gray-600 mt-1">Standard field for practice and competitions.</p>
                  </li>
                  <li>
                    <strong>Athletics Track (Basic Standard)</strong>
                    <p className="text-sm text-gray-600 mt-1">Space for running, jogging and field events; used for training and sports meets.</p>
                  </li>
                  <li>
                    <strong>Volleyball Court</strong>
                    <p className="text-sm text-gray-600 mt-1">Outdoor court with proper markings and equipment.</p>
                  </li>
                  <li>
                    <strong>Badminton (Outdoor if applicable)</strong>
                    <p className="text-sm text-gray-600 mt-1">Adequate lighting and standard court surface where applicable.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">B. Indoor Sports Facilities</h3>
                <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Indoor Badminton Courts</strong>
                    <p className="text-sm text-gray-600 mt-1">Standard playing area suitable for coaching and competitions.</p>
                  </li>
                  <li>
                    <strong>Table Tennis Room</strong>
                    <p className="text-sm text-gray-600 mt-1">Tables placed as per spacing and safety norms.</p>
                  </li>
                  <li>
                    <strong>Chess & Carrom Room</strong>
                    <p className="text-sm text-gray-600 mt-1">Quiet spaces for mind-sports and tournaments.</p>
                  </li>
                  <li>
                    <strong>Multi-purpose Indoor Hall</strong>
                    <p className="text-sm text-gray-600 mt-1">Used for yoga, aerobics, self-defence, and indoor games.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Supporting Facilities */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7" />
              4. Supporting Facilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Sports equipment room — storage and issue of sports materials.</li>
              <li>Changing rooms & washrooms — separate for boys and girls as per UGC norms.</li>
              <li>First-aid & safety supplies available during activities.</li>
              <li>Drinking water facilities accessible near play areas.</li>
              <li>Seating arrangements for spectators during events.</li>
            </ul>
          </div>

          {/* 5. Sports Administration & Management */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Users className="w-7 h-7" />
              5. Sports Administration & Management
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>University Sports Committee oversees planning and development.</li>
              <li>Physical Education Director / Instructor manages training & practice sessions.</li>
              <li>Inter-university participation is encouraged to develop competitive spirit.</li>
            </ul>
          </div>

          {/* 6. Student Participation */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Trophy className="w-7 h-7" />
              6. Student Participation
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Open to all students, regardless of programme or year.</li>
              <li>Special focus on encouraging girls’ participation per UGC inclusivity norms.</li>
              <li>Facilities used for daily practice, university tournaments, inter-collegiate events and annual sports day.</li>
            </ul>
          </div>

          {/* 7. Compliance with UGC Norms */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7" />
              7. Compliance with UGC Norms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Adequate space and equipment for major sports.</li>
              <li>Safe and accessible sports areas for all students.</li>
              <li>Promotion of physical fitness through regular programmes.</li>
              <li>Inclusivity and equal opportunity for men and women.</li>
              <li>Development of sports culture at the university level.</li>
            </ul>
          </div>

          {/* 8. Conclusion */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Dumbbell className="w-7 h-7" />
              8. Conclusion
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Sports facilities at Smt. Manjira Devi University are designed to meet UGC’s expectations for student development.
              By providing diverse indoor and outdoor sports options, proper infrastructure, and a supportive environment, the
              University promotes a holistic and active student life.
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            For sports bookings, coaching, or event coordination contact the Physical Education Director or the Sports Committee.
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { ChevronDown, Globe, Target, Mail, Phone } from "lucide-react";

export default function AcademicCollaborationPage() {
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
            Partnerships & Growth
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Academic Collaboration
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg--to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-16">
          {/* 1. Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Globe className="w-7 h-7" />
              1. Overview of Academic Collaboration
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Smt. Manjira Devi University engages in academic collaborations to enhance teaching, learning, and research outcomes. These collaborations aim to provide students and faculty with access to advanced knowledge systems, joint research opportunities, and academic enrichment as recommended by the University Grants Commission (UGC).
            </p>
          </div>

          {/* 2. Current Academic Collaborations */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">
              2. Current Academic Collaborations
            </h2>

            <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                a) Partner Institution
              </h3>
              <p className="text-lg font-semibold text-orange-700 mb-4">
                INSTITUTE OF AGRICULTURE TRAINING & RESEARCH, MS GROUP OF INSTITUTION
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Nature of Collaboration:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                    <li>Joint research projects</li>
                    <li>Student / faculty exchange</li>
                    <li>Sharing of academic resources</li>
                    <li>Conducting seminars, workshops, and training programs</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">Duration:</p>
                  <p className="text-gray-700">[03-02-2025] - [Ongoing] & [05-09-2024] – [Ongoing]</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">Memorandum of Understanding (MoU):</p>
                  <p className="text-gray-700">
                    A formal MoU has been signed between Smt. Manjira Devi University and <strong>MS GROUP OF INSTITUTION</strong> to implement the above activities. A copy of the MoU is maintained by the Office of Academic & International Collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Objectives */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7" />
              3. Objectives of the Collaboration
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>To promote interdisciplinary research</li>
              <li>To enhance faculty development and capacity building</li>
              <li>To provide students with exposure to national/international academic standards</li>
              <li>To facilitate curriculum development and innovation</li>
              <li>To strengthen knowledge exchange and best practices</li>
            </ul>
          </div>

          {/* 4. Expected Outcomes */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7" />
              4. Expected Outcomes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Publication of joint research papers</li>
              <li>Improved academic quality and global exposure</li>
              <li>Enhanced employability of students</li>
              <li>Increased participation in conferences and workshops</li>
              <li>Development of innovative teaching-learning methodologies</li>
            </ul>
          </div>

          {/* 5. Contact Information */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Mail className="w-7 h-7" />
              5. Contact Information
            </h2>

            <address className="not-italic space-y-3 text-sm sm:text-base text-gray-700">
              <p className="font-semibold text-gray-900">Office of Academic & International Collaborations</p>
              <p>Smt. Manjira Devi University</p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:smtmanjiradeviuniversity2024@gmail.com"
                  className="text-orange-600 hover:underline transition"
                >
                  smtmanjiradeviuniversity2024@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+918006345557" className="text-orange-600 hover:underline transition">
                  +91-80063-45557
                </a>
                ,{" "}
                <a href="tel:+918006345558" className="text-orange-600 hover:underline transition">
                  +91-80063-45558
                </a>
              </p>
            </address>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            This page lists active academic collaborations and related information. For MoU copies and detailed agreements, please contact the Office of Academic & International Collaborations.
          </div>
        </div>
      </div>
    </section>
  );
}
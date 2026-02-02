"use client";

import { ChevronDown, BookOpen, Target, Settings, Database, Shield, Zap, Award } from "lucide-react";

export default function CentralFacilitiesPage() {
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
            Research Infrastructure
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Central Facility for Research (CFR)
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
              <BookOpen className="w-7 h-7" />
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The Central Facility for Research (CFR) at Smt. Manjira Devi University is a dedicated, university-level research support
              system designed to promote high-quality research, innovation, and interdisciplinary collaboration. The facility provides
              shared access to advanced instruments, laboratories, software, data resources, training, and technical expertise, as
              recommended by UGC for strengthening research ecosystems.
            </p>
          </div>

          {/* 2. Vision */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7" />
              2. Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To create a state-of-the-art, centralized research hub that enhances the quality, productivity, and global competitiveness
              of research at Smt. Manjira Devi University.
            </p>
          </div>

          {/* 3. Objectives */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7" />
              3. Objectives
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Support high-end research by providing access to sophisticated equipment and facilities.</li>
              <li>Encourage interdisciplinary and collaborative research across departments and external institutions.</li>
              <li>Ensure optimum utilization of expensive research instruments and resources.</li>
              <li>Provide training and skill development for students, scholars, and faculty.</li>
              <li>Maintain high standards of safety, ethics, and quality in research practices, as per UGC norms.</li>
            </ol>
          </div>

          {/* 4. Governance and Management */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7" />
              4. Governance and Management
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>The CFR will be managed by a Director/Coordinator appointed by the university.</li>
              <li>A Research Advisory Committee (RAC) will oversee planning, budgeting, and quality standards.</li>
              <li>Each major laboratory or instrument will have a Technical Officer / Lab Assistant for operation and maintenance.</li>
              <li>Usage rules, booking procedures, and charges (if any) will be transparent and publicly available.</li>
            </ul>
          </div>

          {/* 5. Key Facilities (Illustrative List) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Database className="w-7 h-7" />
              5. Key Facilities (Illustrative List)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5.1 Advanced Instrumentation Laboratory</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>Spectrophotometers</li>
                  <li>Chromatography systems</li>
                  <li>Microscopes (optical / SEM)</li>
                  <li>Chemical analysis tools</li>
                  <li>Precision measurement systems</li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5.2 Computer & Data Analysis Center</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>High-performance computing (HPC)</li>
                  <li>Licensed research software</li>
                  <li>Data storage and analysis tools</li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5.3 Humanities & Social Sciences Research Cell</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>Digital archives</li>
                  <li>Survey tools</li>
                  <li>Linguistic and behavioural research equipment</li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5.4 Innovation & Skill Development Section</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>Training workshops</li>
                  <li>Research methodology programs</li>
                  <li>Proposal writing and publication support</li>
                </ul>
              </div>

              <div className="bg-orange-50/50 rounded-xl border border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5.5 Research Documentation & Repository</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>Digital repository for theses, dissertations, and publications</li>
                  <li>Plagiarism detection facility (as per UGC guidelines)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Access and Usage */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Award className="w-7 h-7" />
              6. Access and Usage
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Open to students, research scholars, faculty members, and approved external users.</li>
              <li>Online booking system for equipment and lab usage.</li>
              <li>Orientation and training must be completed before using any high-end equipment.</li>
              <li>Standard Operating Procedures (SOPs) must be followed at all times.</li>
            </ul>
          </div>

          {/* 7. Safety and Compliance */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7" />
              7. Safety and Compliance
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The CFR will follow UGC safety guidelines for laboratories, ethical standards for research involving humans, animals,
              or sensitive data, and waste disposal & environmental safety norms.
            </p>
          </div>

          {/* 8. Outcomes and Impact */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Award className="w-7 h-7" />
              8. Outcomes and Impact
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Increase research output, quality publications, and patents.</li>
              <li>Promote collaborative projects, funded research, and consultancy activities.</li>
              <li>Enhance the academic reputation and ranking of Smt. Manjira Devi University.</li>
            </ul>
          </div>

          {/* 9. Conclusion */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <BookOpen className="w-7 h-7" />
              9. Conclusion
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The Central Facility for Research at Smt. Manjira Devi University will serve as a centralized, modern, and student-friendly
              research ecosystem, supporting academic excellence in line with UGC expectations for research-driven universities.
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            For CFR access, bookings or MoU details please contact the Office of Research & Innovation.
          </div>
        </div>
      </div>
    </section>
  );
}
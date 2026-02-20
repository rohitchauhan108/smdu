"use client"

import { ChevronDown, Mail, Award, Calendar, BookOpen, Users, Sparkles } from "lucide-react"

export default function RegistrarMessage() {
  return (
    <section className="relative py-24  bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50 overflow-hidden">
      {/* Multi-layered Himalayan-inspired BG */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cpath d=%22M0 50 Q25 25 50 50 T100 50%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3Cpath d=%22M0 60 Q25 35 50 60 T100 60%22 stroke=%22%23f59e0b%22 stroke-width=%220.3%22 opacity=%220.05%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent via-orange-200/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-linear-to-l from-orange-300/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Dynamic Header with Icon Accents */}
          {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Leadership Vision
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text  mb-4">
            Registrar
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* Enhanced Profile Hero Card - Full-width with Overlap */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Image Side */}
            <div className="lg:col-span-1 relative group">
              <div className="h-120 bg-relative-to-br from-amber-500/10 via-orange-600/5 to-orange-500/10 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/30 group-hover:border-orange-200/60 transition-all duration-700 hover:shadow-3xl">
                <img
                  src="/about/registrar.jpg"
                  alt="Dr. Kapil Mohan Upadhyay, Registrar of Smt. Manjira Devi University"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6">
                  <div className="text-white text-sm bg-black/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    15+ Years of Dedication
                  </div>
                </div>
              </div>
             
            </div>

            {/* Profile Info Side */}
            <div className="lg:col-span-2 h-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100/50 p-8 lg:p-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Dr. Kapil Mohan Upadhyay</h2>
              <p className="text-lg text-orange-700 mb-4 font-semibold">Registrar</p>
              <p className="text-gray-600 mb-6 italic">Smt. Manjira Devi University, Uttarakhand</p>
             
            </div>
          </div>
        </div>

        {/* Timeline-Style Sections Grid - Unique Accordion-Like Cards */}
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-10 space-y-8 xl:space-y-0">
          {/* About Registrar - Full Width */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                About Registrar
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-base leading-relaxed">
                Dr. Kapil Mohan Upadhyay is a senior academic administrator and naturopathy professional with more than 15 years of experience in higher education, academic governance, and institutional development. He has served in leadership roles such as Principal, Associate Professor, Head of Department, and Academic Consultant at reputed universities across North India. His professional expertise includes curriculum development, regulatory coordination, university administration, and promotion of Yoga and Naturopathy education.
              </p>
            </div>
          </div>

          {/* Educational Qualifications - Timeline Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                Educational Qualifications
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Bachelor of Naturopathy & Yogic Sciences (BNYS)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">MSc Yoga</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Post Graduation in English</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Diploma in Naturopathy & Yoga</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Areas of Expertise - Timeline Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Areas of Expertise
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">University Administration & Academic Governance</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Curriculum Development & Regulatory Affairs</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Naturopathy and Yogic Sciences Education</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Institutional Development & Strategic Planning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Responsibilities as Registrar - Full Width */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Key Responsibilities as Registrar
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Custodian of statutory records and official university documentation
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Coordination with Academic Council, Board of Studies, and statutory bodies
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Implementation of university ordinances, regulations, and compliance
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Administrative supervision and governance support
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Facilitation of academic and administrative coordination across departments
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information - Full Width */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Phone: +91-8279434794</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Email: contact@drkapilmohan.site</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Website: www.drkapilmohan.site</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      

       
      </div>
    </section>
  )
}
"use client"

import { ChevronDown } from "lucide-react"

export default function DisabilityPolicyPage() {
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Smt. Manjira Devi University
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Disability Accommodation (Divyangjan) Policy
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Policy Overview & Privileges */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Smt. Manjira Devi University proactively supports students with physical and/or mental disabilities to enable them
                to successfully complete their educational pursuits. Guided by University Regulations, the enabling provisions include
                liberal admission criteria, adjusted curriculum, empathetic evaluation systems, and other supportive facilities.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-orange-700 mt-8 mb-4">Privileges Offered to Differently Abled Students (Divyangjan)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Special coaching facilitation.</li>
                <li>Extra time for writing the examination.</li>
                <li>Separate room for taking the examination.</li>
                <li>Support of scribes according to the student's choice.</li>
                <li>Special question paper for examinations as per the need.</li>
              </ul>

              <p className="mt-6">
                Procedures and prerequisites in this regard will be as per the University Regulation.
              </p>
            </div>
          </div>

          {/* Committee Details */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Committee Details</h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-175 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Sr. No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Name</th>
                      <th className="px-4 py-4 text-left font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">1</td><td>Dr. Ankur Agarwal</td><td>Chairperson</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">2</td><td>Mr. Sachin Nautiyal</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">3</td><td>Mr. Yatendra Rawat</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">4</td><td>Shireen Ansari</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">5</td><td>Mr. Ajay Gusain</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">6</td><td>Smt. Jyoti Upadhyay</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">7</td><td>Dr. Kapil Mohan</td><td>Member</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">8</td><td>Mr. Vishal Mani Nautiyal</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">9</td><td>Mr. Bharat Singh</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">10</td><td>Mr. Dalveer Singh Rana</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">11</td><td>Mr. Heeramani Bhatt</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">12</td><td>Mr. Krishnapal Singh Gusain</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">13</td><td>Mr. Sarpanch Bhatt</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">14</td><td>Mr. Kripal Singh</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">15</td><td>Mr. Sanjay Singh</td><td>Parents Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">16</td><td>Ms. Shivani Bhatt</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">17</td><td>Ms. Aditya Nautiyal</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">18</td><td>Ms. Neha Gusain</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">19</td><td>Mr. Pawan Bhatt</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">20</td><td>Ms. Pratiksha</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">21</td><td>Ms. Snehe Rana</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">22</td><td>Ms. Sanjna</td><td>Students Representative</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">23</td><td>Mr. Ayush Singh Rawat</td><td>Students Representative</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Functions of the Committee */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Functions of the Committee</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Ensuring barrier-free environment, lifts, and ramps for easy access across campus facilities.</li>
              <li>Conducting awareness sessions on the availability of attendants to help differently-abled students.</li>
              <li>Creating awareness and empowering students with disabilities through workshops and training.</li>
              <li>Guiding students on assistance provided during examinations such as extra time, scribes, and special papers.</li>
              <li>Organizing cultural and recreational programs for students with disabilities.</li>
              <li>Consulting with the Equal Opportunity Cell and submitting quarterly reports to the Advisory Committee.</li>
              <li>Addressing grievances of Divyangjan and referring unresolved issues to the Anti-Discrimination Officer.</li>
            </ol>

            <p className="mt-8 font-semibold text-gray-800">
              <strong>Adopted:</strong> Internal Committee for the Students with Disabilities – 11 Jan 2019.
            </p>

            <p className="mt-4 font-semibold text-gray-800 text-right">
              Registrar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
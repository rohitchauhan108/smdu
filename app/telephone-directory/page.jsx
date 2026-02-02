"use client"

import { ChevronDown, Phone } from "lucide-react"

const directory = [
  { id: 1, name: "Mr. Nitin Bhadri", designation: "P.S. Vice Chancellor", phone: "8171982069" },
  { id: 2, name: "Mr. Pradeep Nath", designation: "H.R.", phone: "7017388084" },
  { id: 3, name: "Mr. Rajesh Singh Rana", designation: "H.O.D (Polytechnic Department)", phone: "8979291178" },
  { id: 4, name: "Mr. Rajesh Kohli", designation: "H.O.D (Education Department)", phone: "8755935814" },
  { id: 5, name: "Mr. Yatendra Singh Rawat", designation: "H.O.D (Agriculture Department)", phone: "7310974518" },
  { id: 6, name: "Mr. Bilal Ahmad", designation: "H.O.D (Nursing Department)", phone: "9149459127" },
  { id: 7, name: "Mr. Vikas Dhawan", designation: "H.O.D (Pharmacy Department)", phone: "8791668656" },
  { id: 8, name: "Mrs. Jyoti Upadhyay", designation: "H.O.D (Yoga & Yogic Science)", phone: "9639496825" },
  { id: 9, name: "Dr. Jai Hari Shrivastav", designation: "H.O.D / Research Head", phone: "8171387837" },
  { id: 10, name: "Mr. G. C. Madhwal", designation: "O.S.D", phone: "9410949777" },
  { id: 11, name: "Sakshi", designation: "Computer Operator", phone: "9568117703" },
  { id: 12, name: "Subhashni", designation: "Computer Operator", phone: "7455891912" },
  { id: 13, name: "Abhishek Mandarwal", designation: "Computer Operator", phone: "8445730298" },
  { id: 14, name: "Smriti Gautam", designation: "Computer Operator", phone: "8923354983" },
  { id: 15, name: "Saurav Semwal", designation: "Computer Operator", phone: "9389650945" },
];

export default function TelephoneDirectoryPage() {
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
            University Contact
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Telephone Directory
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Smt. Manjira Devi University, Hitanu, Dhanari, Uttarkashi
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Phone className="w-7 h-7" />
              University Contact Details
            </h2>

            {/* Mobile swipe hint */}
            <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
              ← Swipe horizontally →
            </div>

            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
              <table className="w-full min-w-175 border-collapse text-sm">
                <thead>
                  <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                    <th className="px-4 py-4 text-left font-semibold">S. No.</th>
                    <th className="px-4 py-4 text-left font-semibold">Name</th>
                    <th className="px-4 py-4 text-left font-semibold">Designation</th>
                    <th className="px-4 py-4 text-left font-semibold">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {directory.map((person) => (
                    <tr key={person.id} className="hover:bg-orange-50/50 transition">
                      <td className="px-4 py-4">{person.id}</td>
                      <td className="px-4 py-4">{person.name}</td>
                      <td className="px-4 py-4">{person.designation}</td>
                      <td className="px-4 py-4">
                        <a
                          href={`tel:${person.phone}`}
                          className="text-orange-600 hover:underline font-medium"
                        >
                          {person.phone}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-600 italic text-center">
              📌 The above telephone directory is provided for official communication purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
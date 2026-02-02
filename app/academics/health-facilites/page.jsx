"use client"

import { ChevronDown, HeartPulse, Phone, Building2, Activity, Users } from "lucide-react"

export default function HealthCentrePage() {
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
            University Facilities
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            University Health Centre
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <HeartPulse className="w-7 h-7" />
              Overview
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                The University Health Centre looks after the medical needs of students, staff,
                and their families. Facilities include a complete Physiotherapy Unit, Computerized ECG,
                X-Ray, 24x7 Ambulance Service, Laboratory and Auto Analyzer facilities. 
                Dental services (Digital X-Ray, Extraction, Scaling, Root Canal, Cosmetic Procedures) 
                are also available.
              </p>
              <p>
                The University has more than <strong>65 private doctors</strong> on its panel for
                free consultations. Regular <strong>Free Health Check-up Camps</strong> are conducted
                offering tests like BMD, Neuropathy, Spirometry, RBS, and Liver Fibro Scan. 
                The centre includes 17 rooms with specialized services.
              </p>
            </div>
          </div>

          {/* Staff Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                <Users className="w-7 h-7" />
                Staff of University Health Centre
              </h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-225 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Sr. No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Name of the Employee</th>
                      <th className="px-4 py-4 text-left font-semibold">Designation</th>
                      <th className="px-4 py-4 text-left font-semibold">Mobile No.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">1</td><td>Dr. Nitin Bhadri</td><td>Medical Officer / Administrator</td><td>8171982069</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">2</td><td>Dr. Manisha Nautiyal</td><td>Medical Officer</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">3</td><td>Dr. Jyotsna</td><td>Dental Surgeon</td><td>8123566090</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">4</td><td>Mr. Jagdeesh</td><td>Sr. Pharmacy Officer</td><td>8449383660</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">5</td><td>Mr. Saurav Jaguri</td><td>Pharmacy Officer</td><td>7310955305</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">6</td><td>Dr. Ankit Prasar</td><td>Radiographer</td><td>7895246046</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">7</td><td>Mr. Santosh Thapliyal</td><td>Lab Technician</td><td>9410563664</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">8</td><td>Bilal Ahmad Dar</td><td>Lab Technician</td><td>9149459127</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">9</td><td>Mr. Kuldeep Bhatt</td><td>Assistant</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">10</td><td>Ms. Saumya</td><td>Nurse</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">11</td><td>Ms. Anisha</td><td>Nurse</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">12</td><td>Mrs. Sangeeta Rawat</td><td>Attendant</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">13</td><td>Mr. Yaspal Anand</td><td>W.B.</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">14</td><td>Mrs. Santoshi</td><td>W.B.</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">15</td><td>Mrs. Ritu</td><td>W.B.</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">16</td><td>Mr. Rajendra Panwar</td><td>W.B.</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">17</td><td>Mr. Dharmanand Semwal</td><td>W.B.</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">18</td><td>Mr. Jaypal</td><td>S.M. / Peon</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">19</td><td>Mr. Sabbal Lal</td><td>Mali</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">20</td><td>Mr. Nagesh</td><td>Sweeper</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">21</td><td>Mrs. Rima</td><td>Sweeper</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">22</td><td>Mr. Shakti</td><td>Lab Peon</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">23</td><td>Mr. Prakash</td><td>Labourer</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">24</td><td>Mr. Ramkrishna</td><td>Labourer</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">25</td><td>Mr. Sewak Ram</td><td>Labourer</td><td>-</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">26</td><td>Mr. Roshan</td><td>Labourer</td><td>-</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Extension Numbers */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                <Phone className="w-7 h-7" />
                Extension Numbers
              </h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-150 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Sr. No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Name</th>
                      <th className="px-4 py-4 text-left font-semibold">Mobile No.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">1</td><td>Ambulance</td><td>7895246046</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">2</td><td>Administrator</td><td>9548753913</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">3</td><td>Medical Officer</td><td>8171982069</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">4</td><td>Medical Officer</td><td>9389889476</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">5</td><td>Office</td><td>7895246046</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">6</td><td>Emergency Room</td><td>8368696849</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">7</td><td>X-Ray Room</td><td>8755935814</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">8</td><td>Laboratory</td><td>9410563664</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">9</td><td>Medicine Store</td><td>7310955305</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Health Centre Rooms */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                <Building2 className="w-7 h-7" />
                Health Centre Rooms
              </h2>

              <div className="md:hidden text-[10px] text-gray-500 text-right pb-3">
                ← Swipe horizontally →
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100/40">
                <table className="w-full min-w-175 border-collapse text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Sr. No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Name</th>
                      <th className="px-4 py-4 text-left font-semibold">Room No.</th>
                      <th className="px-4 py-4 text-left font-semibold">Extension No.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">1</td><td>Administrator</td><td>01</td><td>217</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">2</td><td>Medical Officer</td><td>02</td><td>216</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">3</td><td>Medical Officer</td><td>03</td><td>218</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">4</td><td>Dental Surgeon</td><td>06</td><td>212</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">5</td><td>Clinical Laboratory</td><td>13</td><td>219</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">6</td><td>Dispensing</td><td>12</td><td>211</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">7</td><td>Ward (Male)</td><td>04</td><td>210</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">8</td><td>Ward (Female)</td><td>05</td><td>205</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">9</td><td>Emergency</td><td>02</td><td>203</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">10</td><td>X-Ray</td><td>04</td><td>207</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">11</td><td>ECG, Physiotherapy</td><td>14</td><td>202</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">12</td><td>Office</td><td>07</td><td>201</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">13</td><td>Medicine Store</td><td>11</td><td>223</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">14</td><td>Radiologist / Ultrasonologist</td><td>04</td><td>204</td></tr>
                    <tr className="hover:bg-orange-50/50 transition"><td className="px-4 py-4">15</td><td>Dressing</td><td>02</td><td>208</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Laboratory Tests */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <Activity className="w-7 h-7" />
              Laboratory Tests Available
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              Total Tests Performed in the University Health Centre Laboratory include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <ul className="list-disc pl-6 space-y-1">
                <li>MP</li>
                <li>Hb</li>
                <li>TLC/DLC</li>
                <li>ESR</li>
                <li>BT/CT</li>
                <li>Blood Sugar</li>
                <li>Blood Urea</li>
                <li>Blood Cholesterol</li>
                <li>Widal Test</li>
                <li>Uric Acid</li>
                <li>AEC</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Serum Creatinine</li>
                <li>SGOT</li>
                <li>SGPT</li>
                <li>Serum Bilirubin</li>
                <li>AlKP04</li>
                <li>Triglyceride</li>
                <li>HDL</li>
                <li>CBC</li>
                <li>Platelet Count</li>
                <li>Protein</li>
                <li>Albumin</li>
              </ul>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 italic pt-8 border-t border-orange-100">
            For any medical assistance, contact the Health Centre (Ambulance: 7895246046) or the respective extension numbers.
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { Eye, Download, FileText } from "lucide-react"

export default function AcademicCalendarPage() {
  const calendarData = [
    { title: "Academic Calendar 2025-2026", file: "/media/ac2026.pdf" },
    { title: "Academic Calendar 2024-2025", file: "/media/calendar.pdf" },
  ]

  return (
    <section className="relative py-8 sm:py-12 md:py-24  bg-white">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-5xl px-4 sm:px-6">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Academic Calendar
        </h1>

        {/* Centered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center place-items-center">

          {calendarData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-orange-100 p-6 flex flex-col justify-between hover:shadow-2xl transition"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                  <FileText size={22} />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition"
                >
                  <Eye size={16} />
                  View
                </a>

                <a
                  href={item.file}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

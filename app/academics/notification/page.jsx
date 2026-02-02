"use client"

import { ChevronDown, FileText, Download } from "lucide-react"
import { useState } from "react"

const NotificationCard = ({ title, pdfUrl }) => {
  const handleDownload = (url) => {
    if (!url) return
    const link = document.createElement("a")
    link.href = url
    link.download = url.split("/").pop() || "notification.pdf"
    link.click()
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>

        {pdfUrl && (
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium text-center"
            >
              <FileText className="w-5 h-5" />
              View
            </a>

            <button
              onClick={() => handleDownload(pdfUrl)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-medium"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function NotificationPage() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const notificationsData = [
    {
      id: 1,
      title: "Academic Calendar 2025-2026",
      category: "Admissions",
      pdfUrl: "/media/ac2026.pdf",
    },
    {
      id: 2,
      title: "Ph.D Entrance Examination 2025",
      category: "Exams",
      pdfUrl: "/admissions/phdadmission.pdf",
    },
      {
      id: 3,
      title: "Admission Form 2025-2026",
      category: "Admissions",
      pdfUrl: "/admissions/admission-form.pdf",
    },
  
    // ... aur notifications yahan add kar dena
  ]

  const categories = ["All", "Admissions", "Exams", "Events", "Results", "Scholarships"]

  const filteredNotifications = notificationsData.filter(
    (n) =>
      (filter === "All" || n.category === filter) &&
      (n.title.toLowerCase().includes(search.toLowerCase()))
  )

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
            University Updates
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Notifications & Circulars
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter & Search */}
        <div className="mb-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? "bg-orange-600 text-white"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notifications..."
              className="w-full px-5 py-3 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Notification Grid */}
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            No notifications found. Try changing filter or search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotifications.map((n) => (
              <NotificationCard key={n.id} {...n} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
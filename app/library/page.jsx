"use client";

import { ChevronDown, BookOpen } from "lucide-react";

export default function LibraryPage() {
  const libraryDetails = [
    {
      course: "Polytechnic Courses",
      books: "6080",
      hours: "9:30 AM – 4:30 PM",
      issue: "10:00 AM – 4:00 PM",
      recess: "1:00 PM – 1:45 PM",
      return: "10:00 AM – 4:00 PM",
    },
    {
      course: "Pharmacy Courses",
      books: "3155",
      hours: "9:30 AM – 4:30 PM",
      issue: "10:00 AM – 4:00 PM",
      recess: "1:00 PM – 1:45 PM",
      return: "10:00 AM – 4:00 PM",
    },
    {
      course: "B.Ed.",
      books: "5737",
      hours: "9:30 AM – 4:30 PM",
      issue: "10:00 AM – 4:00 PM",
      recess: "1:00 PM – 1:45 PM",
      return: "10:00 AM – 4:00 PM",
    },
    {
      course: "B.Sc. Nursing",
      books: "2250",
      hours: "9:30 AM – 4:30 PM",
      issue: "10:00 AM – 4:00 PM",
      recess: "1:00 PM – 1:45 PM",
      return: "10:00 AM – 4:00 PM",
    },
  ];

  const borrowingFacilities = [
    { category: "Students", books: "4 Books", period: "15 Days" },
    { category: "Toppers", books: "6 Books", period: "15 Days" },
    { category: "University Merit", books: "8 Books", period: "15 Days" },
    { category: "University Topper", books: "12 Books", period: "15 Days" },
    { category: "Faculty Member", books: "6 Books", period: "30 Days" },
  ];

  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-linear(#000 1px, transparent 1px), linear-linear(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs sm:text-sm font-semibold uppercase mb-4">
            Academic Resources
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            The Academic Library: A Hub for Learning and Research
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            The SMDU Library is an integrated knowledge resource serving as the central and departmental library. It offers open access catalogues for students, faculty, and staff members — a space that inspires learning, research, and intellectual curiosity.
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-16">
          {/* About the Library */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-3">
              <BookOpen className="w-7 h-7" />
              About the Library
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>The library is located on a separate floor with marble flooring, near the college temple.</li>
              <li>It has a spacious reading hall and rich reference collections such as dictionaries, encyclopedias, and self-help books.</li>
              <li>The library subscribes to an adequate number of newspapers for daily updates.</li>
              <li>Security of resources is ensured with entry/exit sign-in systems and CCTV surveillance for strict monitoring.</li>
            </ul>
          </div>

          {/* Library Details Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Library Details</h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-orange-100 rounded-xl overflow-hidden bg-white shadow-md">
                <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Course</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">No. of Books</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Library Hours</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Book Issue Time</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Recess</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Book Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {libraryDetails.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/50 transition">
                      <td className="px-6 py-5 text-gray-800 border-r border-orange-100">{row.course}</td>
                      <td className="px-6 py-5 text-gray-800 border-r border-orange-100">{row.books}</td>
                      <td className="px-6 py-5 text-gray-700 border-r border-orange-100">{row.hours}</td>
                      <td className="px-6 py-5 text-gray-700 border-r border-orange-100">{row.issue}</td>
                      <td className="px-6 py-5 text-gray-700 border-r border-orange-100">{row.recess}</td>
                      <td className="px-6 py-5 text-gray-700">{row.return}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {libraryDetails.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md border border-orange-100 p-5 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{row.course}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div><strong>Books:</strong> {row.books}</div>
                    <div><strong>Hours:</strong> {row.hours}</div>
                    <div><strong>Issue:</strong> {row.issue}</div>
                    <div><strong>Recess:</strong> {row.recess}</div>
                    <div><strong>Return:</strong> {row.return}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Borrowing Facilities */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Book Borrowing Facilities</h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-orange-100 rounded-xl overflow-hidden bg-white shadow-md">
                <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Category of Member</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">No. of Books</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-orange-400">Issue Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {borrowingFacilities.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/50 transition">
                      <td className="px-6 py-5 text-gray-800 border-r border-orange-100">{row.category}</td>
                      <td className="px-6 py-5 text-gray-800 border-r border-orange-100">{row.books}</td>
                      <td className="px-6 py-5 text-gray-700">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {borrowingFacilities.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md border border-orange-100 p-5 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{row.category}</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Books:</strong> {row.books} <br />
                    <strong>Period:</strong> {row.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Library Sections */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Library Sections</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Reading Section</li>
              <li>General Section</li>
              <li>Reference Book Section</li>
            </ul>
          </div>

          {/* Library Rules */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Library Rules</h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>Students must show their ID cards before entering the library.</li>
              <li>Using someone else’s library card is a punishable offense.</li>
              <li>Keep personal belongings at the property counter; do not leave valuables.</li>
              <li>No book will be renewed/reissued on the same day.</li>
              <li>The latest edition of a book must be provided in replacement of a lost/damaged book with a fine.</li>
              <li>Tearing, marking, or misplacing books/magazines is punishable.</li>
              <li>Stealing books incurs a fine of ₹2000.</li>
              <li>Misbehaving, chatting, or using mobile phones is strictly prohibited.</li>
              <li>All students must wear college uniform inside the library.</li>
              <li>Gossip, food, and beverages are strictly prohibited.</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6">Contact Details</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong>Mrs. Rajdhani Nautiyal</strong><br />
              Chief Librarian<br />
              Rukmani Nagar, Hitanu (Dhanari), Dunda, Uttarkashi, Uttarakhand – 249151<br />
              <strong>Contact:</strong> 01371 – 299442<br />
              <strong>Email:</strong> info@smdu.edu.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
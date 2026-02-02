"use client";

import Link from "next/link";

export default function SchoolsPage() {
  const schools = [
    {
      id: 1,
      name: "School of Engineering",
      href: "/academics/school-of-engineering",
    },
    {
      id: 2,
      name: "School of Yogic Science & Naturopathy",
      href: "/academics/school-of-yoga-science-and-naturopathy",
    },
    {
      id: 3,
      name: "School of Agriculture",
      href: "/academics/school-of-agriculture",
    },
    {
      id: 4,
      name: "School of Commerce & Management Studies",
      href: "/academics/school-of-commerce-and-management-studies",
    },
    {
      id: 5,
      name: "School of Arts & Humanities",
      href: "/academics/school-of-arts",
    },
    {
      id: 6,
      name: "School of Hotel Management and Tourism",
      href: "/academics/school-of-hotel-management-and-tourism",
    },
    {
      id: 7,
      name: "School of Science and Technology",
      href: "/academics/school-of-science-and-technology",
    },
    {
      id: 8,
      name: "School of Paramedical & Health Science",
      href: "/academics/school-of-nursing-paramedical-and-applied-science",
    },
    {
      id: 9,
      name: "School of Aviation and Logistics",
      href: "/academics/school-of-aviation-and-logistics",
    },
    {
      id: 10,
      name: "School of Legal Studies",
      href: "/academics/school-of-legal",
    },
  ];

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Schools / Departments
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smt. Manjira Devi University, Uttarkashi
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-8 text-center">
            List of Schools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schools.map((school) => (
              <Link
                key={school.id}
                href={school.href}
                className="group block bg-white rounded-xl border border-orange-100 shadow-md hover:shadow-2xl hover:border-orange-300 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center text-center h-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white font-bold text-2xl rounded-full mb-4 group-hover:bg-orange-600 transition-colors">
                    {school.id.toString().padStart(2, "0")}
                  </div>

                  {/* School Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                    {school.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
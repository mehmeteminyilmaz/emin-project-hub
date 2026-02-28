"use client";

import { Home, Folder, BarChart3 } from "lucide-react";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const projects = [
  {
    id: 1,
    name: "AgroLens",
    status: "In Progress",
    tech: ["Flutter", "Firebase"],
  },
  {
    id: 2,
    name: "Kalorilens",
    status: "Completed",
    tech: ["React Native", "Python"],
  },
  {
    id: 3,
    name: "WEBLAB",
    status: "Completed",
    tech: ["JS", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Ultrasonic Distance Meter",
    status: "Completed",
    tech: ["C++", "Arduino"],
  },
];

const techDistribution = [
  { name: "Mobile", value: 40, color: "#6366f1" }, // Indigo
  { name: "Web", value: 30, color: "#06b6d4" }, // Cyan
  { name: "Logic/Backend", value: 20, color: "#10b981" }, // Emerald
  { name: "Embedded", value: 10, color: "#f59e0b" }, // Amber
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold mb-1">{data.name}</p>
        <p className="text-sm" style={{ color: data.payload.color }}>
          {data.value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-20 fixed left-0 top-0 h-full bg-slate-900/50 border-r border-white/10 flex flex-col items-center py-8 gap-8 z-10">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
          <Folder className="w-5 h-5 text-white" />
        </div>
        <nav className="flex flex-col gap-6">
          <button
            onClick={() => setActiveTab("home")}
            className={`p-3 rounded-lg transition-all ${
              activeTab === "home"
                ? "bg-white/10 text-indigo-400"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Home className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`p-3 rounded-lg transition-all ${
              activeTab === "projects"
                ? "bg-white/10 text-indigo-400"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Folder className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`p-3 rounded-lg transition-all ${
              activeTab === "analytics"
                ? "bg-white/10 text-indigo-400"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 p-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Emin's Project Hub
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Welcome to my portfolio dashboard
          </p>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Total Projects</p>
                <p className="text-3xl font-bold text-white">4</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Folder className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Active Hours</p>
                <p className="text-3xl font-bold text-white">--</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </div>
          {/* Pie Chart */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-slate-400 text-sm mb-4 font-medium">
              Tech Stack Distribution
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={techDistribution}
                  cx="50%"
                  cy="45%"
                  labelLine={false}
                  outerRadius={75}
                  innerRadius={25}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth={2}
                  paddingAngle={2}
                >
                  {techDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={70}
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "15px",
                    fontSize: "12px",
                  }}
                  formatter={(value, entry: any) => {
                    const dataItem = techDistribution.find(
                      (item) => item.name === value
                    );
                    return (
                      <span
                        style={{
                          color: "#cbd5e1",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {value} ({dataItem?.value}%)
                      </span>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Status Indicator */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <div className="relative">
                  {project.status === "In Progress" ? (
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse shadow-lg shadow-yellow-400/50"></div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "In Progress"
                      ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                      : "bg-green-400/20 text-green-300 border border-green-400/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-xs font-medium border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


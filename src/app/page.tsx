"use client";

import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SkillsBox from "@/components/SkillsBox";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"experience" | "projects">("projects");
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Bio />
      <SkillsBox />
      <div className="c-container">
        <div className="inline-flex gap-3 p-2 rounded-lg bg-gray-200/50">
          <button
            className="text-black/80 text-sm font-bold px-4 py-2 hover:bg-black/10 rounded-md w-[120px] md:w-[160px]"
            onClick={() => setTab("experience")}
            style={{
              background: tab === "experience" ? "#ddd" : "transparent",
            }}
          >
            Experience
          </button>
          <button
            className="text-black/80 text-sm font-bold px-4 py-2 hover:bg-black/10 rounded-md w-[120px] md:w-[160px]"
            onClick={() => setTab("projects")}
            style={{
              background: tab === "projects" ? "#ddd" : "transparent",
            }}
          >
            Projects
          </button>
        </div>
      </div>
      {tab === "experience" && <Experience />}
      {tab === "projects" && <Projects />}
      <Footer />
    </main>
  );
}

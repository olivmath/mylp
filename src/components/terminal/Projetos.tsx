"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import { ProjectModal } from "./ProjectModal";

function permString(featured?: boolean): string {
  return featured ? "drwxr-xr-x" : "-rw-r--r--";
}

export function Projetos() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <>
      <section id="projetos" className="px-4 sm:px-6 py-8 sm:py-12 font-mono">
        <div className="text-[#888] text-sm mb-1">
          {"═".repeat(60)}
        </div>
        <div className="text-[#888] text-sm mb-4">
          $ ls -la ~/projects
        </div>

        {/* Table header */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="text-[#555] text-left text-xs">
                <th className="py-1 pr-3 font-normal">permissions</th>
                <th className="py-1 pr-3 font-normal">name</th>
                <th className="py-1 pr-3 font-normal hidden sm:table-cell">
                  stack
                </th>
                <th className="py-1 font-normal hidden md:table-cell">
                  description
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer hover:bg-[#1a1a1a] transition-colors group"
                >
                  <td className="py-1.5 pr-3 text-[#888] text-xs whitespace-nowrap">
                    {permString(project.featured)}
                  </td>
                  <td className="py-1.5 pr-3 whitespace-nowrap">
                    <span className="text-[#00D4FF] group-hover:text-[#00FF41] transition-colors">
                      {project.title}
                    </span>
                  </td>
                  <td className="py-1.5 pr-3 text-[#FFB000] text-xs hidden sm:table-cell whitespace-nowrap">
                    {project.tech.slice(0, 3).join(", ")}
                  </td>
                  <td className="py-1.5 text-[#666] text-xs hidden md:table-cell truncate max-w-[300px]">
                    {project.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-[#555] text-xs mt-3">
          {projects.length} entries -- click to view README.md
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

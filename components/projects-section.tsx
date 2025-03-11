"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Work Force Analytics and Evaluation System",
      description:
        "Developed an automated online system for employee performance monitoring. Enabled real-time tracking of employee activities to assist the admin team in evaluations. Improved task and time management to optimize workload distribution.",
      tags: ["Automation", "Performance Monitoring", "Task Management"],
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Smart Personal Cloud Management System",
      description:
        "Designed and implemented a personal cloud management system using Virtual Machines (VMs) and a private DNS server. Provided secure online data storage with optimized space management. Delivered a cost-effective solution for personal storage monitoring and management.",
      tags: ["Cloud Management", "Virtual Machines", "Security"],
      category: "Backend",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description:
        "Developed a real-time chat application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Ensured an intuitive user experience with seamless communication features. Designed for easy maintenance and scalability.",
      tags: ["MERN Stack", "Real-Time Communication", "Scalability"],
      category: "Frontend",
    },
  ]

  const categories = ["All", "Frontend", "Backend", "Full Stack"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
            <span className="bg-primary/20 text-primary rounded-lg px-3 py-1 text-sm mr-3"></span>
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="m-1"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group border border-muted">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

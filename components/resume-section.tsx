"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience")

  const resumeData = {
    experience: [
      {
        title: "Full-Stack Intern",
        company: "OctaNet Services Pvt Ltd",
        period: "09/2024 - 11/2024",
        location: "Virtual",
        responsibilities: [
          "Developed scalable web applications using Java, Spring Boot, and Angular.",
          "Designed and integrated RESTful APIs with Express.js for seamless front-end and back-end communication.",
          "Implemented basic database management features using MySQL for efficient data storage.",
        ],
      },
      {
        title: "Data Science Intern",
        company: "Upskill",
        period: "03/2023 - 04/2023",
        location: "Virtual",
        responsibilities: [
          "Applied statistical analysis, machine learning algorithms, and data visualization techniques to extract insights from complex datasets.",
          "Developed predictive models and streamlined data processes using Python.",
          "Collaborated with team members to meet project requirements and deliver impactful solutions.",
        ],
      },
    ],
    education: [
      {
        degree: "BTech in Computer Science and Engineering",
        institution: "Study World College of Engineering",
        period: "10/2021 - 04/2025",
        location: "Coimbatore, Tamil Nadu, India",
      },
      {
        degree: "Board of Intermediate Education",
        institution: "Narayana Junior College",
        period: "06/2019 - 05/2021",
        location: "Guntur, Andhra Pradesh, India",
      },
      {
        degree: "SSC",
        institution: "KVR ZP High School",
        period: "06/2017 - 03/2019",
        location: "Krishna, Andhra Pradesh, India",
      },
    ],
    certifications: [
      "Certified in Tata Imagination Challenge in 2023",
      "Certified in Accenture Innovation Challenge in 2023",
      "Certified in Manipal National Level Hackathon 2022",
      "Finalists in Smart India Hackathon 2022",
    ],
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
            <span className="bg-primary/20 text-primary rounded-lg px-3 py-1 text-sm mr-3"></span>
            My Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A detailed overview of my professional experience, education, and skills.
          </p>

          <div className="mt-6 flex justify-center">
            <Button className="gap-2" asChild>
              <a href="/resume.pdf" download="Venkata_Gopinadh_Resume.pdf">
                <Download size={16} />
                Download Full Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeTab === "experience" ? "default" : "outline"}
              onClick={() => setActiveTab("experience")}
              className="gap-2"
            >
              <Briefcase size={16} />
              Experience
            </Button>
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              onClick={() => setActiveTab("education")}
              className="gap-2"
            >
              <GraduationCap size={16} />
              Education
            </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "outline"}
              onClick={() => setActiveTab("certifications")}
              className="gap-2"
            >
              <Award size={16} />
              Certifications
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {activeTab === "experience" && <Briefcase className="h-5 w-5" />}
                {activeTab === "education" && <GraduationCap className="h-5 w-5" />}
                {activeTab === "certifications" && <Award className="h-5 w-5" />}
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeTab === "experience" && (
                <div className="space-y-8">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground">
                        {exp.period} | {exp.location}
                      </p>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-8">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground">
                        {edu.period} | {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <ul className="space-y-3 list-disc list-inside">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="text-lg">
                      {cert}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

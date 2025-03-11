import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my.jpg-45Yqc2fExjgSwWbPZmFHdYN26kCtr4.jpeg"
                alt="Venkata Gopinadh Kothapalli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-primary/20 text-primary rounded-lg px-3 py-1 text-sm mr-3"></span>
              About Me
            </h2>

            <p className="text-lg mb-4">
              Hello! I'm Venkata Gopinadh Kothapalli, a passionate BTech graduate in Computer Science and Engineering
              with experience in full-stack development and data science through internships.
            </p>

            <p className="text-lg mb-4">
              I specialize in various technologies including Java, Spring Boot, Angular, and the MERN stack. My journey
              in web development started during my studies, and I've since worked on several projects that showcase my
              skills.
            </p>

            <p className="text-lg mb-6">
              When I'm not coding, you can find me participating in hackathons and innovation challenges. I'm always
              eager to learn and grow as a developer.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" className="gap-2" asChild>
                <a href="/resume.pdf" download="Venkata_Gopinadh_Resume.pdf">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>

              <Button variant="outline" className="gap-2" asChild>
                <Link href="#contact">
                  <FileText size={16} />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold">
              Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/K2283"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/venkata-gopinadh-kothapalli-180490283"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
             
              <Link href="mailto:kvgopinadh@gmail.com" className="hover:text-primary transition-colors p-2">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">© {currentYear} Kothapalli Venkata Gopinad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


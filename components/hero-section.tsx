"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my.jpg-45Yqc2fExjgSwWbPZmFHdYN26kCtr4.jpeg"
            alt="Venkata Gopinadh Kothapalli"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Kothapalli Venkata Gopinadh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          <span className="relative">
            <span>{typedText}</span>
            <span className="absolute right-[-8px] top-0 h-full w-[2px] bg-primary animate-blink"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex space-x-6">
          <Link
            href="https://github.com/K2283"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/venkata-gopinadh-kothapalli-180490283"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll to About section">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}


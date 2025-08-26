"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MapPin, Code, Database, Globe, GraduationCap, Trophy, Calendar, Award, FileCheck, Menu, X, Download } from "lucide-react"
import { 
  SiNextdotjs, 
  SiDjango, 
  SiFastapi, 
  SiPostgresql, 
  SiFlutter, 
  SiTailwindcss, 
  SiGit, 
  SiGithub,
  SiFirebase,
  SiSupabase,
  SiTypescript,
  SiDocker,
  SiC,
  SiCplusplus,
  SiQt,
  SiPython,
  SiJavascript,
  SiReact
} from "react-icons/si"
import Image from "next/image"
import { StarField } from "@/components/star-field"
import { ShootingStars } from "@/components/shooting-star"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [achievementFilter, setAchievementFilter] = useState("all")

  const toggleMobileMenu = () => {
    console.log('Hamburger clicked, current state:', isMobileMenuOpen)
    setIsMobileMenuOpen(prev => {
      console.log('Setting mobile menu to:', !prev)
      return !prev
    })
  }

  useEffect(() => {
    console.log('Mobile menu state changed to:', isMobileMenuOpen)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const globalHook = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (globalHook) {
        globalHook.isDisabled = true;
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const hamburgerButton = target.closest('[data-hamburger-menu]');
      
      if (hamburgerButton) return;
      
      if (isMobileMenuOpen && !target.closest('nav')) {
        console.log('Clicking outside, closing menu')
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }

  const projects = [
    {
      title: "ScrybeSync",
      description: "LLM-powered Markdown-based note-taking app with built-in audio/video transcription and AI summarization for enhanced productivity and content management",
      tags: ["Django REST Framework", "React", "PostgreSQL", "AI/ML", "Markdown", "Audio Processing"],
      image: "/ScrybeSync.png",
      link: "https://github.com/lucifron28/ScrybeSync",
    },
    {
      title: "AQuest",
      description: "Gamified project management platform for teams and students developed during OpeniT Codefest 2025. Features Docker Compose deployment and comprehensive project tracking",
      tags: ["Django REST Framework", "SvelteKit", "PostgreSQL", "Docker", "Gamification"],
      image: "./AQuest.png",
      link: "https://github.com/lucifron28/openit",
    },
    {
      title: "Zentry",
      description: "AI-powered gamified task manager for productivity tracking and user rewards, built during FEU Tech Hackathon 2025 with Flutter and local database storage",
      tags: ["Flutter", "Hive", "AI/ML", "Gamification", "Task Management"],
    image: "./Zentry.png",
      link: "https://github.com/lucifron28/Zentry",
    },
    {
      title: "JeepGo",
      description: "Commuter assistant app for jeepney route optimization, fare calculation, and real-time tracking developed for DLSU Hackercup 2025",
      tags: ["Flutter", "Firebase", "Real-time Tracking", "Route Optimization", "Mobile App"],
      image: "./JeepGo.png",
      link: "https://github.com/lucifron28/hackercup",
    },
    {
      title: "Pixel Pages",
      description: "Web-based eBook reader and management platform with EPUB parsing and annotation support. CS50x Final Project with comprehensive library management",
      tags: ["Flask", "SQLite3", "EPUBLIB", "Jinja2", "EPUB Processing", "Web Development"],
      image: "/pixel-pages.png",
      link: "https://github.com/lucifron28/Pixel-Pages",
    },
    {
      title: "AkbayMed User",
      description: "Medication donation and redistribution platform aligned with SDG 3 & 12, integrated with OpenFDA API for medication verification and tracking",
      tags: ["Flutter", "Dart", "Supabase", "openFDA API", "SDG", "Healthcare"],
      image: "/akbaymed.png",
      link: "https://github.com/lucifron28/AkbayMed_User",
    },
    {
      title: "NPMusic Player",
      description: "C++/Qt desktop music player demonstrating data structures implementation with stack-based history, queue-based playlist management, and modern audio playback controls",
      tags: ["C++", "Qt Framework", "Data Structures", "Stack", "Queue", "Audio Processing"],
      image: "np-music.png",
      link: "https://github.com/lucifron28/CP103-Semi-Finals-Project-NPMusic",
    },
    {
      title: "PNA Bank System",
      description: "Web-based banking application with Firebase authentication, user account management, admin panel for bank operations, and responsive UI with modern animations",
      tags: ["JavaScript", "HTML/CSS", "Firebase", "REST API", "Responsive Design", "Banking"],
      image: "/pna_bank.png",
      link: "https://github.com/lucifron28/PNA-Bank-CSPI101-Midterm-Project",
    },
  ]

  const techStack = {
    core: [
      { name: "Python", icon: SiPython },
      { name: "Django REST Framework", icon: SiDjango },
      { name: "Flask", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Git", icon: SiGit },
    ],
    learning: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Docker", icon: SiDocker },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Docker", icon: SiDocker },
    ],
    foundations: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Qt", icon: SiQt },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ],
  }

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Manuel S. Enverga University Foundation - Lucena City",
      period: "2023 - 2027",
      description: "Specialization Track in Web & Mobile Application Development",
      achievements: ["University Scholar", "Dean's Lister", "GWA: 1.328"]
    }
  ]

  const achievements = [
    {
      title: "Open iT Codefest 2025 - Next Level Code: Refining Good into Great",
      organization: "Open iT Philippines",
      position: "1st Place",
      date: "July 2025",
      description: "Led team as Full-Stack Developer; implemented backend with Django REST Framework & PostgreSQL, deployed with Docker Compose",
      type: "competition",
      category: "hackathon",
      image: "/openit-codefest.png"
    },
    {
      title: "CodeChum National Programming Competition - Group Stage 3",
      organization: "CodeChum",
      position: "1st Place",
      date: "November 2024",
      description: "Regional programming competition focusing on algorithmic problem solving",
      type: "competition",
      category: "programming",
      image: "/codechum.png"
    },
    {
      title: "SikapTala: The National CS & IT Skills Competition",
      organization: "De La Salle University - Dasmariñas",
      position: "2nd Place",
      date: "March 2025",
      description: "Competed in the Collegiate Python Programming Division at national level",
      type: "competition",
      category: "programming",
      image: "/sikaptala.jpg"
    },
    {
      title: "CodeChum National Programming Competition - Grand Finals",
      organization: "CodeChum",
      position: "Finalist",
      date: "2024",
      description: "Advanced to Grand Finals in national programming competition",
      type: "competition",
      category: "programming",
      image: "./codechum-grandfinals.png"
    },
    {
      title: "FEU Tech Hackathon 2025",
      organization: "Far Eastern University - Institute of Technology",
      position: "Participant",
      date: "2025",
      description: "Team Leader & Full-Stack Developer; built scalable prototype under time pressure with AI-powered gamified task management",
      type: "competition",
      category: "hackathon",
      image: "/FEU_hackathon_cada.png"
    },
    {
      title: "DLSU Hackercup 2025",
      organization: "De La Salle University",
      position: "Participant", 
      date: "2025",
      description: "Team Leader; developed mobile app prototype for commuter assistance and pitched solution to judges",
      type: "competition",
      category: "hackathon",
      image: "https://placehold.co/600x400/50FA7B/282A36?text=DLSU+Hackercup"
    },
    {
      title: "ISITE National IT Skills Competition 2025",
      organization: "ISITE",
      position: "Participant",
      date: "2025",
      description: "Participated in C Programming competition at national level",
      type: "competition",
      category: "programming",
      image: "https://placehold.co/600x400/BD93F9/282A36?text=ISITE+2025"
    },
    {
      title: "ISITE National IT Skills Competition 2024",
      organization: "ISITE",
      position: "Participant",
      date: "2024",
      description: "Participated in Python Programming competition at national level",
      type: "competition",
      category: "programming",
      image: "https://placehold.co/600x400/F1FA8C/282A36?text=ISITE+2024"
    },
    {
      title: "CoCo - Coding Competition",
      organization: "PSITES",
      position: "1st Place",
      date: "2025",
      description: "Participated in programming challenges and algorithmic problem solving",
      type: "competition",
      image: "/cp2024.jpg"
    },
    {
      title: "Cyberlympics 2024 - Hackathon",
      organization: "PSITES",
      position: "1st Place",
      date: "2024",
      description: "Participated in programming challenges and algorithmic problem solving",
      type: "competition",
      image: "/cp2025.jpg"
    },
    {
      title: "DLSU - Hackercup 2025",
      organization: "De La Salle University - Manila",
      position: "Participant",
      date: "2025",
      description: "Developed a mobile application supporting SDG 11.2 (Sustainable Cities and Communities) using Flutter",
      type: "competition",
      image: "/GitGood.png"
    }
  ]

  const certifications = [
    {
      title: "CS50's Introduction to Computer Science",
      organization: "Harvard University (edX)",
      date: "2024",
      description:
        "Comprehensive introduction to computer science and programming, covering algorithms, data structures, web development, and software engineering principles",
      credentialId: "7a497a92-d84d-4e71-9830-4bef46a606b1",
      type: "computer-science",
      image: "/cs50x.png",
    },
    {
      title: "CS50's Introduction to Programming with Python",
      organization: "Harvard University (edX)",
      date: "2024",
      description:
        "Introduction to programming using Python, covering functions, variables, conditionals, loops, exceptions, libraries, unit tests, and file I/O",
      credentialId: " 4d3ce24e-561a-4004-bed2-e6e372995c6f",
      type: "programming",
      image: "/cs50p.png",
    },
    {
      title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      organization: "IBM (Coursera)",
      date: "2024",
      description:
        "Comprehensive course on mobile app development using Flutter and Dart, covering cross-platform development, UI design, and app deployment",
      credentialId: "YMJOROZO4N2",
      type: "mobile-development",
      image: "flutter.png",
    },
    {
      title: "Github Foundtions",
      organization: "GitHub",
      date: "June 2025",
      description:
        "Foundational course on using GitHub for version control, collaboration, and project management",
      credentialId: "nz51yDUa",
      type: "version-control",
      image: "github-foundations.png",
    },
    {
      title: "Intermediate PostgreSQL",
      organization: "University of Michigan (Coursera)",
      date: "June 2025",
      description:
        "Intermediate course on PostgreSQL, covering advanced SQL queries, database design, and performance optimization",
      credentialId: "GZO6VI362EUG",
      type: "database",
      image: "intermediate-postgresql.png",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#282A36] text-gray-900 dark:text-[#F8F8F2] transition-colors duration-300 relative">
      <StarField />
      <ShootingStars />
      {/* Navigation */}
      <nav className="sticky top-0 z-[100] bg-white/95 dark:bg-[#1E1F29]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#6272A4] transition-colors duration-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-base sm:text-lg md:text-xl text-gray-800 dark:text-[#F8F8F2] flex items-center min-w-[200px] sm:min-w-[250px]">
              <img src="/favicon.ico" className="inline-block w-5 h-5 sm:w-6 sm:h-6 mr-2" alt="Favicon" />
              <span className="hidden sm:inline">Ron Vincent Cada</span>
              <span className="sm:hidden">Ron Vincent Cada</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-2 flex-wrap">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                Certifications
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="text-gray-700 dark:text-[#F8F8F2] hover:bg-gray-100 dark:hover:bg-[#343746] ml-2"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="text-gray-700 dark:text-[#F8F8F2] hover:bg-gray-100 dark:hover:bg-[#343746]"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] p-2 transition-colors relative z-50"
                data-hamburger-menu="true"
                type="button"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-[#6272A4] bg-white/95 dark:bg-[#1E1F29]/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1 px-4 py-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("achievements")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  Achievements
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  Certifications
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
                src="/ron.jpg"
                alt="Ron Vincent Cada"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-[#8BE9FD]"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-[#F8F8F2]">
              Hi, I'm <span className="text-[#8BE9FD]">Ron Vincent Cada</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 dark:text-[#F8F8F2]/80 max-w-3xl mx-auto px-4 sm:px-0">
              a full-stack web & mobile developer.
            </p>
            <div className="flex items-center justify-center mb-8">
              <MapPin className="h-5 w-5 mr-2 text-[#FF79C6]" />
              <span className="text-lg text-gray-700 dark:text-[#F8F8F2]">
                Philippines 🇵🇭
              </span>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 px-4 sm:px-0">
              <a
                href="mailto:cronvincent@gmail.com"
                className="flex items-center justify-center text-gray-700 hover:text-[#8BE9FD] dark:text-[#FF79C6] dark:hover:text-[#8BE9FD] transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span className="break-all">cronvincent@gmail.com</span>
              </a>
              <a
                href="https://github.com/lucifron28"
                className="flex items-center justify-center text-gray-700 hover:text-[#8BE9FD] dark:text-[#FF79C6] dark:hover:text-[#8BE9FD] transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span>github.com/lucifron28</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ron-vincent-cada/"
                className="flex items-center justify-center text-gray-700 hover:text-[#8BE9FD] dark:text-[#FF79C6] dark:hover:text-[#8BE9FD] transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span>linkedin.com/in/ron-vincent-cada</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36] font-semibold w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-[#FF79C6] text-[#FF79C6] hover:bg-[#FF79C6] hover:text-white dark:border-[#FF79C6] dark:text-[#FF79C6] dark:hover:bg-[#FF79C6] dark:hover:text-[#282A36] w-full sm:w-auto"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Cada_CV.pdf';
                  link.download = 'Ron_Vincent_Cada_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </section>

          {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="bg-white dark:bg-[#343746] border-gray-200 dark:border-[#6272A4] hover:border-[#8BE9FD] transition-all duration-300 group backdrop-blur-sm shadow-sm dark:shadow-none h-full">
                  <CardHeader>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="flex items-center justify-between text-gray-800 dark:text-[#F8F8F2]">
                      {project.title}
                      <ExternalLink className="h-5 w-5 text-[#FF79C6] group-hover:text-[#8BE9FD] transition-colors" />
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-[#F8F8F2]/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 border-gray-300 dark:bg-[#8BE9FD]/20 dark:text-[#8BE9FD] dark:border-[#8BE9FD]/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-[#1E1F29]/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-[#F8F8F2]/80">
                I'm Ron Vincent Cada, a full-stack web and mobile developer from the
                Philippines. I'm currently open to internship opportunities,
                freelance work, and collaborations where I can contribute
                meaningful solutions and continue growing as a developer.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-[#F8F8F2]/80">
                I specialize in building responsive, user-centered applications
                using modern technologies like Next.js, React, Tailwind CSS,
                Django, and Flutter.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-[#F8F8F2]">
                Tech Stack
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center text-gray-700 dark:text-[#F8F8F2]">
                    <Code className="h-5 w-5 mr-2 text-[#8BE9FD]" />
                    Core Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.core.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={index}
                          className="bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36] px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                        >
                          <IconComponent className="h-4 w-4" />
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center text-gray-700 dark:text-[#F8F8F2]">
                    <Database className="h-5 w-5 mr-2 text-[#FF79C6]" />
                    Actively Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.learning.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={index}
                          className="border border-gray-600 dark:border-[#FF79C6] text-gray-700 dark:text-[#FF79C6] hover:bg-gray-100 dark:hover:bg-[#FF79C6]/10 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                        >
                          <IconComponent className="h-4 w-4" />
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center text-gray-700 dark:text-[#F8F8F2]">
                    <Globe className="h-5 w-5 mr-2 text-gray-500 dark:text-[#F8F8F2]/60" />
                    Foundations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.foundations.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={index}
                          className="bg-gray-200 dark:bg-[#343746] text-gray-700 dark:text-[#F8F8F2]/80 hover:bg-gray-300 dark:hover:bg-[#404552] px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                        >
                          <IconComponent className="h-4 w-4" />
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-[#343746] border-gray-200 dark:border-[#6272A4] hover:border-[#8BE9FD] transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-6 w-6 mr-3 text-[#8BE9FD]" />
                      <div>
                        <CardTitle className="text-gray-800 dark:text-[#F8F8F2] mb-1">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center text-[#FF79C6] font-semibold">
                          <span>{edu.school}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-[#F8F8F2]/70">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-[#F8F8F2]/70 ml-9">
                    {edu.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="ml-9">
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <Badge
                        key={achievementIndex}
                        variant="secondary"
                        className="bg-[#8BE9FD]/10 text-[#8BE9FD] border-[#8BE9FD]/30 dark:bg-[#8BE9FD]/20 dark:text-[#8BE9FD] dark:border-[#8BE9FD]/30"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Competitions Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-[#1E1F29]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-[#F8F8F2]">
            Achievements & Competitions
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={achievementFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setAchievementFilter("all")}
              className={achievementFilter === "all" 
                ? "bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36]"
                : "bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-[#8BE9FD] dark:text-[#8BE9FD] dark:hover:bg-[#8BE9FD] dark:hover:text-[#282A36]"
              }
            >
              All
            </Button>
            <Button
              variant={achievementFilter === "hackathon" ? "default" : "outline"}
              size="sm"
              onClick={() => setAchievementFilter("hackathon")}
              className={achievementFilter === "hackathon" 
                ? "bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36]"
                : "bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-[#8BE9FD] dark:text-[#8BE9FD] dark:hover:bg-[#8BE9FD] dark:hover:text-[#282A36]"
              }
            >
              Hackathons
            </Button>
            <Button
              variant={achievementFilter === "programming" ? "default" : "outline"}
              size="sm"
              onClick={() => setAchievementFilter("programming")}
              className={achievementFilter === "programming" 
                ? "bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36]"
                : "bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-[#8BE9FD] dark:text-[#8BE9FD] dark:hover:bg-[#8BE9FD] dark:hover:text-[#282A36]"
              }
            >
              Programming
            </Button>
            <Button
              variant={achievementFilter === "competition" ? "default" : "outline"}
              size="sm"
              onClick={() => setAchievementFilter("competition")}
              className={achievementFilter === "competition" 
                ? "bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36]"
                : "bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-[#8BE9FD] dark:text-[#8BE9FD] dark:hover:bg-[#8BE9FD] dark:hover:text-[#282A36]"
              }
            >
              Other Competitions
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements
              .filter(achievement => {
                if (achievementFilter === "all") return true;
                if (achievementFilter === "hackathon") {
                  return achievement.category === "hackathon";
                }
                if (achievementFilter === "programming") {
                  return achievement.category === "programming";
                }
                if (achievementFilter === "competition") {
                  return achievement.category === "competition";
                }
                return true;
              })
              .map((achievement, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-[#343746] border-gray-200 dark:border-[#6272A4] hover:border-[#FF79C6] transition-all duration-300 group backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                {achievement.image && (
                  <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      {achievement.type === "competition" ? (
                        <Trophy className="h-6 w-6 mr-3 text-[#FF79C6]" />
                      ) : (
                        <Award className="h-6 w-6 mr-3 text-[#8BE9FD]" />
                      )}
                      <div>
                        <CardTitle className="text-gray-800 dark:text-[#F8F8F2] mb-1">
                          {achievement.title}
                        </CardTitle>
                        <div className="text-[#FF79C6] font-semibold text-sm">
                          {achievement.organization}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#8BE9FD] font-bold text-sm mb-1">
                        {achievement.position}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-[#F8F8F2]/70 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-[#F8F8F2]/70 ml-9">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            Certifications & Licenses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-[#343746] border-gray-200 dark:border-[#6272A4] hover:border-[#8BE9FD] transition-all duration-300 group backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                <CardHeader>
                  {cert.image && (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={300}
                      height={150}
                      className="w-full h-50 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <FileCheck className="h-6 w-6 mr-3 text-[#8BE9FD] flex-shrink-0" />
                      <div className="min-w-0">
                        <CardTitle className="text-gray-800 dark:text-[#F8F8F2] mb-1 text-base leading-tight">
                          {cert.title}
                        </CardTitle>
                        <div className="text-[#FF79C6] font-semibold text-sm">
                          {cert.organization}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="flex items-center text-gray-600 dark:text-[#F8F8F2]/70 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-[#F8F8F2]/70 ml-9 text-sm">
                    {cert.description}
                  </CardDescription>
                  {cert.credentialId && (
                    <div className="ml-9 mt-2">
                      <span className="text-xs text-gray-500 dark:text-[#F8F8F2]/50">
                        Credential ID: {cert.credentialId}
                      </span>
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-[#6272A4] bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-[#F8F8F2]/60">
            © 2025 Ron Vincent Cada. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

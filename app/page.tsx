"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MapPin, Code, Database, Globe, GraduationCap, Trophy, Calendar, Award, FileCheck, Menu, X } from "lucide-react"
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

  // SEO and Open Graph metadata
  const siteMetadata = {
    title: "Ron Vincent Cada - Full-Stack Web & Mobile Developer",
    description: "Full-stack web and mobile developer from the Philippines specializing in Next.js, React, Django, Flutter, and modern web technologies. Open to internship opportunities and collaborations.",
    url: "https://ron-cada-portfolio.vercel.app",
    image: "/ron.jpg",
    keywords: "Ron Vincent Cada, Full-stack developer, Web developer, Mobile developer, React, Next.js, Django, Flutter, Philippines developer, Frontend developer, Backend developer, Software engineer",
    author: "Ron Vincent Cada",
    type: "website"
  }

  useEffect(() => {
    document.title = siteMetadata.title
    
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Basic SEO meta tags
    updateMetaTag('description', siteMetadata.description)
    updateMetaTag('keywords', siteMetadata.keywords)
    updateMetaTag('author', siteMetadata.author)
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph meta tags
    updateMetaTag('og:title', siteMetadata.title, true)
    updateMetaTag('og:description', siteMetadata.description, true)
    updateMetaTag('og:type', siteMetadata.type, true)
    updateMetaTag('og:url', siteMetadata.url, true)
    updateMetaTag('og:image', `${siteMetadata.url}${siteMetadata.image}`, true)
    updateMetaTag('og:image:alt', 'Ron Vincent Cada - Full-Stack Developer', true)
    updateMetaTag('og:image:width', '400', true)
    updateMetaTag('og:image:height', '400', true)
    updateMetaTag('og:locale', 'en_US', true)
    updateMetaTag('og:site_name', 'Ron Vincent Cada Portfolio', true)

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', siteMetadata.title)
    updateMetaTag('twitter:description', siteMetadata.description)
    updateMetaTag('twitter:image', `${siteMetadata.url}${siteMetadata.image}`)
    updateMetaTag('twitter:image:alt', 'Ron Vincent Cada - Full-Stack Developer')
    updateMetaTag('twitter:creator', '@ronvincent_cada') // Replace with your Twitter handle
    updateMetaTag('twitter:site', '@ronvincent_cada') // Replace with your Twitter handle

    updateMetaTag('theme-color', '#8BE9FD')
    updateMetaTag('msapplication-TileColor', '#8BE9FD')
    updateMetaTag('application-name', 'Ron Vincent Cada Portfolio')

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ron Vincent Cada",
      "jobTitle": "Full-Stack Web & Mobile Developer",
      "description": siteMetadata.description,
      "url": siteMetadata.url,
      "image": `${siteMetadata.url}${siteMetadata.image}`,
      "sameAs": [
        "https://github.com/lucifron28",
        "https://www.linkedin.com/in/ron-vincent-cada-a939282a7/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Philippines"
      },
      "email": "cronvincent@gmail.com",
      "knowsAbout": [
        "Web Development",
        "Mobile Development",
        "React",
        "Next.js",
        "Django",
        "Flutter",
        "JavaScript",
        "Python",
        "TypeScript"
      ]
    }

    // Add or update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)

  }, [])

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
      title: "Pixel Pages",
      description: "Flask-based EPUB e-book reader and library management system with Google Books API integration for metadata, user authentication, and reading progress tracking",
      tags: ["Flask", "Python", "SQLAlchemy", "HTML/CSS", "JavaScript", "EPUB", "Google Books API"],
      image: "/pixel-pages.png",
      link: "https://github.com/lucifron28/Pixel-Pages",
    },
    {
      title: "AkbayMed User",
      description: "Flutter medical donation app connecting donors with patients in Philippine healthcare centers. Features openFDA API integration, Supabase backend, and comprehensive donation/request management",
      tags: ["Flutter", "Dart", "Supabase", "openFDA API", "PostgreSQL", "Material Design"],
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
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Django", icon: SiDjango },
      { name: "Django REST Framework", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
    learning: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "TypeScript", icon: SiTypescript },
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
      school: "Manuel S. Enverga University Foundation - Lucena",
      period: "2023 - 2027",
      description: "Specalization Track in Web and Mobile Application Development",
      achievements: ["Dean's Lister", "Academic Scholar", "GWA: 1.28"]
    }
  ]

  const achievements = [
    {
      title: "Open iT Codefest 2025 - Next Level Code: Refining Good into Great",
      organization: "Open iT Philippines",
      position: "1st Place",
      date: "July 2025",
      description: "Led a team and built a full-stack web application during a hackathon that gamifies project management to enhance team collaboration and productivity.",
      type: "competition",
      image: "/openit-codefest.png"
    },
    {
      title: "SikapTala: The National CS & IT Skills Competition",
      organization: "De La Salle University - Dasmarinas",
      position: "2nd Place",
      date: "March 2025",
      description: "Competed in the Collegiate Python Programming Division",
      type: "competition",
      image: "/sikaptala.jpg"
    },
    {
      title: "CodeChum National Programming Competition - Group Stage 3",
      organization: "CodeChum",
      position: "1st Place",
      date: "November 2024",
      description: "Regional programming competition focusing on algorithmic problem solving",
      type: "competition",
      image: "/codechum.png"
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
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={siteMetadata.type} />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={`${siteMetadata.url}${siteMetadata.image}`} />
        <meta property="og:image:alt" content="Ron Vincent Cada - Full-Stack Developer" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ron Vincent Cada Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteMetadata.url} />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={`${siteMetadata.url}${siteMetadata.image}`} />
        <meta name="twitter:image:alt" content="Ron Vincent Cada - Full-Stack Developer" />
        <meta name="twitter:creator" content="@aeuxial" />
        <meta name="twitter:site" content="@aeuxial" />

        {/* Additional meta tags */}
        <meta name="theme-color" content="#8BE9FD" />
        <meta name="msapplication-TileColor" content="#8BE9FD" />
        <meta name="application-name" content="Ron Vincent Cada Portfolio" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteMetadata.url} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ron Vincent Cada",
              "jobTitle": "Full-Stack Web & Mobile Developer",
              "description": siteMetadata.description,
              "url": siteMetadata.url,
              "image": `${siteMetadata.url}${siteMetadata.image}`,
              "sameAs": [
                "https://github.com/lucifron28",
                "https://www.linkedin.com/in/ron-vincent-cada-a939282a7/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Philippines"
              },
              "email": "cronvincent@gmail.com",
              "knowsAbout": [
                "Web Development",
                "Mobile Development",
                "React",
                "Next.js",
                "Django",
                "Django REST Framework",
                'Dart',
                "Flutter",
                "JavaScript",
                "Python",
                "FastAPI",
                "SQLAlchemy",
                "TypeScript",
                "PostgreSQL"
              ]
            })
          }}
        />
      </Head>
      
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
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746] text-sm whitespace-nowrap"
              >
                Contact
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
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-[#F8F8F2] hover:text-[#8BE9FD] transition-colors text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#343746]"
                >
                  Contact
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
                href="https://www.linkedin.com/in/ron-vincent-cada-a939282a7/"
                className="flex items-center justify-center text-gray-700 hover:text-[#8BE9FD] dark:text-[#FF79C6] dark:hover:text-[#8BE9FD] transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span>linkedin.com/in/roncada</span>
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
                className="bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-[#8BE9FD] dark:text-[#8BE9FD] dark:hover:bg-[#8BE9FD] dark:hover:text-[#282A36] w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            Achievements & Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-[#F8F8F2]">
            Get In Touch
          </h2>
          <Card className="bg-white dark:bg-[#343746] border-gray-200 dark:border-[#6272A4] backdrop-blur-sm shadow-sm dark:shadow-none">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-[#F8F8F2]">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-[#F8F8F2]/70">
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-gray-50 dark:bg-[#1E1F29] border-gray-300 dark:border-[#6272A4] text-gray-800 dark:text-[#F8F8F2] placeholder:text-gray-500 dark:placeholder:text-[#F8F8F2]/50"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-gray-50 dark:bg-[#1E1F29] border-gray-300 dark:border-[#6272A4] text-gray-800 dark:text-[#F8F8F2] placeholder:text-gray-500 dark:placeholder:text-[#F8F8F2]/50"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-gray-50 dark:bg-[#1E1F29] border-gray-300 dark:border-[#6272A4] text-gray-800 dark:text-[#F8F8F2] placeholder:text-gray-500 dark:placeholder:text-[#F8F8F2]/50"
              />
              <Textarea
                placeholder="Your message..."
                rows={4}
                className="bg-gray-50 dark:bg-[#1E1F29] border-gray-300 dark:border-[#6272A4] text-gray-800 dark:text-[#F8F8F2] placeholder:text-gray-500 dark:placeholder:text-[#F8F8F2]/50"
              />
              <Button className="w-full bg-gray-800 hover:bg-gray-900 dark:bg-[#8BE9FD] dark:hover:bg-[#8BE9FD]/90 text-white dark:text-[#282A36]">
                Send Message
              </Button>
            </CardContent>
          </Card>
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
    </>
  );
}

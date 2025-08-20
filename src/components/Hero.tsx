import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {
  Code,
  Laptop,
  Monitor,
  Terminal,
  Brackets,
  Zap,
  Coffee,
  Github,
  Linkedin,
  FileText,
  ArrowRight,
} from "lucide-react"

const typewriterTexts = ["I build fast sites", "I craft clean code", "I love predicting with ML", "I create digital experiences"]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(100)

  useEffect(() => {
    const handleType = () => {
      const fullText = typewriterTexts[currentTextIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypeSpeed(50)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypeSpeed(100)
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
      }
    }

    const timer = setTimeout(handleType, typeSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, typeSpeed])

  return (
    <div className="min-h-screen flex font-inter relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>

      {/* Social Links - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-4">
        <SocialLink href="https://www.linkedin.com/in/spandan-chakrabarty-86b619287" icon={Linkedin} label="LinkedIn" />
        <SocialLink href="https://github.com/spandan3" icon={Github} label="GitHub" />
        <SocialLink href="/resume.pdf" icon={FileText} label="Resume" />
      </div>

      {/* Left Side - Dark Background with Text */}
      <div className="flex-1 relative z-10 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg text-white">
          <div className="space-y-6">
            {/* Animated Heading */}
            <div className="overflow-hidden">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-up">
                Hi, I'm <span className="text-blue-400">Spandan</span>
              </h1>
            </div>

            {/* Typewriter Effect */}
            <div className="overflow-hidden">
              <div className="text-xl lg:text-2xl text-gray-300 animate-slide-up-delay h-8 lg:h-10">
                <span className="text-blue-300">{currentText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <p className="text-lg text-gray-400 animate-slide-up-delay-2">
                I am a second year CS Student at the University of Waterloo passionate about machine learning and creating beautiful, functional web experiences
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-4 animate-fade-in-delay">
                <Link to="/projects">
                    <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                        View My Work
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Light Background with Enhanced Floating Icons */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-16 left-10 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-40 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-35 animate-pulse-slow delay-2000"></div>
        </div>

        {/* Central 3D Laptop with Glow Effect */}
        <div className="relative z-10 group">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-glow"></div>
          <Laptop className="w-32 h-32 text-gray-700 relative z-10 animate-float-central group-hover:text-blue-600 transition-colors duration-300" />
        </div>

        {/* Enhanced Floating Icons with Hover Effects */}
        <div className="absolute inset-0">
          <FloatingIcon
            icon={Code}
            className="absolute top-20 left-20 text-blue-500"
            size="w-12 h-12"
            delay="animate-float-delay-1"
          />
          <FloatingIcon
            icon={Terminal}
            className="absolute top-32 right-24 text-green-500"
            size="w-10 h-10"
            delay="animate-float-delay-2"
          />
          <FloatingIcon
            icon={Monitor}
            className="absolute bottom-32 left-16 text-purple-500"
            size="w-14 h-14"
            delay="animate-float-delay-3"
          />
          <FloatingIcon
            icon={Zap}
            className="absolute top-1/2 right-16 text-yellow-500"
            size="w-8 h-8"
            delay="animate-float-delay-4"
          />
          <FloatingIcon
            icon={Coffee}
            className="absolute bottom-20 right-32 text-amber-600"
            size="w-10 h-10"
            delay="animate-float-delay-5"
          />
          <FloatingIcon
            icon={Github}
            className="absolute top-16 right-1/3 text-gray-600"
            size="w-12 h-12"
            delay="animate-float-delay-6"
          />
          <FloatingIcon
            icon={Brackets}
            className="absolute bottom-1/3 left-1/3 text-indigo-500"
            size="w-10 h-10"
            delay="animate-float-delay-7"
          />
        </div>
      </div>
    </div>
  )
}

// Enhanced Floating Icon Component
function FloatingIcon({
  icon: Icon,
  className,
  size,
  delay,
}: {
  icon: any
  className: string
  size: string
  delay: string
}) {
  return (
    <div className={`${className} ${delay} group cursor-pointer`}>
      <Icon
        className={`${size} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg`}
      />
    </div>
  )
}

// Social Link Component with Tooltip
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: any
  label: string
}) {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
      >
        <Icon className="w-5 h-5" />
      </a>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {label}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  )
}

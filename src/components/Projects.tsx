import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Personal Finance Tracker",
    description:
        "An intelligent personal finance tracker that categorizes transactions using a trained FastAI model and provides secure, user-specific dashboards. Includes real-time visualizations and cloud-hosted architecture for seamless insights into spending patterns.",
    technologies: [ "React", "Vite", "TypeScript", "Tailwind CSS", "Flask", "FastAI", "Supabase", "PostgreSQL" ],
    liveUrl: "https://personal-financeai-tracker.vercel.app/", 
    githubUrl: "https://github.com/spandan3/personal-finance-tracker"
  },
  {
    title: "Smart Waste Classifier",
    description:
        "A web app that classifies waste types (plastic, paper, metal, etc.) using a FastAI-powered ML model and offers recycling tips. Users can upload images to receive categorized results with confidence scores, all within a responsive, modern interface.",
    technologies: [
        "React", "Vite", "TypeScript", "Tailwind CSS", 
        "Flask", "CNN Model", "Python", "REST API"
    ],
    liveUrl: "https://smart-waste-classifier.vercel.app/",
    githubUrl: "https://github.com/spandan3/smart-waste-classifier"
  },
  {
    title: "Personal Portfolio Website",
    description:
        "A modern, responsive portfolio website built with Vite, React, and Tailwind CSS. Features a custom hero section, animated elements, project showcase, and integrated resume and social links.",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS",],
    liveUrl: "https://spandan-dev.vercel.app/", 
    githubUrl: "https://github.com/spandan3/portfolio" 
  },
  {
    title: "Online Student Portal",
    description:
        "An AI-enhanced digital student portal designed to reduce manual effort, promote sustainability, and centralize student services. Features include automated attendance via face recognition, intelligent photo and certificate sorting, a personal event planner, and a 'Sustainable Tip of the Day'.",
    technologies: [
        "Flask", "Python", "OpenCV", "face_recognition", 
        "MySQL", "HTML", "CSS"
    ],
    liveUrl: null, 
    githubUrl: "https://github.com/spandan3/Student_Portal"
  },
  {
    title: "Caffeine Tracker",
    description:
        "A full-stack web app that allows users to log and monitor daily caffeine intake. Features secure Firebase-based authentication, local data persistence for a smooth UX, and a clean, responsive interface designed to help users manage their caffeine habits.",
    technologies: [
        "React.js", "HTML", "CSS", "JavaScript",
        "Firebase Authentication", "Firebase Realtime Database"
    ],
    liveUrl: "https://cafflog.netlify.app",
    githubUrl: "https://github.com/spandan3/cafflog"
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've built, ranging from full-stack applications to creative experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 animate-slide-up-stagger"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Content Section */}
        <div className="flex-1 space-y-4">
          {/* Project Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h2>

          {/* Project Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 lg:flex-col lg:items-end">
          {project.liveUrl && (
            <ActionButton href={project.liveUrl} icon={ExternalLink} label="Live Demo" variant="primary" />
          )}
          {project.githubUrl && (
            <ActionButton href={project.githubUrl} icon={Github} label="Source Code" variant="secondary" />
          )}
        </div>
      </div>
    </div>
  )
}

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-default">
      {tech}
    </span>
  )
}

function ActionButton({
  href,
  icon: Icon,
  label,
  variant,
}: {
  href: string
  icon: any
  label: string
  variant: "primary" | "secondary"
}) {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-blue-500/25"
      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm">{label}</span>
    </a>
  )
}

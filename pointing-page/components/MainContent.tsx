import Link from "next/link"
import type { Project, SocialLink } from "@/types"

interface MainContentProps {
  title: string
  projects: Project[]
  socialLinks: SocialLink[]
}

export default function MainContent({ title, projects, socialLinks }: MainContentProps) {
  return (
    <div className="relative w-full">
      <div className="h-screen flex flex-col justify-center items-start pl-[15vw]">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 mr-4 text-yellow-400"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
          <div
            className="text-4xl md:text-5xl text-white font-bold tracking-widest"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <div className="flex items-center mt-4">
          <div className="mr-4 flex gap-2">
            <div className="bg-red-500 rounded-full h-3 w-3" />
            <div className="bg-yellow-500 rounded-full h-3 w-3" />
            <div className="bg-green-500 rounded-full h-3 w-3" />
          </div>
          <div className="text-sm text-white tracking-widest">愿我们顶峰相见</div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4">
        <About />
        <Projects title="Projects" projects={projects} />
        <SocialLinks links={socialLinks} />
        <Footer />
      </section>
    </div>
  )
}

function About() {
  return (
    <>
      <div className="text-bold mb-4 text-3xl text-white mt-20">About Me</div>
      <div className="mb-10">
        <div className="text-white/80">
          <p className="leading-7">嗨，你好，我是Awan。</p>
          <p className="leading-7">想要改变现在的世界，哪怕只是一点点。</p>
          <p className="leading-7">热爱新鲜感，拥抱世界的进步，追求更高的精神自由。</p>
          <p className="leading-7">希望和你成为好朋友！</p>
          <p className="leading-7">We&apos;re making the world better. Till the forever.</p>
        </div>
      </div>
    </>
  )
}

function Projects({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <>
      <div className="text-bold mb-6 text-3xl text-white">{title}</div>
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <Link key={index} href={item.link} className="group">
            <div className="bg-white/5 hover:bg-white/10 p-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 backdrop-blur-lg backdrop-filter h-24 flex flex-col justify-center">
              <div className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition duration-300">
                {item.name}
              </div>
              <div className="text-xs text-white/70 group-hover:text-white/90 transition duration-300 line-clamp-2">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <>
      <div className="text-bold mb-6 text-3xl text-white">Find Me</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16">
        {links.map((item, index) => (
          <Link key={index} href={item.link} className="group">
            <div className="bg-white/5 hover:bg-white/10 p-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 backdrop-blur-lg backdrop-filter flex flex-col items-center justify-center h-24">
              <div
                className="text-2xl text-white mb-2 group-hover:text-blue-400 transition duration-300"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition duration-300">
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="mb-5 mt-10">
      <div className="text-white/60 flex justify-center items-center">
        <i className="mr-1" />
        <p>清风暖色抚人心，敢为人先鸣不平。</p>
        <i className="ml-1" />
      </div>
      <div className="text-white/60 mt-2 flex justify-center items-center gap-4">
        <div>© 2025 Awan</div>
      </div>
    </footer>
  )
}


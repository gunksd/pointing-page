import Link from 'next/link'

interface Project {
  name: string
  description: string
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <div className="text-bold mb-2 ml-10 text-4xl text-white">
        Projects
      </div>
      <div className="mb-10 flex flex-wrap justify-between">
        {projects.map((item, index) => (
          <div key={index} className="mx-10 my-4 basis-3/4 md:basis-1/6">
            <Link href={item.link}>
              <div className="bg-white/5 hover:bg-white/10 p-2 rounded-lg shadow-md flex-col transition backdrop-blur-3xl backdrop-opacity-60 hover:backdrop-opacity-100 hover:-translate-y-2">
                <div className="text-bold opacity-75 text-white">
                  {item.name}
                </div>
                <div className="mt-1 opacity-50 text-sm text-white">
                  {item.description}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

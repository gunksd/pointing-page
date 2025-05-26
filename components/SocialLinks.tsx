import Link from 'next/link'

interface SocialLink {
  icon: string
  link: string
  label: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <>
      <div className="text-bold mb-2 ml-10 text-4xl text-white">
        Find Me
      </div>
      <div className="flex flex-wrap justify-between">
        {links.map((item, index) => (
          <div key={index} className="mx-10 my-4 basis-1/6">
            <Link href={item.link} className="bg-white/5 hover:bg-white/10 p-2 rounded-lg shadow-md flex-col justify-between items-center transition backdrop-blur-3xl backdrop-opacity-60 hover:backdrop-opacity-100 hover:-translate-y-2">
              <div className="mb-1 text-white flex justify-center items-center" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <div className="text-bold opacity-75 text-white">{item.label}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

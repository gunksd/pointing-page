import StarTrails from "@/components/StarTrails"
import MainContent from "@/components/MainContent"
import ClientMusicPlayer from "@/components/ClientMusicPlayer"
import { myProjects, socialLinks } from "@/data/content"

export default function Home() {
  const title = "平凡的日子里每天都有奇迹"

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-10">
        <MainContent title={title} projects={myProjects} socialLinks={socialLinks} />
      </div>

      <div className="fixed inset-0 z-0 overflow-hidden">
        <StarTrails />
      </div>

      {/* 网易云热歌榜 */}
      <ClientMusicPlayer />
    </main>
  )
}

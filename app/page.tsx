import StarTrails from "@/components/StarTrails"
import MainContent from "@/components/MainContent"
import ClientMusicPlayer from "@/components/ClientMusicPlayer"
import { myProjects, socialLinks } from "@/data/content"

export default function Home() {
  const title = "平凡的日子里每天都有奇迹"

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "var(--space-0)" }}
    >
      {/* 星空银河背景（灵魂，保留不动） */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <StarTrails />
      </div>

      {/* 暗角 + 颗粒质感层 */}
      <div className="substrate-vignette" aria-hidden="true" />
      <div className="substrate-grain" aria-hidden="true" />

      {/* 内容 */}
      <div className="relative z-10">
        <MainContent title={title} projects={myProjects} socialLinks={socialLinks} />
      </div>

      {/* 网易云热歌榜 */}
      <ClientMusicPlayer />
    </main>
  )
}

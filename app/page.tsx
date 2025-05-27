import StarTrails from "@/components/StarTrails"
import MainContent from "@/components/MainContent"
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

      {/* 音乐播放器 - 使用新的歌单ID */}
      <div className="fixed bottom-4 right-4 z-50">
        <iframe
          frameBorder="no"
          border="0"
          marginWidth="0"
          marginHeight="0"
          width="330"
          height="110"
          src="https://music.163.com/outchain/player?type=0&id=2429488976&auto=1&height=90"
          allow="autoplay; encrypted-media"
        />
      </div>
    </main>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

// 音乐歌曲列表
const audioList = [
  {
    name: "我爱过你",
    artist: "小白羊HUSH, Taisheng Music",
    url: "/music/我爱过你.mp3",
    cover: "http://p1.music.126.net/3hKcOyyd-ufZo4Jl7Lp40Q==/109951164530053133.jpg",
    theme: "#ee0a24"
  },
  {
    name: "静悄悄 (肉麻的调调你不会知道)",
    artist: "队长的小斑鸠, 夏以岛",
    url: "/music/静悄悄.mp3",
    cover: "http://p1.music.126.net/Ca8woebduPeCzbd9aZzg3g==/109951171419555909.jpg",
    theme: "#ff6b6b"
  },
  {
    name: "Starlight",
    artist: "OdinMann",
    url: "/music/Starlight.mp3",
    cover: "http://p1.music.126.net/4RbuQ-o572cx1xVBGyz6rg==/109951169721544585.jpg",
    theme: "#4ecdc4"
  }
]

declare global {
  interface Window {
    APlayer: any;
  }
}

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const playerRef = useRef<HTMLDivElement>(null)
  const aplayerRef = useRef<any>(null)

  // 防止SSR不一致
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const initAPlayer = async () => {
      try {
        // 加载APlayer CSS
        if (!document.querySelector('#aplayer-css')) {
          const cssLink = document.createElement('link')
          cssLink.id = 'aplayer-css'
          cssLink.rel = 'stylesheet'
          cssLink.href = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css'
          document.head.appendChild(cssLink)
        }

        // 加载APlayer JS
        if (!window.APlayer) {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js'
          script.onload = () => createPlayer()
          document.head.appendChild(script)
        } else {
          createPlayer()
        }
      } catch (error) {
        console.error('加载APlayer失败:', error)
        setIsLoading(false)
      }
    }

    const createPlayer = () => {
      if (playerRef.current && window.APlayer && !aplayerRef.current) {
        try {
          aplayerRef.current = new window.APlayer({
            container: playerRef.current,
            mini: false,
            autoplay: false,
            theme: '#ee0a24',
            loop: 'all',
            order: 'list',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            listFolded: !isExpanded,
            listMaxHeight: 300,
            lrcType: 0, // 禁用歌词显示
            audio: audioList
          })

          // 添加自定义样式
          const style = document.createElement('style')
          style.textContent = `
            .aplayer {
              background: rgba(0, 0, 0, 0.95) !important;
              border: 1px solid rgba(255, 255, 255, 0.1) !important;
              border-radius: 0 0 16px 16px !important;
              backdrop-filter: blur(20px) !important;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6) !important;
              border-top: none !important;
            }
            .aplayer .aplayer-info {
              background: transparent !important;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
              padding: 16px !important;
            }
            .aplayer .aplayer-info .aplayer-music {
              color: white !important;
            }
            .aplayer .aplayer-info .aplayer-music .aplayer-title {
              color: white !important;
              font-weight: 600 !important;
              font-size: 14px !important;
            }
            .aplayer .aplayer-info .aplayer-music .aplayer-author {
              color: rgba(255, 255, 255, 0.6) !important;
              font-size: 12px !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar {
              background: rgba(255, 255, 255, 0.1) !important;
              border-radius: 4px !important;
              height: 4px !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded {
              background: rgba(238, 10, 36, 0.3) !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played {
              background: linear-gradient(90deg, #ee0a24, #ff4757) !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-time {
              color: rgba(255, 255, 255, 0.6) !important;
              font-size: 11px !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon {
              fill: rgba(255, 255, 255, 0.7) !important;
              width: 20px !important;
              height: 20px !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover {
              fill: white !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar {
              background: rgba(255, 255, 255, 0.1) !important;
            }
            .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume {
              background: #ee0a24 !important;
            }
            .aplayer .aplayer-list {
              background: rgba(0, 0, 0, 0.9) !important;
              border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
              max-height: 300px !important;
            }
            .aplayer .aplayer-list ol li {
              color: rgba(255, 255, 255, 0.8) !important;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
              padding: 8px 16px !important;
            }
            .aplayer .aplayer-list ol li:hover {
              background: rgba(255, 255, 255, 0.05) !important;
            }
            .aplayer .aplayer-list ol li.aplayer-list-light {
              background: rgba(238, 10, 36, 0.15) !important;
              color: #ee0a24 !important;
            }
            .aplayer .aplayer-list ol li .aplayer-list-index {
              color: rgba(255, 255, 255, 0.5) !important;
              margin-right: 12px !important;
            }
            .aplayer .aplayer-list ol li .aplayer-list-author {
              color: rgba(255, 255, 255, 0.5) !important;
              font-size: 12px !important;
            }
            .aplayer .aplayer-pic {
              border-radius: 12px !important;
              overflow: hidden !important;
              width: 56px !important;
              height: 56px !important;
            }
            .aplayer.aplayer-narrow {
              width: 100% !important;
            }
            .aplayer.aplayer-withlist .aplayer-info {
              border-bottom: none !important;
            }
            /* 隐藏歌词 */
            .aplayer .aplayer-lrc {
              display: none !important;
            }
          `
          document.head.appendChild(style)

          // 监听播放列表展开/收起
          aplayerRef.current.on('listshow', () => setIsExpanded(true))
          aplayerRef.current.on('listhide', () => setIsExpanded(false))

          setIsLoading(false)
        } catch (error) {
          console.error('初始化APlayer失败:', error)
          setIsLoading(false)
        }
      }
    }

    initAPlayer()

    return () => {
      if (aplayerRef.current) {
        aplayerRef.current.destroy()
        aplayerRef.current = null
      }
    }
  }, [isMounted])

  useEffect(() => {
    if (aplayerRef.current) {
      if (isExpanded) {
        aplayerRef.current.list.show()
      } else {
        aplayerRef.current.list.hide()
      }
    }
  }, [isExpanded])

  // 在SSR期间不渲染
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-500 ${isExpanded ? 'w-96' : 'w-80'}`}>
        {/* 头部控制栏 */}
        <div className="bg-gradient-to-r from-red-500/20 to-black/40 backdrop-blur-lg rounded-t-2xl border border-white/10 border-b-0 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">音乐播放器</span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              title={isExpanded ? '收起列表' : '展开列表'}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          </div>
        </div>

        {/* APlayer容器 */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-black/90 backdrop-blur-lg rounded-b-2xl border border-white/10 border-t-0 h-32 flex items-center justify-center z-10">
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin"></div>
                <span className="text-sm">加载音乐播放器...</span>
              </div>
            </div>
          )}
          
          <div 
            ref={playerRef}
            className="aplayer-container"
          />
        </div>
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle } from "lucide-react"

interface Song {
  id: string
  title: string
  artist: string
  cover: string
  duration: string
  iframeUrl: string
}

const playlist: Song[] = [
  {
    id: "2697499554",
    title: "Purple Magic",
    artist: "GuTs",
    cover: "https://p2.music.126.net/048KahiAUtYCZo9Q_784zQ==/109951170763053750.jpg?param=90y90",
    duration: "3:42",
    iframeUrl: "//music.163.com/outchain/player?type=2&id=2697499554&auto=0&height=66",
  },
  {
    id: "1406648156",
    title: "卑微小调",
    artist: "徐泽（要不要买菜）",
    cover: "https://p2.music.126.net/0SDNBUqLb6gbuXFV18w_Bw==/109951164517447892.jpg?param=90y90",
    duration: "4:15",
    iframeUrl: "//music.163.com/outchain/player?type=2&id=1406648156&auto=0&height=66",
  },
  {
    id: "27646205",
    title: "安河桥",
    artist: "宋冬野",
    cover: "https://p1.music.126.net/GcRunGm02vZBicYmIN6GXw==/109951163200249252.jpg?param=90y90",
    duration: "4:32",
    iframeUrl: "//music.163.com/outchain/player?type=2&id=27646205&auto=0&height=66",
  },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 模拟进度条更新
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1
          if (newTime >= duration) {
            handleNext()
            return 0
          }
          return newTime
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration])

  // 设置歌曲时长
  useEffect(() => {
    const songDuration = playlist[currentSong].duration
    const [minutes, seconds] = songDuration.split(":").map(Number)
    setDuration(minutes * 60 + seconds)
    setCurrentTime(0)
  }, [currentSong])

  const togglePlay = () => {
    const iframe = iframeRef.current
    if (iframe) {
      try {
        if (!isPlaying) {
          const newSrc = playlist[currentSong].iframeUrl.replace("auto=0", "auto=1")
          iframe.src = newSrc
        } else {
          const newSrc = playlist[currentSong].iframeUrl.replace("auto=1", "auto=0")
          iframe.src = newSrc
        }
        setIsPlaying(!isPlaying)
      } catch (error) {
        console.log("播放控制失败:", error)
      }
    }
  }

  const handleNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length)
      setCurrentSong(randomIndex)
    } else {
      setCurrentSong((prev) => (prev + 1) % playlist.length)
    }
    setIsPlaying(false)
  }

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (Number.parseFloat(e.target.value) / 100) * duration
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value) / 100
    setVolume(newVolume)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const currentSongData = playlist[currentSong]

  return (
    <>
      {/* 隐藏的iframe播放器 */}
      <div className="hidden">
        <iframe
          ref={iframeRef}
          frameBorder="no"
          border={0}
          marginWidth={0}
          marginHeight={0}
          width="330"
          height="86"
          src={currentSongData.iframeUrl}
          title={`网易云音乐 - ${currentSongData.title}`}
        />
      </div>

      {/* 最小化播放器 */}
      {isMinimized && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-black/80 backdrop-blur-lg rounded-full p-3 shadow-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={currentSongData.cover || "/placeholder.svg"}
                alt={currentSongData.title}
                className="w-10 h-10 rounded-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=40&width=40&query=音乐专辑封面"
                }}
              />
              <div className="hidden sm:block">
                <div className="text-white text-sm font-medium">{currentSongData.title}</div>
                <div className="text-white/60 text-xs">{currentSongData.artist}</div>
              </div>
              <button
                onClick={togglePlay}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={() => setIsMinimized(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 完整播放器 */}
      {!isMinimized && (
        <div className="fixed bottom-4 right-4 z-50 w-80">
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10">
            {/* 头部 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-white/80 text-sm font-medium">🔥 网易云音乐</div>
              <button onClick={() => setIsMinimized(true)} className="text-white/60 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>

            {/* 专辑封面和歌曲信息 */}
            <div className="text-center mb-6">
              <img
                src={currentSongData.cover || "/placeholder.svg"}
                alt={currentSongData.title}
                className="w-32 h-32 rounded-2xl mx-auto mb-4 object-cover shadow-lg"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=128&width=128&query=音乐专辑封面"
                }}
              />
              <h3 className="text-white font-bold text-lg mb-1">{currentSongData.title}</h3>
              <p className="text-white/60 text-sm">{currentSongData.artist}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-red-500 text-xs">🔥</span>
                <span className="text-white/50 text-xs">
                  第 {currentSong + 1} 首 / 共 {playlist.length} 首
                </span>
              </div>
            </div>

            {/* 进度条 */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* 控制按钮 */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => setIsShuffle(!isShuffle)}
                className={`p-2 rounded-full transition-colors ${
                  isShuffle ? "text-red-500" : "text-white/60 hover:text-white"
                }`}
              >
                <Shuffle size={16} />
              </button>
              <button onClick={handlePrev} className="text-white/60 hover:text-white transition-colors">
                <SkipBack size={20} />
              </button>
              <button
                onClick={togglePlay}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button onClick={handleNext} className="text-white/60 hover:text-white transition-colors">
                <SkipForward size={20} />
              </button>
              <button
                onClick={() => setIsRepeat(!isRepeat)}
                className={`p-2 rounded-full transition-colors ${
                  isRepeat ? "text-red-500" : "text-white/60 hover:text-white"
                }`}
              >
                <Repeat size={16} />
              </button>
            </div>

            {/* 音量控制 */}
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="text-white/60 hover:text-white transition-colors">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume * 100}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* 播放列表 */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <h4 className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                🎵 播放列表
                <span className="text-xs text-white/50">({playlist.length}首)</span>
              </h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {playlist.map((song, index) => (
                  <div
                    key={song.id}
                    onClick={() => {
                      setCurrentSong(index)
                      setIsPlaying(false)
                    }}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                      index === currentSong ? "bg-red-500/20 text-red-400" : "hover:bg-white/5 text-white/60"
                    }`}
                  >
                    <div className="text-xs font-mono w-6 text-center">
                      {index === currentSong ? (
                        <span className="text-red-500">♪</span>
                      ) : (
                        <span className="text-white/40">{index + 1}</span>
                      )}
                    </div>
                    <img
                      src={song.cover || "/placeholder.svg"}
                      alt={song.title}
                      className="w-8 h-8 rounded object-cover"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=32&width=32&query=音乐专辑封面"
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{song.title}</div>
                      <div className="text-xs opacity-60 truncate">{song.artist}</div>
                    </div>
                    <div className="text-xs opacity-60">{song.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  )
}

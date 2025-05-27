"use client"

import { useState } from "react"
import { Music, AlertCircle } from "lucide-react"

export default function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  // 尝试不同的协议和参数组合
  const urls = [
    "https://music.163.com/outchain/player?type=0&id=8114561628&auto=1&height=66",
    "//music.163.com/outchain/player?type=0&id=8114561628&auto=1&height=66",
    "https://music.163.com/outchain/player?type=0&id=8114561628&auto=0&height=66",
    "https://music.163.com/outchain/player?type=2&id=2025823272&auto=1&height=66",
  ]

  const [currentUrlIndex, setCurrentUrlIndex] = useState(0)
  const currentUrl = urls[currentUrlIndex % urls.length]

  // 处理加载错误和重试
  const handleRetry = () => {
    setIsLoading(true)
    setHasError(false)
    setRetryCount(retryCount + 1)
    setCurrentUrlIndex(currentUrlIndex + 1)
  }

  // 监听iframe加载状态
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/90 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 overflow-hidden w-[330px]">
        {/* 头部标识 */}
        <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-red-500/20 to-black/40 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Music size={14} className="text-red-500" />
            <span className="text-white/90 text-xs font-medium">网易云音乐</span>
          </div>

          {hasError && (
            <button
              onClick={handleRetry}
              className="text-white/70 hover:text-white text-xs bg-red-500/20 px-2 py-1 rounded-md hover:bg-red-500/30 transition-colors"
            >
              重试
            </button>
          )}
        </div>

        {/* 播放器内容 */}
        <div className="w-full bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm h-[70px] relative rounded-b-xl overflow-hidden border-t border-white/5">
          {/* 加载状态 */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="animate-pulse text-white/70 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                加载中...
              </div>
            </div>
          )}

          {/* 错误状态 */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-2">
              <AlertCircle size={16} className="text-red-500 mb-1" />
              <div className="text-white/70 text-xs text-center">播放器加载失败，可能是网络问题或浏览器限制</div>
            </div>
          )}

          {/* iframe播放器 */}
          <iframe
            frameBorder="no"
            border={0}
            marginWidth={0}
            marginHeight={0}
            width={330}
            height={70}
            src={currentUrl}
            className="w-full"
            allow="autoplay"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>

        {/* 提示信息 */}
        <div className="px-3 py-1 bg-black/50 border-t border-white/10">
          <p className="text-white/50 text-[10px] text-center">
            如果播放器无法加载，请尝试访问{" "}
            <a
              href="https://music.163.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              网易云音乐官网
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

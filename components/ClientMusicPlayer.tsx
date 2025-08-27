"use client"

import dynamic from "next/dynamic"

const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), { 
  ssr: false,
  loading: () => null
})

export default function ClientMusicPlayer() {
  return <MusicPlayer />
}
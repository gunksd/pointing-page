'use client'

import { useEffect, useRef } from 'react'

export default function StarTrails() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let showWidth = window.innerWidth
    let showHeight = window.innerHeight
    // Accumulated rotation. Kept explicit so we can restore the exact transform
    // after a resize (setting canvas.width silently resets the ctx matrix).
    let angle = 0
    const STEP = (0.025 * Math.PI) / 180 // fixed direction, per-frame increment

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Establish the off-center rotation pivot (identical look to the original).
    // Re-applied after every resize so the pivot never drifts back to (0,0),
    // which is what used to make the spin appear to reverse direction.
    const applyPivot = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      if (showWidth < showHeight) ctx.translate(showWidth, showHeight)
      else ctx.translate(showWidth, 0)
      ctx.rotate(angle)
    }

    const paintBackground = () => {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fillRect(0, 0, showWidth, showHeight)
      ctx.restore()
    }

    canvas.width = showWidth
    canvas.height = showHeight

    // Pre-render the whole star field once onto an oversized offscreen canvas.
    const longSide = Math.max(showWidth, showHeight)
    const helpCanvas = document.createElement('canvas')
    helpCanvas.width = longSide * 2.6
    helpCanvas.height = longSide * 2.6
    const helpCtx = helpCanvas.getContext('2d')

    if (!helpCtx) return

    const rand = (min: number, max: number) => min + Math.round(Math.random() * (max - min))
    const randomColor = () => {
      const r = rand(120, 255)
      const g = rand(120, 255)
      const b = rand(120, 255)
      const a = rand(30, 100) / 100
      return `rgba(${r},${g},${b},${a})`
    }

    const stars = Array.from({ length: 18000 }, () => ({
      x: rand(-helpCanvas.width, helpCanvas.width),
      y: rand(-helpCanvas.height, helpCanvas.height),
      size: 1.2,
      color: randomColor(),
    }))

    stars.forEach(star => {
      helpCtx.beginPath()
      helpCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2, true)
      helpCtx.fillStyle = star.color
      helpCtx.closePath()
      helpCtx.fill()
    })

    paintBackground()
    applyPivot()

    // Reduced motion: draw a single static frame, no rotation loop.
    if (prefersReducedMotion) {
      ctx.drawImage(helpCanvas, -helpCanvas.width / 2, -helpCanvas.height / 2)
      return
    }

    const resizeCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      // Ignore mobile URL-bar height-only jitter: it fires resize constantly
      // while scrolling and used to wipe the transform every time.
      if (w === showWidth) return
      showWidth = w
      showHeight = h
      canvas.width = w // implicitly resets the ctx transform + clears the bitmap
      canvas.height = h
      paintBackground()
      applyPivot() // rebuild pivot + restore accumulated angle → no direction flip
    }

    window.addEventListener('resize', resizeCanvas)

    let drawTimes = 0
    let rafId = 0

    const loop = () => {
      ctx.drawImage(helpCanvas, -helpCanvas.width / 2, -helpCanvas.height / 2)
      drawTimes++

      if (drawTimes > 200 && drawTimes % 8 === 0) {
        ctx.fillStyle = 'rgba(0,0,0,.04)'
        ctx.fillRect(-(longSide * 3), -(longSide * 3), longSide * 6, longSide * 6)
      }

      ctx.rotate(STEP)
      angle += STEP
    }

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      loop()
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
  )
}

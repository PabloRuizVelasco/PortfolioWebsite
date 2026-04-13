import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let columns = []
    let fontSize = 14

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const colCount = Math.floor(canvas.width / fontSize)
      columns = Array.from({ length: colCount }, () =>
        Math.random() * canvas.height / fontSize
      )
    }

    const animate = () => {
      // Semi-transparent black overlay for trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      columns.forEach((y, i) => {
        const char = Math.random() > 0.5 ? '1' : '0'
        const x = i * fontSize

        // Brighter green for the leading character
        const brightness = Math.random()
        if (brightness > 0.95) {
          ctx.fillStyle = 'rgba(134, 239, 172, 0.9)' // bright tip
        } else if (brightness > 0.8) {
          ctx.fillStyle = 'rgba(74, 222, 128, 0.5)'
        } else {
          ctx.fillStyle = 'rgba(34, 197, 94, 0.25)'
        }

        ctx.fillText(char, x, y * fontSize)

        // Reset column randomly or when it goes off screen
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          columns[i] = 0
        }
        columns[i] += 0.12 + Math.random() * 0.13
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
}

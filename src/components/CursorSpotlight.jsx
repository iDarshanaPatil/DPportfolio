import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function useCursorSpotlight() {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const x = useSpring(mouseX, { stiffness: 90, damping: 22 })
  const y = useSpring(mouseY, { stiffness: 90, damping: 22 })

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mobileMq = window.matchMedia('(max-width: 768px)')
    const update = () => setEnabled(!mobileMq.matches)
    update()
    mobileMq.addEventListener('change', update)
    return () => mobileMq.removeEventListener('change', update)
  }, [])

  const active = enabled && !reducedMotion

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const onMouseLeave = () => {
    mouseX.set(-500)
    mouseY.set(-500)
  }

  return { active, x, y, onMouseMove, onMouseLeave }
}

export default function CursorSpotlight({ x, y }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 480,
        height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,147,58,0.14) 0%, transparent 65%)',
        filter: 'blur(24px)',
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

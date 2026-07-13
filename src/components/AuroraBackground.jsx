import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const blobs = [
  {
    size: 600,
    top: '-200px',
    left: '-200px',
    color: 'rgba(201,147,58,0.2)',
    duration: 22,
    animate: { x: [0, 50, -30, 0], y: [0, -40, 25, 0], scale: [1, 1.08, 0.94, 1] },
  },
  {
    size: 500,
    bottom: '-150px',
    right: '-150px',
    color: 'rgba(232,201,126,0.15)',
    duration: 28,
    animate: { x: [0, -35, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.92, 1.06, 1] },
  },
  {
    size: 380,
    top: '45%',
    left: '55%',
    color: 'rgba(168,124,46,0.12)',
    duration: 18,
    animate: { x: [0, 25, -40, 0], y: [0, -25, 35, 0], scale: [1, 1.04, 0.96, 1] },
  },
]

export default function AuroraBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" style={{
      position: 'fixed', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden',
    }}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            filter: 'blur(80px)',
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
          animate={reducedMotion ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import styles from './page.module.css'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scale1 = useTransform(smoothProgress, [0, 0.2], [1, 1.5])
  const opacity1 = useTransform(smoothProgress, [0, 0.2], [1, 0])
  const y1 = useTransform(smoothProgress, [0, 0.2], [0, -200])

  const scale2 = useTransform(smoothProgress, [0.15, 0.35], [0.8, 1])
  const opacity2 = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0])
  const y2 = useTransform(smoothProgress, [0.15, 0.45], [100, -200])

  const scale3 = useTransform(smoothProgress, [0.4, 0.6], [0.8, 1])
  const opacity3 = useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0])
  const y3 = useTransform(smoothProgress, [0.4, 0.7], [100, -200])

  const scale4 = useTransform(smoothProgress, [0.65, 0.85], [0.8, 1])
  const opacity4 = useTransform(smoothProgress, [0.65, 0.75, 0.85, 1], [0, 1, 1, 0.3])
  const y4 = useTransform(smoothProgress, [0.65, 1], [100, -50])

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.cursor}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Hero Section */}
      <motion.section
        className={styles.section}
        style={{ scale: scale1, opacity: opacity1, y: y1 }}
      >
        <motion.div
          className={styles.glassCard}
          animate={{
            rotateY: (mousePosition.x - windowSize.width / 2) / 50,
            rotateX: -(mousePosition.y - windowSize.height / 2) / 50,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          <h1 className={styles.title}>Liquid Glass</h1>
          <p className={styles.subtitle}>Experience the future of design</p>
        </motion.div>
      </motion.section>

      {/* Innovation Section */}
      <motion.section
        className={styles.section}
        style={{ scale: scale2, opacity: opacity2, y: y2 }}
      >
        <div className={styles.glassCard}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className={styles.heading}>Innovation</h2>
            <p className={styles.text}>
              Crafted with precision. Designed with purpose.
              Every detail matters in creating extraordinary experiences.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✦</div>
                <div className={styles.featureText}>Fluid Motion</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>◆</div>
                <div className={styles.featureText}>Glass Morphism</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>●</div>
                <div className={styles.featureText}>Smooth Scrolling</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Performance Section */}
      <motion.section
        className={styles.section}
        style={{ scale: scale3, opacity: opacity3, y: y3 }}
      >
        <div className={styles.glassCard}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className={styles.heading}>Performance</h2>
            <p className={styles.text}>
              Blazing fast. Silky smooth. Optimized for every interaction.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>60</div>
                <div className={styles.statLabel}>FPS</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100</div>
                <div className={styles.statLabel}>Score</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>0ms</div>
                <div className={styles.statLabel}>Delay</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Finale Section */}
      <motion.section
        className={styles.section}
        style={{ scale: scale4, opacity: opacity4, y: y4 }}
      >
        <div className={styles.glassCard}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h2 className={styles.heading}>The Future is Here</h2>
            <p className={styles.text}>
              Embrace the liquid glass revolution. Where technology meets artistry.
            </p>
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Ambient Blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  )
}

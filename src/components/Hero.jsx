import { motion } from 'framer-motion'

export default function Hero({ onDiscover }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#f6efe7]/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex h-[90vh] flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-[#2b2a28]"
        >
          Where Ayurveda Meets Modern Science
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-[#4b4a47]"
        >
          A new chapter in pure, mindful skincare — coming soon.
        </motion.p>
        <motion.button
          onClick={onDiscover}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 rounded-full bg-[#cfae6c] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#b99651] transition-colors shadow-sm"
        >
          Discover Our Story
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
          className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-[#f4d9a5]/30 blur-3xl"/>
      </div>
    </section>
  )
}

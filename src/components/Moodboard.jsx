import { motion } from 'framer-motion'

const palette = [
  { img: 'https://images.unsplash.com/photo-1530031636301-c9273d1f5ccc?q=80&w=1200&auto=format&fit=crop', label: 'Earthy Beige' },
  { img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', label: 'Matte Gold' },
  { img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', label: 'Muted Terracotta' },
  { img: 'https://images.unsplash.com/photo-1541697275028-8b6c1e531234?q=80&w=1200&auto=format&fit=crop', label: 'Clay Texture' },
  { img: 'https://images.unsplash.com/photo-1503217194810-9dedfe73d0f0?q=80&w=1200&auto=format&fit=crop', label: 'Leaf Veins' },
  { img: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop', label: 'Soft Fabrics' },
]

export default function Moodboard() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2a28] mb-6">The Palette of Purity</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {palette.map((p, i) => (
            <motion.div
              key={i}
              className="min-w-[220px] sm:min-w-[260px] relative rounded-xl overflow-hidden shadow-sm snap-start bg-white/40"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={p.img} alt={p.label} className="w-[220px] sm:w-[260px] h-40 sm:h-48 object-cover"/>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-sm text-[#2b2a28] bg-gradient-to-t from-[#f6efe7]/95 to-transparent">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'

const ingredients = [
  { name: 'Saffron', note: 'Radiance & Vitality', img: 'https://images.unsplash.com/photo-1471189641895-16c58a695bcb?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Sandalwood', note: 'Calm & Balance', img: 'https://images.unsplash.com/photo-1528150177500-6c0c4d30f2e2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Manjistha', note: 'Detox & Glow', img: 'https://images.unsplash.com/photo-1580450733363-50df1bda2e63?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Rose', note: 'Hydration & Softness', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Turmeric', note: 'Renewal & Clarity', img: 'https://images.unsplash.com/photo-1604671801908-4ec08800b962?q=80&w=1200&auto=format&fit=crop' },
]

export default function Ingredients() {
  const [active, setActive] = useState(0)
  return (
    <section className="bg-[#f6efe7] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-serif text-3xl text-[#2b2a28] mb-6">The Science of Purity</h3>
        <div className="grid md:grid-cols-5 gap-3">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              onMouseEnter={() => setActive(i)}
              className={`relative group overflow-hidden rounded-xl aspect-[3/4] ${active===i ? 'ring-2 ring-[#cfae6c]' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={ing.img} alt={ing.name} className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"/>
              <div className="absolute bottom-0 p-3">
                <p className="text-[#f6efe7] font-medium">{ing.name}</p>
                <p className="text-[#f6efe7]/90 text-sm">{ing.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-6 rounded-full bg-[#2b2a28] text-[#f6efe7] px-6 py-3 text-sm tracking-wide hover:bg-black transition-colors">Explore Ingredients</button>
      </div>
    </section>
  )
}

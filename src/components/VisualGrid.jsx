import { motion } from 'framer-motion'

const items = [
  { img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200&auto=format&fit=crop', caption: 'Ayurvedic Purity' },
  { img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop', caption: 'The Science of Radiance' },
  { img: 'https://images.unsplash.com/photo-1551978429-30ac01df9ca0?q=80&w=1200&auto=format&fit=crop', caption: 'Earth & Light' },
  { img: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1200&auto=format&fit=crop', caption: 'Mindful Beauty' },
  { img: 'https://images.unsplash.com/photo-1610087681769-1aeb0ec5a1d0?q=80&w=1200&auto=format&fit=crop', caption: 'Designed for Serenity' },
  { img: 'https://images.unsplash.com/photo-1589712234967-2f61ebeceaee?q=80&w=1200&auto=format&fit=crop', caption: 'Conscious Craftsmanship' },
  { img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop', caption: 'Botanical Luxury' },
  { img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&auto=format&fit=crop', caption: 'The Ritual of Glow' },
  { img: 'https://images.unsplash.com/photo-1582582494700-cf4467ab79be?q=80&w=1200&auto=format&fit=crop', caption: 'The Signature of OjasNoor' },
]

export default function VisualGrid() {
  return (
    <section className="bg-[#f6efe7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            className="relative group overflow-hidden rounded-xl shadow-sm"
          >
            <img src={item.img} alt={item.caption} className="h-64 w-full object-cover transform transition duration-500 group-hover:scale-105"/>
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-sm tracking-wide text-[#2b2a28] bg-gradient-to-t from-[#f6efe7]/80 to-transparent">
              {item.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

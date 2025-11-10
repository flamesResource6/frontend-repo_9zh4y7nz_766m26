import { motion } from 'framer-motion'

export default function FoundersVision() {
  return (
    <section className="bg-[#f6efe7] py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Founder portrait" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f6efe7]/40 to-transparent"/>
        </div>
        <div>
          <h3 className="font-serif text-3xl text-[#2b2a28]">OjasNoor began as a quest to rediscover purity — a harmony between ancient wisdom and modern artistry.</h3>
          <p className="mt-4 text-[#4b4a47]">A personal note from Tejdeep on light, intention, and the craft behind every detail.</p>
          <button className="mt-6 rounded-full bg-[#cfae6c] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#b99651] transition-colors shadow-sm">Discover the Vision</button>
        </div>
      </div>
    </section>
  )
}

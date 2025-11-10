import { motion } from 'framer-motion'

export default function FoundersVision() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
          <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Founder portrait" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f6efe7]/50 to-transparent"/>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2a28]">OjasNoor began as a quest to rediscover purity — a harmony between ancient wisdom and modern artistry.</h3>
          <p className="mt-4 text-[#4b4a47]">A personal note from Tejdeep on light, intention, and the craft behind every detail.</p>
          <button className="mt-6 rounded-full bg-gradient-to-r from-[#cfae6c] to-[#b99651] text-white px-6 py-3 text-sm tracking-wide hover:from-[#b99651] hover:to-[#a88343] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cfae6c] focus:ring-offset-2 focus:ring-offset-[#f6efe7]">Discover the Vision</button>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function BrandFilm() {
  return (
    <section className="relative py-24 px-6 bg-[#f6efe7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="https://cdn.coverr.co/videos/coverr-honey-drops-8813/1080p.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f6efe7] via-transparent to-transparent opacity-40"/>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2b2a28]">Born from Ayurveda. Perfected by Science. Crafted in Light.</h2>
            <p className="mt-4 text-[#4b4a47]">A 20-second cinematic glimpse into the world of OjasNoor — saffron fields, rose petals, blending oils, and calm skin texture.</p>
            <button className="mt-6 rounded-full bg-[#2b2a28] text-[#f6efe7] px-6 py-3 text-sm tracking-wide hover:bg-black transition-colors">
              Watch the Film
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

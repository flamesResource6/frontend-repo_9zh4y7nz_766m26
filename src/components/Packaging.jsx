export default function Packaging() {
  return (
    <section className="bg-[#f6efe7] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop" alt="Packaging" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f6efe7]/40 to-transparent"/>
        </div>
        <div>
          <h3 className="font-serif text-3xl text-[#2b2a28]">Designed in Light</h3>
          <p className="mt-4 text-[#4b4a47]">Every curve, every hue — a dialogue between Earth and Light.</p>
          <button className="mt-6 rounded-full bg-[#cfae6c] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#b99651] transition-colors shadow-sm">Behind the Design</button>
        </div>
      </div>
    </section>
  )
}

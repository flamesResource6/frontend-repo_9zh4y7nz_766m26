export default function Packaging() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop" alt="Packaging" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f6efe7]/50 to-transparent"/>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2a28]">Designed in Light</h3>
          <p className="mt-4 text-[#4b4a47]">Every curve, every hue — a dialogue between Earth and Light.</p>
          <button className="mt-6 rounded-full bg-gradient-to-r from-[#cfae6c] to-[#b99651] text-white px-6 py-3 text-sm tracking-wide hover:from-[#b99651] hover:to-[#a88343] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cfae6c] focus:ring-offset-2 focus:ring-offset-[#f6efe7]">Behind the Design</button>
        </div>
      </div>
    </section>
  )
}

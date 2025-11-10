export default function Community() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Join" className="w-full h-40 sm:h-48 object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-amber-900/30 backdrop-blur-[1px]"/>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2a28] mt-6">Join the OjasNoor Circle</h3>
        <p className="text-[#4b4a47] mt-2">Receive rituals, stories, and exclusive previews.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-2">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email address" className="flex-1 rounded-full px-4 py-3 bg-white/90 placeholder-[#8d8a85] focus:outline-none focus:ring-2 focus:ring-[#cfae6c]"/>
          <button className="rounded-full bg-gradient-to-r from-[#cfae6c] to-[#b99651] text-white px-6 py-3 text-sm tracking-wide hover:from-[#b99651] hover:to-[#a88343] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cfae6c] focus:ring-offset-2 focus:ring-offset-[#f6efe7]">Join Now</button>
        </form>
      </div>
    </section>
  )
}

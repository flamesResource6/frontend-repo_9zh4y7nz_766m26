export default function Community() {
  return (
    <section className="bg-[#f6efe7] py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Join" className="w-full h-48 object-cover"/>
          <div className="absolute inset-0 bg-amber-700/20 backdrop-blur-[1px]"/>
        </div>
        <h3 className="font-serif text-3xl text-[#2b2a28] mt-6">Join the OjasNoor Circle</h3>
        <p className="text-[#4b4a47] mt-2">Receive rituals, stories, and exclusive previews.</p>
        <form className="mt-6 flex gap-2">
          <input type="email" placeholder="Email address" className="flex-1 rounded-full px-4 py-3 bg-white/80 placeholder-[#8d8a85] focus:outline-none focus:ring-2 focus:ring-[#cfae6c]"/>
          <button className="rounded-full bg-[#cfae6c] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#b99651] transition-colors shadow-sm">Join Now</button>
        </form>
      </div>
    </section>
  )
}

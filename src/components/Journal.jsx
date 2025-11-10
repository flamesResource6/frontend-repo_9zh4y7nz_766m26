export default function Journal() {
  const posts = [
    { title: 'Designing the Essence of OjasNoor', img: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Ayurvedic Rituals for Modern Living', img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop' },
    { title: 'The Philosophy of Slow Beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <section className="bg-[#f6efe7] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl overflow-hidden shadow-sm bg-white/60">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
            <div className="p-5">
              <h4 className="font-serif text-xl text-[#2b2a28]">{p.title}</h4>
              <button className="mt-4 rounded-full bg-[#2b2a28] text-[#f6efe7] px-4 py-2 text-xs tracking-wide hover:bg-black transition-colors">Read</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function SocialFooter() {
  const items = [
    { label: 'Inspiration', img: 'https://images.unsplash.com/photo-1505575972945-2798f56f8efc?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Glow Rituals', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Our Studio', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Textures', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Craft', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Light', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <footer className="pt-10 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {items.map((it) => (
          <div key={it.label} className="relative group overflow-hidden rounded-xl">
            <img src={it.img} alt={it.label} className="h-32 sm:h-36 w-full object-cover transform transition duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
            <div className="absolute bottom-2 left-2 text-white text-[10px] sm:text-xs tracking-wide bg-black/40 px-2 py-1 rounded-full">{it.label}</div>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between text-xs text-[#5a5853]">
        <p>OjasNoor — Where Light Becomes Beauty.</p>
        <a href="#" className="underline">Follow @ojas.noor</a>
      </div>
    </footer>
  )
}

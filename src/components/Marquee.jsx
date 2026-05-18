const items = [
  'False Ceiling','Modular Kitchen','TV Unit','Wooden Work',
  'Wallpaper','Flooring','ACP & Glass Work','Sofa Repairing',
  'Wall Panels','Texture Painting'
]

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item} <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

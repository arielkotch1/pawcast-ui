export default function GuideSection({ eyebrow, title, hero = false, children }) {
  return (
    <section>
      <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-4">
        {eyebrow}
      </p>
      {hero ? (
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          {title}
        </h1>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">{title}</h2>
      )}
      {children}
    </section>
  )
}

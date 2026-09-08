import Image from "next/image"

export default function PhoneMockup({ src, alt, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10" />
        <Image src={src} alt={alt} className="w-full h-auto block" priority />
      </div>
    </div>
  )
}

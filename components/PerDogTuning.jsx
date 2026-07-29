import BreedBased1 from "@/public/breed-based1.png"
import Image from "next/image"
import DogCard from "./Calculation"
export default function PerDogTuning() {
  const dogs = [
    {
      dogName: "Maple",
      initials: "M",
      nextWalk: "Today",

      currentHour: 4,
      until: "7 PM",
      type: "Dangerous",
      hours: [
        "safe",
        "safe",
        "caution",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "dangerous",
        "caution",
        "safe",
        "safe",
      ],
    },
    {
      dogName: "Jesse",
      initials: "J",
      nextWalk: "Today",
      until: "8 PM",
      type: "Caution",
      currentHour: 4,
      hours: [
        "safe",
        "safe",
        "safe",
        "safe",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "caution",
        "safe",
        "safe",
      ],
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-600 tracking-widest mb-4">BREED-BASED</p>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Same weather. <em className="italic text-gray-700">Different dogs.</em>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed max-w-[700px]">
          Pawsout looks beyond the forecast, combining your dog's unique traits with temperature,
          sun, wind, and ground conditions to estimate how safe a walk really is.
        </p>
      </div>

      {/* Dog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {dogs.map((data) => (
          <DogCard mockData={data} key={data?.dogName} />
        ))}
      </div>
    </section>
  )
}

import BreedBased1 from "@/public/breed-based1.png"
import Image from "next/image"
import DogCard from "./Calculation"
import ForcastCard from "./ForcastCard"
export default function Forcast() {
  const dogs = [
    {
      day: "TOMMOROW",
      date: "July 21",
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
      day: "SAT",
      date: "AUG 1",
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
    {
      day: "SUN",
      date: "AUG 2",
      hours: [
        "safe",
        "safe",
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
        "safe",
        "safe",
      ],
    },
  ]

  return (
    <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-5 md:mb-6">
        <p className="text-sm font-semibold text-gray-600 tracking-widest mb-4">3-DAY FORCAST</p>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6">
          Three Days. <em className="italic text-gray-700">One forecast.</em>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed max-w-[700px]">
          See dog-friendly weather, temperature, and walk safety for the next three days.
        </p>
      </div>

      {/* Dog Cards */}
      <div className="w-full max-w-full rounded-[40px] flex flex-col gap-5 border border-white/10 bg-[#1c1c1c] p-6  md:p-10 text-white">
        {dogs.map((data, index) => (
          <ForcastCard mockData={data} key={index} />
        ))}
      </div>
    </section>
  )
}

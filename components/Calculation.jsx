const statusColors = {
  safe: "bg-green-500",
  caution: "bg-yellow-500",
  dangerous: "bg-red-500",
}

const textColors = {
  safe: "text-green-500",
  caution: "text-yellow-500",
  dangerous: "text-red-500",
}

const timeLabels = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"]

export default function DogCard({ mockData = {} }) {
  return (
    <div className="w-full max-w-full rounded-[40px] border border-white/10 bg-[#1c1c1c] p-6 text-white">
      {/* Avatar */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#373737]">
        <span className="text-lg font-semibold">M</span>
      </div>

      {/* Name */}
      <h2 className="mb-2 text-[32px] font-bold tracking-tight">{mockData.dogName}</h2>

      {/* Next walk */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-md text-white/50">Next walk window</span>

        <span className="text-md font-semibold">{mockData.nextWalk}</span>
      </div>

      {/* Safe until */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[28px] md:text-[32px] font-bold">
          <span className={`${textColors[mockData?.type.toLowerCase()]}`}>
            {mockData?.type} {""}
          </span>
          until
        </span>

        <span
          className={`text-[28px] md:text-[32px] font-bold underline ${textColors[mockData?.type.toLowerCase()]}`}
        >
          {mockData.until}
        </span>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-[6px]">
          {mockData.hours.map((status, index) => (
            <div
              key={index}
              style={{
                opacity: mockData?.currentHour > index ? "50%" : "100%",
              }}
              className={`h-[30px] md:h-[40px] flex-1 rounded-full ${statusColors[status]}`}
            />
          ))}
        </div>

        {/* Time labels */}
        <div className="mt-1 flex justify-between">
          {timeLabels.map((time) => (
            <span key={time} className="text-[10px] text-white/60">
              {time}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

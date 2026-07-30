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

export default function ForcastCard({ mockData = {} }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Timeline */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2 font-semibold  items-center">
          <div>{mockData?.day}</div>
          <div>·</div>
          <div>{mockData?.date}</div>
          <div className="h-px flex-1 bg-neutral-600/30" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-[6px] md:gap-[10px]">
            {mockData.hours.map((status, index) => (
              <div
                key={index}
                style={{
                  opacity: mockData?.currentHour > index ? "50%" : "100%",
                }}
                className={`h-[30px] md:h-[90px] flex-1 rounded-full ${statusColors[status]}`}
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
    </div>
  )
}

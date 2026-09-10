import Link from "next/link"

const earlySigns = [
  "Unusually heavy panting that does not settle",
  "Thick or excessive drooling",
  "Bright or dark red gums and tongue",
  "Lagging behind or refusing to walk",
  "Seeking shade",
  "Restlessness",
]

const emergencySigns = [
  "Stumbling or loss of balance",
  "Vomiting or diarrhea",
  "Confusion or unresponsiveness",
  "Pale or bluish gums",
  "Muscle tremors or seizures",
  "Collapse",
]

const emergencySteps = [
  {
    step: "1",
    title: "Stop immediately",
    detail: "End the walk or activity. Do not push your dog to keep moving.",
  },
  {
    step: "2",
    title: "Move to shade or air conditioning",
    detail: "Get off hot pavement and into the coolest place available.",
  },
  {
    step: "3",
    title: "Cool with water — not ice",
    detail: "Apply cool (not ice-cold) water to the chest, neck, abdomen, and paws.",
  },
  {
    step: "4",
    title: "Increase airflow",
    detail: "Use a fan or car AC to help evaporative cooling.",
  },
  {
    step: "5",
    title: "Offer small sips of water",
    detail: "Only if your dog is alert enough to drink on their own.",
  },
  {
    step: "6",
    title: "Go to an emergency vet",
    detail: "Transport right away — even if your dog seems to be recovering.",
  },
]

const protocolCorrections = [
  {
    wrong: "Don't use ice baths or ice packs",
    right: "Cool water only. Ice causes blood vessels to constrict and can trap heat inside.",
  },
  {
    wrong: "Don't wrap your dog in wet towels",
    right: "Keep airflow moving. Wet fur plus still air traps heat.",
  },
  {
    wrong: "Don't restart the walk",
    right: "Stop for the day. Internal temperature can still be dangerously high.",
  },
  {
    wrong: "Don't wait for recovery at home",
    right: "Heatstroke can relapse. Always seek emergency vet care.",
  },
  {
    wrong: "Don't force water into their mouth",
    right:
      "Offer only small sips if your dog is alert and swallowing normally. Never pour water into their mouth because they can inhale it.",
  },
]

function SignCard({ label, tone, items }) {
  const toneStyles = {
    caution: "border-yellow-400/60 bg-yellow-50/70",
    danger: "border-red-400/60 bg-red-50/70",
  }

  return (
    <div className={`rounded-3xl border p-6 md:p-8 ${toneStyles[tone]}`}>
      <p className="text-xs font-semibold tracking-widest text-gray-600 mb-4">{label}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-gray-800 leading-relaxed">
            <span
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                tone === "danger" ? "bg-red-500" : "bg-yellow-500"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function OverheatingSigns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SignCard label="EARLY WARNING SIGNS" tone="caution" items={earlySigns} />
      <SignCard label="EMERGENCY SIGNS" tone="danger" items={emergencySigns} />
    </div>
  )
}

export function OverheatActions() {
  return (
    <ol className="space-y-4">
      {emergencySteps.map((item) => (
        <li
          key={item.step}
          className="rounded-3xl border border-gray-200/40 bg-white/60 backdrop-blur p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-highlight text-white font-bold">
              {item.step}
            </span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function EmergencyProtocolCorrections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {protocolCorrections.map((item) => (
        <div
          key={item.wrong}
          className="rounded-3xl border border-gray-200/40 bg-white/60 backdrop-blur p-6 md:p-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest text-red-600 mb-2">DO NOT</p>
            <p className="text-lg md:text-xl text-gray-900 font-bold leading-tight mb-4">
              {item.wrong}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-green-700 mb-2">INSTEAD</p>
            <p className="text-gray-700 leading-relaxed">{item.right}</p>
          </div>
        </div>
      ))}
      <Link
        href="/dog-heat-exhaustion-emergency-preparedness"
        className="rounded-3xl bg-highlight p-6 md:p-8 text-white hover:bg-brand transition-colors"
      >
        <p className="text-xs font-semibold tracking-widest text-white/80 mb-2">
          EMERGENCY ACTION / VET CALL
        </p>
        <h3 className="text-xl font-bold mb-3">Call your emergency vet now</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          Cooling is first aid, not treatment. Call your nearest emergency veterinarian and go
          immediately, even if your dog seems better.
        </p>
        <span className="font-semibold underline underline-offset-4">
          Read the full emergency protocol →
        </span>
      </Link>
    </div>
  )
}

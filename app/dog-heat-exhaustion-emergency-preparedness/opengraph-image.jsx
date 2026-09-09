import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Warning signs your dog is overheating"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const [urbanistBold, urbanistMedium, phone] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Urbanist-Bold.ttf")),
    readFile(join(process.cwd(), "public/fonts/Urbanist-Medium.ttf")),
    readFile(join(process.cwd(), "public/homescreen.png")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          color: "#1A2634",
          backgroundColor: "#E8F3EE",
          backgroundImage:
            "linear-gradient(135deg, #E8F3EE 0%, rgba(184,216,200,0.9) 10%, #5EA280 100%)",
          backgroundRepeat: "no-repeat",
          padding: "60px",
          justifyContent: "space-between",
          fontFamily: "Urbanist",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              backgroundColor: "#5EA280",
              color: "white",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontSize: 20,
              fontWeight: 600,
              fontFamily: "Urbanist",
            }}
          >
            PawsOut | Dog Walk Weather
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              width: 700,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#374151",
                fontFamily: "Urbanist",
              }}
            >
              EMERGENCY PREPAREDNESS
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.05,
                width: 680,
                display: "flex",
                flexWrap: "wrap",
                fontFamily: "Urbanist",
              }}
            >
              Warning signs your dog is overheating
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.45,
                color: "#374151",
                fontWeight: 500,
                fontFamily: "Urbanist",
                width: 640,
              }}
            >
              Warning signs, risk factors, and emergency steps when your dog
              overheats — including what not to do during cooling.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              backgroundColor: "#000",
              padding: 12,
              borderRadius: 48,
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={`data:image/png;base64,${phone.toString("base64")}`}
              alt=""
              style={{
                width: 260,
                height: 520,
                objectFit: "cover",
                borderRadius: 36,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Urbanist",
          data: urbanistMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "Urbanist",
          data: urbanistBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  )
}

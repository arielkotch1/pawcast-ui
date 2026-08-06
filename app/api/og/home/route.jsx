import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const urbanistBold = await fetch(
  new URL("/fonts/Urbanist-Bold.ttf", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
).then((res) => res.arrayBuffer())

const urbanistMedium = await fetch(
  new URL(
    "/fonts/Urbanist-Medium.ttf",
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
).then((res) => res.arrayBuffer())

export async function GET() {
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
          gap: "24px",
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
            Pawsout
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
            <h1
              style={{
                fontSize: 80,
                fontWeight: 700,
                lineHeight: 1.05,
                margin: 0,
                width: 600,
                display: "flex",
                flexWrap: "wrap",
                fontFamily: "Urbanist",
              }}
            >
              <span>Because dogs feel weather&nbsp;</span>
              <span
                style={{
                  color: "#374151",
                  fontStyle: "italic",
                }}
              >
                differently.
              </span>
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: 24,
                lineHeight: 1.45,
                color: "#4B5563",
                fontWeight: 500,
                fontFamily: "Urbanist",
              }}
            >
              Built on the Canine Thermal Model (CTM) to calculate when it's safe to walk your dog
              based on weather, breed, and pavement temperature.
            </p>
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
              src={new URL(
                "/homescreen.png",
                process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/",
              ).toString()}
              style={{
                width: 260,
                height: 560,
                objectFit: "cover",
                borderRadius: 36,
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#333",
            }}
          >
            <img
              src="https://unhead.unjs.io/logo.svg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                fontFamily: "Urbanist",
              }}
            >
              Harlan Wilton
            </span>

            <span
              style={{
                fontSize: 24,
                color: "#a1a1aa",
                fontWeight: 500,
                fontFamily: "Urbanist",
              }}
            >
              8/6/2026
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
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

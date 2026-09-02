const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawsout.app"

export const ogImage = {
  url: `${baseUrl}/og.png`,
  secureUrl: `${baseUrl}/og.png`,
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "PawsOut - Dog Weather Safety",
}

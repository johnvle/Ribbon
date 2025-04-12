import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const barbers = [
  {
    id: 1,
    name: "Daniel S.",
    image: "/placeholder.svg?height=200&width=200",
    reviewCount: 232,
    shopName: "Fresh Barbershop",
    serviceTags: [
      { name: "fades", icon: "💇" },
      { name: "shaves", icon: "🪒" },
    ],
    ratingTags: ["style", "price", "hair type", "beard & moustache"],
    location: {
      lat: 37.7749,
      lng: -122.4194,
      address: "123 Barber St, San Francisco, CA",
    },
  },
  {
    id: 2,
    name: "Mark C.",
    image: "/placeholder.svg?height=200&width=200",
    reviewCount: 400,
    shopName: "King's Cuts",
    serviceTags: [
      { name: "fades", icon: "💇" },
      { name: "perms", icon: "🔄" },
    ],
    ratingTags: ["style", "hair type", "perms", "beard & moustache"],
    location: {
      lat: 37.7833,
      lng: -122.4167,
      address: "456 Haircut Ave, San Francisco, CA",
    },
  },
  {
    id: 3,
    name: "Jin K.",
    image: "/placeholder.svg?height=200&width=200",
    reviewCount: 134,
    shopName: "XYZ Barbers",
    serviceTags: [
      { name: "fades", icon: "💇" },
      { name: "designs", icon: "✂️" },
    ],
    ratingTags: ["style", "price", "hair type", "beard & moustache"],
    location: {
      lat: 37.7694,
      lng: -122.4862,
      address: "789 Styling Blvd, San Francisco, CA",
    },
  },
]

export async function GET(request: Request) {
  // In a real app, you would filter based on query parameters
  // const { searchParams } = new URL(request.url)
  // const hairType = searchParams.get('hairType')
  // const haircutType = searchParams.get('haircutType')

  // For now, just return all barbers
  return NextResponse.json(barbers)
}

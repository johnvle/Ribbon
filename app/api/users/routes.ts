import { NextResponse } from "next/server"

// Mock user data - in a real app, this would come from a database
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  hairType: "2c",
  preferences: {
    haircutTypes: ["fade", "taper"],
    services: ["haircut", "beard"],
    priceRange: [20, 50],
    atmosphere: ["casual"],
    frequency: "bi-weekly",
  },
  location: {
    address: "San Francisco, CA",
    radius: 5, // miles
  },
}

export async function GET() {
  return NextResponse.json(user)
}

export async function PUT(request: Request) {
  const data = await request.json()

  // In a real app, you would update the user in the database
  // and return the updated user

  return NextResponse.json({
    ...user,
    ...data,
  })
}

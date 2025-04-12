import Image from "next/image";
import { Bell } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { BarberCard } from "@/components/barber-card";

// Mock data - would come from API in real app
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
  },
];

export default function Home() {
  return (
    <main className="pb-20">
      <div className="p-4">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="User avatar"
                fill
                className="rounded-full bg-primary"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
                😊
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Welcome,</p>
              <h1 className="text-2xl font-bold">John</h1>
            </div>
          </div>
          <button className="p-2">
            <Bell className="h-6 w-6" />
          </button>
        </header>

        <div className="bg-card rounded-full px-4 py-3 flex items-center mb-6">
          <div className="mr-2 text-xl">🏆</div>
          <h2 className="font-bold text-lg">Your Barber Picks</h2>
        </div>

        <div className="space-y-4">
          {barbers.map((barber) => (
            <BarberCard
              key={barber.id}
              name={barber.name}
              image={barber.image}
              reviewCount={barber.reviewCount}
              shopName={barber.shopName}
              serviceTags={barber.serviceTags}
              ratingTags={barber.ratingTags}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  );
}

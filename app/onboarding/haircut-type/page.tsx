import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const haircutTypes = [
  { id: "fade", name: "Fade", image: "/placeholder.svg?height=100&width=100" },
  { id: "taper", name: "Taper", image: "/placeholder.svg?height=100&width=100" },
  { id: "undercut", name: "Undercut", image: "/placeholder.svg?height=100&width=100" },
  { id: "buzzcut", name: "Buzz Cut", image: "/placeholder.svg?height=100&width=100" },
  { id: "crewcut", name: "Crew Cut", image: "/placeholder.svg?height=100&width=100" },
  { id: "pompadour", name: "Pompadour", image: "/placeholder.svg?height=100&width=100" },
]

export default function HaircutTypePage() {
  return (
    <>
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-bold mb-2">What haircut are you looking for?</h1>
        <p className="text-muted-foreground">Select the styles you're interested in</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {haircutTypes.map((type) => (
          <div
            key={type.id}
            className="border border-border rounded-xl p-4 flex flex-col items-center hover:border-primary cursor-pointer"
          >
            <Image src={type.image || "/placeholder.svg"} alt={type.name} width={100} height={100} className="mb-3" />
            <p className="font-medium">{type.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Button asChild className="w-full py-6 rounded-xl text-base">
          <Link href="/onboarding/services">Continue</Link>
        </Button>
      </div>
    </>
  )
}

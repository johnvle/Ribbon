import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const hairTypes = [
  { id: "1a", name: "Straight (Fine/Thin)", image: "/placeholder.svg?height=80&width=80" },
  { id: "1b", name: "Straight (Medium)", image: "/placeholder.svg?height=80&width=80" },
  { id: "1c", name: "Straight (Coarse)", image: "/placeholder.svg?height=80&width=80" },
  { id: "2a", name: "Wavy (Fine/Thin)", image: "/placeholder.svg?height=80&width=80" },
  { id: "2b", name: "Wavy (Medium)", image: "/placeholder.svg?height=80&width=80" },
  { id: "2c", name: "Wavy (Coarse)", image: "/placeholder.svg?height=80&width=80" },
  { id: "3a", name: "Curly (Loose)", image: "/placeholder.svg?height=80&width=80" },
  { id: "3b", name: "Curly (Tight)", image: "/placeholder.svg?height=80&width=80" },
  { id: "3c", name: "Curly (Coily)", image: "/placeholder.svg?height=80&width=80" },
  { id: "4a", name: "Coily (Soft)", image: "/placeholder.svg?height=80&width=80" },
  { id: "4b", name: "Coily (Wiry)", image: "/placeholder.svg?height=80&width=80" },
  { id: "4c", name: "Coily (Tight)", image: "/placeholder.svg?height=80&width=80" },
]

export default function HairTypePage() {
  return (
    <>
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-bold mb-2">What's your hair type?</h1>
        <p className="text-muted-foreground">This helps us find barbers who specialize in your hair type</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {hairTypes.map((type) => (
          <div
            key={type.id}
            className="border border-border rounded-xl p-3 flex flex-col items-center hover:border-primary cursor-pointer"
          >
            <Image src={type.image || "/placeholder.svg"} alt={type.name} width={80} height={80} className="mb-2" />
            <p className="text-sm text-center">{type.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Button asChild className="w-full py-6 rounded-xl text-base">
          <Link href="/onboarding/haircut-type">Continue</Link>
        </Button>
      </div>
    </>
  )
}

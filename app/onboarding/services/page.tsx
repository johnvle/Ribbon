import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  { id: "haircut", name: "Haircut" },
  { id: "beard", name: "Beard Trim" },
  { id: "shave", name: "Straight Razor Shave" },
  { id: "color", name: "Hair Coloring" },
  { id: "perm", name: "Perm" },
  { id: "design", name: "Hair Design" },
  { id: "treatment", name: "Hair Treatment" },
  { id: "styling", name: "Styling" },
]

export default function ServicesPage() {
  return (
    <>
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-bold mb-2">What services are you looking for?</h1>
        <p className="text-muted-foreground">Select all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-border rounded-xl p-4 flex items-center hover:border-primary cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full border border-border mr-3"></div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Button asChild className="w-full py-6 rounded-xl text-base">
          <Link href="/onboarding/preferences">Continue</Link>
        </Button>
      </div>
    </>
  )
}

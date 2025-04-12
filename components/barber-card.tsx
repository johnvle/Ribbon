import Image from "next/image"
import { MapPin, Star } from "lucide-react"

type ServiceTag = {
  name: string
  icon: string
}

type BarberCardProps = {
  name: string
  image: string
  reviewCount: number
  shopName: string
  serviceTags: ServiceTag[]
  ratingTags: string[]
}

export function BarberCard({ name, image, reviewCount, shopName, serviceTags, ratingTags }: BarberCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 mb-3">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="rounded-full object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-secondary">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="ml-1 text-sm text-foreground">{reviewCount} Reviews</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="ml-1 text-sm">{shopName}</span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {serviceTags.map((tag) => (
            <div key={tag.name} className="flex items-center bg-muted/50 rounded-full px-3 py-1">
              <span className="mr-1">{tag.icon}</span>
              <span className="text-xs">{tag.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full text-sm mb-3">
          <p className="text-accent mb-2">
            <span className="text-accent">★</span> Users with your hair type rated this barber highly for your
            preferences in:
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {ratingTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-end mt-2">
          <a href="#" className="text-sm text-muted-foreground flex items-center">
            see barber
            <span className="ml-1 bg-muted w-6 h-6 rounded-full flex items-center justify-center">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

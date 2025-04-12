import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PreferencesPage() {
  return (
    <>
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-bold mb-2">What matters most to you?</h1>
        <p className="text-muted-foreground">This helps us prioritize recommendations</p>
      </div>

      <div className="space-y-4 w-full mb-8">
        <div className="border border-border rounded-xl p-4">
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">$</span>
            <span className="text-sm text-muted-foreground">$$</span>
            <span className="text-sm text-muted-foreground">$$$</span>
            <span className="text-sm text-muted-foreground">$$$$</span>
          </div>
          <div className="h-2 bg-muted rounded-full mt-2 relative">
            <div className="absolute h-full w-1/2 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="border border-border rounded-xl p-4">
          <h3 className="font-medium mb-2">Atmosphere</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Modern
            </div>
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Traditional
            </div>
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Luxury
            </div>
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Casual
            </div>
          </div>
        </div>

        <div className="border border-border rounded-xl p-4">
          <h3 className="font-medium mb-2">How often do you get a haircut?</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Weekly
            </div>
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Bi-weekly
            </div>
            <div className="border border-border rounded-lg p-2 text-sm text-center hover:border-primary cursor-pointer">
              Monthly
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Button asChild className="w-full py-6 rounded-xl text-base">
          <Link href="/onboarding/location">Continue</Link>
        </Button>
      </div>
    </>
  )
}

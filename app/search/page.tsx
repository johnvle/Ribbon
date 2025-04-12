import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter } from "lucide-react";

export default function SearchPage() {
  return (
    <main className="pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Find Barbers</h1>

        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search barbers or shops"
              className="w-full pl-9 pr-4 py-2 rounded-full border border-border bg-card"
            />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center mb-6">
          <MapPin className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm">San Francisco, CA</span>
          <span className="text-xs text-muted-foreground ml-2">
            (5 mile radius)
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-card rounded-xl p-4 flex gap-3">
            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">Fresh Barbershop</h3>
                <div className="flex items-center">
                  <span className="text-secondary">★</span>
                  <span className="text-sm ml-1">4.8</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                0.8 miles away
              </p>
              <div className="flex gap-2">
                <span className="tag">fades</span>
                <span className="tag">beard trims</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 flex gap-3">
            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">King's Cuts</h3>
                <div className="flex items-center">
                  <span className="text-secondary">★</span>
                  <span className="text-sm ml-1">4.6</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                1.2 miles away
              </p>
              <div className="flex gap-2">
                <span className="tag">fades</span>
                <span className="tag">perms</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 flex gap-3">
            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">XYZ Barbers</h3>
                <div className="flex items-center">
                  <span className="text-secondary">★</span>
                  <span className="text-sm ml-1">4.5</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                2.5 miles away
              </p>
              <div className="flex gap-2">
                <span className="tag">designs</span>
                <span className="tag">fades</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}

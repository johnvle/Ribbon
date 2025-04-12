import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Settings, Star, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="pb-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center mb-8">
          <Avatar className="h-16 w-16 mr-4 bg-primary">
            <AvatarImage
              src="/placeholder.svg?height=100&width=100"
              alt="User avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">john@example.com</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-card rounded-xl p-4">
            <h3 className="font-medium mb-3">Your Hair Profile</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Hair Type</p>
                <p className="font-medium">Wavy (2C)</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Preferred Cut</p>
                <p className="font-medium">Fade</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Services</p>
                <p className="font-medium">Haircut, Beard</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Frequency</p>
                <p className="font-medium">Bi-weekly</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-3">
              Edit Hair Profile
            </Button>
          </div>

          <Link
            href="/favorites"
            className="bg-card rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <Star className="h-5 w-5 text-secondary mr-3" />
              <span>Favorite Barbers</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>

          <Link
            href="/appointments"
            className="bg-card rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-accent mr-3" />
              <span>Appointment History</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>

          <Link
            href="/location"
            className="bg-card rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <div>
                <span className="block">Location</span>
                <span className="text-sm text-muted-foreground">
                  San Francisco, CA
                </span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
        </div>

        <Button variant="outline" className="w-full">
          Log Out
        </Button>
      </div>

      <BottomNav />
    </main>
  );
}

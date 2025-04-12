import Link from "next/link"
import { Home, Search, User } from "lucide-react"

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border h-16 flex items-center justify-around">
      <Link href="/" className="flex flex-col items-center text-primary">
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center text-muted-foreground">
        <Search className="h-6 w-6" />
        <span className="text-xs mt-1">Search</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-muted-foreground">
        <User className="h-6 w-6" />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  )
}

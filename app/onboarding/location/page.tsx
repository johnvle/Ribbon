import type React from "react"
export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4 flex flex-col items-center justify-center max-w-md mx-auto w-full">{children}</main>
    </div>
  )
}

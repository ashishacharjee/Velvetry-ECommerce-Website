import { LandingHeader } from "@/components/landing-header"
import { LandingHero } from "@/components/landing-hero"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <LandingHero />
      </main>
    </div>
  )
}

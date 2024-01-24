import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'

export default function Home() {
    return (
        <main className="min-h-[300vh] bg-background">
            <HeroSection />
            <ServicesSection />
        </main>
    )
}

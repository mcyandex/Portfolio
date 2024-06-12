import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectSection from '@/components/ProjectSection'
import SkillsSection from '@/components/Skills'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
    return (
        <main className="min-h-[300vh] bg-background">
            <HeroSection />
            <ServicesSection />
            <ProjectSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
    )
}

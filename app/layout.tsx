import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chirag Bhalotia',
    description: 'Chirag Bhalotia | Full Stack Web Developer',
    icons: '/favicon.png',
    creator:"Chirag Bhalotia",
    
    authors: [
        {
            name: 'Chirag Bhalotia',
            url: 'https://github.com/chirag3003',
        },
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text bg-background dark`}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    )
}

import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Miguel Cano',
    description: 'Miguel Cano | Full Stack Web Developer',
    icons: '/favicon.png',
    creator:"Miguel Cano",
    
    authors: [
        {
            name: 'Miguel Cano',
            url: 'https://github.com/mcyandex',
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

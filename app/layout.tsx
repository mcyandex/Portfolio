import { Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

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
            <body className={`${inter.className} text-text bg-background dark`}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    )
}

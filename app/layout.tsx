import { Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chirag Bhalotia',
    description: 'Chirag Bhalotia | Full Stack Web Developer',
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

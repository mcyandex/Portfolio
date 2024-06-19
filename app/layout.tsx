'use client'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Spinner } from '@/components/Spinner'
import { useEffect, useState } from 'react'

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2300)
    }, [])
    return (
        <html lang="en">
            <body className={`text-text bg-background dark`}>
                {!loading ? (
                    <div className="flex h-screen flex-col justify-center">
                        <div className="m-auto">
                            <Spinner />
                        </div>
                    </div>
                ) : (
                    <>
                        <Navbar />
                        {children}
                        <Toaster />
                    </>
                )}
            </body>
        </html>
    )
}

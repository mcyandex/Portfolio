'use client'

import React, { useState } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const navLinks = [
    {
        name: 'Link 1',
        link: '#about',
    },
    {
        name: 'Link 2',
        link: '#',
    },
    {
        name: 'Link 3',
        link: '#',
    },
]

function Navbar() {
    const { scrollY } = useScroll()
    const borderRadius = useTransform(
        scrollY,
        [0, 200, 200],
        ['0rem', '0rem', '3rem']
    )
    const top = useTransform(scrollY, [0, 200, 200], ['0rem', '0rem', '1rem'])
    const width = useTransform(scrollY, [0, 200, 200], ['100%', '100%', '95%'])
    const height = useMotionValue<'0' | '1000px'>('1000px')
    const opacity = useMotionValue<'0' | '1'>('1')

    function toggleNav() {
        if (height.get() === '1000px') {
            height.set('0')
            opacity.set('0')
        } else {
            height.set('1000px')
            opacity.set('1')
        }
    }

    return (
        <motion.div
            className="bg-[var(--nav)] shadow-sm mx-auto  fixed left-0 right-0 transition-all"
            style={{
                borderRadius: borderRadius,
                top: top,
                width: width,
            }}
        >
            <div className="wrapper px-10 py-5 w-full relative">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <header className="flex items-center gap-1">
                        <span>{'< '}</span>
                        <h1 className="text-2xl font-medium"> {'Chirag'}</h1>
                        <span>{' />'}</span>
                    </header>
                    <nav className="text-muted gap-8 hidden items-center  lg:flex">
                        {navLinks.map(({ name, link }, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link}
                                    className="hover:text-foreground hover:scale-110 transition-all"
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </nav>
                    <Button
                        onClick={toggleNav}
                        variant={'ghost'}
                        className="lg:hidden"
                    >
                        <MenuIcon />
                    </Button>
                </div>
                <motion.div
                    style={{
                        opacity,
                        maxHeight: height,
                    }}
                    className="mobile-nav absolute lg:hidden top-[120%] mx-auto w-[95vw] left-0 right-0 transition-all overflow-hidden"
                >
                    <Card className="p-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(({ name, link }, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link}
                                        className="text-lg"
                                    >
                                        {name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Navbar

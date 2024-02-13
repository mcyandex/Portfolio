'use client'

import { Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { GitHub, Instagram } from 'react-feather'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useToast } from './ui/use-toast'
import { title } from 'process'
import Image from 'next/image'

function HeroSection() {
    const { toast } = useToast()
    return (
        <section className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28">
            <div className="text w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-3xl">
                    Hi I{"'"}m <br />
                    <span className="text-6xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        Chirag
                    </span>
                </h1>
                <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
                    Greetings! I{"'"}m a passionate full-stack web developer
                    with over three years of hands-on experience. I thrive on
                    turning ideas into seamless digital experiences. With a
                    background in freelancing, I bring a proven track record of
                    delivering exceptional services to diverse clients. Let{"'"}
                    s craft something extraordinary together!
                </p>
                <div className="links mt-10 flex items-center gap-6">
                    <Link
                        href={'https://github.com/chirag3003'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <GitHub height={35} width={35} />
                        <div className="sr-only">Github</div>
                    </Link>
                    <Link
                        href={'https://linkedin.com/in/chiragbhalotia'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Linkedin height={35} width={35} />
                        <div className="sr-only">Linkedin</div>
                    </Link>
                    <Link
                        href={'https://www.instagram.com/code.chirag'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Instagram height={35} width={35} />
                        <div className="sr-only">Instagram</div>
                    </Link>
                    <Link
                        href={'mailto:me@chirag.codes'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Mail height={35} width={35} />
                        <div className="sr-only">Email</div>
                    </Link>
                </div>
                <div className="button gap-2 flex items-center flex-col md:flex-row my-5">
                    <Link
                        href="#contact"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            'font-bold text-xl md:w-auto w-full'
                        )}
                    >
                        Contact Me
                    </Link>
                    <Button
                        size={'lg'}
                        className={cn('font-bold text-xl md:w-auto w-full')}
                        onClick={() => {
                            toast({
                                title: 'Projects page coming soon!',
                                description:
                                    'Till then you can take a look at my github',
                            })
                        }}
                    >
                        My Projects
                    </Button>
                </div>
            </div>
            <div className="image w-full lg:w-1/2 relative aspect-square -mt-10 ">
                <Image
                    src="/chirag.webp"
                    className="w-full aspect-square"
                    alt=""
                    fill={true}
                    priority={true}
                />
                <div className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0"></div>
            </div>
        </section>
    )
}

export default HeroSection

import { Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { GitHub } from 'react-feather'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import ProjectButton from './projectButton'

function HeroSection() {
    return (
        <section id='home' className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28">
            <div className="text w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-3xl">

                    <span className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        Miguel Cano <br />
                    </span>
                </h1>
                <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
                    Hello, I am a highly experienced and versatile AI expert, specializing in Generative AI, Large Language Models(LLM), Retrieval-Augmented Generation(RAG), Natural Language Processing(NLP), Computer Vision , and Data Science.
                    I am passionate about working to solve complex problems and drive innovation in artificial intelligence.
                    I look forward to contributing to your business.
                    <br />
                    <br />Please feel free to reach out to me.
                </p>
                <div className="links mt-10 flex items-center gap-6">
                    <Link
                        href={'https://github.com/mcyandex'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <GitHub height={35} width={35} />
                        <div className="sr-only">Github</div>
                    </Link>
                    <Link
                        href={'https://linkedin.com/in/Miguelbhalotia'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Linkedin height={35} width={35} />
                        <div className="sr-only">Linkedin</div>
                    </Link>
                    <Link
                        href={'mailto:me@Miguel.codes'}
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
                    <ProjectButton />
                </div>
            </div>
            <div className="image w-full lg:w-1/2 relative aspect-square mt-20 ">
                <Image
                    src="/myphoto.png"
                    className="w-full aspect-square rounded-full"
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

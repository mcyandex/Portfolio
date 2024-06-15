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
        <section
            id="home"
            className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28 gap-32"
        >
            <div className="image w-3/4 md:w-1/2 lg:w-1/2 relative aspect-square mt-20 ">
                <Image
                    src="/stume.png"
                    className="w-full object-cover aspect-square rounded-3xl opacity-80"
                    alt=""
                    fill={true}
                    priority={true}
                />
                <div className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0"></div>
            </div>
            <div className="text w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-3xl">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        Miguel Cano <br />
                    </span>
                </h1>
                <p className="lg:text-lg text-muted mt-4 font-medium">
                    Experienced AI Engineer with 5 years of expertise at
                    Sancrisoft and Rewire, specializing in cutting-edge
                    technologies such as AI chatbot, langchain, RAG, and
                    Generative AI. With a strong background in natural language
                    processing, and AI-driven systems, I have successfully
                    implemented projects that have significantly improved
                    retention rates and optimized real-time applications. My
                    proficiency in prompt engineering and the use of advanced
                    LLM tools like ChatGPT enables me to deliver exceptional
                    results. As a senior AI engineer, I bring a wealth of
                    expertise and a passion for pushing the boundaries of AI
                    technology.
                    
                </p>
            </div>
        </section>
    )
}

export default HeroSection

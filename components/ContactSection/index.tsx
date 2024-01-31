import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { GitHub, Instagram, Mail } from 'react-feather'
import { Linkedin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'

function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full px-10 max-w-7xl mx-auto py-28"
        >
            <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                Contact Me
            </h2>
            <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-10">
                <div className="contacts w-full flex-col flex gap-5">
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={'https://github.com/chirag3003'}
                        className="flex items-center w-full justify-left text-2xl gap-5 font-bold px-10 py-5 bg-accent/10 rounded-xl"
                    >
                        <GitHub height={35} width={35} />
                        <p>Github</p>
                    </Link>
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={'https://linkedin.com/in/chiragbhalotia'}
                        className="flex items-center w-full justify-left text-2xl gap-5 font-bold px-10 py-5 bg-accent/10 rounded-xl"
                    >
                        <Linkedin height={35} width={35} />
                        <p>LinkedIn</p>
                    </Link>
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={'https://www.instagram.com/code.chirag'}
                        className="flex items-center w-full justify-left text-2xl gap-5 font-bold px-10 py-5 bg-accent/10 rounded-xl"
                    >
                        <Instagram height={35} width={35} />
                        <p>Instagram</p>
                    </Link>
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={'mail:me@chirag.codes'}
                        className="flex items-center w-full justify-left text-2xl gap-5 font-bold px-10 py-5 bg-accent/10 rounded-xl"
                    >
                        <Mail height={35} width={35} />
                        <p>Email</p>
                    </Link>
                </div>
                <div className="form w-full h-full overflow-hidden flex-col flex gap-5">
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Textarea
                        placeholder="Type your message here."
                        className="resize-none flex-1 h-full"
                    />
                    <Button className="w-full text-xl font-medium">
                        Send Message
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

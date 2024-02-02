import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall, Dribbble } from 'react-feather'

interface TestimonialProps {
    body: string
    name: string
    email: string
    pfp?: string
    linkedin?: string
    github?: string
    instagram?: string
    dribbble?: string
    phone?: string
}

function Testimonial({
    body,
    name,
    email,
    pfp,
    dribbble,
    github,
    instagram,
    linkedin,
    phone,
}: TestimonialProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8 flex-1">
                <p>{`“${body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:px-12 lg:flex-nowrap">
                {pfp && (
                    <img
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={pfp}
                        alt=""
                    />
                )}
                <div className="flex-auto">
                    <div className="font-semibold">{name}</div>
                    <div className="text-muted">{`${email}`}</div>
                </div>
                <div className="links flex items-center gap-1 text-primary">
                    {instagram && (
                        <a
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="rounded-full hover:bg-secondary p-2"
                            href={instagram}
                        >
                            <Instagram />
                            <div className="sr-only">Instagram</div>
                        </a>
                    )}
                    {linkedin && (
                        <a
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="rounded-full hover:bg-secondary p-2"
                            href={linkedin}
                        >
                            <Linkedin />
                            <div className="sr-only">Linkedin</div>
                        </a>
                    )}
                    {github && (
                        <a
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="rounded-full hover:bg-secondary p-2"
                            href={github}
                        >
                            <GitHub />
                            <div className="sr-only">Github</div>
                        </a>
                    )}
                    {dribbble && (
                        <a
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="rounded-full hover:bg-secondary p-2"
                            href={dribbble}
                        >
                            <Dribbble />
                            <div className="sr-only">Dribbble</div>
                        </a>
                    )}
                    {phone && (
                        <a
                            className="rounded-full hover:bg-secondary p-2"
                            href=""
                        >
                            <PhoneCall />
                        </a>
                    )}
                </div>
            </figcaption>
        </figure>
    )
}

export default Testimonial

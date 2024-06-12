import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall, Dribbble } from 'react-feather'

interface TestimonialProps {
    body: string
    name: string
    pfp?: string
}

function Testimonial({
    body,
    name,
    pfp
}: TestimonialProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8 flex-1">
                <p>{`“${body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:px-12 lg:flex-nowrap">
                {pfp && (
                    <img
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={pfp}
                        alt={name}
                    />
                )}
                <div className="flex-auto">
                    <div className="font-semibold">{name}</div>
                  
                </div>
            </figcaption>
        </figure>
    )
}

export default Testimonial

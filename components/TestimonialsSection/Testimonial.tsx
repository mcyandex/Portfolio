import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall } from 'react-feather'

interface TestimonialProps {
    body: string
    name: string
    email: string
}

function Testimonial({ body, name, email }: TestimonialProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8 flex-1">
                <p>{`“${body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:px-12 lg:flex-nowrap">
                {/* <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                /> */}
                <div className="flex-auto">
                    <div className="font-semibold">
                        {name}
                    </div>
                    <div className="text-muted">{`${email}`}</div>
                </div>
                {/* <div className="links flex items-center gap-1 text-primary">
                    <a className="rounded-full hover:bg-secondary p-2" href="">
                        <Instagram />
                    </a>
                    <a className="rounded-full hover:bg-secondary p-2" href="">
                        <Linkedin />
                    </a>
                    <a className="rounded-full hover:bg-secondary p-2" href="">
                        <GitHub />
                    </a>
                    <a className="rounded-full hover:bg-secondary p-2" href="">
                        <PhoneCall />
                    </a>
                </div> */}
            </figcaption>
        </figure>
    )
}

export default Testimonial

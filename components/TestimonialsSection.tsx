import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall } from 'react-feather'
const featuredTestimonial = {
    body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
    author: {
        name: 'Brenna Goyette',
        handle: 'brennagoyette',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
        logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
}
function TestimonialsSection() {
    return (
        <section className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-20">
                    Testimonials
                </h2>
                <div className="testimonials">
                    <div className="md:w-1/2">
                        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary sm:col-span-2 xl:col-start-2 xl:row-end-1">
                            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8">
                                <p>{`“${featuredTestimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 lg:flex-nowrap">
                                <img
                                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                    src={featuredTestimonial.author.imageUrl}
                                    alt=""
                                />
                                <div className="flex-auto">
                                    <div className="font-semibold">
                                        {featuredTestimonial.author.name}
                                    </div>
                                    <div className="text-muted">{`@${featuredTestimonial.author.handle}`}</div>
                                </div>
                                <div className="links flex items-center gap-1 text-primary">
                                    <a
                                        className="rounded-full hover:bg-secondary p-2"
                                        href=""
                                    >
                                        <Instagram />
                                    </a>
                                    <a
                                        className="rounded-full hover:bg-secondary p-2"
                                        href=""
                                    >
                                        <Linkedin />
                                    </a>
                                    <a
                                        className="rounded-full hover:bg-secondary p-2"
                                        href=""
                                    >
                                        <GitHub />
                                    </a>
                                    <a
                                        className="rounded-full hover:bg-secondary p-2"
                                        href=""
                                    >
                                        <PhoneCall />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection

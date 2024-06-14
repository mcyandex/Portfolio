import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall, Dribbble } from 'react-feather'

interface ExperienceProps {
    img: string
    role: string
    company: string
    during: string
    description: string[]
}

function Experience({
    img,
    role,
    company,
    during,
    description,
}: ExperienceProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col">
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:px-12 lg:flex-nowrap">
                {img && (
                    <img
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={img}
                        alt={company}
                    />
                )}
                <div className="flex-auto">
                    <div className="font-semibold">{role}</div>
                </div>
            </figcaption>
            <div className="flex flex-col items-end mx-10">
                <div>{company}</div>
                <div>{during}</div>
            </div>
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8 flex-1">
                <ol>
                    {description.map((item, index) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ol>
            </blockquote>
        </figure>
    )
}

export default Experience

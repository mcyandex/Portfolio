import React from 'react'
import { Instagram, Linkedin, GitHub, PhoneCall, Dribbble } from 'react-feather'

interface EducationProps {
    title: string
    university: string
    img?: string
}

function Education({ title, university, img }: EducationProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight sm:p-12 sm:text-xl sm:leading-8 flex-1">
                <p>{`“${title}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:px-12 lg:flex-nowrap">
                {img && (
                    <img
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={img}
                        alt={university}
                    />
                )}
                <div className="flex-auto">
                    <div className="font-semibold">{university}</div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Education

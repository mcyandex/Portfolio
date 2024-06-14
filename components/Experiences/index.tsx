import React from 'react'
import Experience from './Experience'
import experiences from '@/configs/experiences'

function ExperiencesSection() {
    return (
        <section id="experiences" className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                    Experience
                </h2>
                <div className="experiences grid md:grid-cols-2 gap-4">
                    {experiences.map((experience, index) => {
                        return <Experience {...experience} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExperiencesSection

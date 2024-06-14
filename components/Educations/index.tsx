import React from 'react'
import Education from './Education'
import educations from '@/configs/educations'

function EducationsSection() {
    return (
        <section id="educations">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                    Education
                </h2>
                <div className="educations grid md:grid-cols-2 gap-4">
                    {educations.map((education, index) => {
                        return <Education {...education} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default EducationsSection

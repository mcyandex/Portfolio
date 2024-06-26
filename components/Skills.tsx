import skills from '@/configs/skills'
import React from 'react'

function SkillsSection() {
    return (
        <section
            id="skills"
            className="lg:min-h-screen max-w-7xl mx-auto p-10  py-28"
        >
            <h2 className="text-primary text-5xl md:text-6xl font-semibold mb-20">
                My Skills
            </h2>
            <div className="flex flex-col-reverse lg:flex-row w-full items-center ">
                <div className="w-3/4 md:w-1/2 items-center px-10">
                    <img
                        loading="lazy"
                        src="/robot3.jpg"
                        alt=""
                        className="w-full aspect-square object-cover opacity-80 rounded-3xl"
                    />
                </div>
                <div className="w-full lg:px-20 lg:w-1/2 grid grid-cols-3  md:grid-cols-5 gap-10 lg:gap-1">
                    {skills.map(({ name, icon }, index) => {
                        return (
                            <div
                                key={index}
                                className="skill w-full flex flex-col items-center gap-4 px-4"
                            >
                                <img
                                    src={icon}
                                    alt=""
                                    loading="lazy"
                                    className="w-full aspect-square"
                                />
                                <p className="text-center">{name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection

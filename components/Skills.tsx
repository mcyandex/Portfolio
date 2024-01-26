import React from 'react'

function SkillsSection() {
    return (
        <section className="lg:min-h-screen max-w-7xl mx-auto p-10 lg:px-0 py-28">
            <h2 className="text-primary text-6xl font-semibold mb-20">
                My Skills
            </h2>
            <div className="flex flex-col-reverse lg:flex-row w-full">
                <div className="w-full lg:w-1/2 items-center px-10">
                    <img
                        src="/image1.svg"
                        alt=""
                        className="w-full aspect-square"
                    />
                </div>
                <div className="w-full lg:w-1/2 grid grid-cols-2 lg:grid-cols-4">
                    <div className="skill w-full flex-col items-center">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection

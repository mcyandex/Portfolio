'use client'

import React from 'react'
import Experience from './Experience'
import experiences from '@/configs/experiences'
import { motion } from 'framer-motion'

function ExperiencesSection() {
    return (
        <section id="experiences" className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                    Experience
                </h2>
                <div className="experiences grid md:grid-cols-2 gap-4">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0.4,
                                y: 200,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="w-full h-full"
                        >
                            <Experience {...experience} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperiencesSection

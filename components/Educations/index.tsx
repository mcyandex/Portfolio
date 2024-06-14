'use client'

import React from 'react'
import educations from '@/configs/educations'
import Education from './Education'
import { motion } from 'framer-motion'

function EducationsSection() {
    return (
        <section id="educations">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                    Education
                </h2>
                <div className="educations grid md:grid-cols-2 gap-4">
                    {educations.map((education, index) => (
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
                            <Education {...education} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationsSection

'use client'

import React from 'react'
import Testimonial from './Testimonial'
import testimonials from '@/configs/testimonials'
import { motion } from 'framer-motion'

function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                    Our Clients Feedback
                </h2>
                <div className="testimonials grid md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
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
                            <Testimonial {...testimonial}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import services from '@/configs/services'

function ServicesSection() {
    return (
        <section className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary text-6xl font-semibold mb-20">
                    My Services
                </h2>
                <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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
                            <Card className="h-full">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="w-auto m-8 mx-20 aspect-square"
                                />
                                <CardHeader>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection

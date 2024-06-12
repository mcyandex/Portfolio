'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import projects from '@/configs/projects'
import { Link } from 'lucide-react'

function ProjectsSection() {
    return (
        <section id="services" className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary text-5xl md:text-6xl font-semibold mb-20">
                    My Projects
                </h2>
                <div className="services grid grid-cols-1 md:grid-cols-2  gap-8">
                    {projects.map((project, index) => (
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
                            <Card className="">
                                <a href={project.url}>
                                <img
                                    src={project.img}
                                    alt="img"
                                    className="w-[1000px] h-[350px] p-[10px] rounded-[20px]"
                                />
                                </a>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection

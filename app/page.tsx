import { Linkedin, Mail } from 'lucide-react'
import { GitHub, Instagram } from 'react-feather'

export default function Home() {
    return (
        <main className="flex min-h-[300vh] bg-background">
            <section className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10 lg:px-0 max-w-7xl mx-auto">
                <div className="text w-full lg:w-1/2">
                    <h1 className="text-3xl">
                        Hi I{"'"}m <br />
                        <span className="text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                            Chirag
                        </span>
                    </h1>
                    <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
                        Greetings! I'm a passionate full-stack web developer
                        with over three years of hands-on experience. I thrive
                        on turning ideas into seamless digital experiences. With
                        a background in freelancing, I bring a proven track
                        record of delivering exceptional services to diverse
                        clients. Let's craft something extraordinary together!
                    </p>
                    <div className="links mt-10 flex items-center gap-6">
                        <a className="hover:scale-110 cursor-pointer">
                            <GitHub height={35} width={35} />
                        </a>
                        <a className="hover:scale-110 cursor-pointer">
                            <Linkedin height={35} width={35} />
                        </a>
                        <a className="hover:scale-110 cursor-pointer">
                            <Instagram height={35} width={35} />
                        </a>
                        <a className="hover:scale-110 cursor-pointer">
                            <Mail height={35} width={35} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

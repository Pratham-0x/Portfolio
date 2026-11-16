import { useGSAP } from "@gsap/react"
import Project from "./project/project"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
function Projects() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {

        const projects = gsap.utils.toArray(".project")
        console.log(projects)
        projects.forEach(project => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: "center center",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                }
            })
            tl.from(project, {
                y: "50%",
                opacity: 0,
                scale: 0.5,
                x: 200,
                
            }).to(project, {
                scale: 0.5,
                y: "-50%",
                x: -200,
                opacity: 0,
                
            })
        })
        const tl = gsap.timeline( {
            opacity:0,
            scrollTrigger:{
                trigger: "#projects",
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                toggleActions: "play none none reverse"
            }
        })

        tl.from("#projects", {
            opacity: 0
        }).to(".projects", {
            scrollTrigger:{
                trigger: ".projects",
                start: "top top",
                end: "bottom center",
                scrub: true,
                pinSpacing: false
            }
        })

        gsap.to(".heading", {
            opacity: 0,
            x: "-20px",
            scrollTrigger: {
                trigger: ".projects",
                start: "bottom 90%",
                scrub: true
            }
        })
    })
    const backgrounds = {
        tenbin: "/tenbin.png",
        watchsync: "/watchsync.jpg",
        quickshort: "/quickshort.png",
        musicplayertui: "/MusicPlayertui.png"
    }

    return (
        <>
            <section id="projects" className="bg-black flex flex-row overflow-hidden">

                <div 
                className="heading relative flex font-extrabold text-[3rem] flex-1 h-screen items-center justify-center"
                >
                Projects Gallery
                </div>

                <div className="projects overflow-hidden flex-2 flex flex-col items-center relative">

                <Project projName="Tenbin" projDesc="A real-time multiplayer experience inspired by Alice in Borderland. Built around timed challenges, room-based interactions, and live communication using Socket.IO." demoLink="https://tenbinn.vercel.app" bgimg={backgrounds.tenbin}  />

                <Project projName="WatchSync" projDesc="A synchronized watch-party application where people can watch videos together in real time. Features shared playback controls and live chat, powered by Socket.IO." demoLink="https://watchsync.onrender.com" bgimg={backgrounds.watchsync}  />

                <Project projName="Quick-Short" projDesc="A lightweight URL shortener that transforms long, messy links into compact, shareable URLs. Focused on keeping link generation simple and straightforward." bgimg={backgrounds.quickshort} />

                <Project projName="Music Player TUI" projDesc="A terminal-based music player built with Python and Textual. Search YouTube Music, manage playback queues, and listen through MPV without leaving the terminal." bgimg={backgrounds.musicplayertui}/>

                </div>
            </section>
        </>
    )
}

export default Projects
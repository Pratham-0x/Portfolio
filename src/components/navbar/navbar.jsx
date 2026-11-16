import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Navbar() {
    const nav_link = "navbtn navbtn relative cursor-pointer select-none border-b hover:-bottom-0.5 hover:scale-0.5 hover:text-[rgb(255,255,255,0.5)]"
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const navbtns = gsap.utils.toArray(".navbtn");

        gsap.from(".nav",
            {
                y: 10,
                opacity: 0,
            }
        )
        gsap.to(".nav-links",{
            right: 0,
            y: 1,
            scrollTrigger: {
                trigger: ".nav",
                start: "top top",
                scrub: true,

            }
        })
        gsap.to(navbtns,{
            x: 20,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".nav",
                start: "top top",
                end: "+=200%",
                toggleActions: "play none none reverse"
            }
        })
        gsap.to(".port-head",{
            x: -200,
            scrollTrigger: {
                trigger: ".nav",
                start: "top top",
                // toggleActions: "play none none reverse",
                scrub: 1.5,

            },
            ease: "sine.out"
            // duration: 1
        })

    })

    return (<>
        <div className="nav fixed z-9999 top-0 text-[1rem] left-0 w-full overflow-hidden py-3 pl-5 pr-4 flex justify-between">
            <div className="port-head"><span className="bg-white px-1 text-black rounded-4xl">P</span>ortfolio..</div>
            <div className="nav-links flex">
                <a href="#projects" className={nav_link}>
                    Projects

                </a>
                <a href="#about" className={nav_link}>
                    About

                </a>
                <a href="#skills" className={nav_link}>
                    Skills

                </a>
                <a className={nav_link}>
                    Contact

                </a>
            </div>
        </div>
    </>)
}

export default Navbar
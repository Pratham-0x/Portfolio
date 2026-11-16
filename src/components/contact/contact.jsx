import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Contact(){
    useGSAP(()=>{
        gsap.to(".contact", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".contact",
                start: "top top",
                scrub: true,
                pin: true,

            }
        })
    })
    return(
    <>
        <section id="contact" className="relative p-10 contact h-screen min-w-full opacity-0 text-white font-[3rem]">
        <div className="text-6xl h-[60%] pl-10 pt-30">
            GOT SOMETHING <br /> INTERESTING?  
            <br />
            <span className="text-white/30">LET'S MAKE IT.</span> 
            </div>
        <div className="border-t m-2 pl-5 pt-5 text-3xl flex flex-col">
            <span className="gap-10 text-white/20">DROP ME A MESSAGE</span> <br />
            <span className="gap-10"><a className="hover:border-b" href="mailto:pratham0xx8@gmail.com?subject=Let's%20build%20something" target="_blank">Say Hello ↗</a></span> <br />
            <span className="gap-10 text-white/20">pratham0xx8@gmail.com</span>
        </div>
        </section>
    </>
    )
}

export default Contact

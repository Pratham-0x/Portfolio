import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function About() {
    const div_css = "h-svh flex item-center bg-red m-2 text-center justify-center text-[2.5rem] about-line"
    useGSAP(() => {
        const about_lines = gsap.utils.toArray(".about-line")
        
        

        about_lines.forEach(line => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "-50% top",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                }
            })
            tl.from(line, {
                y: "-50%",
                opacity: 0,
                scale: 0.5,
                x: 200,
                
            }).to(line, {
                scale: 0.5,
                y: "-50%",
                x: -200,
                opacity: 0,
                
            })
        })

        const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".last-line",
                    start: "-50% top",
                    end: "100% top",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                }
            })
            tl.from(".last-line", {
                opacity: 0,
                
            }).to(".last-line", {
                scale: 5,
                yPercent: 60,
                xPercent: 50,
                fontStyle: "bold",
                // y: "-50%",
                // x: -200,
                // opacity: 0,
                
            }).to(".last-line", {
                scale: 40,
                yPercent: 350,
                xPercent: 400,
            }).to(".last-line", {
                scale: 90,
                yPercent: 950,
                xPercent: 950
            })

            gsap.to(".last-line", {
                scale: 0,
                scrollTrigger: {
                    trigger: "#about",
                    start: "110% top",  
                    toggleActions: "play none none reverse",
                }
            })
    })



    return (
        <>
            <section id="about" className='overflow-hidden about relative flex flex-col min-w-full h-auto'>
                <div className={div_css}>I build things that probably started as weird ideas</div>
                <div className={div_css}>I build to understand, experiment, and occasionally break things.</div>
                <div className={div_css}>Not everything needs a purpose. Sometimes it just needs to exist.</div>
                <div className={div_css}>Sometimes I code just to see what happens.</div>
                <div className="h-svh flex item-center relative top-[-5%] bg-red m-2 font-extrabold text-center justify-center text-[15rem] last-line">AND</div>
            </section>
        </>
    )
}

export default About
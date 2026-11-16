import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"

function Skills() {
    const sec_ref = useRef(null)
    const div_css = "skill-set w-full z-999 text-4xl m-2 flex flex-col items-center pt-50"
    useGSAP(() => {
        const skills = gsap.utils.toArray("li")

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "center center",
                end: "60% top",
                scrub: 1,
                toggleActions: "play none none reverse",
                pin: true,
                pinSpacing: false
            }
        })
        const chars = []
        function chars_roll() {

            skills.forEach(skill => {
                const skill_chars = new SplitText(skill, "chars, words")
                skill_chars.chars.forEach(char => {
                    chars.push(char)
                    gsap.set(char, {
                        y: `+=${gsap.utils.random(-700, 700)}px`,
                        x: `+=${gsap.utils.random(-500, 500)}px`,
                        rotationZ: gsap.utils.random(0, 359),
                    })
                })
            })
            return 1
        }
        // chars_roll()

        tl.from(".skills", {
            onStart: chars_roll(),
            opacity: 0
        }).to(chars, {
            x: 0,
            y: 0,
            color: "black",
            rotationZ: 0,
        }).to(".skills", {
            color: "white",
            backgroundColor: "black"
        }).to(chars, {
            color: "white"
        })
        
        gsap.to(chars, {
            opacity: 0,
            scrollTrigger: {
                start: "bottom 99.1%",
                end: "120% center",
                pin: true,
                pinSpacing: false,
                trigger: ".skills",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        })

    })
    return (
        <>
            <section ref={sec_ref} id="skills" className="overflow-hidden bg-white text-black skills h-lvh flex-1 w-full flex flex-row justify-center">
                <span className="Skills-chart text-[3rem] absolute top-10 font-bold left-[calc(50%-7.5vw)] w-[30vw] text-white hidden">Skills</span>
                <ul className={div_css}>
                    <li><h1 style={{ fontWeight: "bolder" }}>Languages</h1></li>
                    <li>C</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                </ul>
                <ul className={div_css}>
                    <li><h1 style={{ fontWeight: "bolder" }}>Frontend</h1></li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Varlet Ui</li>
                    <li>Gsap</li>
                    

                </ul>
                <ul className={div_css}>
                    <li><h1 style={{ fontWeight: "bolder" }}>Backend</h1></li>
                    <li>Nodejs</li>
                    <li>socket io</li>
                    <li>Expressjs</li>
                    <li>Mongoose</li>
                    <li>Postgresql</li>

                </ul>
                <ul className={div_css}>
                    <li><h1 style={{ fontWeight: "bolder" }}>Tools</h1></li>
                    <li>VSCode</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Figma</li>

                </ul>



            </section>
        </>
    )
}

export default Skills
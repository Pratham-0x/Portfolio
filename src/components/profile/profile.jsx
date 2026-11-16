import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

function Profile() {
    useGSAP(() => {
        const name = new SplitText(".largee-name", { type: 'chars, words' })
        name.chars.forEach((char) => {
            char.classList.add("text-gradient")
        })

        // ScrollTrigger.create({
        //     trigger: ".profile",
        //     start: "top top",
        //     end: "+=100%",
        //     pin: true,
        //     pinSpacing: false,
        // })

        gsap.from(".largee-name",
            {
                x: -20,
                opacity: 0,
                ease: 'back.out',
                delay: 0.3
            }
        )

        gsap.from(".greet",
            {
                y: -10,
                opacity: 0,
            }
        )

        gsap.to(".profile", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".profile",
                start: "top top",
                end: "+=50%",
                pin: true,
                pinSpacing: false,
                scrub: 1,
            }
        })
    })
    return (
        <>
            <section className='profile relative py-60 w-full overflow-hidden' >
                {/* <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,#000000ff,#000000ff,#000000ee,transparent)]'></div> */}
                <span className='relative self-center text-center'>
                    <div className='greet font-sans font-extralight text-[clamp(2rem,3vw,5rem)]'>Hi, I am</div>
                    <div className='font-bold text-[5rem] largee-name'>Pratham</div>
                </span>
            </section>
        </>
    )
}

export default Profile
function Project(props) {
    const { bgimg, projName, projDesc, demoLink } = props

    let project_wrap = "project relative w-[30vw] border m-30 flex flex-1 flex-col items-center overflow-hidden rounded"


    return (
        <>
            <section style={{
                backgroundImage: `url("${bgimg}")`
            }} className={project_wrap} >
                <div className="absolute inset-0 backdrop-blur -z-10 bg-black/60 pointer-events-none"></div>
                <div className="rounded overflow-hidden w-[90%] mt-2 z-2 border"><img src={bgimg} alt="" /></div>
                <div className="z-2 font-bold text-[1.5rem] self-start ml-4">{projName}</div>
                <div className='z-3 font-mono mt-2 mx-5 mb-4 text-[14px]'>{projDesc}</div>
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mx-5 mb-4 px-4 py-2 border border-white/40 rounded-full text-sm font-mono hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Live Demo <span>↗</span>
                    </a>
                )}
            </section>
        </>
    )




}

export default Project
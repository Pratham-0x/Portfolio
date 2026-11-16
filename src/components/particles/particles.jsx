
import { useEffect, useRef } from "react";

function Particles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let animation;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            particles = Array.from({ length: 45 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(90,110,95,0.5)";
                ctx.fill();

                particles.slice(i + 1).forEach(other => {
                    const dx = p.x - other.x;
                    const dy = p.y - other.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < 110) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle =
                            `rgba(90,110,95,${0.12 * (1 - distance / 110)})`;
                        ctx.stroke();
                    }
                });
            });

            animation = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animation);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
        />
    );
}

export default Particles;

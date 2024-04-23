"use client";
import { useEffect, useRef } from "react";

const WebGLPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Initialize WebGL context
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('Unable to initialize WebGL.');
            return;
        }

    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={800} height={600} />
            <iframe
                src="/KyberConquest/index.html"
                title="Kyber Conquest Game"
                width="800"
                height="600"
            ></iframe>
        </div>
    );
};

export default WebGLPage;
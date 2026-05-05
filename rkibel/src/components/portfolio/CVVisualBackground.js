"use client";

import { useEffect, useRef } from "react";

export default function CVVisualBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId;
    const points = Array.from({ length: 42 }, (_, index) => ({
      x: (index * 73) % 997,
      y: (index * 151) % 677,
      z: 0.35 + ((index * 17) % 60) / 100,
    }));

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw() {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;

      const gridSize = Math.max(42, Math.min(width, height) / 8);
      context.strokeStyle = "rgba(56, 189, 248, 0.08)";
      for (let x = -gridSize; x < width + gridSize; x += gridSize) {
        context.beginPath();
        context.moveTo(x + ((frame * 0.16) % gridSize), 0);
        context.lineTo(x - width * 0.12, height);
        context.stroke();
      }
      for (let y = 0; y < height + gridSize; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y + height * 0.18);
        context.stroke();
      }

      const cx = width * 0.66;
      const cy = height * 0.46;
      context.strokeStyle = "rgba(34, 211, 238, 0.36)";
      [[-120, -72], [132, -88], [150, 82], [-142, 94]].forEach(([x, y]) => {
        context.beginPath();
        context.moveTo(cx, cy);
        context.lineTo(cx + x, cy + y);
        context.stroke();
      });
      context.strokeRect(cx - 142, cy - 88, 292, 182);

      context.strokeStyle = "rgba(167, 139, 250, 0.42)";
      context.strokeRect(width * 0.12, height * 0.23, width * 0.22, height * 0.17);
      context.strokeRect(width * 0.2, height * 0.58, width * 0.18, height * 0.13);

      points.forEach((point, index) => {
        const t = frame * 0.006 + index;
        const x = ((point.x / 1000) * width + Math.sin(t) * 18) % width;
        const y = ((point.y / 680) * height + Math.cos(t * 0.8) * 14) % height;
        const radius = 1.4 + point.z * 2.2;
        context.fillStyle = index % 5 === 0 ? "rgba(52, 211, 153, 0.9)" : "rgba(125, 211, 252, 0.78)";
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
        if (index % 7 === 0) {
          context.strokeStyle = "rgba(52, 211, 153, 0.22)";
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(cx, cy);
          context.stroke();
        }
      });

      context.strokeStyle = "rgba(52, 211, 153, 0.46)";
      context.beginPath();
      context.moveTo(cx, cy);
      context.lineTo(cx + 72, cy);
      context.moveTo(cx, cy);
      context.lineTo(cx, cy - 70);
      context.moveTo(cx, cy);
      context.lineTo(cx - 46, cy + 56);
      context.stroke();

      if (!reduceMotion) {
        frame += 1;
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-90"
      aria-hidden="true"
    />
  );
}

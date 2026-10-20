import React, { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Retina & 4K High-DPI Scaling for Razor-Sharp Lines
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Floating Stardust Particles
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.4,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      baseAlpha: Math.random() * 0.5 + 0.2,
      isPurple: Math.random() > 0.6
    }));

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.012;

      // 1. Drifting Twinkling Stars & Cyber Dust
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const alpha = p.baseAlpha + Math.sin(time * 2.5 + p.x) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isPurple
          ? `rgba(217, 70, 239, ${Math.max(0.1, Math.min(0.85, alpha))})`
          : `rgba(0, 240, 255, ${Math.max(0.1, Math.min(0.85, alpha))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.isPurple ? '#d946ef' : '#00f0ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2. 3D Cyberspace Wireframe Mesh: Horizontal Undulating Contour Lines
      const horizontalLines = 24;
      const baseHeight = h * 0.85;
      const gridSegments = 100;
      const gridPoints = [];

      for (let i = 0; i < horizontalLines; i++) {
        const progress = i / horizontalLines;
        const yOffset = baseHeight + (progress - 0.45) * (h * 0.24);
        const rowPoints = [];

        ctx.beginPath();
        const isAccent = i % 4 === 0;

        for (let j = 0; j <= gridSegments; j++) {
          const x = (j / gridSegments) * w;
          const wave1 = Math.sin(j * 0.045 + time * 1.1 + i * 0.12) * (26 + progress * 32);
          const wave2 = Math.cos(j * 0.02 - time * 0.7 + i * 0.08) * 18;
          
          // Upward curvature toward right edge
          const elevation = Math.pow(x / w, 2.2) * (h * 0.1);
          const y = yOffset + wave1 + wave2 - elevation;

          rowPoints.push({ x, y });

          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Color transition: Electric Cyan on Left -> Glowing Magenta/Purple on Right
        const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
        const alpha = Math.pow(progress, 0.75) * 0.48 + 0.08;
        lineGrad.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
        lineGrad.addColorStop(0.5, `rgba(56, 189, 248, ${alpha})`);
        lineGrad.addColorStop(1, `rgba(217, 70, 239, ${alpha + 0.25})`);

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = isAccent ? 1.8 : 1.0;
        ctx.shadowBlur = isAccent ? 10 : 0;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.6)';
        ctx.stroke();
        ctx.shadowBlur = 0;

        gridPoints.push(rowPoints);
      }

      // 3. 3D Perspective Cross-Grid Lines (Intersecting to create the cyberspace terrain net from Figma)
      const verticalLineCount = 36;
      for (let v = 0; v <= verticalLineCount; v++) {
        const colIdx = Math.floor((v / verticalLineCount) * gridSegments);
        ctx.beginPath();
        
        const xPos = (colIdx / gridSegments) * w;
        const colRatio = xPos / w;

        for (let row = 0; row < horizontalLines; row++) {
          const pt = gridPoints[row][colIdx];
          if (row === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }

        const vAlpha = 0.08 + Math.sin(time + v * 0.2) * 0.04;
        ctx.strokeStyle = colRatio > 0.6 
          ? `rgba(217, 70, 239, ${vAlpha + 0.06})` 
          : `rgba(0, 220, 255, ${vAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 4. Volumetric Light Ray Shimmer on Bottom-Right (exact to Figma screenshot)
      const rayGrad = ctx.createRadialGradient(w * 0.95, h * 0.95, 20, w * 0.85, h * 0.75, 450);
      rayGrad.addColorStop(0, 'rgba(192, 38, 211, 0.28)');
      rayGrad.addColorStop(0.5, 'rgba(147, 51, 234, 0.12)');
      rayGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = rayGrad;
      ctx.fillRect(w * 0.5, h * 0.5, w * 0.5, h * 0.5);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030614]">
      {/* 1. Official Background Image from Figma Site */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-opacity duration-700"
        style={{
          backgroundImage: 'linear-gradient(rgba(5, 10, 26, 0.4), #030614 98%), url(/assets/bg.jpg)',
          backgroundPosition: 'center 10%'
        }}
      />

      {/* 2. Intense Volumetric Cyan Reactor Bloom directly behind the wheel */}
      <div 
        className="absolute top-[32%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full pointer-events-none opacity-45 blur-[120px] animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0, 220, 255, 0.55) 0%, rgba(0, 110, 255, 0.22) 40%, transparent 70%)',
          animationDuration: '5s'
        }}
      />

      {/* 3. Glowing Magenta/Purple Atmospheric Nebula on bottom right (exact to Figma screenshot) */}
      <div 
        className="absolute bottom-[0%] right-[0%] w-[650px] h-[650px] rounded-full pointer-events-none opacity-35 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(192, 38, 211, 0.6) 0%, rgba(147, 51, 234, 0.3) 40%, transparent 75%)'
        }}
      />

      {/* 4. Fine 40px Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 5. 100% High-DPI 3D Cyberspace Mesh Canvas (Razor-Sharp Intersecting Grid & Waves) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

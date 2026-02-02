
import React, { useEffect, useRef } from 'react';

interface Planet {
  name: string;
  distance: number;
  radius: number;
  speed: number;
  color: string;
  angle: number;
  hasRings?: boolean;
  hasMoon?: boolean;
}

interface Meteorite {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  delay: number;
}

interface Asteroid {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  vertices: { x: number; y: number }[];
  craters: { x: number; y: number; r: number }[];
  opacity: number;
}

interface Nebula {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
  subClouds: { dx: number; dy: number; r: number }[];
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  fadeSpeed: number;
}

const SolarSystemBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const planets: Planet[] = [
      { name: 'Mercury', distance: 100, radius: 3, speed: 0.015, color: '#A5A5A5', angle: Math.random() * Math.PI * 2 },
      { name: 'Venus', distance: 150, radius: 6, speed: 0.01, color: '#E3BB76', angle: Math.random() * Math.PI * 2 },
      { name: 'Earth', distance: 220, radius: 7, speed: 0.008, color: '#2271B3', angle: Math.random() * Math.PI * 2, hasMoon: true },
      { name: 'Mars', distance: 290, radius: 5, speed: 0.006, color: '#E27B58', angle: Math.random() * Math.PI * 2 },
      { name: 'Jupiter', distance: 400, radius: 18, speed: 0.003, color: '#D39C7E', angle: Math.random() * Math.PI * 2 },
      { name: 'Saturn', distance: 520, radius: 15, speed: 0.002, color: '#C5AB6E', angle: Math.random() * Math.PI * 2, hasRings: true },
      { name: 'Uranus', distance: 620, radius: 10, speed: 0.0015, color: '#BBE1E4', angle: Math.random() * Math.PI * 2 },
      { name: 'Neptune', distance: 720, radius: 9, speed: 0.001, color: '#6081FF', angle: Math.random() * Math.PI * 2 },
    ];

    // Starfield generation with color tints
    const starColors = ['#FFF', '#FFF', '#E3F2FD', '#FFF9C4', '#FFEBEE'];
    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      opacity: Math.random(),
      twinkle: 0.005 + Math.random() * 0.015
    }));

    // Galactic Dust generation
    const dust: DustParticle[] = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.1,
      size: Math.random() * 2,
      opacity: Math.random() * 0.4,
      fadeSpeed: 0.002 + Math.random() * 0.005
    }));

    // Large Metroids (Asteroids) generation
    const createAsteroid = (): Asteroid => {
      const size = 15 + Math.random() * 45; // "Little large" variety
      const numVertices = 5 + Math.floor(Math.random() * 5);
      const vertices = Array.from({ length: numVertices }).map((_, i) => {
        const angle = (i / numVertices) * Math.PI * 2;
        const dist = size * (0.8 + Math.random() * 0.4);
        return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
      });
      
      const numCraters = Math.floor(Math.random() * 3);
      const craters = Array.from({ length: numCraters }).map(() => ({
        x: (Math.random() - 0.5) * size * 0.8,
        y: (Math.random() - 0.5) * size * 0.8,
        r: size * (0.1 + Math.random() * 0.2)
      }));

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        vx: (Math.random() - 0.5) * 0.15, // Slow speed
        vy: (Math.random() - 0.5) * 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        vertices,
        craters,
        opacity: 0.15 + Math.random() * 0.25
      };
    };

    const asteroids = Array.from({ length: 12 }).map(createAsteroid);

    // Nebula generation (Compound clouds)
    const nebulaColors = [
      'rgba(75, 0, 130, 0.08)',   // Indigo
      'rgba(0, 139, 139, 0.06)',  // Cyan
      'rgba(147, 112, 219, 0.05)', // Purple
      'rgba(0, 10, 50, 0.1)'       // Deep Blue
    ];

    const nebulae: Nebula[] = Array.from({ length: 5 }).map(() => {
      const baseRadius = 250 + Math.random() * 350;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        baseRadius,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        subClouds: Array.from({ length: 4 }).map(() => ({
          dx: (Math.random() - 0.5) * baseRadius,
          dy: (Math.random() - 0.5) * baseRadius,
          r: baseRadius * (0.6 + Math.random() * 0.6)
        }))
      };
    });

    // Meteorite generation
    const createMeteorite = (): Meteorite => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      length: 100 + Math.random() * 200,
      speed: 15 + Math.random() * 25,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 0,
      active: false,
      delay: Math.random() * 800
    });

    const meteorites = Array.from({ length: 3 }).map(createMeteorite);

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.8;
      const centerY = height * 0.5;

      // Draw Stars
      stars.forEach(star => {
        star.opacity += star.twinkle;
        if (star.opacity > 1 || star.opacity < 0.1) star.twinkle *= -1;
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Draw Dust (Subtle drift)
      dust.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.4 || p.opacity < 0.05) p.fadeSpeed *= -1;
        
        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(p.opacity)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Nebulae (Compound Clouds)
      ctx.globalCompositeOperation = 'screen';
      nebulae.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -n.baseRadius * 2) n.x = width + n.baseRadius * 2;
        if (n.x > width + n.baseRadius * 2) n.x = -n.baseRadius * 2;
        if (n.y < -n.baseRadius * 2) n.y = height + n.baseRadius * 2;
        if (n.y > height + n.baseRadius * 2) n.y = -n.baseRadius * 2;

        n.subClouds.forEach(sub => {
          const sx = n.x + sub.dx;
          const sy = n.y + sub.dy;
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sub.r);
          grad.addColorStop(0, n.color);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(sx, sy, sub.r, 0, Math.PI * 2);
          ctx.fill();
        });
      });
      ctx.globalCompositeOperation = 'source-over';

      // Draw Asteroids (Metroids) - Slow & Rotating
      asteroids.forEach(a => {
        a.x += a.vx;
        a.y += a.vy;
        a.rotation += a.rotationSpeed;

        // Wrap around screen
        if (a.x < -a.size * 2) a.x = width + a.size * 2;
        if (a.x > width + a.size * 2) a.x = -a.size * 2;
        if (a.y < -a.size * 2) a.y = height + a.size * 2;
        if (a.y > height + a.size * 2) a.y = -a.size * 2;

        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.rotate(a.rotation);
        
        // Draw main body
        ctx.beginPath();
        a.vertices.forEach((v, i) => {
          if (i === 0) ctx.moveTo(v.x, v.y);
          else ctx.lineTo(v.x, v.y);
        });
        ctx.closePath();
        
        const rockGrad = ctx.createLinearGradient(-a.size, -a.size, a.size, a.size);
        rockGrad.addColorStop(0, `rgba(100, 100, 110, ${a.opacity})`);
        rockGrad.addColorStop(1, `rgba(30, 30, 35, ${a.opacity})`);
        ctx.fillStyle = rockGrad;
        ctx.fill();

        // Draw craters
        a.craters.forEach(c => {
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${a.opacity * 0.4})`;
          ctx.fill();
        });

        ctx.restore();
      });

      // Update and Draw Meteorites
      meteorites.forEach(m => {
        if (!m.active) {
          m.delay--;
          if (m.delay <= 0) {
            m.active = true;
            m.x = -m.length;
            m.y = Math.random() * height * 0.8;
            m.opacity = 0.4 + Math.random() * 0.6;
          }
        } else {
          m.x += Math.cos(m.angle) * m.speed;
          m.y += Math.sin(m.angle) * m.speed;

          const gradient = ctx.createLinearGradient(
            m.x, m.y, 
            m.x - Math.cos(m.angle) * m.length, 
            m.y - Math.sin(m.angle) * m.length
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - Math.cos(m.angle) * m.length, m.y - Math.sin(m.angle) * m.length);
          ctx.stroke();

          if (m.x > width + m.length || m.y > height + m.length) {
            m.active = false;
            m.delay = 300 + Math.random() * 1000;
          }
        }
      });

      // Draw Sun - Reduced Intensity
      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50);
      sunGradient.addColorStop(0, 'rgba(255, 247, 204, 0.4)');
      sunGradient.addColorStop(0.2, 'rgba(255, 215, 0, 0.2)');
      sunGradient.addColorStop(0.6, 'rgba(255, 140, 0, 0.1)');
      sunGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
      ctx.fill();

      // Sun Core Glow - Softer
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(255, 140, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
      ctx.shadowBlur = 0;

      planets.forEach(planet => {
        planet.angle += planet.speed;

        // Orbit path
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, planet.distance, planet.distance * 0.6, 0, 0, Math.PI * 2);
        ctx.stroke();

        const x = centerX + Math.cos(planet.angle) * planet.distance;
        const y = centerY + Math.sin(planet.angle) * (planet.distance * 0.6);

        if (planet.hasRings) {
          ctx.strokeStyle = 'rgba(197, 171, 110, 0.2)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.ellipse(x, y, planet.radius * 2.2, planet.radius * 0.8, planet.angle, 0, Math.PI * 2);
          ctx.stroke();
        }

        const planetGrad = ctx.createRadialGradient(
          x - planet.radius * 0.3, 
          y - planet.radius * 0.3, 
          planet.radius * 0.1, 
          x, y, planet.radius
        );
        planetGrad.addColorStop(0, planet.color);
        planetGrad.addColorStop(1, '#000');

        ctx.fillStyle = planetGrad;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fill();

        // Moon
        if (planet.hasMoon) {
          const moonDist = 20;
          const moonAngle = Date.now() * 0.0015;
          const mx = x + Math.cos(moonAngle) * moonDist;
          const my = y + Math.sin(moonAngle) * (moonDist * 0.6);
          
          ctx.fillStyle = '#AAA';
          ctx.beginPath();
          ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SolarSystemBackground;

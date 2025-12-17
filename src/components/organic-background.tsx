"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uBaseSize;

  attribute vec3 aOffset;

  varying float vAlpha;
  varying vec2 vSize;
  varying vec2 vUv;
  varying float vWaveIntensity;

  mat2 rotate2d(float _angle) {
    return mat2(cos(_angle), -sin(_angle),
                sin(_angle), cos(_angle));
  }

  void main() {
    vec3 transformed = position;
    vUv = uv;

    // 1. DISTANCE & ANGLE
    float dist = distance(aOffset.xy, uMouse);
    vec2 dir = normalize(aOffset.xy - uMouse);
    float angle = atan(dir.y, dir.x);

    // 2. ORGANIC DISTORTION
    float distortion = sin(angle * 3.0 + uTime * 0.5) * sin(dist * 0.05) * 20.0;
    float organicDist = dist + distortion;

    // 3. VISIBILITY "DONUT" PROFILE
    float centerFade = smoothstep(45.0, 110.0, dist);
    float edgeFade = 1.0 - smoothstep(120.0, 250.0, dist);
    float visibility = centerFade * edgeFade;

    // Floor size at 1/100th
    float sizeMultiplier = 0.01 + 0.99 * visibility;

    // 4. STRETCH LOGIC
    float wavePulse = sin(organicDist * 0.1 - uTime * 1.5);
    float stretchFactor = 1.0 + 1.5 * smoothstep(0.0, 1.0, wavePulse);
    stretchFactor = clamp(stretchFactor, 1.0, 2.5);

    // 5. APPLY SCALING
    float finalWidth = stretchFactor * sizeMultiplier * uBaseSize;
    float finalHeight = sizeMultiplier * uBaseSize;

    transformed.x *= finalWidth;
    transformed.y *= finalHeight;

    // 6. ROTATION
    transformed.xy = rotate2d(angle) * transformed.xy;

    // 7. Z-AXIS WAVE
    float zWave = sin(organicDist * 0.08 - uTime * 1.5) * 6.0;
    vec3 finalPos = aOffset + vec3(0.0, 0.0, zWave * visibility);
    finalPos += transformed;

    // Pass data to Fragment Shader
    vAlpha = visibility;
    vSize = vec2(finalWidth, finalHeight);
    vWaveIntensity = smoothstep(-0.5, 1.0, wavePulse);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform vec3 uColorBase;
  uniform vec3 uColorAccent;

  varying float vAlpha;
  varying vec2 vSize;
  varying vec2 vUv;
  varying float vWaveIntensity;

  float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  void main() {
    // 1. Center & Aspect Ratio Correction
    vec2 centered = vUv * 2.0 - 1.0;
    float aspectRatio = vSize.x / vSize.y;
    centered.x *= aspectRatio;

    // 2. Define Shape
    vec2 boxBounds = vec2(aspectRatio, 1.0);
    float d = sdRoundedBox(centered, boxBounds, 1.0);

    // 3. Antialias Edge
    float alpha = 1.0 - smoothstep(0.0, 0.1, d);
    if (alpha < 0.01) discard;

    // 4. COLOR MIXING
    vec3 finalColor = mix(uColorBase, uColorAccent, vWaveIntensity);
    finalColor += vec3(0.1) * vWaveIntensity;

    // 5. OVERALL OPACITY (reduced for subtlety)
    float finalAlpha = alpha * vAlpha * 0.5;

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

const CONFIG = {
  lerpFactor: 0.008,    // Slow cursor delay
  density: 80,          // 80x80 grid = 6,400 particles
  area: 875,            // World units
  baseSize: 2.0,        // Small particles
};

const COLORS = {
  light: {
    base: 0xc8c8c0,     // Light gray (subtle, won't obscure text)
    accent: 0xa0d0d0,   // Lighter teal
  },
  dark: {
    base: 0x8a8a80,     // Lighter gray (visible against dark bg)
    accent: 0x40b0b0,   // Brighter teal
  },
};

export function OrganicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isDark = resolvedTheme === "dark";

    // Scene setup
    const scene = new THREE.Scene();

    // PerspectiveCamera (matching reference)
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 140);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Geometry
    const spacing = CONFIG.area / CONFIG.density;
    const baseGeometry = new THREE.PlaneGeometry(1, 1);
    const geometry = new THREE.InstancedBufferGeometry();

    geometry.index = baseGeometry.index;
    geometry.attributes.position = baseGeometry.attributes.position;
    geometry.attributes.uv = baseGeometry.attributes.uv;

    const particleCount = CONFIG.density * CONFIG.density;
    const offsets = new Float32Array(particleCount * 3);

    let i = 0;
    for (let x = 0; x < CONFIG.density; x++) {
      for (let y = 0; y < CONFIG.density; y++) {
        const xx = x * spacing - CONFIG.area / 2;
        const yy = y * spacing - CONFIG.area / 2;
        offsets[i * 3 + 0] = xx;
        offsets[i * 3 + 1] = yy;
        offsets[i * 3 + 2] = 0;
        i++;
      }
    }

    geometry.setAttribute(
      "aOffset",
      new THREE.InstancedBufferAttribute(offsets, 3)
    );

    // Material
    const colors = isDark ? COLORS.dark : COLORS.light;
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColorBase: { value: new THREE.Color(colors.base) },
        uColorAccent: { value: new THREE.Color(colors.accent) },
        uBaseSize: { value: CONFIG.baseSize },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse tracking
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const updateMousePosition = (clientX: number, clientY: number) => {
      const ndcX = (clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(clientY / window.innerHeight) * 2 + 1;

      const dist = camera.position.z;
      const vHeight =
        2.0 * Math.tan(((camera.fov * Math.PI) / 180) / 2) * dist;
      const vWidth = vHeight * camera.aspect;

      targetMouse.x = ndcX * (vWidth / 2);
      targetMouse.y = ndcY * (vHeight / 2);
    };

    const onMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = performance.now() * 0.001;

      mouse.x += (targetMouse.x - mouse.x) * CONFIG.lerpFactor;
      mouse.y += (targetMouse.y - mouse.y) * CONFIG.lerpFactor;

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouse);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);

      geometry.dispose();
      material.dispose();
      baseGeometry.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}

// Animation utility classes using Tailwind
export const fadeInUp = "animate-fade-in-up";
export const fadeIn = "animate-fade-in";
export const slideInRight = "animate-slide-in-right";
export const pulse = "animate-pulse";
export const bounce = "animate-bounce";
export const spin = "animate-spin";

// Stagger delay utilities
export const staggerDelay = (index: number) => ({
  animationDelay: `${index * 150}ms`,
});
const anime = require('animejs');

// Elegant entrance animations for luxury brand
export const fadeInUp = (targets: string | Element | Element[], delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000,
    delay,
    easing: 'easeOutQuart'
  });
};

export const scaleIn = (targets: string | Element | Element[], delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 800,
    delay,
    easing: 'easeOutBack(1.4)'
  });
};

export const slideInStagger = (targets: string | Element | Element[], staggerDelay = 100) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [60, 0],
    duration: 800,
    delay: anime.stagger(staggerDelay),
    easing: 'easeOutExpo'
  });
};

// Luxury hover animations
export const luxuryHover = (target: Element | null) => {
  if (!target) return;
  
  anime({
    targets: target,
    scale: [1, 1.05],
    duration: 300,
    easing: 'easeOutCubic'
  });
};

export const luxuryHoverOut = (target: Element | null) => {
  if (!target) return;
  
  anime({
    targets: target,
    scale: [1.05, 1],
    duration: 300,
    easing: 'easeOutCubic'
  });
};

// Separator/line drawing animation
export const drawLine = (targets: string | Element | Element[], delay = 0) => {
  return anime({
    targets,
    scaleX: [0, 1],
    opacity: [0, 1],
    duration: 800,
    delay,
    easing: 'easeOutCubic',
    transformOrigin: 'center'
  });
};

// Button hover animation
export const buttonHover = (target: Element | null) => {
  if (!target) return;
  
  anime({
    targets: target,
    scale: [1, 1.02],
    duration: 200,
    easing: 'easeOutQuart'
  });
};

export const buttonHoverOut = (target: Element | null) => {
  if (!target) return;
  
  anime({
    targets: target,
    scale: [1.02, 1],
    duration: 200,
    easing: 'easeOutQuart'
  });
};

// Letter animation for titles
export const letterAnimation = (target: Element | null) => {
  if (!target) return;
  
  const letters = target.querySelectorAll('span');
  
  anime({
    targets: letters,
    translateY: [-10, 0],
    duration: 600,
    delay: anime.stagger(50),
    easing: 'easeOutElastic(1, .8)'
  });
};

// Floating animation
export const floatingAnimation = (targets: string | Element | Element[]) => {
  return anime({
    targets,
    translateY: [-8, 8],
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });
};

// Page transition animation
export const pageTransition = () => {
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black z-50';
  overlay.style.transformOrigin = 'top';
  document.body.appendChild(overlay);
  
  anime.timeline()
    .add({
      targets: overlay,
      scaleY: [0, 1],
      duration: 400,
      easing: 'easeInQuart'
    })
    .add({
      targets: overlay,
      scaleY: [1, 0],
      duration: 400,
      easing: 'easeOutQuart',
      transformOrigin: 'bottom',
      complete: () => {
        document.body.removeChild(overlay);
      }
    });
};

// Intersection Observer hook for scroll animations
export const createScrollObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  threshold = 0.1
) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    { threshold }
  );
};

// Elegant section entrance
export const sectionEntrance = (
  titleSelector: string,
  separatorSelector: string,
  contentSelector: string
) => {
  return anime.timeline({
    easing: 'easeOutExpo'
  })
  .add({
    targets: titleSelector,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000,
    easing: 'easeOutQuart'
  })
  .add({
    targets: separatorSelector,
    scaleX: [0, 1],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutCubic'
  }, '-=600')
  .add({
    targets: contentSelector,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutQuart'
  }, '-=300');
};
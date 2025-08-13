function triggerConfetti(element) {
  const rect = element.getBoundingClientRect();
  const x = (rect.left + rect.right) / 2 / window.innerWidth;
  const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
  
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x, y },
    colors: ['#8D51FE', '#4ADE80', '#FFD700', '#FF69B4'],
    startVelocity: 30,
    gravity: 0.5,
    scalar: 0.7
  });
}

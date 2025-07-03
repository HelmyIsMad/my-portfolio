// Basic console log to show the script is running
console.log("Portfolio loaded for Mohamed Mahmoud Helmy");

// Optionally highlight skills on hover (minimal interactivity)
document.querySelectorAll('.skills li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#1e88e5';
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = '';
  });
});

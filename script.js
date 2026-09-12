document.addEventListener('DOMContentLoaded', () => {
  // Close the active section target after navigation on mobile browsers.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('href');
      if (target && target.length > 1) {
        history.replaceState(null, '', target);
      }
    });
  });
});

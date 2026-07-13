/* Bloqueadores — executados via defer, sem bloquear o parser HTML */

(function() {
  // Bloquear botão direito
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Bloquear F12 / Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
  });

  // Bloquear seleção de conteúdo
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
})();
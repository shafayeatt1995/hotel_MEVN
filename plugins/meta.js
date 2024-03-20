export default function () {
  function loadScript() {
    // Load font awesome
    const fa = document.createElement('link')
    fa.rel = 'stylesheet'
    fa.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
    document.head.appendChild(fa)
  }

  window.addEventListener('load', loadScript)
}

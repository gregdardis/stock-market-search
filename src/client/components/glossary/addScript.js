export function addScript(url) {
  const s = document.createElement('script');
  s.src = url;
  document.head.appendChild(s);
}
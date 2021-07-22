function contagem() {
  const button = document.querySelector('button');
  let clickCount = 0;
  button.addEventListener('click', () => {
    const span = document.querySelector('span');
    clickCount += 1;
    span.innerText = clickCount;
  });
  
}
window.onload = function load() {
  contagem();
}
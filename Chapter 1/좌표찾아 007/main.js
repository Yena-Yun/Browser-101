let vertical = document.querySelector('.vertical');
let horizontal = document.querySelector('.horizontal');
let target = document.querySelector('.target');
let tag = document.querySelector('.tag');

document.addEventListener('mousemove', resultFun);

function resultFun(e) {
  let x = e.clientX;
  let y = e.clientY;
  console.log(`${x} ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`;
  tag.style.left = `${x + document.body.scrollLeft + 5}px`;
  tag.style.top = `${y + document.body.scrollTop + 5}px`;
}

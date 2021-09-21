let vertical = document.querySelector('.vertical');
let horizontal = document.querySelector('.horizontal');
let target = document.querySelector('.target');
let tag = document.querySelector('.tag');

document.addEventListener('mousemove', coordinates);

// 여기서 e는 mousemove
function coordinates(e) {
  // clientX,Y: 화면상에서의 마우스 위치
  let x = e.clientX;
  let y = e.clientY;
  console.log(`${x} ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  // tag div의 사이에 들어가는 텍스트로 마우스의 x, y 좌표
  tag.innerHTML = `${x}px, ${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
}

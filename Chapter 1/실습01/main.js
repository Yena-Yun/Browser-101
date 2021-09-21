let vertical = document.querySelector('.vertical');
let horizontal = document.querySelector('.horizontal');
let target = document.querySelector('.target');
let tag = document.querySelector('.tag');
let targetRect = target.getBoundingClientRect();
let targetHalfWidth = targetRect.width / 2; // JS에서 계산할 때는 calc 필요없음 (CSS에서만 사용)
let targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', coordinates);

// 여기서 e는 mousemove
function coordinates(e) {
  // clientX,Y: 화면상에서의 마우스 위치
  let x = e.clientX;
  let y = e.clientY;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px`;

  target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  // tag div의 사이에 들어가는 텍스트로 마우스의 x, y 좌표
  tag.innerHTML = `${x}px, ${y}px`;
}

const items = document.querySelector('.items'); // ul
const itemList = document.querySelector('.items .item__row'); // li
console.log(itemList);

const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

const divider = document.querySelector('.item__divider');
const deleteBtn = document.querySelector('.item__delete');

const onAdd = () => {
  const inputValue = input.value;

  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  console.log(itemName);

  itemName.textContent = inputValue;

  console.log(deleteBtn);

  item.append(itemName, deleteBtn);
  li.appendChild(item);

  if (inputValue) {
    items.appendChild(li);
    input.value = '';

    // const removeBtn = document.querySelector('li button');
    // removeBtn.addEventListener('click', deleteLi);

    // const deleteLi = () => {
    //   const lists = document.querySelectorAll('li');

    //   const removedLi = (e) => {
    //     const element = e.target.parentNode;
    //     element.remove();
    //   };

    //   for (let i = 0; i < lists.length; i++) {
    //     lists[i].addEventListener('click', removedLi);
    //   }
    // };
  }
};

const enterKey = () => {
  if (window.event.keyCode === 13) {
    onAdd();
  }
};

addBtn.addEventListener('click', (e) => {
  onAdd();
});
